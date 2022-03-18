import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ProductIncrement from "../../ProductDetails/components/ProductIncrement";
import axios from "axios";
import { getCart } from "../../../../utlis/Constants";
import { useDispatch, useSelector } from "react-redux";
import CartProdctIncrement from "./CartProdctIncrement";
import CartImage from "./CartImage";
import { Typography } from "@mui/material";
import { setCart } from "../../../../Redux/cart/cart";

const CartTable = () => {
     const [total, setTotal]=useState(0)
     const dispatch = useDispatch();
     const user = useSelector((state) => state.user_state.value);
     const cart = useSelector((state) => state.cart.value);

     useEffect(() => {
          axios.post(getCart, { user: user }, { headers: { "Content-Type": "application/json" } })
               .then((response) => {
                    dispatch(setCart({ cart: response.data.cartData[0].productDetail}));
                    console.log(cart);
               })
               .catch((error) => {
                    console.log(error);
               });
     }, []);

     return (
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
                              {cart.map((obj) => (
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
                                             <CartProdctIncrement setTotal={setTotal} cartData={obj} />
                                        </TableCell>

                                        <TableCell align="right">{total} </TableCell>
                                        <TableCell align="right"></TableCell>
                                   </TableRow>
                              ))}
                         </TableBody>
                    </Table>
            
          </TableContainer>
     );
};

export default CartTable;
