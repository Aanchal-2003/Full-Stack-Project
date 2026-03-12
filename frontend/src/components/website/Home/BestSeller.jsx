import React from 'react';
import Slider2 from '../Slider2';

export default function BestSeller() {
    return (
        <div className='bg-white rounded-2xl mt-5 md:mt-0 px-10 py-8'>
            <div className='flex justify-between'>
                <div className='flex uppercase gap-5 text-[18px]'>
                    <h2 className='font-semibold '>best seller</h2>
                    <span className='hidden md:block'>new in</span>
                    <span className='hidden md:block'>popular</span>
                </div>
                <span className='text-[#666666] text-[13px] cursor-pointer hover:text-[#01A49E]'>View All</span>
            </div>
            <div>
                <Slider2 />
            </div>
        </div>
    )
}
