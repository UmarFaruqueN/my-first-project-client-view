import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login/login"
import productsReducer from "./products/products";



export default configureStore({reducer:{
    login_state:loginReducer,
    products: productsReducer,
   
}});