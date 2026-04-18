'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Slider2 from '../Slider2';
import { axiosAPIinstance } from '@/utils/helper';

export default function TopCellphones() {
    const [categories, setCategories] = useState([]);
    const [activeCat, setActiveCat] = useState(null);
    const [imageBaseUrl, setImageBaseUrl] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axiosAPIinstance.get('/category?status=true');
                if (response.data.success) {
                    const allCats = response.data.data.category || [];
                    // Filter for specific categories (Mobile Phone, Tablet)
                    const filtered = allCats.filter(cat => 
                        cat.name.toLowerCase().includes('phone') || 
                        cat.name.toLowerCase().includes('mobile') || 
                        cat.name.toLowerCase().includes('tablet')
                    );
                    setCategories(filtered);
                    setImageBaseUrl(response.data.data.imageBaseUrl);
                    if (filtered.length > 0) {
                        setActiveCat(filtered[0]._id);
                    }
                }
            } catch (error) {
                console.error("Error fetching categories:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);

    if (loading) {
        return <div className="h-[200px] flex items-center justify-center animate-pulse text-gray-400">Loading Categories...</div>;
    }

    // Hide entire section ONLY if we have categories but none of them match the filter
    if (categories.length === 0) {
        return (
            <div className='bg-white rounded-2xl px-10 py-8 mt-10 border-2 border-dashed border-gray-100 opacity-60'>
                <h2 className='uppercase text-[18px] font-bold text-gray-400 mb-4 tracking-wider'>top cellphones & tablets</h2>
                <div className='flex flex-col items-center justify-center py-10 gap-3'>
                    <div className='text-gray-400 italic'>New arrivals coming soon to this section...</div>
                    <span className='text-[12px] text-gray-300'>Stay tuned for the latest smartphones and tablets!</span>
                </div>
            </div>
        );
    }

    return (
        <div className='bg-white rounded-2xl px-10 py-8 mt-10 shadow-sm border border-gray-50'>
            <div className='flex justify-between items-center mb-6'>
                <h2 className='uppercase text-[18px] font-bold tracking-tight text-gray-800'>top cellphones & tablets</h2>
                <Link href="/store">
                    <span className='text-[#666666] text-[13px] cursor-pointer hover:text-[#01A49E] transition-colors font-medium'>View All Categories</span>
                </Link>
            </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-6 gap-8'>
                {/* Left Promotion Banner */}
                <div className='relative overflow-hidden mt-5 rounded-2xl hidden md:flex flex-col justify-center gap-6 px-8 py-10 col-span-3 min-h-[250px] group'>
                    {/* Dynamic Background or matching image as in screenshot */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-teal-50 group-hover:scale-105 transition-transform duration-1000"></div>
                    <img src="/images/bg.png" className="absolute right-0 bottom-0 h-full object-contain opacity-80" alt="Special Offer" />
                    
                    <div className="relative z-10">
                        <h2 className='text-3xl font-extrabold uppercase leading-tight text-gray-900'>
                            REDMI NOTE <br /> <span className="text-[#01A49E]">12 PRO+ 5G</span>
                        </h2>
                        <p className='text-gray-600 text-[14px] mt-2 font-medium'>Rise to the challenge of the future</p>
                        <button className='bg-gray-900 hover:bg-[#01A49E] uppercase text-white text-[12px] px-6 py-3 rounded-full mt-6 shadow-lg transition-all duration-300'>
                            Shop Collection
                        </button>
                    </div>
                </div>

                {/* Right Category List */}
                <div className='col-span-3 flex flex-wrap gap-8 justify-start items-center py-4'>
                    {categories.map((item) => (
                        <div 
                            key={item._id} 
                            onClick={() => setActiveCat(item._id)}
                            className={`flex items-center gap-4 cursor-pointer group transition-all duration-300 ${activeCat === item._id ? 'scale-105' : 'hover:scale-102'}`}
                        >
                            <div className={`p-1.5 rounded-xl transition-all duration-300 ${activeCat === item._id ? 'bg-[#01A49E]/10 ring-2 ring-[#01A49E]/20' : 'bg-gray-50'}`}>
                                <img className='w-[45px] h-[45px] object-cover rounded-lg' src={imageBaseUrl + item.image} alt={item.name} />
                            </div>
                            <div className="flex flex-col">
                                <h2 className={`text-[15px] font-bold capitalize transition-colors ${activeCat === item._id ? 'text-[#01A49E]' : 'text-gray-700 group-hover:text-gray-900'}`}>
                                    {item.name}
                                </h2>
                                <span className='text-gray-400 text-[12px] font-medium'>{item.count || 0} Products Found</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Slider Section */}
            <div className='mt-12 pt-8 border-t border-gray-100'>
                <Slider2 activeCategory={activeCat} />
            </div>
        </div>
    );
}
