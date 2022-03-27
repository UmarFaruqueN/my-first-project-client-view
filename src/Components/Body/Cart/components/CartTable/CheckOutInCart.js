import React from "react";
import { Grid, Typography, Button, TextField } from "@mui/material";
import { set, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCheckout } from "../../../../../Redux/checkout/checkout";


const CheckOutInCart = (props) => {
     const dispatch = useDispatch()
     const  shipping= 100;
     const discount=500;
     const navigate = useNavigate()
   
 const Checkout  = ()=>{
     dispatch(setCheckout({checkout:{
          products:props.cartData,
          subtotal:props.total,
          shipping:shipping,
          discount:discount,
          total:(props.total+shipping)-discount,
          address:{},    
     }}))
     navigate("/checkOut")
 }
     return (
          <>
               <Grid
                    item
                    sx={{
                         backgroundColor: "secondary.light",
                         pl: 3,
                         pt: 3,
                         pr: 3,
                         ml: 2,
                         borderRadius: "20px",
                    }}
               >
                    <Grid item>
                         <Typography variant="h2"> Summary</Typography>
                    </Grid>


                    <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
                         <Grid item>
                              {" "}
                              <Typography pt={2} variant="h4">
                                   {" "}
                                   SubTotal
                              </Typography>
                         </Grid>
                         <Grid item>
                              {" "}
                              <Typography pt={2} variant="h4">
                                   {" "}
                                   ₹{props.total} /-
                              </Typography>
                         </Grid>
                    </Grid>
                    <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
                         <Grid item>
                              {" "}
                              <Typography pt={2} variant="h4">
                                   {" "}
                                   Shipping
                              </Typography>
                         </Grid>
                         <Grid item>
                              {" "}
                              <Typography pt={2} variant="h4">
                                   {" "}
                                   ₹{shipping} /-
                              </Typography>
                         </Grid>
                    </Grid>
                    <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
                         <Grid item>
                              {" "}
                              <Typography pt={2} variant="h4">
                                   {" "}
                                   Discount
                              </Typography>
                         </Grid>
                         <Grid item>
                              {" "}
                              <Typography pt={2} variant="h4">
                                   {" "}
                                  - ₹{discount} /-
                              </Typography>
                         </Grid>
                    </Grid>
                    <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
                         <Grid item>
                              {" "}
                              <Typography pt={2} variant="h4">
                                   {" "}
                                   Total
                              </Typography>
                         </Grid>
                         <Grid item>
                              {" "}
                              <Typography pt={2} variant="h4">
                                   {" "}
                                   ₹{(props.total+shipping)-discount} /-
                              </Typography>
                         </Grid>
                    </Grid>
                    <Grid item sx={{ display: "flex", justifyContent: "space-around", pb: 3 }}>
                         <Button  onClick={Checkout} variant="contained" color="secondary">
                             Check Out
                         </Button>
                    </Grid>
               </Grid>
          </>
     );
};

export default CheckOutInCart;
