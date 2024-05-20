import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "./Reducers/CartSlice";
import LaptopSliceReducer from "./Reducers/LaptopSlice";

const store = configureStore({
    reducer : {
        cartSlice : CartSliceReducer,
        laptopSlice : LaptopSliceReducer
    }
})

export default store;