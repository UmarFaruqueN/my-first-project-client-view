import React from "react";
import {Grid,Typography,Button,Radio,Divider} from "@mui/material"
import TitleBar from "./TitleBar";

const PlaceOrder = () => {
     return (
          <>
           <TitleBar number={"02"} title={"PLACE ORDER"} />
               <Grid sx={{ display: "flex", flexDirection: "row", alignItems: "center" }} width="100%" height="80px">
                    <Grid item>
                         {" "}
                         <Radio sx={{ color: "#0156ff" }} color="secondary" />
                    </Grid>
                    <Grid item>
                         <Typography fontWeight="400" variant="h4" pl={3}>
                              {" "}
                              Cash On Delivery
                         </Typography>{" "}
                    </Grid>
               </Grid>
               <Divider />
               <Grid item  sx={{display:"flex",justifyContent:"flex-end"}}p={2}>
                   <Button color="success" variant="contained"> Place Order</Button>
               </Grid>
          </>
     );
};

export default PlaceOrder;
