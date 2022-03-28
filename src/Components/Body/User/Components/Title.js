import { Divider, Grid, Typography } from "@mui/material";
import React from "react";

const Title = () => {
     return (
          <>
               <Grid container pt={2} pb={1}>
                    <Grid item md={12}>
                         <Typography variant="h2"> My Dashboard</Typography>
                    </Grid>
               </Grid>
               <Divider />
          </>
     );
};

export default Title;
