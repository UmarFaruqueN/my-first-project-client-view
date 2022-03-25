import React from "react";
import {
     Table,
     TableBody,
     TableCell,
     TableContainer,
     TableHead,
     TableRow,
     Paper,
     IconButton,
     Typography,
     Divider,
} from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";

import CartProdctIncrement from "./components/CartProdctIncrement";
import CartImage from "./components/CartImage";
import { setCart, setUserData } from "../../../../../Redux";
import { deleCart } from "../../../../../utlis/Constants";

const CartTable = () => {
     const dispatch = useDispatch();
     const cartData = useSelector((state) => state.cart.value);

     const Delete = (data) => {
          console.log(data);
          axios.post(deleCart, data, { headers: { "Content-Type": "application/json" } })
               .then((response) => {
                    dispatch(setCart({ cart: response.data.cartData }));
                    dispatch(setUserData({ userData: response.data.userData }));
                    console.log(cartData);
                    Swal.fire({
                         position: "bottom-end",
                         icon: "success",
                         title: response.data.message,
                         showConfirmButton: false,
                         timer: 1500,
                         width: "15rem",
                    });
               })
               .catch((err) => {
                    console.log(err);
                    Swal.fire({
                         position: "bottom-end",
                         icon: "error",
                         title: err.response.data.message,
                         showConfirmButton: false,
                         timer: 1500,
                         width: "15rem",
                    });
               });
     };

     return (
          <>
          {cartData.length>0?
          <TableContainer component={Paper}>
               <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                         <TableRow>
                              <TableCell>Item</TableCell>
                              <TableCell align="right"></TableCell>
                              <TableCell align="right">Price</TableCell>
                              <TableCell align="center">Quantity</TableCell>
                              <TableCell align="right">Subtotal</TableCell>
                              <TableCell align="right"></TableCell>
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {cartData?.map((obj) => (
                              <TableRow key={obj._id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                   <TableCell component="th" scope="obj">
                                        <CartImage image={obj.Image1} />
                                   </TableCell>
                                   <TableCell align="left">
                                        {" "}
                                        <Typography variant="body2">{obj.Description}</Typography>{" "}
                                   </TableCell>
                                   <TableCell align="right">{obj.SellingPrice}</TableCell>

                                   <TableCell align="center">
                                        <CartProdctIncrement cartData={obj} />
                                   </TableCell>

                                   <TableCell align="right">{obj.SellingPrice * obj.count} </TableCell>
                                   <TableCell align="right">
                                        <IconButton
                                             color="error"
                                             onClick={() => {
                                                  Delete(obj);
                                             }}
                                        >
                                             <DeleteIcon />
                                        </IconButton>{" "}
                                   </TableCell>
                              </TableRow>
                         ))}
                    </TableBody>
               </Table>
          </TableContainer>:(<Typography variant="h2"> <Divider/>No Products In Cart</Typography>)} 
          </>
     );
};

export default CartTable;