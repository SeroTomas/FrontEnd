import { configureStore } from '@reduxjs/toolkit'
import socialPost from './slices/socialPost'
import user from './slices/user'

const store = configureStore({
   reducer: {
      socialPost,
      user
   }
})
// export default the store 
export default store

