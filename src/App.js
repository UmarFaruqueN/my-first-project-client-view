import React, { useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import Home from "./Pages/Home";
import { customTheme } from "./utlis/Theme";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import User from "./Pages/User";
import Product from "./Pages/Product";

function App() {
     return (
          <ThemeProvider theme={customTheme}>
               <div className="App">
                    <Routes>
                         <Route exact path="/user" element={<User />} />
                         <Route exact path="/" element={<Home />} />
                         <Route exact path="/product" element={<Product />} />
                         <Route
                              path="*"
                              element={
                                   <main style={{ padding: "1rem" }}>
                                        <p>There's nothing here!</p>
                                   </main>
                              }
                         />
                    </Routes>
               </div>
          </ThemeProvider>
     );
}

export default App;
