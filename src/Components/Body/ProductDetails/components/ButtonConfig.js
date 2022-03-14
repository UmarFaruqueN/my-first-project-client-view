import React from "react";
import { Grid } from "@mui/material";
import { BlueButton, OrangeButton } from "../../../Common";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const ButtonConfig = () => {
     return (
          <>
               <Grid pl={3} container spacing={2}>
                    <Grid item>
                         {" "}
                         <BlueButton title={"Add to Cart"} />
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
