import { Container, Divider, Grid, Radio, Typography, Button } from "@mui/material";
import { Box, display } from "@mui/system";
import React from "react";
import AddAddress from "./components/AddAddress";
import Address from "./components/Address";
import Buttons from "./components/Buttons";
import Details from "./components/Details";
import PlaceOrder from "./components/PlaceOrder";
import TitleBar from "./components/TitleBar";

const CheckOutPage = () => {
     return (
          <>
               <Box pt={13}>
                    <Container>
                         <Grid container pt={3} spacing={5}>
                              <Grid md={7} item>
                                   <Grid item>
                                        {/* <TitleBar number={"01"} title={"DELIVARY ADDRESS"} btn={true} />

                                        
                                        <Buttons />
                                        <PlaceOrder /> */}
<Address />
                                      <AddAddress/>
                                   </Grid>
                              </Grid>

                              <Grid   md={4} item>
                                  <Details/>
                              </Grid>
                         </Grid>
                    </Container>
               </Box>
          </>
     );
};

export default CheckOutPage;
