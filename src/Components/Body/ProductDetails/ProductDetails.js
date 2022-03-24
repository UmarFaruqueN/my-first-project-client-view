import React from "react";
import { Box, Container, Grid } from "@mui/material";

import ProductHeading from "./components/ProductHeading";
import ImageCarousel from "./components/ImageCarousel";
import ProductDetail from "./components/ProductDetail";
import cutingEdge from "../../../asset/dummy/cutingEdge.png";
import colorVU from "../../../asset/dummy/colorVU.png";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetails = () => {
     const navigate = useNavigate()
     const data = useSelector((state) => state.products.value);
     const { _id } = useParams();
     const productData = data.filter((obj) => {
          return obj._id == _id;
     });
     console.log(_id);
     console.log(productData);

     const bannerData = useSelector((state)=>state.banners.value)
     const productBanner = bannerData.filter((obj)=>{
          return obj.for=="SubCategory"
     })


     return (
          <>
               <ProductHeading title={productData[0]?.ModelNumber} />

               <Box sx={{ backgroundColor: "secondary.light", height: "100%", width: "100%" }}>
                    <Container>
                         <Grid container>
                              <Grid item md={6}>
                                   <ImageCarousel
                                        images={[
                                             productData[0]?.Image1,
                                             productData[0]?.Image2,
                                             productData[0]?.Image3,
                                             productData[0]?.Image4,
                                        ]}
                                   />
                              </Grid>
                              <ProductDetail data={productData} />
                         </Grid>
                    </Container>
                    {productBanner?.map((obj)=>
                    <img width={"100%"} height={"auto"} src={obj.banner} alt="" />
                    )}
               </Box>
          </>
     );
};

export default ProductDetails;
