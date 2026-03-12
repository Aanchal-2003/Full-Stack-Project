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

export default function TopCellphones() {
    return (
        <div className='bg-white rounded-2xl px-10 py-8 mt-10'>
            <div className='flex justify-between'>
                <h2 className='uppercase text-[18px] font-bold'>top cellphones & tablets</h2>
                <span className='text-[#666666] text-[13px] cursor-pointer hover:text-[#01A49E]'>View All</span>
            </div>
            <div className='grid grid-cols-6   gap-6'>
                <div className='bg-[url(/images/bg.png)]   mt-5 rounded-2xl hidden md:flex flex-col gap-6 px-4 py-2 col-span-3'>
                    <h2 className='text-2xl uppercase mt-2'>redmi note <br /> 12 Pro+ 5g</h2>
                    <span className='text-[#666666] text-[12px]'>Rise to the challenge</span>
                    <button className='bg-[#222222] uppercase text-[#FFFFFF] text-[12px] px-2 py-2 rounded-2xl w-[120px] '>shop now</button>
                </div>
                <div className='col-span-3 hidden md:flex mt-10 flex-wrap  justify-between'>
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
