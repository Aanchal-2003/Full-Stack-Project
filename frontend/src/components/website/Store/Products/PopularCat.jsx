import React from 'react';
import { getCategories } from '@/api/category';

export default async function PopularCat() {
    const categoriesData = await getCategories({ limit: 10, status: true, is_best: true });
    return (
        <div className='max-w-7xl mx-auto mt-5 bg-white px-4 py-8 rounded-2xl'>

            {/* SECTION TITLE */}
            <h2 className='text-sm font-semibold uppercase'>popular categories</h2>

            {/* CATEGORIES GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-6 gap-x-4">
                {
                    categoriesData?.category?.map((cat, index) => {
                        return (
                            <div
                                key={index}
                                count={cat.count}
                                className='flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition cursor-pointer'
                            >
                                <img
                                    className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-md"
                                    src={categoriesData?.imageBaseUrl + cat.image}
                                    alt={cat.name}
                                />
                                <div>
                                    <h2 className='text-sm font-semibold text-gray-900"'>{cat.name}</h2>
                                    <span className='text-xs text-gray-500'>{cat.count} Items</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
