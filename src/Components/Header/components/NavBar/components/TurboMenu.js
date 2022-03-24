import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppBar, Container, Toolbar, Typography, IconButton, Badge, Box, Link } from "@mui/material";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useNavigate } from "react-router-dom";

const TurboMenu = () => {
     const navigate = useNavigate();

     const [anchorEl, setAnchorEl] = useState(null);
     const open = Boolean(anchorEl);

     const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
     };
     const handleClose = () => {
          setAnchorEl(null);
     };
     return (
          <>
               <Button
                    sx={{ color: "text.primary" }}
                    id="hd-button"
                    aria-controls={open ? "hd-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
               >
                    Turbo HD Devices
               </Button>
               <Menu
                    id="hd-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                         "aria-labelledby": "basic-button",
                    }}
               >
                    <MenuItem
                         onClick={() => {
                              setAnchorEl(null);
                              navigate("/turboHDDevices");
                         }}
                    >
                         Turbo HD Camera
                    </MenuItem>
                    <MenuItem
                         onClick={() => {
                              setAnchorEl(null);
                              navigate("/turboHDDevices");
                         }}
                    >
                         DVR
                    </MenuItem>
               </Menu>
          </>
     );
};

export default TurboMenu;
