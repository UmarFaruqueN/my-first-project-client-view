import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import AddAddress from "./components/AddAddress";
import Address from "./components/Address";
import Buttons from "./components/Buttons";
import Details from "./components/Details";
import PlaceOrder from "./components/PlaceOrder";
import TitleBar from "./components/TitleBar";

const CheckOutPage = () => {
     const userData = useSelector((state) => state.userData.value);
     const [add, setAdd] = useState(false);
     const [showAdd, setShowAdd] = useState(true);
     const [select, setSelect] = useState(false);
     const [order, setOrder] = useState(false);
     const [address, setAddress] = useState({
          _id: "",
          name: "",
          phone: "",
          address: [
               {
                    address: "",
                    street: "",
                    city: "",
                    pin: "",
                    distric: "",
                    state: "",
                    date: "",
               },
          ],
     });

     const addAddress = () => {
          setAdd(true);
          setShowAdd(false);
          setSelect(false);
          setOrder(false);
     };

     const addedAddress = () => {
          setAdd(false);
          setShowAdd(true);
     };

     const selectAddress = () => {
          setSelect(true);
          setShowAdd(false);
          setOrder(false);
     };

     const changeAddress = () => {
          setAdd(false);
          setShowAdd(true);
          setSelect(false);
          setOrder(false);
     };

     const confirmAddress = () => {
          setOrder(true);
     };

     return (
          <>
               <Box pt={13}>
                    <Container>
                         <Grid container pt={3} spacing={5}>
                              <Grid md={7} item>
                                   <Grid item>
                                        {add ? <AddAddress addedAddress={addedAddress} /> : ""}
                                        {add ? (
                                             ""
                                        ) : (
                                             <TitleBar
                                                  number={"01"}
                                                  title={"DELIVERY ADDRESS"}
                                                  btn={true}
                                                  addAddress={addAddress}
                                             />
                                        )}
                                        {showAdd ? (
                                             <Address
                                                  selectAddress={selectAddress}
                                                  setAddress={setAddress}
                                                  userData={userData}
                                             />
                                        ) : (
                                             ""
                                        )}
                                        {select ? (
                                             <>
                                                  <Address checked={true} userData={address} />{" "}
                                                  <Buttons
                                                       confirmAddress={confirmAddress}
                                                       changeAddress={changeAddress}
                                                       userData={address}
                                                  />
                                             </>
                                        ) : (
                                             ""
                                        )}

                                        {order ? <PlaceOrder userData={address} /> : ""}
                                   </Grid>
                              </Grid>

                              <Grid md={4} item>
                                   <Details />
                              </Grid>
                         </Grid>
                    </Container>
               </Box>
          </>
     );
};

export default CheckOutPage;
