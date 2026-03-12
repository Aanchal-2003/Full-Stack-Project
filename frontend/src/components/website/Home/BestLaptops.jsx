import React from 'react';
import Slider2 from '../Slider2';

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
    }, {
        name: 'mobile',
        image: '/images/laptop.png'
    }, {
        name: 'mouse',
        image: '/images/laptop.png'
    },
]

export default function BestLaptops() {
    return (
        <div className='bg-white rounded-2xl px-10 py-8 mt-10'>
            <div className='flex justify-between'>
                <h2 className='uppercase text-[18px] font-bold'>Best Laptops & Computers</h2>
                <span className='text-[#666666] text-[13px] cursor-pointer hover:text-[#01A49E]'>View All</span>
            </div>
            <div className='grid grid-cols-6 gap-6'>
                <div className='bg-[url(/images/laptop.png)]  mt-5 rounded-2xl hidden md:flex flex-col gap-6 px-4 py-2 col-span-3'>
                    <h2 className='text-2xl text-white uppercase mt-2'><span className='font-bold'>Mobok 2 <br /> superchard </span><br /> by M2</h2>
                    <span className='text-[#666666] text-[12px] mb-4'>Start from <span className='text-[#01A49E]' >$1,199</span></span>
                </div>
                <div className='col-span-3 flex mt-10 flex-wrap  justify-between'>
                    {
                        feature?.map((item, index) => {
                            return (
                                <div key={index} className='flex gap-6'>
                                    <div>
                                        <h2 className='text-[14px]'>{item.name}</h2>
                                        <span className='text-[#666666] text-[12px]'>74 Items</span>
                                    </div>
                                    <img className='w-[50px] h-[50px]' src={item.image} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between mt-10'>
                <Slider2 />
            </div>
        </div>
    )
}
