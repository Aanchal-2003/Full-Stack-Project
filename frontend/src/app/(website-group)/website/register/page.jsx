import React from 'react'
import { GrHide } from "react-icons/gr";

export default function page() {
    return (
        <div className='w-full mx-auto bg-gray-200  px-6 py-4'>
            <div className='max-w-7xl mx-auto bg-gray-200'>
                {/* Home / Shop / Register */}

                <div className=' px-6 py-4 rounded bg-white'>
                    <h2 className='text-[#999999] font-bold text-[14px]'>
                        Home / Shop / <span className='text-[14px] font-bold text-black'>Register</span>
                    </h2>
                </div>

                <div className=' px-6 py-8 rounded bg-white mt-5 grid grid-cols-2 gap-10'>
                    <div className='hidden md:block'>
                        <img src="/images/grp.png" alt="" />
                    </div>
                    <div>
                        <form className='grid grid-col gap-4' action="">
                            <h2 className='text-[#01A49E] text-[28px] font-bold uppercase'>regiester</h2>
                            <span className='text-[#999999] text-[14px] uppercase'>Join to us</span>
                            <label htmlFor="">Name</label>
                            <input className='bg-white border border-gray-200 rounded-xl outline-0 py-2 px-4' type="text" placeholder='Jhon Deo' />
                            <label htmlFor="">Email Address</label>
                            <input className='bg-white border border-gray-200 rounded-xl outline-0 py-2 px-4' type="email" placeholder='Example@gmail.com' />
                            <label htmlFor="">Password</label>
                            <input className='bg-white border border-gray-200 rounded-xl outline-0 py-2 px-4' type="password" />
                            <span className='text-[#999999] text-[13px] underline'>Forget Password ?</span>
                            <GrHide />
                            <label htmlFor="">Confirm Password</label>
                            <input className='bg-white border border-gray-200 rounded-xl outline-0 py-2 px-4' type="password" />
                            <button className='uppercase bg-[#01A49E] text-white rounded py-2'>Register</button>
                            <p className='text-[13px] text-[#999999] uppercase'>already user ? <span className='text-[#1ABA1A] '> Login</span></p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
