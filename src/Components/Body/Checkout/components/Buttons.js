import React from "react";
import { Button,Grid } from "@mui/material";

const Buttons = () => {
     return (
          <Grid item sx={{ p: 2, display: "flex", justifyContent: "space-between"  }}>
               <Grid item>
                    {" "}
                    <Button color="secondary" variant="contained">
                         Change Address
                    </Button>
               </Grid>
               <Grid item>
                    {" "}
                    <Button color="warning" variant="contained">
                         {" "}
                         Deliver Here
                    </Button>
               </Grid>
          </Grid>
     );
};

export default Buttons;
