import React from "react";
import { Grid, IconButton, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

import { OrangeButton } from "../../../Common";



const Buttons = (props) => {
     return (
          <>
               <Grid item sx={{ display: "flex", flexDirection: "row", pl: 1 }}>
                    <Grid>
                         <IconButton>
                              <Button
                                   size="medium"
                                   variant="outlined"
                                   color="secondary"
                                   onClick={() => {
                                        props.AddTocart(props.productId);
                                   }}
                              >
                                   {" "}
                                   <AddShoppingCartOutlinedIcon />
                                   Add to cart
                              </Button>
                         </IconButton>
                    </Grid>

                    <Grid item>
                         {" "}
                         <IconButton
                              onClick={() => {
                                   props.BuyNow(props.productId);
                              }}
                         >
                              <OrangeButton title={"Buy Now"} />
                         </IconButton>
                    </Grid>
                    <Grid item>
                         <IconButton
                              onClick={() => {
                                   props.WishList(props.productId);
                              }}
                              color="error"
                         >
                              {" "}
                              <FavoriteIcon sx={{ fontSize: "40px" }} />
                         </IconButton>
                    </Grid>
               </Grid>
          </>
     );
};

export default Buttons;
