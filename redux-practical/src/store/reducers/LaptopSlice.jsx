import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        price: '150000',
        cpu: 'i3',
        ram: '8GB'
    },
    {
        id: 2,
        price: '240000',
        cpu: 'i5',
        ram: '8GB'
    },
    {
        id: 3,
        price: '260000',
        cpu: 'i5',
        ram: '16GB'
    },
    {
        id: 4,
        price: '350000',
        cpu: 'i7',
        ram: '16GB'
    },
]

const laptopSlice = createSlice({
    name: 'laptop',
    initialState,
    reducers: {
        addLapTop: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const selectLaptop = (store) => store.laptop
export const { addLapTop } = laptopSlice.reducer
export default laptopSlice.reducer