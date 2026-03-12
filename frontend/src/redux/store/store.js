import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../reducers/cartReducer';
import userSlice  from '../reducers/userReducer';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        user: userSlice
    },
})

export default store;