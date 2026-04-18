'use client'

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getProductById } from '@/api/category'; // Wait, let me check where getProductById is exported from
import { axiosAPIinstance } from '@/utils/helper';
import AddToCartButton from '@/components/website/Store/Products/AddToCartButton';
import Slider2 from '@/components/website/Slider2';

const stripHtml = (html) => {
    if (!html) return '';
    return html.replace(/<[^>]*>?/gm, '');
};

export default function ProductDetailPage() {
    const params = useParams();
    const productId = params.productId;
    const [product, setProduct] = useState(null);
    const [imageBaseUrl, setImageBaseUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [mainImage, setMainImage] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            if (!productId) return;
            try {
                const response = await axiosAPIinstance.get(`/product/${productId}`);
                if (response.data.success) {
                    const data = response.data.data;
                    setProduct(data.product);
                    setImageBaseUrl(data.imageBaseUrl);
                    setMainImage(data.product.thumbnail);
                }
            } catch (error) {
                console.error("Error fetching product details:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [productId]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
        </div>
    );

    if (!product) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
            <button onClick={() => window.history.back()} className="bg-teal-600 text-white px-6 py-2 rounded-lg font-bold">Go Back</button>
        </div>
    );

    return (
        <div className="w-full bg-gray-50 min-h-screen py-10 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumbs */}
                <nav className="text-sm text-gray-400 mb-8 font-medium">
                    <span className="hover:text-teal-600 cursor-pointer">Home</span> / 
                    <span className="hover:text-teal-600 cursor-pointer ml-1">Shop</span> / 
                    <span className="text-gray-800 ml-1 font-bold">{product.name}</span>
                </nav>

                <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100">
                    {/* Left: Image Gallery */}
                    <div className="flex flex-col gap-6">
                        <div className="relative aspect-square rounded-[2rem] bg-gray-50 flex items-center justify-center p-10 overflow-hidden group border border-gray-100">
                             <img 
                                src={`${imageBaseUrl}main/${mainImage}`} 
                                alt={product.name} 
                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                            {product.discount_percentage > 0 && (
                                <div className="absolute top-6 left-6 bg-yellow-400 text-black font-black px-4 py-2 rounded-2xl shadow-lg border-2 border-white">
                                    {product.discount_percentage}% OFF
                                </div>
                            )}
                        </div>

                        {/* Thumbnails */}
                        <div className="flex gap-4 overflow-x-auto pb-2 px-1">
                            {[product.thumbnail, ...(product.other_images || [])].map((img, i) => (
                                <div 
                                    key={i}
                                    onClick={() => setMainImage(img)}
                                    className={`w-24 h-24 flex-shrink-0 rounded-2xl border-4 transition-all duration-300 cursor-pointer p-2 flex items-center justify-center bg-gray-50 ${mainImage === img ? 'border-teal-500 shadow-md scale-105' : 'border-transparent hover:border-gray-200'}`}
                                >
                                    <img src={`${imageBaseUrl}main/${img}`} alt="gallery" className="w-full h-full object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Product Content */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="bg-teal-50 text-[#01A49E] text-[10px] font-black px-3 py-1 rounded-full border border-teal-100 uppercase tracking-widest">In Stock</span>
                            <div className="flex text-yellow-400 text-xs">★★★★★</div>
                            <span className="text-gray-400 text-xs font-bold">(152 Customer Reviews)</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
                            {product.name}
                        </h1>

                        <div className="flex items-end gap-4 mb-8">
                            <span className="text-4xl font-black text-[#01A49E]">
                                ₹{product.final_price?.toLocaleString()}
                            </span>
                            {product.original_price > product.final_price && (
                                <span className="text-xl text-gray-300 line-through font-bold mb-1 opacity-80">
                                    ₹{product.original_price?.toLocaleString()}
                                </span>
                            )}
                        </div>

                        <div className="bg-gray-50/80 rounded-2xl p-6 mb-8 border border-gray-100">
                            <h4 className="font-black text-gray-800 text-sm uppercase tracking-widest mb-3">Product Description</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {stripHtml(product.description)}
                            </p>
                        </div>

                        <div className="mt-auto flex gap-4">
                            <div className="w-full">
                                <AddToCartButton 
                                    id={product._id} 
                                    name={product.name} 
                                    image={`${imageBaseUrl}main/${product.thumbnail}`} 
                                    final_price={product.final_price} 
                                    original_price={product.original_price} 
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <span className="text-[12px] font-bold text-gray-600">Free Worldwide Shipping</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <span className="text-[12px] font-bold text-gray-600">12 Months Warranty</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                <div className="mt-20">
                    <div className="flex items-center justify-between mb-10">
                        <h3 className="text-2xl font-black text-gray-900 tracking-tight">RELATED PRODUCTS</h3>
                        <div className="h-[1px] flex-grow mx-8 bg-gray-200"></div>
                        <span className="text-sm font-bold text-[#01A49E] cursor-pointer hover:underline">VIEW ALL</span>
                    </div>
                    <Slider2 activeCategory="is_featured" />
                </div>
            </div>
        </div>
    );
}
