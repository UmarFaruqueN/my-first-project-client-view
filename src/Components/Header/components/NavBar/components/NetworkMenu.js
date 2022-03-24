import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppBar, Container, Toolbar, Typography, IconButton, Badge, Box, Link } from "@mui/material";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useNavigate } from "react-router-dom";

const NetworkMenu = () => {
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
                    id="network-button"
                    aria-controls={open ? "network-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
               >
                    Network Devices
               </Button>
               <Menu
                    id="network-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                         "aria-labelledby": "basic-button",
                    }}
               >
                    <MenuItem onClick={() => navigate("/ipCamera")}>IP Camera</MenuItem>
                    <MenuItem onClick={() => navigate("/nvr")}>NVR</MenuItem>
               </Menu>{" "}
          </>
     );
};

export default NetworkMenu;
