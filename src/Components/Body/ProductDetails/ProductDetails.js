import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Poster from "../../Body/Home/Components/Poster/Poster";
import BlueButton from "../../Common/BlueButton";
import OrangeButton from "../../Common/OrangeButton";

const ProductDetails = () => {
    return (
        <>
            <Box sx={{ backgroundColor: "yellow", height: "50px", width: "100%", paddingTop: "100px" }}>
                <BlueButton title="Add To Cart" />
                <OrangeButton title="Buy Now" />
            </Box>
        </>
    );
};

export default ProductDetails;
