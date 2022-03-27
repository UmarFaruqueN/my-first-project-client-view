import React, { useState } from "react";
import { Grid, Typography, Button, Radio, Divider } from "@mui/material";
import TitleBar from "./TitleBar";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

import { addOrder } from "../../../../utlis/Constants";
import { setOrder } from "../../../../Redux";

const PlaceOrder = (props) => {
     const dispatch = useDispatch();
     const [loader, setLoader] = useState(false);
     const checkout = useSelector((state) => state.checkout.value);
     const address = props.userData;

     const Submit = () => {
          const data = { ...checkout, address };
          console.log(data);
          axios.post(addOrder, data, { headers: { "Content-Type": "application/json" } })
               .then((response) => {
                    console.log(response.data.orderData);
                    Swal.fire({
                         position: "bottom-end",
                         icon: "success",
                         title: response.data.message,
                         showConfirmButton: false,
                         timer: 1500,
                         width: "15rem",
                    });

                    dispatch(setOrder({ order: response.data.orderData }));
               })
               .catch((error) => {
                    console.log(error.response.data.message);
               });
     };
     return (
          <>
               <TitleBar number={"02"} title={"PLACE ORDER"} />
               <Grid sx={{ display: "flex", flexDirection: "row", alignItems: "center" }} width="100%" height="80px">
                    <Grid item>
                         {" "}
                         <Radio sx={{ color: "#0156ff" }} color="secondary" />
                    </Grid>
                    <Grid item>
                         <Typography fontWeight="400" variant="h4" pl={3}>
                              {" "}
                              Cash On Delivery
                         </Typography>{" "}
                    </Grid>
               </Grid>
               <Divider />
               <Grid item sx={{ display: "flex", justifyContent: "flex-end" }} p={2}>
                    <Button onClick={Submit} color="success" variant="contained">
                         {" "}
                         Place Order
                    </Button>
               </Grid>
          </>
     );
};

export default PlaceOrder;
