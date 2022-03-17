import React, { useState} from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CartProdctIncrement = (props) => {

    const [count, setCount]=useState(props.data.counts)
    console.log(props.data);
     const Increment = () => {
        setCount(count + 1);
     };

     const Decrement = () => {
          if (count > 1) {
               setCount(count - 1);
          }
     };
     return (
          <>
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
                              <Typography variant="h4">{props.count}</Typography>
                         </Box>
                         <Box sx={{ display: "flex", flexDirection: "column" }}>
                              <IconButton onClick={Increment}>
                                   {" "}
                                   <KeyboardArrowUpIcon
                                        sx={{
                                             fontSize: "13px",
                                             color: "primary.dark",
                                             fontWeight: "800",
                                        }}
                                   />
                              </IconButton>
                              <IconButton onClick={Decrement}>
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
          </>
     );
};

export default CartProdctIncrement;
