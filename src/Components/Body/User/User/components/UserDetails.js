import { Button, Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddAddress from "../../../Checkout/components/AddAddress";
import TitleBar from "../../../Checkout/components/TitleBar";
import Title from "../../Components/Title";
import AddressManagement from "./AddressManagement";

const UserDetails = () => {
     const [add, setAdd] = useState(false);

     const addAddress = () => {
       setAdd(true)
     };
     const addedAddress = () => {
       setAdd(false)
     };
     
     return (
          <Grid item md={8} sx={{ display: "flex", flexDirection: "column" }}>
               <Grid item xs={12} pb={3}>
                    <Title title="Profile." />
               </Grid>
               <Grid items sx={{ display: "flex" }}>
                    {" "}
                    <Grid items md={5}>
                         <Grid item sx={{ display: "flex", flexDirection: "column" }}>
                              <Grid
                                   item
                                   sx={{ display: "flex", alignItems: "baseline", pb: 2, justifyContent: "space-between" }}
                              >
                                   <Grid item>
                                        <Grid item pb={2}>
                                             <Typography color="text.disabled" variant="h4">
                                                  Name
                                             </Typography>
                                        </Grid>
                                        <Grid item>
                                             <Typography variant="h4">UMAR Faruque N</Typography>
                                        </Grid>
                                   </Grid>
                                   <Grid item>
                                        <Button size="small" color="secondary">
                                             edit
                                        </Button>
                                   </Grid>
                              </Grid>
                              <Divider />
                              <Grid
                                   item
                                   sx={{ display: "flex", alignItems: "baseline", pb: 2, justifyContent: "space-between" }}
                              >
                                   <Grid item>
                                        <Grid item pb={2}>
                                             <Typography color="text.disabled" variant="h4">
                                                  Phone
                                             </Typography>
                                        </Grid>
                                        <Grid item>
                                             <Typography variant="h4">7012463321</Typography>
                                        </Grid>
                                   </Grid>
                                   <Grid item>
                                        <Button size="small" color="secondary">
                                             edit
                                        </Button>
                                   </Grid>
                              </Grid>
                              <Divider />
                              <Grid
                                   item
                                   sx={{ display: "flex", alignItems: "baseline", pb: 2, justifyContent: "space-between" }}
                              >
                                   <Grid item>
                                        <Grid item pb={2}>
                                             <Typography color="text.disabled" variant="h4">
                                                  Email
                                             </Typography>
                                        </Grid>
                                        <Grid item>
                                             <Typography variant="h4">umarfaruq@gmail.com</Typography>
                                        </Grid>
                                   </Grid>
                                   <Grid item>
                                        <Button size="small" color="secondary">
                                             edit
                                        </Button>
                                   </Grid>
                              </Grid>
                              <Divider />
                              <Grid
                                   item
                                   sx={{ display: "flex", alignItems: "baseline", pb: 2, justifyContent: "space-between" }}
                              >
                                   <Grid item>
                                        <Grid item pb={2}>
                                             <Typography color="text.disabled" variant="h4">
                                                  Password
                                             </Typography>
                                        </Grid>
                                        <Grid item>
                                             <Typography variant="h4">****</Typography>
                                        </Grid>
                                   </Grid>
                                   <Grid item>
                                        <Button size="small" color="secondary">
                                             edit
                                        </Button>
                                   </Grid>
                              </Grid>
                              <Divider />
                         </Grid>
                    </Grid>
                    <Grid md={7} ml={1} item>
                         <Grid item>
                              {" "}
                              {add ? (
                                   <AddAddress addedAddress={addedAddress} />
                              ) : (
                                   <>
                                        <TitleBar addAddress={addAddress} title={"Address"} btn={true} />{" "}
                                        <AddressManagement />{" "}
                                   </>
                              )}
                         </Grid>
                    </Grid>
               </Grid>

               <Grid item></Grid>
          </Grid>
     );
};

export default UserDetails;
