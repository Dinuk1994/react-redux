import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id : 1,
        categories : {
            xxl : "2500",
            xl : "2100",
            md : "1900",
            sm : "1500",
            xs : "1000"
        },
        brand : "Edibawa",
    }
] 

const clothSlice = createSlice({
    name : 'clothes',
    initialState,
    reducers : {
        addCloths : {
            reducer : (state , action)=>{
                state.push(action.payload)
            },
            prepare : (xxl,xl,md,sm,xs,brand)=>{
                return {
                    payload : {
                        id : nanoid(),
                        categories : {
                            xxl,
                            xl,
                            md,
                            sm,
                            xs
                        },
                        brand
                    }
                }
            }

        }
    }
})

export const {addCloths} = clothSlice.actions
export const clothSliceSelector = (store) => store.clothSlice
export default clothSlice.reducer
