import React,{useState} from 'react'
import { TextField, Dialog, DialogActions,DialogContent,InputAdornment, DialogTitle, DialogContentText, IconButton,OutlinedInput,FormControl,Button,} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {  useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from 'react-redux';
import { signupPost } from '../../../../utlis/Constants';
import axios from 'axios'

const SignupButton=()=> {
  const [open, setOpen] =useState(false)
    //form validation
    const [showPassword, setShowPassword] = useState(false);
    


    const formSchema = Yup.object().shape({
        name: Yup.string()
            .required("Name Required"),
        email: Yup.string().required("email required")
            .email("Enter a valid email"),
        phone: Yup.string()
            .required("Number Required")
            .min(10, "Minimum 10 numbers")
            .max(10, "Maximum 10 numbers"),
        password: Yup.string()
            .required("Password is required")
            .min(4, "Password length should be at least 4 characters")
            .max(12, "Password cannot exceed more than 12 characters"),
        cpassword: Yup.string()
            .required("Confirm Password is required")
            .min(4, "Password length should be at least 4 characters")
            .max(12, "Password cannot exceed more than 12 characters")
            .oneOf([Yup.ref("password")], "Passwords do not match")
    });



    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(formSchema),
        defaultValues: {
        
            active:true

        }
    });


    const Submit = handleSubmit((data) => {
        console.log(data);
        axios.post(signupPost,data,{ headers: { 'Content-Type': 'application/json' } }).then((response)=>{
            console.log(response);
            alert(response.data.message)
            setOpen(false);
        }).catch((err)=>{
            console.log(err.response.data.message);
            alert(err.response.data.message)
        })
        
      })
//form validation ends here
const button_state =useSelector(state=>state.login_state.value)

const handleClickOpen = () => {
  setOpen(true);
};


  
  return (
    <div>
         <Button  onClick={handleClickOpen} color="secondary">Signup</Button>
      <Dialog open={open} onClose={Submit}>
        <DialogTitle>Signup</DialogTitle>
        <DialogContent color='secondary'>
          <DialogContentText color='secondary'>
        Name
          </DialogContentText>
          
          <div className="form-group mb-3">
                <TextField
                color='secondary'
                    size="small"
                    variant="outlined"
                    className="form-control"
            
                    {...register("name")}
                />

<DialogContentText color='error'>
            {errors.name?.message}</DialogContentText>
            </div>

            <DialogContentText color='secondary'>
        Email
          </DialogContentText>

            <div className="form-group mb-3">
                <TextField
                color='secondary'
                    size="small"
                    variant="outlined"
                    className="form-control"
                    
                    {...register("email", {
                        required: "Email id Required",
                        pattern: {
                            value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-z]$/,
                            message: "Enter a valid email adress",
                        },
                    })}
                />
                <DialogContentText color='error'>
            {errors.email?.message}</DialogContentText>
            </div>

            <DialogContentText color='secondary'>
        Phone
          </DialogContentText>
            <div className="form-group mb-3">
                <TextField
                    size="small"
                    variant="outlined"
                    className="form-control"
                    color='secondary'
                    {...register("phone")}
                />
                <DialogContentText color='error'>
            {errors.phone?.message}</DialogContentText>
            </div>


            <DialogContentText color='secondary'>
        Password
          </DialogContentText>
            <div className="form-group mb-3">
                <FormControl variant="outlined" size="small" className="form-control">

                  
                    <OutlinedInput
                     color='secondary'
                        type={showPassword ? "text" : "password"}
                        {...register("password",)}
                        endAdornment={
                            <InputAdornment>
                                <IconButton
                                    edge="end"
                                    onClick={() => {
                                        setShowPassword(!showPassword);
                                    }}
                                >
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <DialogContentText color='error'>
            {errors.password?.message}</DialogContentText>
            </div>

            <DialogContentText color='secondary'>
       Confirm Password
          </DialogContentText>
            <div className="form-group mb-3">
                <FormControl variant="outlined" size="small" className="form-control">
                   
                    <OutlinedInput
                       color='secondary'
                        type={showPassword ? "text" : "password"}
                        {...register("cpassword",)}
                        endAdornment={
                            <InputAdornment>
                                <IconButton
                                    edge="end"
                                    onClick={() => {
                                        setShowPassword(!showPassword);
                                    }}
                                >
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <DialogContentText color='error'>
            {errors.cpassword?.message}</DialogContentText>
            </div>





        </DialogContent>
        <DialogActions>
          <Button color='secondary' onClick={()=>{setOpen(false)}}>Cancel</Button>
          <Button color='secondary'onClick={Submit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default SignupButton


