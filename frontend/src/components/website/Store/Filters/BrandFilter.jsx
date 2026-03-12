'use client'

import React from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Check } from 'lucide-react'

export default function BrandFilter({ brandsData }) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const activeBrand = searchParams.get('brandSlug')

    function handleBrandClick(slug) {
        const query = new URLSearchParams(searchParams.toString())

        if (activeBrand === slug) {
            query.delete('brandSlug')
        } else {
            query.set('brandSlug', slug)
        }

        router.push(`?${query.toString()}`)
    }

    function clearBrand() {
        const query = new URLSearchParams(searchParams.toString())
        query.delete('brandSlug')
        router.push(`?${query.toString()}`, { scroll: false })
    }

    return (
        <div className='bg-gray-100 rounded-2xl space-y-5 px-4 py-4'>
            <h2 className='text-gray-800 mb-3 font-medium'>By Brand</h2>

            {/* ALL BRANDS */}
            <button
                onClick={clearBrand}
                className={`w-full mb-3 py-2 rounded-lg border transition
                    ${!activeBrand
                        ? 'bg-[#01A49E] text-white'
                        : 'bg-gray-50 hover:bg-gray-200'
                    }`}
            >
                All Brands
            </button>

            {/* BRAND LIST */}
            <ul className='space-y-1 max-h-52 overflow-auto pr-1'>
                {brandsData?.data?.map((br) => {
                    const isActive = activeBrand === br.slug

                    return (
                        <li
                            key={br._id}
                            onClick={() => handleBrandClick(br.slug)}
                            className={`flex gap-2 items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all
                                ${isActive
                                    ? 'bg-[#01A49E] text-white'
                                    : 'text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            <span>{br.name}</span>
                            <span>({br.count})</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
