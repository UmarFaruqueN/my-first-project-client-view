import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login/login"



export default configureStore({reducer:{
    login_state:loginReducer,
   
}});