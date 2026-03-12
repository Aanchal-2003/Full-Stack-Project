import React from 'react';
import { getCategories } from '@/api/category';
import Link from 'next/link';

export default async function CategorySection() {
    const categoriesData = await getCategories({ limit: 5, status: true, is_home: true });
    return (

        <div className=' bg-white rounded-xl p-4'>
            <h2 className='text-[#253D4E] text-[24px] font-semibold hover:text-gray-500 '>Category</h2>
            <ul className='space-y-3 mt-4'>
                {
                    categoriesData?.category?.map((cat) => {
                        return (
                            <Link href={`/store/${cat.slug}`} key={cat._id}>
                                <li
                                    className='border hover:border-teal-300 transition cursor-pointer rounded flex justify-between items-center px-4 py-2 mt-1'>
                                    <div className='flex items-center-safe gap-3' >
                                        <span className='text-teal-500'>
                                            <img className="w-10 h-10 rounded-md" src={categoriesData?.imageBaseUrl + cat.image} alt={cat.name} />
                                        </span>
                                        <span className=' text-[13px] font-bold '>{cat.name}</span>
                                    </div>
                                    <span className=' bg-[#01A49E78] text-white rounded-full px-2'>{cat.count}</span>
                                </li>
                            </Link>

                        )
                    })
                }
            </ul>
        </div>
    )
}
