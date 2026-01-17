import React from 'react';
import { FaPaypal } from "react-icons/fa";

export default function page() {
    return (
        <div className='w-full mx-auto bg-gray-200  px-6 py-4'>
            <div className='max-w-7xl mx-auto bg-gray-200'>

                {/* Home / pages / checkout */}


                <div className=' px-6 py-4 rounded bg-white'>
                    <h2 className='text-[#999999] font-bold text-[14px]'>
                        Home / pages / <span className='text-[14px] font-bold text-black'>checkout</span>
                    </h2>
                </div>

                {/* CHECKOUT */}
                <div className=' mt-5 px-6 py-4 rounded bg-white'>
                    <h2 className='text-[18px] font-bold uppercase '>checkout</h2>

                    <div className='md:grid grid-cols-2 gap-5'>
                        <div className='flex flex-col  gap-5 mt-5'>
                            <div className='bg-gray-200 px-4 py-6 rounded'>
                                <p className='text-[14px]'> Returning customer? <span className='text-[#F1352B]'>Click here to log in</span></p>
                            </div>
                            <h2 className='text-[16px] font-bold'>Billing Detail</h2>
                            <div className='flex flex-col gap-5 mt-5 '>
                                <p className='text-[16px] text-[#666666]'>Contact us for all your questions and opinions</p>
                                <div className='grid grid-cols-2 gap-5'>
                                    <div className='flex flex-col gap-3 text-[14px]'>
                                        <label htmlFor="">First Name</label>
                                        <input className='border outline-0 border-gray-300 rounded py-2 px-4' type="text" name="" id="" />
                                    </div>
                                    <div className='flex flex-col gap-3 text-[14px]'>
                                        <label htmlFor="">Last Name</label>
                                        <input className='border outline-0 border-gray-300 rounded py-2 px-4' type="text" name="" id="" />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-3 text-[14px]'>
                                    <label htmlFor="">Company Name <span className='text-[#666666]'>(Optional)</span></label>
                                    <input className='border outline-0 border-gray-300 rounded py-2 px-4' type="text" name="" id="" placeholder='+1 0231 4554 452' />
                                </div>
                                <div className='flex flex-col gap-3 text-[14px]'>
                                    <label htmlFor="">Country / Region *</label>
                                    <select className='border outline-0 border-gray-300 rounded py-2 px-4' name="" id="">
                                        <option value="">United States (US)</option>
                                    </select>
                                </div>
                                <div className='flex flex-col gap-3 text-[14px]'>
                                    <label htmlFor="">Street Address</label>
                                    <input className='border outline-0 border-gray-300 rounded py-2 px-4' type="text" name="" id="" placeholder='House number and street name ...' />
                                    <input className='border outline-0 border-gray-300 rounded py-2 px-4' type="text" name="" id="" placeholder='Apartment, suite, unit, etc (Optional)' />
                                </div>
                                <div className='flex flex-col gap-3 text-[14px]'>
                                    <label htmlFor="">Town / City *</label>
                                    <input className='border outline-0 border-gray-300 rounded py-2 px-4' type="text" name="" id="" />
                                </div>
                                <div className='flex flex-col gap-3 text-[14px]'>
                                    <label htmlFor="">State / County *</label>
                                    <select className='border outline-0 border-gray-300 rounded py-2 px-4' name="" id="">
                                        <option value="">Washington</option>
                                    </select>
                                </div>
                                <div className='flex flex-col gap-3 text-[14px]'>
                                    <label htmlFor="">Zip Code *</label>
                                    <input className='border outline-0 border-gray-300 rounded py-2 px-4' type="number" name="" id="" />
                                </div>
                                <div className='flex flex-col gap-3 text-[14px]'>
                                    <label htmlFor="">Phone Number <span className='text-[#666666]'>(Optional)</span></label>
                                    <input className='border outline-0 border-gray-300 rounded py-2 px-4' type="number" name="" id="" placeholder='+1 0231 4554 452' />
                                </div>
                                <div className='flex flex-col gap-3 text-[14px]'>
                                    <label htmlFor="">Email Address</label>
                                    <input className='border outline-0 border-gray-300 rounded py-2 px-4' type="email" name="" id="" placeholder='example@gmail.com' />
                                </div>
                                <div className='flex  gap-3'>
                                    <input type="checkbox" />
                                    <p className='text-[14px]'>Create an account?</p>
                                </div>
                                <h2 className='text-[16px] font-bold'>Additional Information</h2>
                                <div className='flex flex-col gap-3 text-[14px]'>
                                    <label htmlFor="">Order Notes <span className='text-[#999999]'>(Optional)</span></label>
                                    <textarea className='border outline-0 border-gray-300 rounded py-2 px-4' name="" id="" placeholder='Note about your order, e.g. special note for delivery '></textarea>
                                </div>
                            </div>
                        </div>



                        <div className='flex flex-col justify-between mt-5 md:mt-0'>
                            <div className='bg-gray-200 px-4 py-6 mt-5 rounded'>
                                <p className='text-[14px]'>  Have a coupon? <span className='text-[#F1352B]'>Click here to enter your code </span></p>
                            </div>
                            <div>
                                <div className='flex bg-gray-100 py-4 rounded flex-col gap-5 px-4 mt-5 '>
                                    <h2 className='text-[16px] font-bold'>Your Order</h2>
                                    <div>
                                        <div className='flex justify-between text-[#666666] text-[12px] uppercase'>
                                            <p>Product</p>
                                            <span>sub total</span>
                                        </div>
                                        <div className='flex items-center gap-5 mt-5'>
                                            <img className='rounded ' src="/images/lapi.png" alt="" />
                                            <div className='text-[14px]'>
                                                <h2>Pinnaeple Macbook Pro 2022 <br />M1/ 512GB</h2>
                                                <span className='text-[#666666]'>x 3</span>
                                            </div>
                                        </div>
                                        <div className='flex justify-between text-[14px] mt-5'>
                                            <p>Worldwide Standard Shipping Free</p>
                                            <span className='text-[#F1352B]'>+ $9.50</span>
                                        </div>
                                        <div className='flex justify-between mt-5 '>
                                            <h2 className='font-bold'>Order Total</h2>
                                            <span className='text-[#1ABA1A]'>$1,746.50</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-gray-200 px-5 py-4 rounded flex flex-col gap-4 '>
                                    <div className='flex gap-5'>
                                        <input type="checkbox" />
                                        <h2 className='text-[14px] font-bold'>Direct Bank Transfer</h2>
                                    </div>
                                    <p className='px-8 text-[#666666] text-[13px]'>Make your payment directly into our bank account. Please use your <br />Order ID as the payment reference. Your order will not be shipped <br />until the funds have cleared in our account.</p>
                                    <div className='flex gap-5'>
                                        <input type="checkbox" />
                                        <h2 className='text-[14px] font-bold'>Cash on Delivery</h2>
                                    </div>
                                    <div className='flex gap-5 justify-between'>
                                        <div className='flex gap-5'>
                                            <input type="checkbox" />
                                            <p className='text-[14px] font-bold'>Paypal <span className='text-[#0D6EFD] underline'>What’s Paypal?</span></p>
                                        </div>
                                        <div>
                                            <FaPaypal />
                                        </div>
                                    </div>
                                    <button className='uppercase bg-[#01A49E] text-white rounded-xl py-2 '>place order</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
