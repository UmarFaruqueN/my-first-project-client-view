import React from "react";
import { Grid, Typography, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";


const CheckOutInCart = () => {
     const {
          register,
          formState: { errors },
          handleSubmit,
     } = useForm();
     return (
          <>
               <Grid
                    item
                    md={4}
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

                    <Grid item>
                         <Typography variant="h3" pt={2} pb={1}>
                              {" "}
                              Enter Coupon Code
                         </Typography>
                    </Grid>
                    <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
                         <Grid item>
                              <TextField
                                   label="Coupon Code"
                                   color="secondary"
                                   size="small"
                                   variant="outlined"
                                   className="form-control"
                                   type="number"
                                   {...register("coupon", {
                                        required: " Coupon Code Required",
                                        maxLength: {
                                             value: 10,
                                             message: "Only 10 Numbers allowed",
                                        },
                                        minLength: {
                                             value: 10,
                                             message: " Numbers Required",
                                        },
                                   })}
                              />
                         </Grid>
                         <Grid item>
                              <Button variant="contained" color="success">
                                   Submit
                              </Button>
                         </Grid>
                         <Typography color="errors">{errors.phone?.message}</Typography>
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
                                   ₹00 /-
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
                                   ₹00 /-
                              </Typography>
                         </Grid>
                    </Grid>
                    <Grid item sx={{ display: "flex", justifyContent: "space-between" }}>
                         <Grid item>
                              {" "}
                              <Typography pt={2} variant="h4">
                                   {" "}
                                   GST
                              </Typography>
                         </Grid>
                         <Grid item>
                              {" "}
                              <Typography pt={2} variant="h4">
                                   {" "}
                                   ₹00 /-{" "}
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
                                   ₹00 /-
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
                                   ₹00 /-
                              </Typography>
                         </Grid>
                    </Grid>
                    <Grid item sx={{ display: "flex", justifyContent: "space-around", pb: 3 }}>
                         <Button variant="contained" color="secondary">
                              Proceed Checkout
                         </Button>
                    </Grid>
               </Grid>
          </>
     );
};

export default CheckOutInCart;
