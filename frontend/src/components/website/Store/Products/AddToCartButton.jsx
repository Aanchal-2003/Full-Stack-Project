'use client'

import { addToCart, changeQuantity } from '@/redux/reducers/cartReducer';
import { axiosAPIinstance } from '@/utils/helper';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function AddToCartButton(props) {

    const { data: cart_data } = useSelector((store) => store.cart);
    const dispatched = useDispatch();

    async function addToCartHandler() {
        if (props.user != null) {
            const cart = await axiosAPIinstance.post("cart/add-to-cart", {
                productId: props.id,
                userId: props.user._id,
                flag: 1
            })
        }
        dispatched(addToCart({ ...props, user: null }))
    }

    const findItem = cart_data?.find((cartItem) => cartItem.id == props.id);

    // function quantityHandler(id, flag) {
    //     dispatched(changeQuantity({ id, flag }))
    // }
    function quantityHandler(id, flag) {

        // 🔥 Get current item
        const item = cart_data?.find((cartItem) => cartItem.id == id);

        if (!item) return;

        // ✅ If minus button clicked
        if (flag == 2) {

            // 🔥 If quantity is 1 → remove item completely
            if (item.qty === 1) {
                dispatched(changeQuantity({ id, flag: 0 })) // decrease
            }
            // 🔥 If quantity > 1 → decrease normally
            else if (item.qty > 1) {
                dispatched(changeQuantity({ id, flag: 0 }))
            }

        } else {
            // ✅ Plus button
            dispatched(changeQuantity({ id, flag: 1 }))
        }
    }


    return (
        < div className="p-3 bg-white" >
            {
                findItem != null ? (
                    <div className='flex gap-6'>
                        <button
                            onClick={() => quantityHandler(props.id, 2)}
                            className="w-20  py-1 rounded-lg bg-teal-500 text-white hover:bg-teal-700 text-sm font-medium transition"
                        >
                            -
                        </button>
                        <h3>{findItem.qty}</h3>
                        <button
                            onClick={() => quantityHandler(props.id, 1)}
                            className="w-20 py-1 rounded-lg bg-teal-500 text-white hover:bg-teal-700 text-sm font-medium transition"
                        >
                            +
                        </button>

                    </div>
                ) : (
                    <button
                        onClick={addToCartHandler}
                        className="w-full py-2 rounded-lg bg-teal-500 text-white hover:bg-teal-700 text-sm font-medium transition"
                    >
                        Add to Cart
                    </button>
                )
            }
        </div >
    )
}
