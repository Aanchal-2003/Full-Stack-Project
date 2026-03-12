import React from 'react'

export default function HeroSection() {
  return (
    <div className="w-full h-100 col-span-4 space-y-6  rounded-2xl bg-[url('/images/2.png')] bg-cover bg-center px-20 py-10">
      <button className='bg-[#01A49E] cursor-pointer hover:scale-105 transition-all duration-75 rounded-4xl px-6 py-2 text-white font-medium'>New Arrival</button>
      <h2 className='text-7xl font-bold text-white'>Don’t miss amazing <br /> grocery deals</h2>
      <p className='text-3xl text-white '>Sign up for the daily newsletter</p>
      <button className='bg-[#01A49E] cursor-pointer hover:scale-105 transition-all duration-75 rounded-4xl px-6 py-3 text-white font-medium'>Shop Now</button>
    </div >
  )
}
