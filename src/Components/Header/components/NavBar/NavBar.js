import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppBar, Container, Toolbar, Typography, IconButton, Badge, Box, Link } from "@mui/material";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import UserButton from "./components/UserButton";
import LoginButton from "../LoginButton/LoginButton";
import { useNavigate } from "react-router-dom";
import TurboMenu from "./components/TurboMenu";
import NetworkMenu from "./components/NetworkMenu";

const NavBar = () => {
     const navigate = useNavigate();
     // login state management
     const user = useSelector((state) => state.login_state.value);
     const userid = useSelector((state) => state.user_state.value);

     const [anchorEl, setAnchorEl] = useState(null);
     const open = Boolean(anchorEl);

     const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
     };
     const handleClose = () => {
          setAnchorEl(null);
     };

     // avatar functions

     return (
          <>
               <Box sx={{ flexGrow: 1 }} position="fixed" width="100%" zIndex="999">
                    <Box sx={{ backgroundColor: "primary.dark" }}>
                         <Container maxWidth="xl" sx={{ display: "flex", height: "33px", alignItems: "center" }}>
                              <Box sx={{ flexGrow: 1 }} />

                              <Box
                                   sx={{
                                        flexGrow: 1,
                                        display: { xs: "none", sm: "flex", md: "flex" },
                                        justifyContent: { md: "flex-start", sm: "space-around" },
                                   }}
                              >
                                   <Typography component="span" color="text.secondary" variant="h6">
                                        <Typography component="span" color="text.disabled" sx={{ mr: 1 }} variant="h6">
                                             Mon -Thu:
                                        </Typography>
                                        9:00 AM - 5:30 PM
                                   </Typography>
                              </Box>

                              <Box
                                   sx={{
                                        flexGrow: 1,
                                        display: { sm: "none", xs: "none", md: "flex" },
                                        justifyContent: "space-around",
                                   }}
                              >
                                   <Typography component="span" color="text.disabled">
                                        Visit our showroom in Amala Building, Palarivattom, Kochi
                                        <Link
                                             onClick={() => {
                                                  navigate("/contactUs");
                                             }}
                                             color="primary"
                                             sx={{ cursor: "pointer", ml: 1 }}
                                        >
                                             Contact Us
                                        </Link>
                                   </Typography>
                              </Box>

                              <Box
                                   sx={{
                                        flexGrow: 1,
                                        display: "flex",
                                        justifyContent: { md: "flex-end", xs: "center" },
                                        alignItems: "center",
                                   }}
                              >
                                   <Typography component="span" color="primary" sx={{ mr: 1 }}>
                                        Call Us: +91-7012463321
                                   </Typography>
                                   <IconButton
                                        onClick={() => {
                                             window.open("https://www.facebook.com/zetetikoz");
                                        }}
                                        size="large"
                                        edge="start"
                                        color="primary"
                                   >
                                        <FacebookIcon />
                                   </IconButton>
                                   <IconButton
                                        onClick={() => {
                                             window.open("https://www.instagram.com/zetetikoz/");
                                        }}
                                        size="large"
                                        edge="start"
                                        color="primary"
                                   >
                                        <InstagramIcon />
                                   </IconButton>
                              </Box>

                              <Box sx={{ flexGrow: 1 }} />
                         </Container>
                    </Box>

                    {/* AppBar Starts Here */}

                    <AppBar position="static" color="primary">
                         <Container maxWidth="xl">
                              <Toolbar>
                                   <Box
                                        onClick={() => {
                                             navigate("/");
                                        }}
                                        sx={{
                                             mr: 2,
                                             display: { xs: "none", md: "flex" },
                                             alignItems: "center",
                                             cursor: "pointer",
                                        }}
                                   >
                                        <DashboardCustomizeIcon sx={{ fontSize: 31, color: "text.hint", pr: 1 }} />
                                        <Typography variant="h2" fontWeight="700" noWrap color="text.hint" component="div">
                                             ZETETIKOZ
                                        </Typography>
                                   </Box>

                                   <Box sx={{ flexGrow: 2 }} />

                                   <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                                        <IconButton
                                             size="large"
                                             aria-label="account of current user"
                                             aria-controls="menu-appbar"
                                             aria-haspopup="true"
                                        >
                                             <MenuIcon sx={{ fontSize: 31, color: "text.hint", pr: 1 }} />
                                        </IconButton>
                                   </Box>

                                   <Box sx={{ mr: 2, display: { xs: "none", md: "flex" }, alignItems: "center" }}>
                                        {" "}
                                        <TurboMenu />
                                        <NetworkMenu />
                                        <Button
                                             sx={{ color: "text.primary" }}
                                             onClick={() => {
                                                  navigate("/aboutUs");
                                             }}
                                        >
                                             {" "}
                                             About Us
                                        </Button>
                                   </Box>

                                   <Box sx={{ flexGrow: 2 }} />

                                   <Box
                                        sx={{
                                             flexGrow: 1,
                                             display: "flex",
                                             alignItems: "center",
                                             justifyContent: "flex-end",
                                        }}
                                   >
                                        <IconButton>
                                             <SearchOutlinedIcon sx={{ color: "text.primary", fontSize: "25", ml: "2" }} />
                                        </IconButton>
                                        <IconButton
                                             onClick={() => {
                                                  navigate("/cart");
                                             }}
                                        >
                                             <Badge badgeContent={2} color={"secondary"}>
                                                  <ShoppingCartOutlinedIcon sx={{ color: "text.primary", ml: "2" }} />
                                             </Badge>
                                        </IconButton>

                                        {user ? <UserButton /> : <LoginButton />}
                                   </Box>
                              </Toolbar>
                         </Container>
                    </AppBar>
               </Box>
          </>
     );
};

export default NavBar;
