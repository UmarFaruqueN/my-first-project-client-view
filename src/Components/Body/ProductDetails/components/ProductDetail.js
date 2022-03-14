import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ButtonConfig from "./ButtonConfig";
import ProductIncrement from "./ProductIncrement";

const ProductDetail = () => {
     return (
          <>
               <Grid item md={6}>
                    <Box
                         sx={{
                              height: "500px",
                              display: "flex",
                              alignItems: "center",
                         }}
                    >
                         <Box
                              sx={{
                                   height: "300px",
                                   display: "flex",
                                   flexDirection: "column",
                                   alignItems: "center",
                                   justifyContent: "space-evenly",
                              }}
                         >
                              <Grid ml={10} container>
                                   <Grid item xs={12}>
                                        <Grid pb={2} item>
                                             <Typography variant="h2"> Ip Camera</Typography>
                                        </Grid>
                                        <Grid pb={1} item>
                                             <Typography variant="h3"> Model Number</Typography>
                                        </Grid>
                                        <Grid pb={1} item>
                                             <Typography noWrap={false} variant="body">
                                                  {" "}
                                                  Disclkadnfskbkdbvkj djbvkjkjv ljhvjsdjvskj kjbsdkvbbsv jbvksbv jkbsdkvb
                                                  kjbkdvb sksvb{" "}
                                             </Typography>
                                        </Grid>
                                        <Grid>
                                             <Typography color="error" variant="h4">
                                                  <del color="error">Price ₹ 1000 </del>
                                             </Typography>
                                        </Grid>
                                   </Grid>
                              </Grid>

                              <ProductIncrement />
                              <ButtonConfig />
                         </Box>
                    </Box>
               </Grid>
          </>
     );
};

export default ProductDetail;
