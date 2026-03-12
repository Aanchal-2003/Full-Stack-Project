import { getBrand } from '@/api/brand';
import React from 'react';

export default async function Featured() {
  const brandData = await getBrand({ limit: 10, status: true });

  return (
    <div className="bg-white shadow-md rounded-2xl p-4">
      <div className='flex justify-between'>
        <h2 className='uppercase font-bold text-[18px] '>featured brands</h2>
        <span className='text-[#666666] text-[13px] hover:text-[#01A49E] cursor-pointer'>View All</span>
      </div>
      <div className='flex gap-4 justify-center items-center mt-4 '>
        {
          brandData?.data?.map((brand) => {
            return (
              <div key={brand._id} className='shadow p-4 rounded cursor-pointer hover:scale-102 transition duration-100 flex flex-col justify-center items-center'>
                <img className='w-15 h-15 rounded-md' src={process.env.NEXT_PUBLIC_BRAND_IMAGE_URL + brand.image} alt="" />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
