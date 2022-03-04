import React from "react";
import Poster from "./Components/Poster/Poster";
import { Container } from "@mui/material";
import ExclusiveProducts from "./Components/ExclusiveProducts/ExclusiveProducts";
import HomeProducts from "./Components/HomeProductList/HomeProducts";

const HomeComponents = () => {
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
