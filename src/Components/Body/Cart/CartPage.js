import { Container, Grid, Typography, IconButton, Badge, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CartTable from "./components/CartTable";
import { useForm } from "react-hook-form";

const CartPage = () => {
     const {
          register,
          formState: { errors },
          handleSubmit,
     } = useForm();
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
                                        <CartTable />
                                   </Grid>
                                   <Grid item md={4} sx={{ backgroundColor: "secondary.light", pl:3,pt:3,pr:3 ,ml:2,borderRadius:"20px"}}>
                                        <Grid item>
                                             <Typography variant="h2">
                                                  {" "}
                                                  Summary
                                             </Typography>
                                        </Grid>



                                        <Grid item>
                                             <Typography variant="h3" pt={2} pb={1}>
                                                  {" "}
                                                  Enter Coupon Code
                                             </Typography>
                                        </Grid>
                                        <Grid item sx={{display:"flex",justifyContent:"space-between",}}>
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
                                                  <Button  variant="contained" color="success">Submit</Button>
                                             </Grid>
                                             <Typography color="errors">{errors.phone?.message}</Typography>
                                        </Grid>

                                        <Grid item sx={{display:"flex",justifyContent:"space-between"}}>
                                             <Grid item>
                                                  {" "}
                                                  <Typography  pt={2} variant="h4"> SubTotal</Typography>
                                             </Grid>
                                             <Grid item >
                                                  {" "}
                                                  <Typography pt={2} variant="h4"> ₹00 /-</Typography>
                                             </Grid>
                                        </Grid>
                                        <Grid item sx={{display:"flex",justifyContent:"space-between",}}>
                                             <Grid item>
                                                  {" "}
                                                  <Typography pt={2} variant="h4"> Shipping</Typography>
                                             </Grid>
                                             <Grid item>
                                                  {" "}
                                                  <Typography pt={2} variant="h4"> ₹00 /-</Typography>
                                             </Grid>
                                        </Grid>
                                        <Grid item sx={{display:"flex",justifyContent:"space-between",}}>
                                             <Grid item>
                                                  {" "}
                                                  <Typography pt={2} variant="h4"> GST</Typography>
                                             </Grid>
                                             <Grid item>
                                                  {" "}
                                                  <Typography pt={2} variant="h4"> ₹00 /- </Typography>
                                             </Grid>
                                        </Grid>
                                        <Grid item sx={{display:"flex",justifyContent:"space-between",}}>
                                             <Grid item>
                                                  {" "}
                                                  <Typography pt={2} variant="h4"> Discount</Typography>
                                             </Grid>
                                             <Grid item >
                                                  {" "}
                                                  <Typography pt={2} variant="h4"> ₹00 /-</Typography>
                                             </Grid>
               
                                        </Grid>
                                        <Grid item  sx={{display:"flex",justifyContent:"space-between",}}>
                                             <Grid item>
                                                  {" "}
                                                  <Typography pt={2} variant="h4"> Total</Typography>
                                             </Grid>
                                             <Grid item>
                                                  {" "}
                                                  <Typography pt={2} variant="h4"> ₹00 /-</Typography>
                                             </Grid>
               
                                        </Grid>
                                        <Grid item sx={{display:"flex", justifyContent :"space-around", pb:3}}>
                                             <Button variant="contained" color="secondary">Proceed Checkout</Button>
                                        </Grid>
                                   </Grid>
                              </Grid>
                         </Grid>
                    </Container>
               </Box>
          </>
     );
};

export default CartPage;
