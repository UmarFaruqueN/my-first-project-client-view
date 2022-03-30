import { Button, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Title from "../User/Components/Title";

import AddAddress from "./components/AddAddress";
import Address from "./components/Address";
import Buttons from "./components/Buttons";
import CancelCheckout from "./components/CancelCheckout";
import Details from "./components/Details";
import PayPal from "./components/PayPalButton";
import PlaceOrder from "./components/PlaceOrder";
import TitleBar from "./components/TitleBar";

const CheckOutPage = () => {
     const userData = useSelector((state) => state.userData.value);
     const cartData = useSelector((state) => state.cart.value);
     const [viewAll, setViewAll] = useState(true);
     const [viewPayPal, setViewPayPal] = useState(true);
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

     const Cancel = () => {
          setViewAll(true);
     };

     return (
          <>
               <Box pt={13}>
                    <Container>
                         <Title title={"CheckOut"} />
                         <Grid container pt={3} spacing={5}>
                              <Grid md={7} item sx={{display:"flex", flexDirection:"column"}}>
                                   {viewAll ? (
                                        <>
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

                                                  {order ? (
                                                       <PlaceOrder
                                                            cartData={cartData}
                                                            userData={address}
                                                            setViewAll={setViewAll}
                                                       />
                                                  ) : (
                                                       ""
                                                  )}
                                             </Grid>
                                        </>
                                   ) : (
                                        <Button onClick={Cancel} color="error">
                                             {" "}
                                             Cancel
                                        </Button>
                                   )}
                                   {}

                                   <CancelCheckout />
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
