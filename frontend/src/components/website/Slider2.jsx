'use client'

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { axiosAPIinstance } from '@/utils/helper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SkeletonCard = () => (
    <div className="flex flex-col gap-4 p-4 rounded-xl border border-gray-100 animate-pulse bg-white">
        <div className="w-full h-[180px] bg-gray-200 rounded-lg"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 self-center"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4 self-center"></div>
        <div className="h-6 bg-gray-200 rounded w-1/4 self-center"></div>
        <div className="flex gap-2 justify-center">
            <div className="h-6 bg-gray-200 rounded w-16"></div>
            <div className="h-6 bg-gray-200 rounded w-16"></div>
        </div>
    </div>
);

export default ({ activeCategory }) => {
    const [products, setProducts] = useState([]);
    const [imageBaseUrl, setImageBaseUrl] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            if (!activeCategory) return;
            setLoading(true);
            try {
                // Determine if filtering by status flag (e.g. is_hot) or category_id
                const isId = /^[0-9a-fA-F]{24}$/.test(activeCategory);
                const queryParam = isId ? `category_id=${activeCategory}` : `${activeCategory}=true`;
                
                const response = await axiosAPIinstance.get(`/product?${queryParam}&limit=10`);
                if (response.data.success) {
                    setProducts(response.data.data.product || []);
                    setImageBaseUrl(response.data.data.imageBaseUrl);
                }
            } catch (error) {
                console.error("Error fetching slider products:", error);
                setProducts([]);
            } finally {
                // Add a small delay for smoother transition feel
                setTimeout(() => setLoading(false), 300);
            }
        };

        fetchProducts();
    }, [activeCategory]);

    if (loading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {[...Array(5)].map((_, i) => <SkeletonCard key={i} />)}
            </div>
        );
    }

    if (!products || products.length === 0) {
        return (
            <div className="flex justify-center items-center h-[300px] text-gray-500 italic bg-gray-50 rounded-xl">
                No products found in this category.
            </div>
        )
    }

    return (
        <div 
            key={activeCategory} 
            className="relative group transition-all duration-700 animate-in fade-in slide-in-from-bottom-5 fill-mode-both"
        >
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={5}
                grabCursor={true}
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: { slidesPerView: 1.2, spaceBetween: 15 },
                    640: { slidesPerView: 2.2, spaceBetween: 20 },
                    1024: { slidesPerView: 4.2, spaceBetween: 25 },
                    1280: { slidesPerView: 5, spaceBetween: 30 },
                }}
                className="pb-12 !px-2"
            >
                {products.map((product, index) => (
                    <SwiperSlide key={product._id} className="transition-all duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                        <Link href={`/product/${product._id}`}>
                            <div className='flex flex-col justify-center items-center gap-2 group/card cursor-pointer p-4 hover:shadow-2xl rounded-2xl transition-all duration-500 bg-white border border-gray-100 hover:border-[#01A49E]/40 relative transform hover:-translate-y-2'>
                                <div className="relative w-full h-[180px] overflow-hidden rounded-lg">
                                    <img
                                        className='w-full h-full object-contain transition-transform duration-1000 group-hover/card:scale-110'
                                        src={`${imageBaseUrl}main/${product.thumbnail}`}
                                        alt={product.name}
                                    />
                                    {product.is_best_seller && (
                                        <div className="absolute top-0 left-0 bg-yellow-400 text-black text-[9px] px-2 py-0.5 rounded-br-lg font-bold uppercase tracking-widest shadow-sm">
                                            Best!
                                        </div>
                                    )}
                                </div>

                                <span className='text-[#666666] text-[12px] opacity-60 mt-2 font-medium'>(152)</span>

                                <h2 className='font-bold text-[14px] text-center line-clamp-2 h-10 leading-tight group-hover/card:text-[#01A49E] transition-colors duration-300'>
                                    {product.name}
                                </h2>

                                <span className='text-[19px] font-extrabold text-gray-900 mt-1'>
                                    ₹{product.final_price?.toLocaleString()}
                                </span>

                                <div className='flex flex-row gap-2 mt-3'>
                                    <span className='uppercase text-[#01A49E] bg-teal-50 px-2 py-1.5 rounded-md text-[9px] font-bold tracking-wider'>
                                        free shipping
                                    </span>
                                    <span className='uppercase text-orange-600 bg-orange-50 px-2 py-1.5 rounded-md text-[9px] font-bold tracking-wider'>
                                        free gift
                                    </span>
                                </div>

                                <div className={`mt-4 py-1.5 px-4 rounded-full text-[11px] font-bold transition-all duration-300 ${product.stock ? 'text-teal-600 bg-teal-50 group-hover/card:bg-teal-600 group-hover/card:text-white' : 'text-red-500 bg-red-50'
                                    }`}>
                                    {product.stock ? 'In Stock' : 'Out of Stock'}
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
;