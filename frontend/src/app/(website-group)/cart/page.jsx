'use client'

import { formatIndianCurrency } from '@/utils/helper';
import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeSingleItem } from '@/redux/reducers/cartReducer';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { changeQuantity } from '@/redux/reducers/cartReducer';
import Link from 'next/link';


// BREADCRUMB
const Breadcrumb = () => {
  return (
    <section>
      <div className='max-w-7xl mx-auto px-4'>
        <div className=' px-6 py-4 rounded bg-white'>
          <h2 className='text-[#999999] font-bold text-[14px]'>
            Home / Shop / <span className='text-[14px] font-bold text-black'>Cart</span>
          </h2>
        </div>
      </div>
    </section>
  )
};

//CART ITEM
const CartItem = ({
  title,
  price,
  image,
  qty,
  id
}) => {
  const dispatch = useDispatch();

  function removeHandler() {
    dispatch(removeSingleItem({ id }))
  }
  function quantityHandler(flag) {
    dispatch(changeQuantity({ id, flag }));
  }

  return (
    <div className='bg-gray-50 rounded-xl p-6 flex gap-6'>
      {/* Image */}
      <div className='relative w-32 h-32 bg-white rounded-lg p-2'>

        <img
          src={image}
          alt={title}
          className='object-contain w-30 h-28' />

      </div>

      {/* Details */}
      <div className='flex-1 space-y-3'>
        <h4 className='font-medium'>{title}</h4>
        <p className='text-black-600 font-semibold'>{formatIndianCurrency(price * qty)}</p>


        {/* 🔥 Quantity Buttons */}
        <div className='flex items-center gap-3 border rounded-md w-max px-3 py-1'>

          {/* MINUS BUTTON */}
          <button
            onClick={() => quantityHandler(0)}
            className='cursor-pointer px-2'
          >
            -
          </button>

          <span>{qty}</span>

          {/* PLUS BUTTON */}
          <button
            onClick={() => quantityHandler(1)}
            className='cursor-pointer px-2'
          >
            +
          </button>

        </div>

        {/* 🔥 REMOVE BUTTON */}
        <button
          onClick={removeHandler}
          className="cursor-pointer text-red-500 hover:scale-120"
        >
          <RiDeleteBin5Fill />
        </button>

      </div>

      {/* Color */}
      <div className='flex flex-col gap-2'>
        <span className='w-4 h-4 rounded-full bg-gray-300'></span>
        <span className='w-4 h-4 rounded-full bg-pink-200'></span>
      </div>
    </div>
  )
}


export default function Cartpage() {
  const cart = useSelector((store) => store.cart);

  return (
    <>
      <Breadcrumb />

      <section className='bg-white py-10'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>

            {/* Cart Items */}
            <div className='lg:col-span-8 space-y-6'>
              {
                cart.data.length > 0
                  ?
                  cart.data.map((item) => {
                    return (
                      <CartItem
                        key={item.id}
                        id={item.id}
                        badge="SAVE ₹199.00"
                        title={item.name}
                        price={item.final_price}
                        image={item.image}
                        qty={item.qty}
                      />
                    )
                  })
                  :
                  <h2 className='text-3xl text-black font-medium'>Empty Cart</h2>
              }
            </div>

            {/* Order Summery */}
            <div className='lg:col-span-4'>
              <div className='border border-green-400 rounded-xl p-6 sticky top-24'>
                <h3 className='font-semibold mb-6'>Order Summery</h3>

                <div className='space-y-4 text-sm'>
                  <div className='flex justify-between'>
                    <span>Original Total:</span>
                    <span>{formatIndianCurrency(cart.original_total)}</span>
                  </div>

                  <div className='flex justify-between'>
                    <span>Saving:</span>
                    <span>{formatIndianCurrency((cart.original_total) - (cart.final_total))}</span>
                  </div>

                  <hr />

                  <div className='flex justify-between font-semibold'>
                    <span>ORDER TOTAL:</span>
                    <span>{formatIndianCurrency(cart.final_total)}</span>
                  </div>

                  <Link href="/checkout">
                    <button className="mt-6 w-full bg-teal-600 text-white py-3 rounded-lg font-medium">
                      CHECKOUT
                    </button>
                  </Link>

                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}
