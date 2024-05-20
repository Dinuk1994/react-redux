import CartSliceReducer from "./reducers/CartSlice";
import { configureStore } from "@reduxjs/toolkit";
import LaptopSliceReducer from "./reducers/LaptopSlice";

const store = configureStore({
    reducer : {
        cart : CartSliceReducer,
        laptop : LaptopSliceReducer
    }
})

export default store;