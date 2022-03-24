import React from "react";
import { Button, Grid, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Option = (props) => {
     const navigate = useNavigate();

     return (
          <>
               <Grid item sx={{ pb: 6, pt: 6 }}>
                    <Grid item sx={{ display: "flex", justifyContent: "space-around", pt: 2 }}>
                         {" "}
                         <Typography fontSize="10px">
                              By continuing, you agree to Zetetikoz's{" "}
                              <Link
                                   onClick={() => {
                                        navigate("/terms");
                                   }}
                                   sx={{ color: "#0156ff", cursor: "pointer" }}
                              >
                                   Terms of Use
                              </Link>{" "}
                              and{" "}
                              <Link
                                   onClick={() => {
                                        navigate("/privacyPolicy");
                                   }}
                                   sx={{ color: "#0156ff", cursor: "pointer" }}
                              >
                                   Privacy Policy
                              </Link>
                              .
                         </Typography>
                    </Grid>
                    <Grid item sx={{ display: "flex", justifyContent: "space-around", pt: 2, pr: 3, pl: 2 }}>
                         {" "}
                         <Button
                              sx={{ marginLeft: "10px", color: "#ffff", fontSize: "16px" }}
                              fullWidth
                              size="medium"
                              variant="contained"
                              color="warning"
                              onClick={props.Login}
                         >
                              {" "}
                              Login With Password
                         </Button>
                    </Grid>
                    <Grid item sx={{ display: "flex", justifyContent: "space-around", pt: 2 }}>
                         {" "}
                         <Typography variant="h4" color="text.disabled">
                              OR
                         </Typography>
                    </Grid>
                    <Grid item sx={{ display: "flex", justifyContent: "space-around", pt: 2, pr: 3, pl: 2 }}>
                         <Button
                              sx={{ marginLeft: "10px", color: "#ffff", fontSize: "16px" }}
                              fullWidth
                              size="medium"
                              variant="contained"
                              color="secondary"
                              onClick={props.OTP}
                         >
                              {" "}
                              Request OTP
                         </Button>
                    </Grid>
               </Grid>
          </>
     );
};

export default Option;
