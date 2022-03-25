import React from "react";
import { Box } from "@mui/system";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import BlueButton from "../../../../Common/BlueButton";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import hdd from "../../../../../asset/dummy/hdd.png";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { addToCart } from "../../../../../utlis/Constants";
import { setCart } from "../../../../../Redux/cart/cart";
import { setLoginForm } from "../../../../../Redux/loginForm/loginForm";
import {setUserData} from "../../../../../Redux/userData/userData"

const HomeProducts = (props) => {
     const dispatch = useDispatch()
     const navigate = useNavigate();
     const tempData = useSelector((state) => state.products.value);
     const user = useSelector((state) => state.user_state.value);

     const Submit = (obj) => {
          if (user) {
               const count = 1;
               const data = { ...obj, user, count };
               console.log(data);
               axios.post(addToCart, data, { headers: { "Content-Type": "application/json" } })
                    .then((response) => {
                         dispatch(setCart({ cart: response.data.cartData }));
                         dispatch(setUserData({ userData: response.data.userData }));
                         Swal.fire({
                              position: "bottom-end",
                              icon: "success",
                              title: response.data.message,
                              showConfirmButton: false,
                              timer: 1500,
                              width: "15rem",
                         });
                    })
                    .catch((err) => {
                         console.log(err);
                         console.log(err.response.data.message);
                         Swal.fire({
                              position: "bottom-end",
                              icon: "success",
                              title: err.response.data.message,
                              showConfirmButton: false,
                              timer: 1500,
                              width: "15rem",
                         });
                    });
          } else {
               dispatch(setLoginForm({loginForm:true}));
          }
     }
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
                         <IconButton onClick={props.nav}>
                         <BlueButton title={"Show More"} />
                         </IconButton>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
               </Box>

               {/* product listing */}

               <Box sx={{ width: "100%", marginTop: "22px" }}>
                    <Grid container columnSpacing={2} wrap="nowrap" sx={{ overflow: "auto" }}>
                         <Grid item>
                              <Box sx={{ flexGrow: 1 }}>
                                   <img src={hdd} width="192px" height="360px" alt="productImage" />{" "}
                              </Box>
                         </Grid>

                         {tempData.map((obj) => (
                              <Grid key={obj._id} item>
                                   <Card sx={{ width: "192px", height: "360px", borderRadius: "0" }}>
                                        <CardMedia
                                             component="img"
                                             alt="camera"
                                             height="150"
                                             width="150"
                                             src={obj.Image1}
                                             onClick={() => {
                                                  navigate("/product/" + obj._id);
                                             }}
                                             sx={{ cursor: "pointer" }}
                                        />

                                        <CardContent>
                                             <Typography
                                                  onClick={() => {
                                                       navigate("/product/" + obj._id);
                                                  }}
                                                  sx={{ cursor: "pointer" }}
                                                  variant="h4"
                                                  component="div"
                                             >
                                                  {obj.ProductName}
                                             </Typography>
                                             <Typography variant="body1" color="text" component="div" marginTop="1px">
                                                  {obj.Description}
                                             </Typography>
                                             <Typography
                                                  variant="h5"
                                                  color="text.disabled"
                                                  component="div"
                                                  marginTop="1px"
                                             >
                                                  {" "}
                                                  <del>₹ {obj.SellingPrice}</del>
                                             </Typography>

                                             <Typography variant="h3" marginTop="1px" component="div">
                                                  ₹ {obj.LandingCost}
                                             </Typography>

                                             <CardActions
                                                  sx={{ display: "flex", marginTop: "1px", justifyContent: "center" }}
                                             >
                                                  <Button
                                                       size="small"
                                                       variant="outlined"
                                                       color="secondary"
                                                       onClick={() => {
                                                            Submit(obj);
                                                       }}
                                                  >
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
