'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { axiosAPIinstance } from '@/utils/helper';

const stripHtml = (html) => {
    if (!html) return '';
    return html.replace(/<[^>]*>?/gm, '');
};

export default function Deals() {
    const [dealProduct, setDealProduct] = useState(null);
    const [sideDeals, setSideDeals] = useState([]);
    const [imageBaseUrl, setImageBaseUrl] = useState('');
    const [timeLeft, setTimeLeft] = useState({ d: 162, h: 9, m: 2, s: 4 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDeal = async () => {
            try {
                const response = await axiosAPIinstance.get('/product?limit=25');
                if (response.data.success) {
                    const products = response.data.data.product || [];
                    
                    // Sort all products by discount percentage to find top deals
                    const sortedProducts = [...products].sort((a, b) => 
                        (b.discount_percentage || 0) - (a.discount_percentage || 0)
                    );

                    // Top product is the spotlight deal
                    if (sortedProducts.length > 0) {
                        setDealProduct(sortedProducts[0]);
                        // Next 3 are the side banners
                        setSideDeals(sortedProducts.slice(1, 4));
                    }
                    
                    setImageBaseUrl(response.data.data.imageBaseUrl);
                }
            } catch (error) {
                console.error("Error fetching deals:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchDeal();

        // Live Countdown Timer
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.s > 0) return { ...prev, s: prev.s - 1 };
                if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
                if (prev.h > 0) return { ...prev, h: prev.h - 1, m: 59, s: 59 };
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (loading) return (
        <div className="h-[500px] flex items-center justify-center bg-white rounded-3xl mt-6 border border-gray-100 shadow-sm animate-pulse">
            <div className="text-center">
                <div className="w-12 h-12 border-4 border-[#01A49E] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Syncing Hot Deals...</p>
            </div>
        </div>
    );

    if (!dealProduct) return null;

    const savings = (dealProduct.original_price || 0) - (dealProduct.final_price || 0);

    return (
        <div className='grid lg:grid-cols-6 gap-8 mt-6 items-stretch'>
            {/* Main Deal Column (Left) */}
            <div className='lg:col-span-4 flex flex-col h-full'>
                <div className='w-full flex justify-between uppercase items-center bg-[#01A49E] py-5 px-10 rounded-t-[2.5rem] shadow-xl relative z-10'>
                    <h2 className='text-white font-black text-[20px] tracking-[0.15em]'>deals of the day</h2>
                    <Link href="/store">
                        <span className='text-white text-[12px] font-black cursor-pointer hover:scale-110 transition-transform bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm'>VIEW ALL</span>
                    </Link>
                </div>

                <div className='md:flex px-10 bg-white rounded-b-[2.5rem] py-8 gap-10 border border-t-0 border-gray-100 shadow-2xl flex-1'>
                    {/* Left: Thumbnails */}
                    <div className="hidden md:flex flex-col gap-5">
                        {[dealProduct.thumbnail, ...(dealProduct.other_images || [])].slice(0, 4).map((img, i) => (
                            <div
                                key={i}
                                className={`w-20 h-20 border-2 rounded-3xl flex items-center justify-center p-2 transition-all duration-500 hover:border-[#01A49E] cursor-pointer group shadow-sm ${i === 0 ? 'border-[#01A49E] bg-teal-50/50' : 'border-gray-50'}`}
                            >
                                <img
                                    src={`${imageBaseUrl}main/${img}`}
                                    alt="thumbnail"
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Center: Main Image */}
                        <Link href={`/product/${dealProduct._id}`} className="relative flex-1 flex items-center justify-center group h-[320px] cursor-pointer">
                            <div className="absolute top-0 left-0 bg-yellow-400 text-black text-[11px] font-black px-4 py-1.5 rounded-xl z-10 shadow-lg transform -rotate-6 group-hover:rotate-0 transition-all duration-500 border-2 border-white">
                                SAVE ₹{savings.toLocaleString()}
                            </div>

                            <img
                                src={`${imageBaseUrl}main/${dealProduct.thumbnail}`}
                                alt={dealProduct.name}
                                className="max-h-[300px] object-contain transition-all duration-1000 group-hover:scale-105 drop-shadow-[0_15px_40px_rgba(0,0,0,0.12)]" 
                            />
                        </Link>

                    {/* Right: Details */}
                    <div className='flex flex-col gap-4 flex-1 justify-center'>
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex text-yellow-400 text-[10px]">★★★★★</div>
                                <span className="text-[9px] font-black text-gray-400 tracking-widest uppercase">Verified Deal</span>
                            </div>

                            <Link href={`/product/${dealProduct._id}`}>
                                <h4 className="font-black text-[20px] leading-[1.2] text-gray-900 mb-2.5 tracking-tight hover:text-[#01A49E] transition-colors cursor-pointer">
                                    {dealProduct.name}
                                </h4>
                            </Link>

                            <div className="flex items-end gap-2.5 mb-3">
                                <span className="text-[#01A49E] text-2xl font-black tracking-tighter">
                                    ₹{dealProduct.final_price?.toLocaleString()}
                                </span>
                                <span className="line-through text-gray-400 font-bold text-base mb-0.5 opacity-60">
                                    ₹{dealProduct.original_price?.toLocaleString()}
                                </span>
                            </div>
                            
                            <div className="text-[12px] text-gray-500 font-medium leading-relaxed italic border-l-2 border-teal-100 pl-3 my-3 line-clamp-1">
                                "{stripHtml(dealProduct.description).substring(0, 100)}..."
                            </div>
                        </div>

                        {/* Countdown */}
                        <div className="bg-gray-50/80 p-4 rounded-[1.5rem] border border-gray-100">
                            <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3 text-center">promotion expires in:</p>
                            <div className="flex justify-center gap-3">
                                {[
                                    {v: timeLeft.d, l: 'Days'},
                                    {v: timeLeft.h, l: 'Hrs'},
                                    {v: timeLeft.m, l: 'Mins'},
                                    {v: timeLeft.s, l: 'Secs'}
                                ].map((unit, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="bg-[#1a1a1a] text-white rounded-xl w-11 h-11 flex items-center justify-center text-lg font-black shadow-lg">
                                            {unit.v < 10 ? `0${unit.v}` : unit.v}
                                        </div>
                                        <span className="text-[9px] font-black text-gray-400 mt-1.5 uppercase tracking-tighter">{unit.l}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Progress */}
                        <div className="mt-2">
                            <div className="flex justify-between items-end mb-2">
                                <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest">
                                    sold: <span className="text-[#01A49E] ml-1">26 / 75</span>
                                </p>
                                <span className="text-[8px] font-black text-[#01A49E] bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">SELLING FAST</span>
                            </div>
                            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                                <div 
                                    className="h-full bg-gradient-to-r from-[#01A49E] to-teal-400 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(1,164,158,0.2)]" 
                                    style={{ width: '35%' }} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Side Deals Column (Right) */}
            <div className="lg:col-span-2 flex flex-col gap-4 justify-center">
                {sideDeals.map((product, index) => (
                    <Link key={product._id} href={`/product/${product._id}`}>
                        <div
                            className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 group cursor-pointer transition-all duration-500 hover:shadow-lg flex items-center p-3.5 gap-4"
                        >
                            {/* Image */}
                            <div className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-2xl flex items-center justify-center p-2 group-hover:bg-white transition-colors duration-500">
                                <img
                                    src={`${imageBaseUrl}main/${product.thumbnail}`}
                                    alt={product.name}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            
                            {/* Info */}
                            <div className="flex-1 min-w-0">
                                <h5 className="text-[#081627] font-black text-[15px] line-clamp-1 mb-1 group-hover:text-[#01A49E] transition-colors tracking-tight">
                                    {product.name}
                                </h5>
                                <div className="text-[#01A49E] font-black uppercase text-[10px] tracking-widest mb-2">
                                    1 ITEMS IN STOCK
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#01A49E] font-black text-base">₹{product.final_price?.toLocaleString()}</span>
                                    {product.original_price > product.final_price && (
                                        <span className="text-gray-400 line-through text-[10px] font-bold opacity-60">₹{product.original_price?.toLocaleString()}</span>
                                    )}
                                </div>
                            </div>

                            {/* Quick View */}
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-teal-50 p-2 rounded-lg">
                                    <svg className="w-3 h-3 text-[#01A49E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
                
                {/* Fallback empty banners */}
                {sideDeals.length < 3 && [...Array(3 - sideDeals.length)].map((_, i) => (
                    <div key={`empty-${i}`} className="flex items-center gap-4 rounded-2xl bg-gray-50/50 border border-dashed border-gray-200 p-3 opacity-40">
                        <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center">
                            <div className="w-6 h-6 border-2 border-gray-100 border-dashed rounded-full"></div>
                        </div>
                        <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">More Deals Coming</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
