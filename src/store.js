import {configureStore} from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import cartSlice from "./slices/cartSlice";

//index.js에 주로 적용합니다.
export default configureStore({
    reducer: {
        "loginSlice" : loginSlice,
        "cartSlice" : cartSlice
    }
})