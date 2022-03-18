import { Container, Grid, Typography, IconButton, } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import CartTable from "./components/CartTable/CartTable";
import CheckOutInCart from "./components/CheckOutInCart";


const CartPage = () => {
    
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
                                   <CheckOutInCart/>
                              </Grid>
                         </Grid>
                    </Container>
               </Box>
          </>
     );
};

export default CartPage;
