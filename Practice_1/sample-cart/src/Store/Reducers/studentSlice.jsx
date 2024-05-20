import { createSlice } from "@reduxjs/toolkit";

const initialState =[
    {
        id : 1,
        name : "Dinuk",
        telePhone : "0765429917",
        address : "Kandy"
    },
    {
        id : 2,
        name : "Yasura",
        telePhone : "0812237451",
        address : "Kandy"
    },
    {
        id : 3,
        name : "Kasundara",
        telePhone : "0784365545",
        address : "Galle"
    },
    {
        id : 4,
        name : "Janaka",
        telePhone : "0784365547",
        address : "Polgolla"
    },
    {
        id : 5,
        name : "Dilshan",
        telePhone : "0716521307",
        address : "Canada"
    }
]


const studentSlice = createSlice({
    name : 'student',
    initialState,
    reducers : {
        addStudent : {
            reducer : (state , action)=>{
                state.push(action.payload)
            },
            prepare : (id, name , telePhone , address)=>{
                return {
                    payload : {
                        id,
                        name,
                        telePhone,
                        address
                    }
                }
            }
            
        }
        
    }
});

export const {addStudent} = studentSlice.actions
export default studentSlice.reducer
export const studentSliceSelector = (store)=>store.studentSlice