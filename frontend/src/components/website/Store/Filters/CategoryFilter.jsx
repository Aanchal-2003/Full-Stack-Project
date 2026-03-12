'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function CategoryFilter({ categoriesData }) {
    const pathname = usePathname();

    return (
        <div className='bg-gray-100 rounded-2xl space-y-5 px-4 py-4'>
            <h2 className='text-gray-800 font-medium mb-3'>By Category</h2>

            <Link href="/store">
                <button className={`w-full mb-3 py-2 rounded-lg border transition font-medium
                        ${pathname == '/store'
                        ? 'bg-[#01A49E] text-white'
                        : 'bg-gray-50 hover:bg-gray-200'
                    }`}
                >
                    All Categories
                </button>
            </Link>

            <ul className='space-y-4 pr-1' >
                {
                    categoriesData?.category?.map((cat) => {
                        const isActive = pathname === `/store/${cat.slug}`

                        return (
                            <Link key={cat._id} href={`/store/${cat.slug}`}>
                                <li
                                    className={`
                                        flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition
                                        ${isActive
                                            ? 'bg-[#01A49E] text-white'
                                            : 'text-gray-700 hover:bg-gray-200'
                                        }
                                        `}
                                >
                                    <span>{cat.name}</span>
                                    <span>({cat.count})</span>
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}
