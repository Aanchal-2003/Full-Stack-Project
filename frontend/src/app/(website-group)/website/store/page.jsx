import Slider from '@/components/website/Slider'
import Slider2 from '@/components/website/Slider2'
import React from 'react'

export default function storePage() {
    return (
        <div className='w-full mx-auto bg-gray-200  px-6 py-4'>


            {/* Home / Shop / Top Cell Phones & Tablets */}
            <div className='max-w-7xl mx-auto px-6 py-4 rounded bg-white p-10'>
                <h2 className='text-[#999999] font-bold text-[14px]'>
                    Home / Shop / <span className='text-[14px] font-bold text-black'>Top Cell Phones & Tablets</span>
                </h2>
            </div>


            {/* top cell phones & tablets */}
            <div className='max-w-7xl mx-auto mt-5 bg-white px-4 py-8 rounded-2xl'>
                <h2 className='text-[18px] font-bold uppercase '>top cell phones & tablets</h2>
                <div className=' grid grid-cols-5 gap-4 mt-5 '>
                    <div className='bg-gray-100 h-50 col-span-3 rounded-xl overflow-hidden'>
                        <Slider />
                    </div>
                    <div className='bg-[url(/images/bg.png)] rounded-2xl gap-6 px-4 py-2 col-span-2'>
                        <div className='flex gap-6 items-center'>
                            <h2 className='text-2xl uppercase mt-2'>redmi note <br /> 12 Pro+ 5g</h2>
                            <button className='bg-[#222222] uppercase text-[#FFFFFF] text-[12px] px-2 py-2 rounded-2xl w-[120px] '>shop now</button>
                        </div>
                        <span className='text-[#666666] text-[12px]'>Rise to the challenge</span>
                    </div>
                </div>
            </div>


            {/* popular categories */}
            <div className='max-w-7xl mx-auto mt-5 bg-white px-4 py-8 rounded-2xl'>
                <h2 className='text-[18px] font-bold uppercase '>popular categories</h2>
                <div className='grid grid-cols-5 mt-5'>
                    <div className='flex gap-6'>
                        <div>
                            <h2 className='text-[14px]'>iPhone (iOS)</h2>
                            <span className='text-[#666666] text-[12px]'>74 Items</span>
                        </div>
                        <img className='w-[50px] h-[50px]' src="/images/mobile.png" alt="" />
                    </div>
                    <div className='flex gap-6'>
                        <div>
                            <h2 className='text-[14px]'>iPhone (iOS)</h2>
                            <span className='text-[#666666] text-[12px]'>74 Items</span>
                        </div>
                        <img className='w-[50px] h-[50px]' src="/images/mobile.png" alt="" />
                    </div>
                    <div className='flex gap-6'>
                        <div>
                            <h2 className='text-[14px]'>iPhone (iOS)</h2>
                            <span className='text-[#666666] text-[12px]'>74 Items</span>
                        </div>
                        <img className='w-[50px] h-[50px]' src="/images/mobile.png" alt="" />
                    </div>
                    <div className='flex gap-6'>
                        <div>
                            <h2 className='text-[14px]'>iPhone (iOS)</h2>
                            <span className='text-[#666666] text-[12px]'>74 Items</span>
                        </div>
                        <img className='w-[50px] h-[50px]' src="/images/mobile.png" alt="" />
                    </div>
                    <div className='flex gap-6'>
                        <div>
                            <h2 className='text-[14px]'>iPhone (iOS)</h2>
                            <span className='text-[#666666] text-[12px]'>74 Items</span>
                        </div>
                        <img className='w-[50px] h-[50px]' src="/images/mobile.png" alt="" />
                    </div>
                    <div className='flex gap-6'>
                        <div>
                            <h2 className='text-[14px]'>iPhone (iOS)</h2>
                            <span className='text-[#666666] text-[12px]'>74 Items</span>
                        </div>
                        <img className='w-[50px] h-[50px]' src="/images/mobile.png" alt="" />
                    </div>
                    <div className='flex gap-6'>
                        <div>
                            <h2 className='text-[14px]'>iPhone (iOS)</h2>
                            <span className='text-[#666666] text-[12px]'>74 Items</span>
                        </div>
                        <img className='w-[50px] h-[50px]' src="/images/mobile.png" alt="" />
                    </div>
                    <div className='flex gap-6'>
                        <div>
                            <h2 className='text-[14px]'>iPhone (iOS)</h2>
                            <span className='text-[#666666] text-[12px]'>74 Items</span>
                        </div>
                        <img className='w-[50px] h-[50px]' src="/images/mobile.png" alt="" />
                    </div>
                    <div className='flex gap-6'>
                        <div>
                            <h2 className='text-[14px]'>iPhone (iOS)</h2>
                            <span className='text-[#666666] text-[12px]'>74 Items</span>
                        </div>
                        <img className='w-[50px] h-[50px]' src="/images/mobile.png" alt="" />
                    </div>
                    <div className='flex gap-6'>
                        <div>
                            <h2 className='text-[14px]'>iPhone (iOS)</h2>
                            <span className='text-[#666666] text-[12px]'>74 Items</span>
                        </div>
                        <img className='w-[50px] h-[50px]' src="/images/mobile.png" alt="" />
                    </div>
                </div>

            </div>


            <div className='max-w-7xl mx-auto mt-5 bg-white px-4 py-8 rounded-2xl'>
                <div className='grid grid-cols-5'>
                    <div className='col-span-1 bg-gray-200 rounded-2xl flex flex-col gap-2 px-4 py-6 '>
                        <h2 className='uppercase text-[18px] font-bold'>categories</h2>
                        <div className='bg-white text-[12px] font-bold rounded-xl px-4 py-1'>All Categories</div>
                        <span className='text-[14px] font-bold'>Cell Phones & Tablets</span>
                        <ul className='text-[14px] ms-5'>
                            <li>All</li>
                            <li>Iphone</li>
                            <li>Samsung</li>
                            <li>Xiaomi</li>
                            <li>Asus</li>
                            <li>Oppo</li>
                            <li>Gaming Smartphone</li>
                            <li>Ipad</li>
                            <li>Window Tablets</li>
                            <li>eReader</li>
                            <li>Smartphone Chargers</li>
                            <li>5G Support Smartphone</li>
                            <li>Smartphone Accessories</li>
                            <li>Tablets Accessories</li>
                            <li>Cell Phones  $200</li>
                        </ul>
                    </div>
                    <div className='col-span-4'>
                        <div className='bg-white rounded-2xl mt-5 md:mt-0 px-10 py-8'>
                            <div className='flex justify-between'>
                                <h2 className='font-semibold flex uppercase gap-5 text-[18px]'>Best seller in this category</h2>
                            </div>
                            <div>
                                <Slider2 />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-5'>
                    <div className='col-span-1 bg-gray-200 mt-4 rounded-2xl flex flex-col gap-2 px-4 py-6 '>
                        <div className='flex justify-between'>
                            <h2 className='uppercase text-[18px] font-bold'>categories</h2>
                            <span className='text-[21px]'>Reset All</span>
                        </div>
                        <div className='grid grid-cols-2 gap-2 text-[13px]'>
                            <h2 className='bg-white rounded-xl px-2'>Min: $45.00 </h2>
                            <h2 className='bg-white rounded-xl px-2'>10.9 inch </h2>
                            <h2 className='bg-white rounded-xl px-2'>Color: Red </h2>
                            <h2 className='bg-white rounded-xl px-2'>128GB  </h2>
                        </div>


                        {/* By Brands */}


                        <h2 className='text-[14px] font-bold'>By Brands</h2>
                        <input className='w-[240px] p-2 rounded-xl bg-white' type="text" />
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" />
                            <img src="/images/img.png" alt="" />
                            <span className='text-[#888888] text-[14px]'>(14)</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" />
                            <img src="/images/img.png" alt="" />
                            <span className='text-[#888888] text-[14px]'>(14)</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" />
                            <img src="/images/img.png" alt="" />
                            <span className='text-[#888888] text-[14px]'>(14)</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" />
                            <img src="/images/img.png" alt="" />
                            <span className='text-[#888888] text-[14px]'>(14)</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" />
                            <img src="/images/img.png" alt="" />
                            <span className='text-[#888888] text-[14px]'>(14)</span>
                        </div>

                        {/* By Price */}


                        <h2 className='text-[14px] font-bold mt-5'>By Price</h2>
                        <input type="range" name="" id="" />
                        <div className='flex gap-2'>
                            <h2 className='bg-white rounded-xl px-4 py-2'>$ 0 </h2>
                            <span>-</span>
                            <h2 className='bg-white rounded-xl px-4 py-2'>$ 1000 </h2>
                            <button className='bg-green-500 px-2 rounded-xl text-white font-bold'>Go</button>
                        </div>

                        {/* By Rating */}


                        <h2 className='text-[14px] font-bold mt-5'>By Rating</h2>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" />
                            <img src="/images/img.png" alt="" />
                            <span className='text-[#888888] text-[14px]'>(14)</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" />
                            <img src="/images/img.png" alt="" />
                            <span className='text-[#888888] text-[14px]'>(14)</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" />
                            <img src="/images/img.png" alt="" />
                            <span className='text-[#888888] text-[14px]'>(14)</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" />
                            <img src="/images/img.png" alt="" />
                            <span className='text-[#888888] text-[14px]'>(14)</span>
                        </div>

                        {/* By Screen Size */}


                        <h2 className='text-[14px] font-bold mt-5'>By Screen Size</h2>
                        <div className='grid grid-cols-2 gap-2 text-[13px]'>
                            <h2 className='bg-white rounded-xl px-2'>7” & Under </h2>
                            <h2 className='bg-white rounded-xl px-2'>7.1” - 8.9”</h2>
                            <h2 className='bg-white rounded-xl px-2'>9” - 10.9”</h2>
                            <h2 className='bg-white rounded-xl px-2'>11” & Greater  </h2>
                        </div>

                        {/* By color */}

                        <h2 className='text-[14px] font-bold mt-5'>By Color</h2>
                        <div className='grid grid-cols-5 gap-2'>
                            <div className='bg-green-500 w-10 h-10 rounded-xl '></div>
                            <div className='bg-green-500 w-10 h-10 rounded-xl '></div>
                            <div className='bg-green-500 w-10 h-10 rounded-xl '></div>
                            <div className='bg-green-500 w-10 h-10 rounded-xl '></div>
                            <div className='bg-green-500 w-10 h-10 rounded-xl '></div>
                            <div className='bg-green-500 w-10 h-10 rounded-xl '></div>
                            <div className='bg-green-500 w-10 h-10 rounded-xl '></div>
                            <div className='bg-green-500 w-10 h-10 rounded-xl '></div>
                        </div>


                        {/* By Memory */}


                        <h2 className='text-[14px] font-bold mt-5'>By Menmory</h2>
                        <div className='grid grid-cols-2'>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" />
                                <p className='text-[14px]'>12 GB <span className='text-[#888888]'>(4)</span></p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" />
                                <p className='text-[14px]'>1.5 GB <span className='text-[#888888]'>(1)</span></p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" />
                                <p className='text-[14px]'>8 GB <span className='text-[#888888]'>(3)</span></p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" />
                                <p className='text-[14px]'>1 GB <span className='text-[#888888]'>(1)</span></p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" />
                                <p className='text-[14px]'>6 GB <span className='text-[#888888]'>(12)</span></p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" />
                                <p className='text-[14px]'>512 GB <span className='text-[#888888]'>(2)</span></p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" />
                                <p className='text-[14px]'>4 GB <span className='text-[#888888]'>(6)</span></p>
                            </div>
                        </div>


                        {/* By Conditions */}


                        <h2 className='text-[14px] font-bold mt-5'>By Conditions</h2>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" />
                            <p className='text-[14px]'>New <span className='text-[#888888]'>(6)</span></p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" />
                            <p className='text-[14px]'>Like New <span className='text-[#888888]'>(6)</span></p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" />
                            <p className='text-[14px]'>Open Box<span className='text-[#888888]'>(6)</span></p>
                        </div>
                    </div>
                    
                    <div className='col-span-4'>
                        
                    </div>
                </div>

            </div>





        </div>

    )
}
