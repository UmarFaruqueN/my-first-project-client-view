import React from "react";
import { Grid, Typography, } from "@mui/material";
import { useSelector } from "react-redux";



const Details = () => {
     const checkout = useSelector((state)=>state.checkout.value)
     console.log(checkout);

  
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
                                   ₹{checkout.subtotal} /-
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
                                   ₹{checkout.shipping} /-
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
                                  - ₹{checkout.discount} /-
                              </Typography>
                         </Grid>
                    </Grid>
                    <Grid item sx={{ display: "flex", justifyContent: "space-between" , pb:3}}>
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
                                   ₹{checkout.total}/-
                              </Typography>
                         </Grid>
                    </Grid>
    
               </Grid>
          </>
     );
};

export default Details