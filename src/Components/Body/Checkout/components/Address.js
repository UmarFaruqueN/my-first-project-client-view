import React, { useState } from "react";
import { Grid, Typography, Radio, Divider, Select } from "@mui/material";

const Address = (props) => {
     const SelectAddress = (obj) => {
          props.setAddress({
               _id: props.userData._id,
               name: props.userData.name,
               phone: props.userData.phone,
               address: [
                    {
                         address: obj.address,
                         street: obj.street,
                         city: obj.city,
                         pin: obj.pin,
                         distric: obj.distric,
                         state: obj.state,
                         date: obj.date,
                    },
               ],
          });

          props.selectAddress()
     };

     return (
          <>
               {props.userData.address?.map((obj) => (
                    <>
                         <Grid
                              sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
                              width="100%"
                              height="80px"
                         >
                              <Grid item>
                                   {" "}
                                   <Radio
                                        onChange={() => {
                                             SelectAddress(obj);
                                        }}
                                        sx={{ color: "#0156ff" }}
                                        color="secondary"
                                   />
                              </Grid>
                              <Grid item>
                                   <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                                        {" "}
                                        <Grid item>
                                             <Typography fontWeight="400" variant="h4" pl={3}>
                                                  {" "}
                                                  {props.userData.name} -
                                             </Typography>{" "}
                                        </Grid>
                                        <Grid item>
                                             {" "}
                                             <Typography pl={3} fontWeight="400" variant="h4">
                                                  {" "}
                                                  {props.userData.phone}
                                             </Typography>{" "}
                                        </Grid>{" "}
                                   </Grid>
                                   <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                                        <Grid item>
                                             <Typography pl={3} fontWeight="400" variant="h4">
                                                  {" "}
                                                  {obj.address},
                                             </Typography>{" "}
                                        </Grid>
                                        <Grid item>
                                             <Typography pl={1} fontWeight="400" variant="h4">
                                                  {" "}
                                                  {obj.street},
                                             </Typography>{" "}
                                        </Grid>

                                        <Grid item>
                                             <Typography pl={1} fontWeight="400" variant="h4">
                                                  {" "}
                                                  {obj.city},
                                             </Typography>{" "}
                                        </Grid>

                                        <Grid item>
                                             <Typography pl={1} fontWeight="400" variant="h4">
                                                  {" "}
                                                  {obj.pin},
                                             </Typography>{" "}
                                        </Grid>

                                        <Grid item>
                                             <Typography pl={1} fontWeight="400" variant="h4">
                                                  {" "}
                                                  {obj.distric},
                                             </Typography>{" "}
                                        </Grid>

                                        <Grid item>
                                             <Typography pl={1} fontWeight="400" variant="h4">
                                                  {" "}
                                                  {obj.state}.
                                             </Typography>{" "}
                                        </Grid>
                                   </Grid>
                              </Grid>
                         </Grid>
                         <Divider />
                    </>
               ))}
          </>
     );
};

export default Address;
