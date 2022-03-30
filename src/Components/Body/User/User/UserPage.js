import { Container, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LeftBox from "../Components/LeftBox";
import Title from "../Components/Title";

const UserPage = () => {
     return (
          <>
               <Box pt={13}>
                    <Container>
                         <Title />

                         <Grid container spacing={4} pt={5}>
                              <LeftBox account={true} />
                              <Grid item>
                                   
         
                                   



                              </Grid>
                         </Grid>
                    </Container>
               </Box>
          </>
     );
};

export default UserPage;
