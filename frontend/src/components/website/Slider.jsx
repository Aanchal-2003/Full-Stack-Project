'use client'


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
    return (
        
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
        >
            <SwiperSlide >
                <img className="w-full   object-cover" src="/images/2.png" />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full  object-cover" src="https://images.pexels.com/photos/33104822/pexels-photo-33104822.jpeg" />
            </SwiperSlide>
        </Swiper>
    );
}
