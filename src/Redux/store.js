import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login/login"
import userReducer from "./user/user"
import productsReducer from "./products/products";
import subCategoryReducer from "./subCategory/subCategory";
import cartReducer from "./cart/cart";
import bannersReducer from "./banners/banners";



export default configureStore({reducer:{
    login_state:loginReducer,
    user_state:userReducer,
    subCategory: subCategoryReducer,
    products: productsReducer,
    cart:cartReducer,
    banners:bannersReducer,
   
}});