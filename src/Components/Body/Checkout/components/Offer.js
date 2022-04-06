import React, { useState } from "react";
import { Grid, Typography, Button, Dialog, TextField, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { Close } from "@mui/icons-material";
import { applyCoupon } from "../../../../utlis/Constants";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import {setCheckout} from "../../../../Redux"

const Offer = () => {
     const dispatch = useDispatch()
     const checkoutData = useSelector((state) => state.checkout.value);
     const [open, setOpen] = useState(false);
     const [data, setData] = useState(null);
     const [su, setSu] = useState(null);
     const [er, setEr] = useState(null);

     const handleClick = () => {
          setOpen(false);
     };
     const Click = () => {
          setOpen(true);
     };

     const Submit = () => {
          const allData ={...checkoutData,data}
          axios.post(applyCoupon, allData, { headers: { "Content-Type": "application/json" } })
               .then((response) => {
                    dispatch(
                         setCheckout({
                              checkout: {
                                   products: allData.cartData,
                                   subtotal: allData.total,
                                   shipping: 0,
                                   type:allData.type,
                                   discount: response.data.CouponCode,
                                   total: allData.total,
                                   address: allData.address,
                              },
                         })
                    );

                    setSu(response.data.message);
                    setTimeout(() => {
                         setSu(null);
                    }, 1000);
                    setEr(null);
               })
               .catch((err) => {
                    setSu(null);
                    console.log(err.response.data.message);
                    setEr(err?.response?.data?.message);
               });
     };

     return (
          <>
               <Button onClick={Click} color="success">
                    Apply Coupon Code
               </Button>
               <Dialog open={open} onClose={handleClick}>
                    <Box>
                         <Grid container sx={{ pb: 5, display: "flex" }} spacing={1}>
                              <Grid item sx={{ ml: 5, mt: 5 }}>
                                   <Grid>
                                        <Typography color="success">{su}</Typography>
                                   </Grid>
                                   <Grid item>
                                        {" "}
                                        <Typography variant="h3" color="secondary">
                                             {" "}
                                             Enter Coupon Code
                                        </Typography>
                                   </Grid>
                                   <Grid item>
                                        {" "}
                                        <TextField
                                             fullWidth
                                             onChange={(e) => {
                                                  setData(e.target.value);
                                             }}
                                        />
                                   </Grid>
                                   <Grid item sx={{ display: "flex", justifyContent: "flex-end" }}>
                                        {" "}
                                        <Button color="success" onClick={Submit}>
                                             Apply
                                        </Button>
                                   </Grid>
                                   <Grid>
                                        <Typography color="error">{er}</Typography>
                                   </Grid>
                                   <Grid item>
                                        {" "}
                                        <Typography color="text.disabled"> Check Your Profile For Coupon Codes</Typography>
                                   </Grid>
                              </Grid>
                              <Grid item>
                                   <IconButton onClick={handleClick}>
                                        <Close color="error" />
                                   </IconButton>
                              </Grid>
                         </Grid>
                    </Box>
               </Dialog>
          </>
     );
};

export default Offer;
