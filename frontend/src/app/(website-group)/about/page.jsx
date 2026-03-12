import React from 'react'

export default function page() {
    return (
        <div className='w-full mx-auto bg-gray-200  px-6 py-4'>
            <div className='max-w-7xl mx-auto bg-gray-200'>

                {/* Home / pages / about */}

                <div className=' px-6 py-4 rounded bg-white'>
                    <h2 className='text-[#999999] font-bold text-[14px]'>
                        Home / pages / <span className='text-[14px] font-bold text-black'>about</span>
                    </h2>
                </div>


                <div className='mt-5 px-6 py-4 rounded bg-white'>
                    <div className='bg-[url(/images/bg.png)] flex flex-col gap-5 px-10 py-10'>
                        <h2 className='text-3xl font-bold'>Best experience <br /><span>always wins</span></h2>
                        <p className='text-[#666666] text-[14px]'>#1 Online Marketplace for Electronic & Technology <br /> in Mahanttan, CA</p>
                    </div>


                    <div className='hidden md:flex justify-between p-10'>
                        <p className='text-[18px] font-bold uppercase'>our purpose is to <span className='text-[#1ABA1A]'>enrich <br /> and enhance lives </span> through <br /> technology</p>
                        <div>
                            <h2 className='text-3xl font-bold'>$12,5M</h2>
                            <span className='text-[#666666] text-[12px] uppercase '>total revenue from <br /> 2001 - 2023</span>
                        </div>
                        <div>
                            <h2 className='text-3xl font-bold'>12K+</h2>
                            <span className='text-[#666666] text-[12px] uppercase'>orders delivered <br /> successful on everyday</span>
                        </div>
                        <div>
                            <h2 className='text-3xl font-bold'>725+</h2>
                            <span className='text-[#666666] text-[12px] uppercase'>store and office in U.S <br /> and worldwide</span>
                        </div>
                    </div>

                    <div className='md:grid grid-cols-2 gap-5 mt-5'>
                        <div className='hidden md:block'>
                            <img src="/images/bg.png" alt="" />
                        </div>
                        <div className='flex flex-col gap-5 bg-gray-300 rounded p-10'>
                            <p className='text-[18px] font-bold'>We connect millions of buyers and sellers around <br />the world, empowering people & creating economic <br />opportunity for all.</p>
                            <span className='text-[14px] text-[#666666]'>Within our markets, millions of people around the world connect, <br /> both online and offline, to make, sell and buy unique goods. We also <br /> offer a wide range of Seller Services and tools that help   creative <br /> entrepreneurs start, manage & scale their businesses.</span>
                            <button className='uppercase bg-[#01A49E] text-white rounded-xl py-2 px-4 '> our showreel</button>
                        </div>
                    </div>
                </div>


                <div className='md:flex gap-5 bg-gray-300 mt-5 px-6 py-4 rounded'>
                    <div className='bg-white flex flex-col  gap-5 rounded px-8 py-8'>
                        <div className='flex  justify-between'>
                            <h2 className='text-[18px] font-bold uppercase'>100% authentic <br /> products</h2>
                            <span className='bg-[#01A49E]  p-4 rounded-full'>.</span>
                        </div>
                        <p className='text-[#666666] text-[14px]'>Swoo Tech Mart just distribute 100% authorized products & <br /> guarantee quality. Nulla porta nulla nec orci vulputate, id <br /> rutrum sapien varius.</p>
                    </div>
                    <div className='bg-white flex flex-col mt-5 md:mt-0 gap-5 rounded px-8 py-8'>
                        <div className='flex  justify-between'>
                            <h2 className='text-[18px] font-bold uppercase'>fast <br /> delivery</h2>
                            <span className='bg-[#01A49E] p-4 rounded-full'>.</span>
                        </div>
                        <p className='text-[#666666] text-[14px]'>Fast shipping with a lots of option to delivery. 100% <br /> guarantee that your goods alway on time and perserve <br /> quality.</p>
                    </div>
                    <div className='bg-white flex flex-col mt-5 md:mt-0 gap-5 rounded px-8 py-8'>
                        <div className='flex  justify-between'>
                            <h2 className='text-[18px] font-bold uppercase'>affordabl <br /> price</h2>
                            <span className='bg-[#01A49E]  p-4 rounded-full'>.</span>
                        </div>
                        <p className='text-[#666666] text-[14px]'>We offer an affordable & competitive price with a lots of <br /> special promotions.</p>
                    </div>
                </div>


                <div className='mt-5 px-8 py-10 flex flex-col gap-5 rounded bg-white'>
                    <h2 className='text-[18px] uppercase font-bold'>our mission and vision</h2>
                    <p>Nam maximus nunc a augue pulvinar, non euismod mauris tempus. Cras non elit vel magna molestie pellentesque in eu dui. Donec laoreet quis erat vitae finibus. Vestibulum enim eros, porta eget <br /> quam et, euismod dictum elit. Nullam eu tempus magna. Fusce malesuada nisi id felis placerat porta vel sed augue. Vivamus mollis mauris vitae rhoncus egestas. Pellentesque habitant morbi <br /> tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <img className='hidden md:block' height={400} src="/images/building.png" alt="" />
                    <h2 className='text-[18px] uppercase font-bold mt-5'>from a retail store to the global chain of stores</h2>
                    <p className='text-[14px]'>Pellentesque laoreet justo nec ex sodales euismod. Aliquam orci tortor, bibendum nec ultricies ac, auctor nec purus. Maecenas in consectetur erat.</p>
                    <div className='md:grid grid-cols-2 '>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-[14px] font-bold'>1998: <span className='text-[#666666]'>A small store located in Brooklyn Town, USA</span></h2>
                            <h2 className='text-[14px] font-bold'>1997: <span className='text-[#666666]'>It is a long established fact that a reader will be distracted by the readable</span></h2>
                            <h2 className='text-[14px] font-bold'>1997: <span className='text-[#666666]'>A small store located in Brooklyn Town, USA</span></h2>
                            <h2 className='text-[14px] font-bold'>2000: <span className='text-[#666666]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span></h2>
                            <h2 className='text-[14px] font-bold'>2002: <span className='text-[#666666]'>Lorem Ipsum has been the industry's standard dummy text ever since the</span></h2>
                            <h2 className='text-[14px] font-bold'>2004: <span className='text-[#666666]'>Contrary to popular belief, Lorem Ipsum is not simply random text</span></h2>
                            <h2 className='text-[14px] font-bold'>2005: <span className='text-[#666666]'>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of <br /> letters, as opposed to using 'Content here</span></h2>
                            <h2 className='text-[14px] font-bold'>2006: <span className='text-[#666666]'>There are many variations of passages of Lorem Ipsum available, but the majority <br /> have suffered alteration in some form, by injected humour, or randomised words <br /> which don't look even slightly believable.</span></h2>
                            <h2 className='text-[14px] font-bold'>2010: <span className='text-[#666666]'>All the Lorem Ipsum generators on the Internet tend to repeat predefined</span></h2>
                            <h2 className='text-[14px] font-bold'>2013: <span className='text-[#666666]'>Lorem Ipsum comes from sections 1.10.32</span></h2>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-[14px] font-bold'>2014: <span className='text-[#666666]'>There are many variations of passages of Lorem Ipsum available, but the majority have <br /> suffered alteration in some form</span></h2>
                            <h2 className='text-[14px] font-bold'>2016: <span className='text-[#666666]'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as <br /> necessary</span></h2>
                            <h2 className='text-[14px] font-bold'>2020: <span className='text-[#666666]'>Lorem Ipsum comes from sections 1.10.32</span></h2>
                            <h2 className='text-[14px] font-bold'>2021: <span className='text-[#666666]'>Making this the first true generator on the Internet</span></h2>
                            <h2 className='text-[14px] font-bold'>2022: <span className='text-[#666666]'>Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always <br /> free from repetition, injected humour</span></h2>
                            <h2 className='text-[14px] font-bold'>2023: <span className='text-[#666666]'>here are many variations of passages of Lorem Ipsum available, but the majority have <br /> suffered alteration in some form</span></h2>

                        </div>
                    </div>
                    <h2 className='text-[18px] font-bold uppercase'>leaderships</h2>
                    <div className='md:flex gap-4'>
                        <div>
                            <img className='rounded' src="/images/leader.png" alt="" />
                            <h2 className='text-[16px] font-bold'>Henry Avery</h2>
                            <span className='text-[12px] text-[#666666]'>Chairman</span>
                        </div>
                        <div>
                            <img className='rounded' src="/images/leader.png" alt="" />
                            <h2 className='text-[16px] font-bold'>Henry Avery</h2>
                            <span className='text-[12px] text-[#666666]'>Chairman</span>
                        </div>
                        <div>
                            <img className='rounded' src="/images/leader.png" alt="" />
                            <h2 className='text-[16px] font-bold'>Henry Avery</h2>
                            <span className='text-[12px] text-[#666666]'>Chairman</span>
                        </div>
                        <div>
                            <img className='rounded' src="/images/leader.png" alt="" />
                            <h2 className='text-[16px] font-bold'>Henry Avery</h2>
                            <span className='text-[12px] text-[#666666]'>Chairman</span>
                        </div>
                        <div>
                            <img className='rounded' src="/images/leader.png" alt="" />
                            <h2 className='text-[16px] font-bold'>Henry Avery</h2>
                            <span className='text-[12px] text-[#666666]'>Chairman</span>
                        </div>
                    </div>
                </div>

                <div className='mt-5 p-10 bg-green-500 rounded hidden md:block'>
                    <div className='flex items-center text-white justify-center text-[18px]'>
                        <h2>Member get</h2>
                        <span className='text-[#FFE400] uppercase'>FREE SHIPPING*</span>
                        <p>with no order minimum!. *Restriction apply</p>
                        <span className='text-[#FFFFFF] text-[14px] underline'>Try free 30-days trial!</span>
                    </div>
                </div>



            </div>
        </div>
    )
}
