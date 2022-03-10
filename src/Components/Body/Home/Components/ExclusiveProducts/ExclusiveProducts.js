import React,{useRef} from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Box } from "@mui/system";
import testImage from "../../../../../asset/dummy/hdcam.png";
import { useSelector } from "react-redux";




const ExclusiveProducts = () => {
    const tempData = useSelector((state)=>state.products.value)


    const ref = useRef(null);
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
      };
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    marginTop: "22px",
                    borderRadius: "16px",
                   // backgroundColor: "#F5F7FF",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                    }}
                >
                    <Box sx={{ flexGrow: 0.5 }} />
                    <Typography variant="h3">
                        {" "}
                        <u> Exclusive Products</u>
                    </Typography>
                    <Box sx={{ flexGrow: 11 }} />
                    <Typography variant="h4" sx={{ fontWeight: "600" }}>
                        {" "}
                        <u> See All Products </u>
                    </Typography>
                    <Box sx={{ flexGrow: 0.5 }} />
                </Box>

                <Box sx={{ display: "flex" }}>
                    <Box sx={{ width: "4%", height: "380px", display: "flex" }}>
                        <IconButton onClick={() => scroll(-20)}>
                            {" "}
                            <ArrowBackIosNewIcon />
                        </IconButton>{" "}
                    </Box>

                    <Box sx={{ width: "92%", display: "flex", justifyContent: "space-around", mt: 1 }}> 
                       <Grid container wrap="nowrap" sx={{ overflow: "auto" }} spacing={1.5}>
                       
                        {tempData.map((obj) => (
                            <Grid item>
                            <Card sx={{ width: "200px", height: "350px" }}>
                                <CardMedia component="img" alt="camera" height="150" width="150" image={obj.Image1} />

                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="div">
                                        {obj.ProductName}
                                    </Typography>
                                    <Typography variant="body1" color="text" component="div" marginTop="1px">
                                        {obj.Description}
                                    </Typography>
                                    <Typography variant="h5" color="text.disabled" component="div" marginTop="1px">
                                        {" "}
                                        <del>₹ {obj.SellingPrice}</del>
                                    </Typography>

                                    <Typography variant="h3" marginTop="1px" component="div">
                                        ₹ {obj.LandingCost}
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

                    <Box sx={{ width: "4%", height: "360px", display: "flex" }}>
                        {" "}
                        <IconButton onClick={() => scroll(20)}>
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default ExclusiveProducts;
