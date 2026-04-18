'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Slider2 from '../Slider2';

export default function BestSeller() {
    const [activeTab, setActiveTab] = useState('is_best_seller');

    const tabs = [
        { id: 'is_best_seller', label: 'best seller' },
        { id: 'is_hot', label: 'new in' },
        { id: 'is_featured', label: 'popular' },
    ];

    return (
        <div className='bg-white rounded-2xl mt-5 md:mt-0 px-10 py-8 shadow-sm'>
            <div className='flex justify-between items-center mb-6'>
                <div className='flex uppercase gap-8 text-[16px] md:text-[18px]'>
                    {tabs.map((tab) => (
                        <h2
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`cursor-pointer transition-all duration-300 pb-1 ${activeTab === tab.id
                                ? 'font-bold text-black border-b-2 border-[#01A49E]'
                                : 'font-medium text-gray-400 hover:text-gray-600'
                                } ${tab.id !== 'is_best_seller' ? 'hidden md:block' : ''}`}
                        >
                            {tab.label}
                        </h2>
                    ))}
                </div>
                <Link href="/store">
                    <span className='text-[#666666] text-[13px] cursor-pointer hover:text-[#01A49E] transition-colors'>View All</span>
                </Link>
            </div>
            <div>
                <Slider2 activeCategory={activeTab} />
            </div>
        </div>
    )
}
