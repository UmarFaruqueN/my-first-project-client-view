import { Checkbox, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import Banner from "../Home/Components/Banner/Banner";

const ProductListing = () => {
     return (
          <>
               <Container>
                    <Box width="100%" height="100%" mb={10} pt={13}>
                         {" "}
                         <Banner />
                    </Box>

                    <Grid container>
                         <Grid item  sm={3}>
                           <Box height={"300px"} backgroundColor={"secondary.light"}>
                             <Grid item > <Typography variant="h3">Filter</Typography></Grid>
                             <Grid item>
                            <Typography>Category </Typography>
                             </Grid>
                             <Grid item>
                               <Checkbox color="secondary"  inpu/>
                               <Checkbox color="secondary" />
                             </Grid>

                             

                           </Box>
                         </Grid>
                         <Grid Item sm={9}></Grid>
                         <Box height={"300px"} backgroundColor={"yellow"}>

                           </Box>
                    </Grid>
               </Container>
          </>
     );
};

export default ProductListing;
