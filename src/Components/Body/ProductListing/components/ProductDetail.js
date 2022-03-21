import React from "react";
import { Grid, Typography } from "@mui/material";

const ProductDetail = (props) => {
     return (
          <>
               <Grid  pt={2} pl={2} item>
                    {" "}
                    <Typography variant="h4">{props.details.ModelNumber}</Typography>
               </Grid>
               <Grid item pt={4} pl={2}>
                    {" "}
                    <Typography fontWeight={400} variant="h4">
                    {props.details.Description}
                    </Typography>
               </Grid>
               <Grid item sx={{ display: "flex", flexDirection: "row", pl: 2  ,pt:2 ,pb:1}}>
                    {" "}
                    <Grid item>
                         <Typography color="error">
                              <del> ₹{props.details.SellingPrice}</del>
                         </Typography>
                    </Grid>{" "}
                    <Grid pl={2}>
                         {" "}
                         <Typography variant="h3"> ₹ {props.details.SellingPrice} /-</Typography>
                    </Grid>
               </Grid>
          </>
     );
};

export default ProductDetail;
