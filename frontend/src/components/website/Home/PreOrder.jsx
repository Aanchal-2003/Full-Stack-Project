import React from 'react'

export default function PreOrder() {
    return (
        <div className='bg-[#01A49E] rounded-2xl hidden md:flex justify-evenly  gap-6 items-center '>
            <div className=''>
                <h2 className='text-[#FFFFFF] text-2xl uppercase font-semibold '>pre order</h2>
                <p className='text-[#999999] text-[10px] uppercase'>be the first to own</p>
                <span className='text-[#FFFFFF] text-[14px] capitalize'>from $399</span>
            </div>
            <img src="/images/watch.png" alt="" />
            <div className='text-[#FFFFFF] '>
                <p className='text-[12px]'>Opplo Watch Sport</p>
                <span className=' text-[12px]'>Series 8</span>
                <h2 className='text-[30px]'> A healthy leap ahead</h2>
            </div>
            <button className='bg-white rounded-full p-4'>Discover Now</button>
        </div>
    )
}
