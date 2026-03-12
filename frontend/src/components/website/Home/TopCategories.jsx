import React from 'react';
import { getCategories } from '@/api/category';
import Link from 'next/link';

export default async function TopCategories() {
    const categoriesData = await getCategories({ limit: 5, status: true, is_top: true });
    return (
        <div className="bg-white mt-3 md:mt-0 shadow-md rounded-2xl p-4">
            <div className='flex justify-between'>
                <h2 className='uppercase font-bold text-[18px] '>top categories</h2>
                <span className='text-[#666666] text-[13px] hover:text-[#01A49E] cursor-pointer'>View All</span>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {
                    categoriesData?.category?.map((cat) => {
                        return (
                            <Link href={`/store/${cat.slug}`} key={cat._id}>
                                <div className='flex flex-col justify-evenly items-center rounded mt-4 cursor-pointer hover:scale-102 transition duration-100 shadow p-4 '>

                                    <img className="w-15 h-15 rounded-md" src={categoriesData?.imageBaseUrl + cat.image} alt={cat.name} />

                                    <span className='text-sm font-medium'>{cat.name}</span>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
