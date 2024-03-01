import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productReducer";
import favouriteReducer from "./favouriteReducer";

export default configureStore({
    reducer:{
        products: productReducer,
        favourites: favouriteReducer
    }
})