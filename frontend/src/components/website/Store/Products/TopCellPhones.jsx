import React from 'react';
import Slider from '../../Slider';

export default function TopCellPhones() {
    return (
        <div className='max-w-7xl mx-auto mt-5 bg-white px-4 py-8 rounded-2xl'>

            {/* Title */}
            <h2 className='text-[18px] font-bold uppercase '>top cell phones & tablets</h2>

            <div>
                <div className="bg-white rounded-xl p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* Left Large Banner */}
                        <div className="lg:col-span-2 bg-[#a9adb6] rounded-xl relative overflow-hidden flex items-center">
                            <div className="p-8 max-w-md z-10">
                                <h3 className="text-3xl font-bold text-white leading-tight">
                                    Noise Cancelling
                                </h3>
                                <h4 className="text-2xl text-white font-light mb-4">
                                    Headphone
                                </h4>

                                <p className="text-white text-sm leading-relaxed">
                                    Boso Over-Ear Headphone <br />
                                    Wifi, Voice Assistant, <br />
                                    Low Latency Game Mode
                                </p>

                                <button className="mt-6 bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
                                    BUY NOW
                                </button>
                            </div>

                            {/* Image */}
                            <img
                                src="/images/headphone_banner.png"
                                alt="Headphone"
                                className="absolute right-0 top-0 h-full object-cover"
                            />

                            {/* Slider Indicator */}
                            <div className="absolute bottom-4 right-6 bg-white text-xs px-3 py-1 rounded-full shadow">
                                3 / 3
                            </div>
                        </div>

                        {/* Right Small Banner */}
                        <div className="rounded-xl overflow-hidden bg-linear-to-b from-[#dcdff1] to-[#f3d7a6] p-8 flex items-center justify-between group cursor-pointer transition-all hover:shadow-lg">
                            <div className="flex-1 pr-4 z-10">
                                <h3 className="text-xl font-bold leading-tight mb-2 text-gray-900">
                                    redmi note 12 <br /> Pro+ 5g
                                </h3>
                                <p className="text-sm text-gray-600 mb-6 italic">
                                    Rise to the challenge
                                </p>
                                <button className="bg-black text-white text-[10px] px-5 py-2 rounded-full font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors">
                                    SHOP NOW
                                </button>
                            </div>

                            <div className="relative">
                                <img
                                    src="/images/redmi_banner.png"
                                    alt="Phone"
                                    className="h-44 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                                    style={{ filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.1))" }}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
