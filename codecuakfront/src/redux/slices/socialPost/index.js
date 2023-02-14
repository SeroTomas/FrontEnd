import { createSlice } from '@reduxjs/toolkit'
export const socialPostSlice = createSlice({
   name: "socialPost",
   initialState: {
      post: []
   },
   reducers: {
      addPost: (state, { type, payload }) => {
         state.post = [...state.post, payload]
      }
   }
})

export const { addPost } = socialPostSlice.actions

export default socialPostSlice.reducer