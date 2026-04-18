import React from 'react'
import Link from 'next/link'

const feature = [
    {
        name: 'PC',
        image: '/images/laptop.png'
    },
    {
        name: 'computer',
        image: '/images/laptop.png'
    }, {
        name: 'laptop',
        image: '/images/laptop.png'
    }, {
        name: 'phone',
        image: '/images/laptop.png'
    }
]
export default function Audio() {
    return (
        <div className='grid md:grid-cols-6 gap-6 mt-10'>
            <div className='col-span-2 bg-white rounded-2xl px-5 py-4  '>
                <div className='flex justify-between'>
                    <h2 className='text-[18px] font-bold'>Audios & Cameras</h2>
                    <Link href="/store">
                        <span className='text-[#666666] text-[13px] hover:text-[#01A49E] cursor-pointer'>View All</span>
                    </Link>
                </div>
                <div className='bg-[url(/images/speaker.png)] mt-5'>
                    <h2 className='text-[14px] font-bold text-white px-8 py-15 '>Best <br /> Speaker <br /> 2023</h2>
                </div>
                <div className='flex flex-wrap gap-10 items-center  justify-evenly mt-8'>
                    {
                        feature?.map((item, index) => {
                            return (
                                <div key={index} className='flex flex-col items-center gap-2'>
                                    <img className='rounded-full w-[120px] h-[120px]' src={item.image} alt="" />
                                    <h2 className='text-[14px] font-bold'>{item.name}</h2>
                                    <span className='text-[#666666] text-[12px]'>12 items</span>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div className='col-span-2 bg-white rounded-2xl px-5 py-4  '>
                <div className='flex justify-between'>
                    <h2 className='text-[18px] font-bold'>Audios & Cameras</h2>
                    <Link href="/store">
                        <span className='text-[#666666] text-[13px] hover:text-[#01A49E] cursor-pointer'>View All</span>
                    </Link>
                </div>
                <div className='bg-[url(/images/speaker.png)] mt-5'>
                    <h2 className='text-[14px] font-bold text-white px-8 py-15 '>Best <br /> Speaker <br /> 2023</h2>
                </div>
                <div className='flex flex-wrap gap-10 items-center  justify-evenly mt-8'>
                    {
                        feature?.map((item,index) => {
                            return (
                                <div
                                    key={index}
                                    className='flex flex-col items-center gap-2'>
                                    <img className='rounded-full w-[120px] h-[120px]' src={item.image} alt="" />
                                    <h2 className='text-[14px] font-bold'>{item.name}</h2>
                                    <span className='text-[#666666] text-[12px]'>12 items</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='col-span-2 bg-white rounded-2xl px-5 py-4  '>
                <div className='flex justify-between'>
                    <h2 className='text-[18px] font-bold'>Audios & Cameras</h2>
                    <Link href="/store">
                        <span className='text-[#666666] text-[13px] hover:text-[#01A49E] cursor-pointer'>View All</span>
                    </Link>
                </div>
                <div className='bg-[url(/images/speaker.png)] mt-5'>
                    <h2 className='text-[14px] font-bold text-white px-8 py-15 '>Best <br /> Speaker <br /> 2023</h2>
                </div>
                <div className='flex flex-wrap gap-10 items-center  justify-evenly mt-8'>
                    {
                        feature?.map((item, index) => {
                            return (
                                <div key={index} className='flex flex-col items-center gap-2'>
                                    <img className='rounded-full w-[120px] h-[120px]' src={item.image} alt="" />
                                    <h2 className='text-[14px] font-bold'>{item.name}</h2>
                                    <span className='text-[#666666] text-[12px]'>12 items</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
