import React from "react";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "./utlis/Theme";
import { Routes, Route } from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import {
     Home,
     Product,
     Cart,
     TurboHDDevices,
     InternetProtocolDevices,
     Wishlist,
     User,
     MyOrder,
     AboutUs,
     ContactUs,
     OrdersAndReturns,
     PrivacyPolicy,
     Terms,
     Header,
     Footer,
     CheckOut,
} from "./Pages";

function App() {

     return (
          <ThemeProvider theme={customTheme}>
               <div className="App">
                    <PayPalScriptProvider >
                    <Header />
                    <Routes>
                         <Route exact path="/user" element={<User />} />
                         <Route exact path="/" element={<Home />} />
                         <Route exact path="/product/:_id" element={<Product />} />
                         <Route exact path="/cart" element={<Cart />} />
                         <Route exact path="/turboHDDevices" element={<TurboHDDevices />} />
                         <Route exact path="/internetProtocolDevices" element={<InternetProtocolDevices />} />
                         <Route exact path="/wishlist" element={<Wishlist />} />
                         <Route exact path="/checkOut" element={<CheckOut />} />
                         <Route exact path="/profile" element={<User />} />
                         <Route exact path="/myOrders" element={<MyOrder />} />

                         <Route exact path="/aboutUs" element={<AboutUs />} />
                         <Route exact path="/contactUs" element={<ContactUs />} />
                         <Route exact path="/ordersAndReturns" element={<OrdersAndReturns />} />
                         <Route exact path="/privacyPolicy" element={<PrivacyPolicy />} />
                         <Route exact path="/terms" element={<Terms />} />

                         <Route
                              path="*"
                              element={
                                   <main style={{ padding: "1rem" }}>
                                        <p>There's nothing here!</p>
                                   </main>
                              }
                         />
                    </Routes>
                    <Footer />
                    </PayPalScriptProvider>
               </div>
          </ThemeProvider>
     );
}

export default App;
