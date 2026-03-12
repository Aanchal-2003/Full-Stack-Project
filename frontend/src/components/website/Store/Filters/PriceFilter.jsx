'use client'

import React from 'react'
import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css'
import { useSearchParams, useRouter } from 'next/navigation'

export default function PriceFilter() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const minPrice = Number(searchParams.get('min_price') ?? 300)
    const maxPrice = Number(searchParams.get('max_price') ?? 80000)
    const price = [minPrice, maxPrice]

    function priceHandler(data) {
        const query = new URLSearchParams(searchParams.toString())
        query.set('min_price', data[0])
        query.set('max_price', data[1])
        router.push(`?${query.toString()}`, { scroll: false })
    }

    return (
        <div className='bg-gray-100 rounded-2xl space-y-5 px-4 py-4'>
            <h2 className='font-medium mb-3 text-gray-800'>By Price</h2>

            <div className='relative h-2 bg-gray-300 rounded mb-3'>
                <RangeSlider
                    min={300}
                    max={80000}
                    value={price}
                    onInput={priceHandler}
                />
            </div>

            <div className='flex items-center gap-2'>
                <input
                    className='w-full border rounded px-2 py-1'
                    value={price[0]}
                    readOnly
                />
                <span>-</span>
                <input
                    className='w-full border rounded px-2 py-1'
                    value={price[1]}
                    readOnly
                />
                <button
                    className="bg-green-500 text-white px-3 py-1 rounded"
                    onClick={() => priceHandler(price)}
                >
                    Go
                </button>
            </div>
        </div>
    )
}
