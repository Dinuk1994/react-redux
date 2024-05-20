import { configureStore } from "@reduxjs/toolkit";
import numberSliceReducer from "./reducers/numberSlice";
import number2SliceReducer from "./reducers/number2Slice";
import laptopSliceReducer from "./reducers/laptopSlice";
import clothSliceReducer from "./reducers/clothSlice";


const store = configureStore({
    reducer : {
        numberSlice : numberSliceReducer,
        number2Slice : number2SliceReducer,
        laptopSlice : laptopSliceReducer,
        clothSlice : clothSliceReducer     
    }
})

export default store;