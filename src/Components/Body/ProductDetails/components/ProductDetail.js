import React ,{useState} from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ButtonConfig from "./ButtonConfig";
import ProductIncrement from "./ProductIncrement";

const ProductDetail = (props) => {
     const [count, setCount] =useState(1);
     return (
          <>
               <Grid item md={6}>
                    <Box
                         sx={{
                              height: "500px",
                              display: "flex",
                              alignItems: "center",
                         }}
                    >
                         <Box
                              sx={{
                                   height: "300px",
                                   display: "flex",
                                   flexDirection: "column",
                                   alignItems: "center",
                                   justifyContent: "space-evenly",
                              }}
                         >
                              <Grid ml={10} container>
                                   <Grid item xs={12}>
                                        <Grid pb={2} item>
                                             <Typography variant="h2"> {props.data[0]?.ProductName}</Typography>
                                        </Grid>
                                        <Grid pb={1} item>
                                             <Typography variant="h3"> {props.data[0]?.ModelNumber}</Typography>
                                        </Grid>
                                        <Grid pb={1} item>
                                             <Typography noWrap={false} variant="body">
                                                  {props.data[0]?.Description}
                                             </Typography>
                                        </Grid>
                                        <Grid>
                                             <Typography color="error" variant="h4">
                                                  <del color="error"> {props.data[0]?.SellingPrice} </del>
                                             </Typography>
                                        </Grid>
                                   </Grid>
                              </Grid>

                              <ProductIncrement    rement data={props.data} count={count} setCount={setCount} />
                              <ButtonConfig data={props.data} count ={count} />
                         </Box>
                    </Box>
               </Grid>
          </>
     );
};

export default ProductDetail;