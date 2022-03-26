import React, { useState } from "react";
import TitleBar from "./TitleBar";
import { TextField, Typography, Button, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector ,useDispatch} from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

import { addAddress } from "../../../../utlis/Constants";
import {setUserData} from "../../../../Redux"

function AddAddress(props) {
    const dispatch = useDispatch()
     const user = useSelector((state) => state.user_state.value);
     const [er, setEr] = useState(null);

     //form validation

     const formSchema = Yup.object().shape({
          address: Yup.string().required("Address Required"),
          street: Yup.string().required("Street Required"),
          city: Yup.string().required("City Required"),
          pin: Yup.string().required("PIN Required").min(6, "Minimum 6 numbers").max(6, "Maximum 6 numbers"),
          distric: Yup.string().required("Distric Required"),
          state: Yup.string().required("State Required"),
     });

     const {
          register,
          formState: { errors },
          handleSubmit,
     } = useForm({
          mode: "onTouched",
          resolver: yupResolver(formSchema),
     });

     const Submit = handleSubmit((data) => {
          console.log(data);
          const addData = { ...data, user };
          console.log(addData);
          axios.post(addAddress, addData, { headers: { "Content-Type": "application/json" } })
               .then((response) => {
                    console.log(response);
                    setEr(null);
                    dispatch(setUserData({ userData: response.data.userData }));
                    Swal.fire({
                         position: "bottom-end",
                         icon: "success",
                         title: response.data.message,
                         showConfirmButton: false,
                         timer: 1500,
                         width: "15rem",
                    });
               })
               .catch((err) => {
                    console.log(err.response.data.message);
                    setEr(err.response.data.message);
                   
               });
     });
     //form validation ends here
     const button_state = useSelector((state) => state.login_state.value);

     return (
          <>
               <TitleBar title={"ADD ADDRESS"} />
               <Grid container sx={{ display: "flex", flexDirection: "column", pl: 20, pr: 20, pt: 2 }}>
                    <Typography variant="h4" color="error">
                         {er}
                    </Typography>
                    <Typography color="secondary">Address</Typography>
                    <TextField
                         color="secondary"
                         size="small"
                         variant="outlined"
                         className="form-control"
                         {...register("address")}
                    />

                    <Typography color="error">{errors.address?.message}</Typography>

                    <Typography color="secondary">Street</Typography>

                    <TextField
                         color="secondary"
                         size="small"
                         variant="outlined"
                         className="form-control"
                         {...register("street")}
                    />

                    <Typography color="error">{errors.street?.message}</Typography>

                    <Typography color="secondary">City</Typography>

                    <TextField
                         color="secondary"
                         size="small"
                         variant="outlined"
                         className="form-control"
                         {...register("city")}
                    />

                    <Typography color="error">{errors.city?.message}</Typography>

                    <Typography color="secondary">PIN</Typography>

                    <TextField
                         size="small"
                         variant="outlined"
                         className="form-control"
                         color="secondary"
                         {...register("pin")}
                    />
                    <Typography color="error">{errors.pin?.message}</Typography>

                    <Typography color="secondary">Distric</Typography>

                    <TextField
                         color="secondary"
                         size="small"
                         variant="outlined"
                         className="form-control"
                         {...register("distric")}
                    />

                    <Typography color="error">{errors.distric?.message}</Typography>

                    <Typography color="secondary">State</Typography>

                    <TextField
                         color="secondary"
                         size="small"
                         variant="outlined"
                         className="form-control"
                         {...register("state")}
                    />

                    <Typography color="error">{errors.state?.message}</Typography>

                    <Grid item sx={{ display: "flex", justifyContent: "center", justifyContent: "space-around", pt: 2 }}>
                         <Button onClick={props.SignUpCancel} variant="contained" color="error">
                              Cancel
                         </Button>
                         <Button color="secondary" variant="contained" onClick={Submit}>
                              Submit
                         </Button>
                    </Grid>
               </Grid>
          </>
     );
}

export default AddAddress;
