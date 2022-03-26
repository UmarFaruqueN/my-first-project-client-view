import React from "react";
import { Button,Grid } from "@mui/material";

const Buttons = (props) => {
     return (
          <Grid item sx={{ p: 2, display: "flex", justifyContent: "space-between"  ,}}>
               <Grid item>
                    {" "}
                    <Button onClick={
                         props.changeAddress
                    } color="secondary" variant="contained">
                         Change Address
                    </Button>
               </Grid>
               <Grid item>
                    {" "}
                    <Button onClick={props.confirmAddress} color="warning" variant="contained">
                         {" "}
                         Deliver Here
                    </Button>
               </Grid>
          </Grid>
     );
};

export default Buttons;
