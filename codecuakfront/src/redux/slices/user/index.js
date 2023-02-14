import { createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name: "User",
    initialState: {
        user: {}
    },
    reducers: {
        getUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { getUser } = userSlice.actions

export default userSlice.reducer


export const fetchUser = () => {
    return async (dispatch) => {
        try {
            const user = await axios.get('url');
            dispatch(getUser(user.data))
        } catch (error) {
            console.log(error.message)
        }
    }
}