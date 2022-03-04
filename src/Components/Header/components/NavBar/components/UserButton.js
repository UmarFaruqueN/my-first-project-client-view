import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { change_login_state } from "../../../../../Redux/login/login";
import { useNavigate } from "react-router-dom";
import { Tooltip, IconButton, Avatar, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const UserButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleClickLogout = () => {
        localStorage.removeItem("token");
        dispatch(change_login_state({ login_state: false }));
        setAnchorElUser(null);
        navigate("/");
    };
    return (
        <>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ ml: "2" }}>
                    <Avatar alt="User" src="/static/images/avatar/2.jpg" />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleClickLogout}>Logout</MenuItem>
            </Menu>
        </>
    );
};

export default UserButton;
