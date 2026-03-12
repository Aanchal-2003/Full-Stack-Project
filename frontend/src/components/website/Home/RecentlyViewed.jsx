import React from 'react';
import Slider2 from '../Slider2';

export default function RecentlyViewed() {
    return (
        <div className='bg-white rounded-2xl mt-10 px-10 py-8'>
            <div className='flex items-center gap-6'>
                <h2 className='font-bold text-[18px] uppercase'>your recently viewed</h2>
                <span className='text-[#666666] text-[13px]'>View All</span>
            </div>
            <Slider2 />
        </div>
    )
}
