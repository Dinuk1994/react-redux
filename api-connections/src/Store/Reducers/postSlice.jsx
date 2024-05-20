// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     data : [],
//     loading : 'Idle',
//     error : null
// }

// export const getPost = createAsyncThunk('getPost', async()=>{
//     try {
//         const rest =await fetch('https://jsonplaceholder.typicode.com/posts')
//         const data = await rest.json()
//         if(data){
//             return data
//         }else{
//             return{err : 'Some error'}
//         }
//     } catch (error) {
//         return{err : 'Some error'}
//     }
// })

// const postSlice = createSlice({
//     name : 'post',
//     initialState,
//     reducers : {},
//     extraReducers : (builder)=>{
//         builder.addCase(getPost.pending,(state,action)=>{
//             state.loading ='pending'
//         })
//         builder.addCase(getPost.fulfilled,(state,action)=>{
//             state.loading = 'completed'
//             state.data = action.payload
//         })
//         builder.addCase(getPost.rejected,(state,action)=>{
//             state.loading = 'rejected'
//             state.error = "Some error"
//         })
//     }
// })

// export default postSlice.reducer
// export const selectAllPost = (store)=>store.post

const initialState = {
    data : [],
    loading : 'Idle',
    error : null
}


export const getPost = createAsyncThunk('getPOst', async()=>{
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = res.json()
        if(data){
            return data
        }else  {
           return {error : "Something wrong"}
        }
    } catch (error) {
        return {error : "Something wrong"}
    }
})


const postSlice = createSlice({
    name : 'post',
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder.addCase(getPost.pending,(state,action)=>{
            state.loading = "Pending"
        })
        builder.addCase(getPost.fulfilled , (state,action)=>{
            state.loading = "Completed"
            state.data = action.payload
        })
        builder.addCase(getPost.rejected,(state,action)=>{
            state.loading = "rejected"
        })
    }
})


export default postSlice.reducer
export const postSelector = (store)=>store.post