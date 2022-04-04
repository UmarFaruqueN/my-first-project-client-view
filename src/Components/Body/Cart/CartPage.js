import { Container, Grid, Typography, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";

import CartTable from "./components/CartTable/CartTable";
import CheckOutInCart from "./components/CartTable/CheckOutInCart";
import axios from "axios";
import { getUser } from "../../../utlis/Constants";
import { setCart } from "../../../Redux";

const CartPage = () => {
     const dispatch = useDispatch();
     const [count, setCount] = useState(1);
     const [total, setTotal] = useState(0);
     const user = localStorage.getItem("user");
     useEffect(() => {
          axios.post(getUser, { user: user }, { headers: { "Content-Type": "application/json" } })
               .then((response) => {
                    dispatch(setCart({ cart: response.data.userData.cartProducts }));
               })
               .catch((err) => {
                    console.log(err);
                    console.log(err?.response?.data?.message);
               });
     }, []);
     const cartData = useSelector((state) => state.cart.value);

     const sum = () => {
          let subTotal = 0;
          cartData.forEach((element) => {
               subTotal = subTotal + element.count * element.SellingPrice;
          });
          setTotal(subTotal);

          return subTotal;
     };

     useEffect(() => {
          sum();
     }, [count]);
     console.log("this" + total);
     return (
          <>
               <Box pt={13}>
                    <Container>
                         <Grid container>
                              <Grid pb={3} display="flex" item md={12}>
                                   <Typography variant="h1" color="primary.dark">
                                        {" "}
                                        My Cart.
                                   </Typography>
                                   <IconButton>
                                        <ShoppingCartOutlinedIcon
                                             sx={{ fontSize: "30px", color: "text.primary", ml: "2" }}
                                        />
                                   </IconButton>
                              </Grid>
                              <Grid item md={12} display="flex">
                                   <Grid item md={8}>
                                        <Grid item>
                                             <CartTable cartData={cartData} setCount={setCount} />
                                        </Grid>
                                   </Grid>

                                   <Grid item md={4}>
                                        <CheckOutInCart total={total} cartData={cartData} />
                                   </Grid>
                              </Grid>
                         </Grid>
                    </Container>
               </Box>
          </>
     );
};

export default CartPage;
