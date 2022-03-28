import { configureStore } from "@reduxjs/toolkit";
import loginFormReducer from "./loginForm/loginForm";
import loginReducer from "./login/login";
import userDataReducer from "./userData/userData";
import userReducer from "./user/user";
import productsReducer from "./products/products";
import subCategoryReducer from "./subCategory/subCategory";
import cartReducer from "./cart/cart";
import checkoutReducer from "./checkout/checkout"
import orderReducer from "./order/order"
import wishlistReducer from "./wishlist/wishlist";
import bannersReducer from "./banners/banners";


export default configureStore({
     reducer: {
          loginForm: loginFormReducer,
          login_state: loginReducer,
          user_state: userReducer,
          userData: userDataReducer,
          subCategory: subCategoryReducer,
          products: productsReducer,
          cart: cartReducer,
          checkout:checkoutReducer,
          order:orderReducer,
          wishlist: wishlistReducer,
          banners: bannersReducer,
     },
});
