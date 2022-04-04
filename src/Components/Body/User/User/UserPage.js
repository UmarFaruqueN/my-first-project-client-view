import { Button, Container, Divider, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Details from "../../Checkout/components/Details";
import LeftBox from "../Components/LeftBox";
import Title from "../Components/Title";
import UserDetails from "./components/UserDetails";

const UserPage = () => {
     return (
          <>
               <Box pt={13}>
                    <Container>
                         <Title />

                         <Grid container spacing={4} pt={5}>
                              <LeftBox account={true} />
                              <UserDetails/>
                         </Grid>
                    </Container>
               </Box>
          </>
     );
};

export default UserPage;
