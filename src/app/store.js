import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice"
import bannerReducer from "../features/banners/bannerSlice"

const store = configureStore ({
    reducer: {
        productsR: productReducer,
        bannersR: bannerReducer,
    }
})

export default store;