import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    number : 0
}

const number2Slice = createSlice({
    name : 'number',
    initialState,
    reducers : {
        increment2 : (state , action) =>{
            state.number += action.payload
        },
        decrement2 : (state ,action) =>{
            state.number -= action.payload
        }
    }
});
export const number2SliceSelector = (store) => store.number2Slice

export const {increment2 , decrement2} = number2Slice.actions

export default number2Slice.reducer