import { createSlice } from "@reduxjs/toolkit";

const initialState = () =>[]

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addToCart:{
            reducer : (state , action)=>{
                const id = action.payload.id
                const tempObj = state.find(elm => elm.id ===id)
                if(tempObj){
                    tempObj.count+=1
                }else{
                    state.push(action.payload)
                }   
            },
            prepare : (id,price,ram,cpu,hdd)=>({
              payload : {
                id,
                price,
                ram,
                cpu,
                hdd,
                count : 1
              }
            })
        }
    }
})

export const cartSliceSelector = (store)=>store.cartSlice
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
