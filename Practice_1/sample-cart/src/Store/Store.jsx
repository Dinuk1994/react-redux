import { configureStore } from "@reduxjs/toolkit";
import studentSliceReducer from "./Reducers/studentSlice";

const store = configureStore({
    reducer : {
        studentSlice : studentSliceReducer
    }
})

export default store;