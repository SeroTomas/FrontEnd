import { createSlice } from '@reduxjs/toolkit'
export const socialPostSlice = createSlice({
   name: "socialPost",
   initialState: {
      posts: []
   },
   reducers: {
      getPosts: (state, action) => {
         state.posts = action.payload
      }
   }
})

export const {getPosts} = socialPostSlice.actions

export default socialPostSlice.reducer
