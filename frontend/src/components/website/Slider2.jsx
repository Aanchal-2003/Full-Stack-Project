'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={5}

            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 5,
                },
            }}


            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div className='flex flex-col justify-center items-center  gap-4'>
                    <img className='w-[200px] h-[200px]' src="/images/product.png" alt="" />
                    <span className='text-[#666666] text-[13px]'>(152)</span>
                    <h2 className='font-bold text-[14px]'>BOSO 2 Wireless On Ear <br />Headphone</h2>
                    <span className='text-[18px]'>$359.00</span>
                    <div className='flex flex-row gap-4'>
                        <button className='uppercase text-[#01A49E] bg-gray-200 px-3 py-2 rounded text-[10px]'>free shipping</button>
                        <button className='uppercase text-[#01A49E] bg-gray-200 px-3 py-2  rounded text-[10px]'>free gift</button>
                    </div>
                    <div>
                        <span>In Stock</span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex flex-col justify-center items-center  gap-4'>
                    <img className='w-[200px] h-[200px]' src="/images/product.png" alt="" />
                    <span className='text-[#666666] text-[13px]'>(152)</span>
                    <h2 className='font-bold text-[14px]'>BOSO 2 Wireless On Ear <br />Headphone</h2>
                    <span className='text-[18px]'>$359.00</span>
                    <div className='flex flex-row gap-4'>
                        <button className='uppercase text-[#01A49E] bg-gray-200 px-3 py-2 rounded text-[10px]'>free shipping</button>
                        <button className='uppercase text-[#01A49E] bg-gray-200 px-3 py-2  rounded text-[10px]'>free gift</button>
                    </div>
                    <div>
                        <span>In Stock</span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex flex-col justify-center items-center  gap-4'>
                    <img className='w-[200px] h-[200px]' src="/images/product.png" alt="" />
                    <span className='text-[#666666] text-[13px]'>(152)</span>
                    <h2 className='font-bold text-[14px]'>BOSO 2 Wireless On Ear <br />Headphone</h2>
                    <span className='text-[18px]'>$359.00</span>
                    <div className='flex flex-row gap-4'>
                        <button className='uppercase text-[#01A49E] bg-gray-200 px-3 py-2 rounded text-[10px]'>free shipping</button>
                        <button className='uppercase text-[#01A49E] bg-gray-200 px-3 py-2  rounded text-[10px]'>free gift</button>
                    </div>
                    <div>
                        <span>In Stock</span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex flex-col justify-center items-center  gap-4'>
                    <img className='w-[200px] h-[200px]' src="/images/product.png" alt="" />
                    <span className='text-[#666666] text-[13px]'>(152)</span>
                    <h2 className='font-bold text-[14px]'>BOSO 2 Wireless On Ear <br />Headphone</h2>
                    <span className='text-[18px]'>$359.00</span>
                    <div className='flex flex-row gap-4'>
                        <button className='uppercase text-[#01A49E] bg-gray-200 px-3 py-2 rounded text-[10px]'>free shipping</button>
                        <button className='uppercase text-[#01A49E] bg-gray-200 px-3 py-2  rounded text-[10px]'>free gift</button>
                    </div>
                    <div>
                        <span>In Stock</span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex flex-col justify-center items-center  gap-4'>
                    <img className='w-[200px] h-[200px]' src="/images/product.png" alt="" />
                    <span className='text-[#666666] text-[13px]'>(152)</span>
                    <h2 className='font-bold text-[14px]'>BOSO 2 Wireless On Ear <br />Headphone</h2>
                    <span className='text-[18px]'>$359.00</span>
                    <div className='flex flex-row gap-4'>
                        <button className='uppercase text-[#01A49E] bg-gray-200 px-3 py-2 rounded text-[10px]'>free shipping</button>
                        <button className='uppercase text-[#01A49E] bg-gray-200 px-3 py-2  rounded text-[10px]'>free gift</button>
                    </div>
                    <div>
                        <span>In Stock</span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex flex-col justify-center items-center  gap-4'>
                    <img className='w-[200px] h-[200px]' src="/images/product.png" alt="" />
                    <span className='text-[#666666] text-[13px]'>(152)</span>
                    <h2 className='font-bold text-[14px]'>BOSO 2 Wireless On Ear <br />Headphone</h2>
                    <span className='text-[18px]'>$359.00</span>
                    <div className='flex flex-row gap-4'>
                        <button className='uppercase text-[#01A49E] bg-gray-200 px-3 py-2 rounded text-[10px]'>free shipping</button>
                        <button className='uppercase text-[#01A49E] bg-gray-200 px-3 py-2  rounded text-[10px]'>free gift</button>
                    </div>
                    <div>
                        <span>In Stock</span>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    );
};