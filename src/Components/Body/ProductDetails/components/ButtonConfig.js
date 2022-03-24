import React from "react";
import { Grid, IconButton, Button } from "@mui/material";
import { OrangeButton } from "../../../Common";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

import { addToCart } from "../../../../utlis/Constants";
import axios from "axios";

const ButtonConfig = (props) => {
     const user = useSelector((state) => state.user_state.value);
     const count = props.count;
     const data = { ...props.data, user, count };

     const AddToCart = () => {
          console.log(data);
          axios.post(addToCart, data, { headers: { "Content-Type": "application/json" } }).then((response) => {
               Swal.fire({
                    position: "bottom-end",
                    icon: "success",
                    title: response.data.message,
                    showConfirmButton: false,
                    timer: 1500,
                    width: "15rem",
               });
          });
     };

     return (
          <>
               <Grid pl={3} container spacing={2}>
                    <Grid item>
                         {" "}
                         <IconButton>
                              <Button
                                   size="medium"
                                   variant="outlined"
                                   color="secondary"
                                   onClick={AddToCart}
                               
                              >
                                   {" "}
                                   <AddShoppingCartOutlinedIcon />
                                   Add to cart
                              </Button>
                         </IconButton>
                    </Grid>
                    <Grid item>
                         {" "}
                         <IconButton>
                              <OrangeButton title={"Buy Now"} />
                         </IconButton>
                    </Grid>
                    <Grid item>
                         <Grid item>
                              <IconButton color="error">
                                   {" "}
                                   <FavoriteIcon sx={{ fontSize: "40px" }} />
                              </IconButton>
                         </Grid>
                    </Grid>
               </Grid>
          </>
     );
};

export default ButtonConfig;
