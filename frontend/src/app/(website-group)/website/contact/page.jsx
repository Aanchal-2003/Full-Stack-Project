import React from 'react';
import { FaTwitter, FaFacebook, FaInstagramSquare, FaYoutube, FaPinterest, FaStripe } from "react-icons/fa";

export default function page() {
  return (
    <div className='w-full mx-auto bg-gray-200  px-6 py-4'>
      <div className='max-w-7xl mx-auto bg-gray-200'>

        {/* Home / Shop / contact */}

        <div className=' px-6 py-4 rounded bg-white'>
          <h2 className='text-[#999999] font-bold text-[14px]'>
            Home / Shop / <span className='text-[14px] font-bold text-black'>Contact</span>
          </h2>
        </div>


        {/* ready to work with us*/}


        <div className=' px-6 py-4 rounded bg-white mt-5'>
          <h2 className='uppercase text-[18px] font-bold'>ready to work with us</h2>
          <div className='md:grid grid-cols-5 gap-5'>

            <div className='col-span-3 flex flex-col gap-5 mt-5 '>
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
                <label htmlFor="">Email Address</label>
                <input className='border outline-0 border-gray-300 rounded py-2 px-4' type="email" name="" id="" placeholder='example@gmail.com' />
              </div>
              <div className='flex flex-col gap-3 text-[14px]'>
                <label htmlFor="">Phone Number <span className='text-[#666666]'>(Optional)</span></label>
                <input className='border outline-0 border-gray-300 rounded py-2 px-4' type="number" name="" id="" placeholder='+1 0231 4554 452' />
              </div>
              <div className='flex flex-col gap-3 text-[14px]'>
                <label htmlFor="">Country / Region *</label>
                <select className='border outline-0 border-gray-300 rounded py-2 px-4' name="" id="">
                  <option value="">United States (US)</option>
                </select>
              </div>
              <div className='flex flex-col gap-3 text-[14px]'>
                <label htmlFor="">Subject <span className='text-[#666666]'>(Optional)</span></label>
                <input className='border outline-0 border-gray-300 rounded py-2 px-4' type="number" name="" id="" />
              </div>
              <div className='flex flex-col gap-3 text-[14px]'>
                <label htmlFor="">Message</label>
                <textarea className='border outline-0 border-gray-300 rounded py-2 px-4' name="" id=""></textarea>
              </div>
              <div className='flex gap-5'>
                <input type="checkbox" />
                <p className='text-[14px]'>I want to receive news and updates once in a while. By submitting, I’m agreed to the <span className='text-[#1ABA1A]'>Terms & Conditons</span></p>
              </div>

              <button className='uppercase bg-[#01A49E] text-white rounded-xl py-2 '>send message</button>
            </div>

            <div className='col-span-2 bg-gray-200 rounded px-6 py-4 mt-5 md:mt-0  flex flex-col gap-5'>
              <div className='flex flex-col gap-5'>
                <p className='text-[#666666] uppercase text-[12px]'>united states (head quater)</p>
                <p>152 Thatcher Road St, Mahattan, 10463, US <br /> (+025) 3886 25 16 </p>
                <span className='text-[#1ABA1A]'>hello@swattechmart.com</span>
              </div>
              <div className='flex flex-col gap-5'>
                <p className='text-[#666666] uppercase text-[12px]'>united states (head quater)</p>
                <p>152 Thatcher Road St, Mahattan, 10463, US <br /> (+025) 3886 25 16 </p>
                <span className='text-[#1ABA1A]'>hello@swattechmart.com</span>
              </div>
              <div>
                <div className="flex text-black gap-4 md:gap-8  mt-5">
                  <div className="bg-white rounded-full p-2">
                    <FaTwitter />
                  </div>
                  <div className="bg-white rounded-full p-2">
                    <FaFacebook />
                  </div><div className="bg-white rounded-full p-2">
                    <FaInstagramSquare />
                  </div><div className="bg-white rounded-full p-2">
                    <FaYoutube />
                  </div><div className="bg-white rounded-full p-2">
                    <FaPinterest />
                  </div>
                </div>
              </div>
              <div>
                <img className='rounded' src="/images/lap.png" alt="" />
              </div>
            </div>

          </div>
        </div>


        {/* find us on google map */}


        <div className='hidden md:block px-6 py-4 rounded bg-white mt-5'>
          <h2 className='uppercase text-[18px] font-bold  '>find us on google map</h2>
          <img className='mt-5' src="/images/map.png" alt="" />
        </div>


      </div>
    </div>
  )
}
