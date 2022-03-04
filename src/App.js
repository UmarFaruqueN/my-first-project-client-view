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
                    <Route exact path="/user" exact element={<User />} />
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/product" element={<Product />} />
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
