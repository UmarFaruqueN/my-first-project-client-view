import React, { useEffect } from "react";
import Poster from "./Components/Poster/Poster";
import { Container } from "@mui/material";
import ExclusiveProducts from "./Components/ExclusiveProducts/ExclusiveProducts";
import HomeProducts from "./Components/HomeProductList/HomeProducts";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getProduct } from "../../../utlis/Constants";
import { setProducts } from "../../../Redux/products/products";
import { setSubCategory } from "../../../Redux/subCategory/subCategory";

const HomeComponents = () => {
     const dispatch = useDispatch();

     useEffect(() => {
          axios.get(getProduct, { headers: { "Content-Type": "application/json" } })
               .then((response) => {
                    console.log("success");
                    console.log(response.data.allProduct);
                    dispatch(setProducts({ products: response.data.allProduct }));
                    dispatch(setSubCategory({subCategory:response.data.allSubCategory}))
               })
               .catch((error) => {
                    console.log(error);
               });
     }, []);

     return (
          <>
               <Container sx={{ paddingTop: "100px" }}>
                    <Poster />
                    <ExclusiveProducts />
                    <HomeProducts title={"NVR"} />
                    <HomeProducts title={"NVR"} />
                    <HomeProducts title={"NVR"} />
                    <HomeProducts title={"NVR"} />
               </Container>
          </>
     );
};

export default HomeComponents;
