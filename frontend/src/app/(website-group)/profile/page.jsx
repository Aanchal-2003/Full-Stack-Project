import React from 'react';
import { FaArrowRight } from "react-icons/fa";

export default function page() {
    return (
        <div className='w-full mx-auto bg-gray-200  px-6 py-4'>
            <div className='max-w-7xl mx-auto bg-gray-200'>

                {/* Home / Shop / profile */}

                <div className=' px-6 py-4 rounded bg-white'>
                    <h2 className='text-[#999999] font-bold text-[14px]'>
                        Home / Shop / <span className='text-[14px] font-bold text-black'>profile</span>
                    </h2>
                </div>

                <div className='grid grid-cols-5 gap-5  mt-5 px-6 py-4 rounded bg-white'>
                    <div className='col-span-1 hidden md:flex flex-col gap-5 rounded-2xl px-6 py-4 bg-gray-100 '>
                        <img className='rounded-2xl' src="/images/profile.jpg" alt="" />
                        <h2 className='text-[20px] font-bold'>Mark Cole</h2>
                        <span className='text-[#666666] text-[14px]'>swoo@gmail.com</span>
                        <div className='bg-[#01A49E] text-white flex justify-between items-center rounded-xl px-4 py-2'>
                            <h2 className='text-[14px] '>Account info</h2>
                            <FaArrowRight />
                        </div>
                        <div className='bg-white flex justify-between items-center rounded-xl px-4 py-2'>
                            <h2 className='text-[14px] '>My Order</h2>
                            <FaArrowRight />
                        </div>
                        <div className='bg-white flex justify-between items-center rounded-xl px-4 py-2'>
                            <h2 className='text-[14px] '>My Address</h2>
                            <FaArrowRight />
                        </div>
                        <div className='bg-white flex justify-between items-center rounded-xl px-4 py-2'>
                            <h2 className='text-[14px] '>Change password</h2>
                            <FaArrowRight />
                        </div>
                    </div>


                    <div className='col-span-4 flex flex-col gap-5'>
                        <h2 className='text-[24px] font-bold'>Account info</h2>
                        <div className='grid grid-cols-2 gap-5'>
                            <div className='flex flex-col gap-3 text-[14px]'>
                                <label htmlFor="">First Name</label>
                                <input className='border outline-0 border-gray-300 rounded py-2 px-4' type="text" name="" id="" />
                            </div>
                            <div className='flex flex-col gap-3 text-[14px]'>
                                <label htmlFor="">Last Name</label>
                                <input className='border outline-0 border-gray-300 rounded py-2 px-4' type="text" name="" id="" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 text-[14px]'>
                            <label htmlFor="">Email Address</label>
                            <input className='border outline-0 border-gray-300 rounded py-2 px-4' type="email" name="" id="" placeholder='example@gmail.com' />
                        </div>
                        <div className='flex flex-col gap-3 text-[14px]'>
                            <label htmlFor="">Phone Number <span className='text-[#666666]'>(Optional)</span></label>
                            <input className='border outline-0 border-gray-300 rounded py-2 px-4' type="number" name="" id="" placeholder='+1 0231 4554 452' />
                        </div>
                        <button className='uppercase bg-[#01A49E] text-white rounded-xl py-2 '>save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
