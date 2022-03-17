import React from "react";
import { Grid, IconButton } from "@mui/material";
import { BlueButton, OrangeButton } from "../../../Common";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

import { addToCart } from "../../../../utlis/Constants";
import axios from "axios";

const ButtonConfig = (props) => {
     const user = useSelector((state) => state.user_state.value);
     const count = props.count;
     const data = { ...props.data, user, count };

     const AddToCart=()=>{

          
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
                         <IconButton onClick={AddToCart}>
                         <BlueButton  title={"Add to Cart"} />
                         </IconButton>
                    </Grid>
                    <Grid item>
                         {" "}
                         <OrangeButton title={"Buy Now"} />
                    </Grid>
                    <Grid item>
                         {" "}
                         <FavoriteBorderIcon sx={{ fontSize: "40px", color: "primary.dark" }} />
                    </Grid>
               </Grid>
          </>
     );
};

export default ButtonConfig;
