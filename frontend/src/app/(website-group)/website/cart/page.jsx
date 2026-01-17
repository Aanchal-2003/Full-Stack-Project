import React from 'react'
import { TiTick } from "react-icons/ti";

export default function page() {
  return (
    <div className='w-full mx-auto bg-gray-200  px-6 py-4'>
      <div className='max-w-7xl mx-auto bg-gray-200'>

        {/* Home / Shop / cart */}

        <div className=' px-6 py-4 rounded bg-white'>
          <h2 className='text-[#999999] font-bold text-[14px]'>
            Home / Shop / <span className='text-[14px] font-bold text-black'>Cart</span>
          </h2>
        </div>


        <div className='grid grid-cols-5 mt-5 p-10 bg-white rounded-2xl'>
          <div className='col-span-3 rounded-2xl px-6 py-4 bg-gray-100 flex gap-5'>
            <div className='bg-white px-8 py-1 rounded-2xl '>
              <img src="/images/mobile.png" alt="" />
            </div>
            <div className='flex flex-col justify-evenly'>
              <span className='text-[#666666] text-[13px]'>(152)</span>
              <h2 className='text-[14px] font-bold'>SROK Smart Phone 128GB, Oled Retina</h2>
              <span className='text-[#F1352B] text-[18px] font-semibold'>$579.00</span>
              <div className='flex gap-5 border rounded-xl bg-white py-1 px-4'>
                <button className='cursor-pointer'>-</button>
                <h2>1</h2>
                <button className='cursor-pointer'>+</button>
              </div>
              <div className='bg-green-300 px-4 py-2'>
                <h2 className='text-[#1ABA1A]'>Free Shipping</h2>
              </div>
              <div className='flex gap-4'>
                <TiTick />
                <span className='text-[12px]'>In Stock</span>
              </div>
            </div>
            <div>
              <div className='bg-green-500 rounded-full px-2 w-20 h20'>.</div>
            </div>
          </div>



          <div className='col-span-2'></div>

        </div>

      </div>
    </div>
  )
}
