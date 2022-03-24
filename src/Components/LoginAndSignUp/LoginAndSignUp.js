import { Button, Dialog, Grid, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import LeftSide from "./components/LeftSide";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { setLoginForm } from "../../Redux/loginForm/loginForm";
import Option from "./components/Option";
import LoginForm from "./components/LoginForm";
import OtpForm from "./components/OtpForm";
import SignUpForm from "./components/SignUpForm";

const LoginAndSignUp = () => {
     const dispatch = useDispatch();
     const open = useSelector((state) => state.loginForm.value);

     const [option, setOption] = useState(false);
     const [login, setLogin] = useState(false);
     const [otp, setOtp] = useState(true);
     const [signup, setSignup] = useState(false);
     const CloseForm = () => {
          dispatch(setLoginForm({ loginForm: false }));
     };

     const Login = () => {
          setOption(false);
          setSignup(false);
          setOtp(false);
          setLogin(true);
     };

     const OTP = () => {
          setOption(false);
          setLogin(false);
          setSignup(false);
          setOtp(true);
     };

     const SignUp = () => {
          setOption(false);
          setLogin(false);
          setOtp(false);
          setSignup(true);
     };

     const SignUpCancel = () => {
          setLogin(false);
          setOtp(false);
          setSignup(false);
          setOption(true);
     };

     return (
          <>
               <Button> Login </Button>
               <Dialog maxWidth="md" open={open} onClose={CloseForm}>
                    <Grid container height="450px" width="700px">
                         <Grid
                              item
                              md={5}
                              sx={{
                                   backgroundColor: "#0156ff",
                                   display: "flex",
                                   flexDirection: "column",
                                   justifyContent: "space-evenly",
                                   p: 3,
                              }}
                         >
                              <LeftSide signup={signup} />
                         </Grid>
                         <Grid
                              sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                              item
                              md={7}
                              pb={5}
                         >
                              <Grid item sx={{ display: "flex", justifyContent: "flex-end" }}>
                                   {" "}
                                   <IconButton onClick={CloseForm} color="error">
                                        {" "}
                                        <CloseIcon />
                                   </IconButton>
                              </Grid>
                              {option ? <Option Login={Login} OTP={OTP} /> : ""}
                              {login ? <LoginForm /> : ""}
                              {otp ? <OtpForm SignUpCancel={SignUpCancel} /> : ""}

                              {signup ? (
                                   <SignUpForm SignUpCancel={SignUpCancel} />
                              ) : (
                                   <Grid item sx={{ display: "flex", justifyContent: "space-around" }}>
                                        {" "}
                                        <IconButton onClick={SignUp}>
                                             <Typography sx={{ cursor: "pointer", color: "#0156ff" }}>
                                                  {" "}
                                                  New to Zetetikoz? Create an account
                                             </Typography>
                                        </IconButton>
                                   </Grid>
                              )}
                         </Grid>
                    </Grid>
               </Dialog>
          </>
     );
};

export default LoginAndSignUp;
