import React from "react";
import {Grid ,Typography,IconButton} from "@mui/material"
import {Box} from "@mui/system"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const ProductIncrement = () => {
     return (
          <>
               <Grid pl={5} spacing={4} container sx={{ display: "flex", alignItems: "center" }}>
                    <Grid item>
                         <Typography variant="h3"> Price ₹ 1000 /-</Typography>
                    </Grid>{" "}
                    <Grid item>
                         <Box
                              sx={{
                                   width: "3.1rem",
                                   height: "2.6rem",
                                   backgroundColor: "text.disabled",
                                   display: "flex",
                                   alignItems: "center",
                                   justifyContent: "flex-end",
                                   borderRadius: "5px",
                              }}
                         >
                              <Box>
                                   <Typography variant="h4">1</Typography>
                              </Box>
                              <Box sx={{ display: "flex", flexDirection: "column" }}>
                                   <IconButton>
                                        {" "}
                                        <KeyboardArrowUpIcon
                                             sx={{
                                                  fontSize: "13px",
                                                  color: "primary.dark",
                                                  fontWeight: "800",
                                             }}
                                        />
                                   </IconButton>
                                   <IconButton>
                                        <KeyboardArrowDownIcon
                                             sx={{
                                                  fontSize: "13px",
                                                  color: "primary.dark",
                                             }}
                                        />
                                   </IconButton>
                              </Box>
                         </Box>
                    </Grid>
               </Grid>
          </>
     );
};

export default ProductIncrement;
