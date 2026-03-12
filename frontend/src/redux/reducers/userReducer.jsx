import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
        isLogin: false
    },
    reducers: {
        logout: (current_state) => {
            current_state.data = null;
            current_state.isLogin = false;
        }
    },
})

export const { logout } = userSlice.actions

export default userSlice.reducer