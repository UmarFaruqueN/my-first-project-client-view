import React from "react";
import { Grid, Typography, Radio ,Divider} from "@mui/material";

const Address = () => {
     return (
          <>
               <Grid sx={{ display: "flex", flexDirection: "row", alignItems: "center" }} width="100%" height="80px">
                    <Grid item>
                         {" "}
                         <Radio sx={{ color: "#0156ff" }} color="secondary" />
                    </Grid>
                    <Grid item>
                         <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                              {" "}
                              <Grid item>
                                   <Typography fontWeight="400" variant="h4" pl={3}>
                                        {" "}
                                        UmaR Faruque
                                   </Typography>{" "}
                              </Grid>
                              <Grid item>
                                   {" "}
                                   <Typography pl={3} fontWeight="400" variant="h4">
                                        {" "}
                                        70124633221
                                   </Typography>{" "}
                              </Grid>{" "}
                         </Grid>
                         <Grid item sx={{ display: "flex", flexDirection: "row" }}>
                              <Grid item>
                                   <Typography pl={3} fontWeight="400" variant="h4">
                                        {" "}
                                        Adress
                                   </Typography>{" "}
                              </Grid>
                              <Grid item>
                                   <Typography pl={1} fontWeight="400" variant="h4">
                                        {" "}
                                        street
                                   </Typography>{" "}
                              </Grid>

                              <Grid item>
                                   <Typography pl={1} fontWeight="400" variant="h4">
                                        {" "}
                                        city
                                   </Typography>{" "}
                              </Grid>

                              <Grid item>
                                   <Typography pl={1} fontWeight="400" variant="h4">
                                        {" "}
                                        pin
                                   </Typography>{" "}
                              </Grid>

                              <Grid item>
                                   <Typography pl={1} fontWeight="400" variant="h4">
                                        {" "}
                                        distric
                                   </Typography>{" "}
                              </Grid>

                              <Grid item>
                                   <Typography pl={1} fontWeight="400" variant="h4">
                                        {" "}
                                        state
                                   </Typography>{" "}
                              </Grid>
                         </Grid>
                    </Grid>
               </Grid>
               <Divider />
          </>
     );
};

export default Address;
