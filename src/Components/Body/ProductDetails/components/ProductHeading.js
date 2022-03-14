import { Container, Divider, Grid ,Typography} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ProductHeading = () => {
     return (
          <Box sx={{ height: "100%", width: "100%", paddingTop: "100px" }}>
        

               <Container>
                    <Grid container>
                         <Grid item md={12}>
                              {" "}
                              <Typography variant="h2"> Product Details</Typography>
                         </Grid>
                    </Grid>
               </Container>
               <Divider />
          </Box>
     );
};

export default ProductHeading;
