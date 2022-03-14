import React from "react";
import { Box, Container, Grid, } from "@mui/material";

import ProductHeading from "./components/ProductHeading";
import ImageCarousel from "./components/ImageCarousel";
import ProductDetail from "./components/ProductDetail";
import cutingEdge from "../../../asset/dummy/cutingEdge.png"
import colorVU from "../../../asset/dummy/colorVU.png"

const ProductDetails = () => {
     return (
          <>
               <ProductHeading />

               <Box sx={{ backgroundColor: "secondary.light", height: "100%", width: "100%" }}>
                    <Container>
                         <Grid container>
                              <Grid item md={6}>
                                   <ImageCarousel />
                              </Grid>
                              <ProductDetail/>
                         </Grid>
                    </Container>
                    <img width={"100%"} height={"auto"} src={cutingEdge} alt="" />
                    <img width={"100%"} height={"auto"} src={colorVU} alt="" />
               </Box>
          </>
     );
};

export default ProductDetails;
