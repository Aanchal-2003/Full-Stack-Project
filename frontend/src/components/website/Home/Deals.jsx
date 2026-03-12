import React from 'react';

export default function Deals() {

    const promoImages = [
        '/images/videogame.png',
        '/images/videogame.png',
        '/images/videogame.png',
    ]

    return (
        <div className='grid md:grid-cols-6 gap-8 mt-5'>
            <div className='col-span-4'>

                <div className='w-full flex justify-between uppercase items-center bg-[#01A49E] py-4  px-4 rounded-2xl'>
                    <h2 className='text-white font-bold text-[18px]'>deals of the day</h2>
                    <span className='text-[#FFFFFF] text-[13px] '>View All</span>
                </div>

                <div className='md:flex px-4 bg-white rounded-2xl py-14 gap-6'>

                    {/* Thumbnails */}
                    <div className="flex flex-col gap-3">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <div
                                key={i}
                                className="w-14 h-18 border rounded-lg flex items-center justify-center"
                            >
                                <img
                                    src="/images/mobile.png"
                                    alt="thumbnail"
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className="relative flex-1 h-64">
                        <span className="absolute top-3 left-3 bg-teal-500 text-white text-xs px-3 py-1 rounded-full z-10">
                            SAVE $199.00
                        </span>

                        <img
                            src="/images/mobile.png"
                            alt="Deal Product"
                            className="object-contain" />
                    </div>

                    <div className='flex flex-col gap-6 justify-evenly'>

                        {/* Right: Details */}
                        <div>
                            <p className="text-sm text-gray-500 mb-1">(12)</p>

                            <h4 className="font-semibold mb-3">
                                Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
                            </h4>

                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-teal-500 text-xl font-bold">
                                    $569.00
                                </span>
                                <span className="line-through text-gray-400">
                                    $759.00
                                </span>
                            </div>

                            <ul className="text-sm text-gray-600 space-y-2 mb-4">
                                <li>• Intel LGA 1700 Socket: Supports 13th & 12th Gen</li>
                                <li>• DDR5 Compatible: 4*DIMM Memory</li>
                                <li>• Commanding Power Design: Twin 16+1+2</li>
                            </ul>
                        </div>

                        {/* Badges */}
                        <div className="flex gap-3 mb-4">
                            <span className="text-xs bg-teal-100 text-teal-600 px-3 py-1 rounded-full">
                                FREE SHIPPING
                            </span>
                            <span className="text-xs bg-teal-100 text-teal-600 px-3 py-1 rounded-full">
                                FREE GIFT
                            </span>
                        </div>

                        {/* Countdown (UI only) */}
                        <div className="mb-4">
                            <p className="text-sm font-medium mb-2">
                                HURRY UP! PROMOTION WILL EXPIRES IN
                            </p>

                            <div className="flex gap-3">
                                {['162d', '9h', '2m', '4s'].map((time, i) => (
                                    <div
                                        key={i}
                                        className="bg-gray-100 rounded-lg px-3 py-2 text-center text-sm font-semibold"
                                    >
                                        {time}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Progress */}
                        <div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                                <div className="h-full bg-teal-500 w-[35%]" />
                            </div>
                            <p className="text-sm text-gray-600">
                                Sold: <span className="font-semibold">26/75</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {promoImages.map((image, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-xl bg-gray-100 aspect-video"
                    >
                        <img
                            src={image}
                            alt="Promo"
                            className="object-cover "
                            sizes="(max-width: 1024px) 100vw, 25vw"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
