import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
        original_total: 0,
        final_total: 0,
    },
    reducers: {
        addToCart: (current_state, { payload }) => {
            current_state.data.push({ ...payload, qty: 1 });
            current_state.original_total += Number(payload.original_price);
            current_state.final_total += Number(payload.final_price);
            localStorage.setItem("cart", JSON.stringify(current_state));
        },
        // changeQuantity: (current_state, { payload }) => {
        //     const findCartItem = current_state.data.find((item) => item.id == payload.id);
        //     console.log(findCartItem)

        //     if (payload.flag == 1) {
        //         findCartItem.qty++
        //         current_state.original_total += Number(findCartItem.original_price);
        //         current_state.final_total += Number(findCartItem.final_price);
        //     } else {
        //         findCartItem.qty--
        //         current_state.original_total -= Number(findCartItem.original_price);
        //         current_state.final_total -= Number(findCartItem.final_price);
        //     }
        //     localStorage.setItem("cart", JSON.stringify(current_state));

        // },
        changeQuantity: (current_state, { payload }) => {
            const findCartItem = current_state.data.find(
                (item) => item.id == payload.id
            );

            if (!findCartItem) return;

            if (payload.flag == 1) {
                findCartItem.qty++;
            } else {

                // ✅ Prevent going below 1
                if (findCartItem.qty > 1) {
                    findCartItem.qty--;
                }
            }

            // 🔥 Recalculate totals
            current_state.original_total = current_state.data.reduce(
                (acc, item) => acc + Number(item.original_price) * item.qty,
                0
            );

            current_state.final_total = current_state.data.reduce(
                (acc, item) => acc + Number(item.final_price) * item.qty,
                0
            );

            localStorage.setItem("cart", JSON.stringify(current_state));
        },
        removeToCart: (current_state) => {
            localStorage.removeItem("cart"),
                current_state.final_total = 0,
                current_state.original_total = 0,
                current_state.data = []
        },
        lsToCart: (current_state) => {
            const lsCart = JSON.parse(localStorage.getItem("cart"));
            if (lsCart) {
                current_state.data = lsCart.data;
                current_state.final_total = lsCart.final_total;
                current_state.original_total = lsCart.original_total;
            }
        },
        removeSingleItem: (current_state, { payload }) => {

            // 🔥 Remove selected item
            current_state.data = current_state.data.filter(
                (item) => item.id !== payload.id
            );

            // 🔥 Recalculate totals
            current_state.original_total = current_state.data.reduce(
                (acc, item) => acc + Number(item.original_price) * item.qty,
                0
            );

            current_state.final_total = current_state.data.reduce(
                (acc, item) => acc + Number(item.final_price) * item.qty,
                0
            );

            localStorage.setItem("cart", JSON.stringify(current_state));
        },

    }
})

export const { addToCart, removeToCart, changeQuantity, lsToCart, removeSingleItem } = cartSlice.actions

export default cartSlice.reducer