import { configureStore } from '@reduxjs/toolkit'
const store= configureStore({
    reducer: {
       publicaciones: postslice.reducer
    }
 })
 // export default the store 
export default store

