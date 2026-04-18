'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Slider2 from '../Slider2';
import { axiosAPIinstance } from '@/utils/helper';

export default function BestLaptops() {
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
                    // Filter for Laptop and Computer related categories
                    const filtered = allCats.filter(cat => 
                        cat.name.toLowerCase().includes('laptop') || 
                        cat.name.toLowerCase().includes('computer') || 
                        cat.name.toLowerCase().includes('pc')
                    );
                    setCategories(filtered);
                    setImageBaseUrl(response.data.data.imageBaseUrl);
                    if (filtered.length > 0) {
                        setActiveCat(filtered[0]._id);
                    }
                }
            } catch (error) {
                console.error("Error fetching laptop categories:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCategories();
    }, []);

    if (loading) {
        return <div className="h-[200px] flex items-center justify-center animate-pulse text-gray-400">Syncing Laptops & Computers...</div>;
    }

    if (categories.length === 0) {
        return (
            <div className='bg-white rounded-2xl px-10 py-8 mt-10 border-2 border-dashed border-gray-100 opacity-60'>
                <h2 className='uppercase text-[18px] font-bold text-gray-400 mb-4 tracking-wider'>Best Laptops & Computers</h2>
                <div className='flex flex-col items-center justify-center py-10 gap-3'>
                    <div className='text-gray-400 italic'>Premium computing hardware coming soon...</div>
                </div>
            </div>
        );
    }

    return (
        <div className='bg-white rounded-2xl px-10 py-8 mt-10 shadow-sm border border-gray-100'>
            <div className='flex justify-between items-center mb-6'>
                <h2 className='uppercase text-[18px] font-bold tracking-tight text-gray-800'>Best Laptops & Computers</h2>
                <Link href="/store">
                    <span className='text-[#666666] text-[13px] cursor-pointer hover:text-[#01A49E] transition-colors font-medium'>Explore All</span>
                </Link>
            </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-6 gap-8'>
                {/* Left Dark Promotion Banner */}
                <div className='relative overflow-hidden mt-5 rounded-2xl hidden md:flex flex-col justify-center gap-6 px-10 py-10 col-span-3 min-h-[250px] bg-[#1a1a1a] group'>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#333_0%,#1a1a1a_100%)]"></div>
                    
                    <div className="relative z-10">
                        <h2 className='text-3xl font-extrabold uppercase leading-tight text-white'>
                            <span className="text-gray-400">MOBOOK 2</span> <br /> 
                            <span className="text-white">SUPERCHARD</span> <br />
                            <span className="text-[#01A49E]">BY M2</span>
                        </h2>
                        <div className='text-gray-400 text-[14px] mt-6 flex flex-col gap-1 font-medium'>
                            <span>Start from <span className="text-[#01A49E] font-bold text-lg">$1,199</span></span>
                        </div>
                    </div>
                    
                    {/* Floating Product Image - representative overlay */}
                    <img src="/images/laptop.png" className="absolute -right-10 -bottom-5 w-[70%] object-contain group-hover:scale-110 transition-transform duration-1000 transform -rotate-6" alt="Premium Laptop" />
                </div>

                {/* Right Category Icons */}
                <div className='col-span-3 flex flex-wrap gap-10 justify-start items-center py-6'>
                    {categories.map((item) => (
                        <div 
                            key={item._id} 
                            onClick={() => setActiveCat(item._id)}
                            className={`flex flex-row items-center gap-5 cursor-pointer group transition-all duration-500 ${activeCat === item._id ? 'scale-105' : ''}`}
                        >
                            <div className={`p-2.5 rounded-2xl transition-all duration-500 shadow-sm ${activeCat === item._id ? 'bg-white ring-2 ring-[#01A49E] shadow-lg shadow-teal-500/10' : 'bg-gray-50 border border-gray-100'}`}>
                                <img 
                                    className="w-[48px] h-[48px] object-contain rounded-lg transition-all duration-300" 
                                    src={imageBaseUrl + item.image} 
                                    alt={item.name} 
                                />
                            </div>
                            <div className="flex flex-col">
                                <h2 className={`text-[15px] font-extrabold capitalize transition-colors tracking-tight ${activeCat === item._id ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-700'}`}>
                                    {item.name}
                                </h2>
                                <span className={`text-[12px] font-bold ${activeCat === item._id ? 'text-[#01A49E]' : 'text-gray-400'}`}>
                                    {item.count || 0} ITEMS IN STOCK
                                </span>
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
