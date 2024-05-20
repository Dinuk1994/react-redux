import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id : 1,
        price : "150000",
        cpu : "i3",
        ram : "8GB",
        hdd : "2TB"
    },
    {
        id : 2,
        price : "190000",
        cpu : "i5",
        ram : "8GB",
        hdd : "2TB"
    },
    {
        id : 3,
        price : "230000",
        cpu : "i5",
        ram : "16GB",
        hdd : "3TB"
    },
    {
        id : 4,
        price : "290000",
        cpu : "i7",
        ram : "8GB",
        hdd : "1TB"
    },
]

const laptopSlice = createSlice({
    name : 'laptop',
    initialState,
    reducers : {
        addLaptop : {
            reducer : (state , action)=>{
                state.push(action.payload)
            },
            prepare : {

            }
        }
    }   

})

export const laptopSliceSelector = (store)=>store.laptopSlice
export const {addLaptop} = laptopSlice.actions
export default laptopSlice.reducer