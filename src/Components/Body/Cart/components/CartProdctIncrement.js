import React, { useState } from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import axios from "axios";
import { incCart, decCart } from "../../../../utlis/Constants";

const CartProdctIncrement = (props) => {
     const [count, setCount] = useState(props.cartData.counts);
     console.log(props.cartData);
     const cartData = props.cartData;

     const Increment = () => {
          setCount(count + 1);
          let data = cartData;
          console.log(data + "ourdata");
          axios.post(incCart, data, { headers: { "Content-Type": "application/json" } }).then((response) => {
               console.log(response.data);
          });
     };

     const Decrement = () => {
          if (count > 1) {
               setCount(count - 1);
               let data = cartData;
               console.log(data + "ourdata");
               axios.post(decCart, data, { headers: { "Content-Type": "application/json" } }).then((response) => {
                    console.log(response.data);
               });
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
                              <Typography variant="h4">{count}</Typography>
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
