'use client'

import React from 'react';
import Link from 'next/link';
import Slider2 from '../Slider2';

export default function RecentlyViewed() {
    return (
        <div className='bg-white rounded-2xl mt-10 px-10 py-8 shadow-sm border border-gray-50'>
            <div className='flex items-center gap-6 mb-6'>
                <h2 className='font-bold text-[18px] uppercase tracking-tight text-gray-800'>your recently viewed</h2>
                <div className='h-[1px] flex-grow bg-gray-100'></div>
                <Link href="/store">
                    <span className='text-[#666666] text-[13px] cursor-pointer hover:text-[#01A49E] transition-colors font-medium'>View All</span>
                </Link>
            </div>
            <Slider2 activeCategory="is_featured" />
        </div>
    )
}
