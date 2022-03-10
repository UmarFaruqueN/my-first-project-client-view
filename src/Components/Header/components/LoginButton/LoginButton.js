import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
     TextField,
     Dialog,
     DialogActions,
     DialogContent,
     InputAdornment,
     DialogTitle,
     DialogContentText,
     IconButton,
     OutlinedInput,
     FormControl,
     InputLabel,
     Button,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";

import SignupButton from "../SignupButton/SignupButton";
import Swal from "sweetalert2";
import axios from "axios";
import { loginPost, verifyPost } from "../../../../utlis/Constants";
import { change_login_state } from "../../../../Redux/login/login";
import { change_user_state } from "../../../../Redux/user/user";

const LoginButton = () => {
     const user = localStorage.getItem("token");
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const [open, setOpen] = useState(false);
     //form validation
     const [showOtp, setShowOtp] = useState(false);
     const [showSignup, setShowSignup] = useState(false);
     const [sendOtp, setSendOtp] = useState(true);
     const {
          register,
          formState: { errors },
          handleSubmit,
     } = useForm();

     const SendOTP = handleSubmit((data) => {
          console.log(data);
          axios.post(loginPost, data, { headers: { "Content-Type": "application/json" } })
               .then((response) => {
                    console.log("response");
                    console.log(response);
                    Swal.fire({
                         position: "bottom-end",
                         icon: "success",
                         title: response.data.message,
                         showConfirmButton: false,
                         timer: 1500,
                         width: "15rem",
                    });
                    setSendOtp(false);
                    setShowSignup(false);
                    setShowOtp(true);
               })
               .catch((err) => {
                    console.log("eroor");
                    console.log(err.response.data.message);
                    Swal.fire({
                         position: "bottom-end",
                         icon: "success",
                         title: err.response.data.message,
                         showConfirmButton: false,
                         timer: 1500,
                         width: "15rem",
                    });

                    if (!err.response.data.userStatus) {
                         setOpen(false);
                         setShowSignup(false);
                    } else {
                         setSendOtp(false);
                         setShowSignup(true);
                    }
               });
     });

     const VerifyOTP = handleSubmit((data) => {
          console.log(data);
          axios.post(verifyPost, data, { headers: { "Content-Type": "application/json" } })
               .then((response) => {
                    console.log("response verified");
                    console.log(response);
                    Swal.fire({
                         position: "bottom-end",
                         icon: "success",
                         title: response.data.message,
                         showConfirmButton: false,
                         timer: 1500,
                         width: "15rem",
                    });
                    dispatch(change_login_state({ login_state: true }));
                    dispatch(change_user_state({ user_state: response.data.userId }));
                    localStorage.setItem("token", response.data.token);
                    setOpen(false);
                    navigate("/");
               })
               .catch((err) => {
                    console.log("eroor");
                    console.log(err.response.data.message);
                    Swal.fire({
                         position: "bottom-end",
                         icon: "success",
                         title: err.response.data.message,
                         showConfirmButton: false,
                         timer: 1500,
                         width: "15rem",
                    });
               });
     });

     const Submit = () => {
          setOpen(false);
          setShowSignup(false);
          setSendOtp(true);
     };
     //form validation ends here

     const handleClickOpen = () => {
          setOpen(true);
     };

     let closeImg = { cursor: "pointer", float: "right", marginTop: "5px", width: "20px" };

     return (
          <div>
               <Button onClick={handleClickOpen} color="secondary">
                    Login
               </Button>

               <Dialog open={open} onClose={Submit}>
                    <DialogTitle>
                         Enter Mobile Number For Login{" "}
                         <img
                              onClick={Submit}
                              src="https://d30y9cdsu7xlg0.cloudfront.net/png/53504-200.png"
                              style={closeImg}
                         />
                    </DialogTitle>
                    <DialogContent color="secondary">
                         <DialogContentText color="secondary">Number</DialogContentText>

                         <TextField
                              color="secondary"
                              size="small"
                              variant="outlined"
                              className="form-control"
                              type="number"
                              {...register("phone", {
                                   required: " Mobile Number Required",
                                   maxLength: {
                                        value: 10,
                                        message: "Only 10 Numbers allowed",
                                   },
                                   minLength: {
                                        value: 10,
                                        message: " Numbers Required",
                                   },
                              })}
                         />
                         <DialogContentText color="error">{errors.phone?.message}</DialogContentText>

                         {showSignup ? (
                              <DialogContentText color="secondary">
                                   Number Is Not Registered With Account, Check The Number Or Create Account{" "}
                              </DialogContentText>
                         ) : (
                              ""
                         )}

                         {showOtp ? <DialogContentText color="secondary">Enter OTP</DialogContentText> : ""}

                         {showOtp ? (
                              <TextField
                                   color="secondary"
                                   size="small"
                                   variant="outlined"
                                   className="form-control"
                                   type="number"
                                   {...register("otp", {
                                        required: " OTP Required",
                                        maxLength: {
                                             value: 4,
                                             message: "Only 4Numbers allowed",
                                        },
                                        minLength: {
                                             value: 4,
                                             message: "4  Required",
                                        },
                                   })}
                              />
                         ) : (
                              ""
                         )}
                    </DialogContent>
                    <DialogActions>
                         {showSignup ? <SignupButton /> : ""}
                         {showSignup ? (
                              <Button color="secondary" onClick={SendOTP}>
                                   Resend OTP
                              </Button>
                         ) : (
                              ""
                         )}

                         {showOtp ? (
                              <Button color="secondary" onClick={VerifyOTP}>
                                   Confirm
                              </Button>
                         ) : (
                              ""
                         )}
                         {sendOtp ? (
                              <Button color="secondary" onClick={SendOTP}>
                                   Send OTP
                              </Button>
                         ) : (
                              ""
                         )}
                    </DialogActions>
               </Dialog>
          </div>
     );
};

export default LoginButton;
