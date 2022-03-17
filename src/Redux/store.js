import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login/login"
import userReducer from "./user/user"
import productsReducer from "./products/products";
import cartReducer from "./products/products";



export default configureStore({reducer:{
    login_state:loginReducer,
    user_state:userReducer,
    products: productsReducer,
    cart:cartReducer,
   
}});