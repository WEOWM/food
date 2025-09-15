import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../store/products/produtsSlice"
import cartReducer from "../store/products/cartSlice"

export const store = configureStore({
    reducer: {
        product: productReducer,
        cart : cartReducer
    }
})