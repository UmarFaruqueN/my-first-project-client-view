import React from "react";
import { Box } from "@mui/system";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import BlueButton from "../../../../Common/BlueButton";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import hdd from "../../../../../asset/dummy/hdd.png";
import testImage from "../../../../../asset/dummy/nvr.png";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const tempData = [
    {
        productName: "HHIKVISION TURBO HD CAMERA",
        description: "2 MP Flex-036AU 15.6 MULTITOUCH All-In-On...",
        category: "network device",
        subCategory: "camera",
        price: "600",
    },
    {
        productName: "HHIKVISION TURBO HD CAMERA",
        description: "2 MP Flex-036AU 15.6 MULTITOUCH All-In-On...",
        category: "network device",
        subCategory: "camera",
        price: "5000",
    },
    {
        productName: "HHIKVISION TURBO HD CAMERA",
        description: "2 MP Flex-036AU 15.6 MULTITOUCH All-In-On...",
        category: "network device",
        subCategory: "camera",
        price: "1000",
    },
    {
        productName: "HHIKVISION TURBO HD CAMERA",
        description: "2 MP Flex-036AU 15.6 MULTITOUCH All-In-On...",
        category: "network device",
        subCategory: "camera",
        price: "500",
    },
    {
        productName: "HHIKVISION TURBO HD CAMERA",
        description: "2 MP Flex-036AU 15.6 MULTITOUCH All-In-On...",
        category: "network device",
        subCategory: "camera",
        price: "500",
    },
];

const HomeProducts = (props) => {
    return (
        <>
            <Box
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "60px",
                    width: "100%",
                    backgroundColor: "secondary.light",
                    marginTop: "22px",
                    borderRadius: "20px",
                }}
            >
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ mr: 2, display: "flex", alignItems: "center" }}>
                    <DashboardCustomizeIcon sx={{ fontSize: "1.9rem", color: "text.hint", pr: 1 }} />
                    <Typography variant="h2" fontWeight="700" noWrap color="text.hint" component="div">
                        {props.title}
                    </Typography>
                    <Typography marginLeft="6px" variant="h2" fontWeight="600" fontSize="1.8rem" color="#00AEB8">
                        |
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 8 }} />
                <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                    <BlueButton title={"Show More"} />
                </Box>
                <Box sx={{ flexGrow: 1 }} />
            </Box>


            {/* product listing */}

            <Box sx={{ width: "100%", marginTop: "22px" }}>
                <Grid container wrap="nowrap" sx={{ overflow: "auto" }}>
                    <Grid item>
                        <Box sx={{ flexGrow: 1 }}>
                            <img src={hdd} width="192px" height="360px"></img>{" "}
                        </Box>
                    </Grid>

                    {tempData.map((obj) => (
                        <Grid item>
                            <Card sx={{ width: "192px", height: "360px", borderRadius: "0" }}>
                                <CardMedia component="img" alt="camera" height="150" width="150" image={testImage} />

                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="div">
                                        {obj.productName}
                                    </Typography>
                                    <Typography variant="body1" color="text" component="div" marginTop="1px">
                                        {obj.description}
                                    </Typography>
                                    <Typography variant="h5" color="text.disabled" component="div" marginTop="1px">
                                        {" "}
                                        <del>₹ {obj.price}</del>
                                    </Typography>

                                    <Typography variant="h3" marginTop="1px" component="div">
                                        ₹ {obj.price}
                                    </Typography>

                                    <CardActions
                                        gutterBottom
                                        sx={{ display: "flex", marginTop: "1px", justifyContent: "center" }}
                                    >
                                        <Button size="small" variant="outlined" color="secondary">
                                            {" "}
                                            <AddShoppingCartOutlinedIcon />
                                            Add to cart
                                        </Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};

export default HomeProducts;
