import { createSlice } from '@reduxjs/toolkit'
export const postslice= createSlice({
    name:"publicaciones",
    initialState:{
         post:[]
    },
    reducers:{
         addPost:(state)=>{
            state.post = data
         }
       }
    })
export const {addPost} = postslice.actions