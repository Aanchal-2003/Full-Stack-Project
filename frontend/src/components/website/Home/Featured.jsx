import { getBrand } from '@/api/brand';
import React from 'react';
import Link from 'next/link';

export default async function Featured() {
  const brandData = await getBrand({ limit: 10, status: true });

  return (
    <div className="bg-white shadow-md rounded-2xl p-4">
      <div className='flex justify-between'>
        <h2 className='uppercase font-bold text-[18px] '>featured brands</h2>
        <Link href="/store">
            <span className='text-[#666666] text-[13px] hover:text-[#01A49E] cursor-pointer'>View All</span>
        </Link>
      </div>
      <div className='flex gap-4 justify-center items-center mt-4 '>
        {
          brandData?.brand?.map((brand) => {
            return (
              <Link key={brand._id} href={`/store?brandSlug=${brand.slug}`}>
                <div className='shadow p-4 rounded cursor-pointer hover:scale-110 transition-all duration-300 flex flex-col justify-center items-center bg-white border border-transparent hover:border-gray-200'>
                  <img className='w-15 h-15 rounded-md object-contain' src={brandData?.imageBaseUrl + brand.image} alt={brand.name} />
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}
