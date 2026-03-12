'use client'

import { Check } from 'lucide-react'
import { useSearchParams, useRouter } from 'next/navigation'
import React from 'react'

export default function ColorFilter({ colorsData }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeColor = searchParams.get('color_ids');

    function handleColorClick(id) {
        const query = new URLSearchParams(searchParams.toString())

        if (activeColor === id) {
            query.delete('color_ids')
        } else {
            query.set('color_ids', id)
        }

        router.push(`?${query.toString()}`, { scroll: false })
    }

    return (
        <div className='bg-gray-100 rounded-2xl space-y-5 px-4 py-4'>
            <h2 className='text-gray-800 font-medium mb-3'>By Color</h2>

            <div className='grid grid-cols-5 gap-2'>
                {colorsData?.data?.map((color) => {
                    const isActive = activeColor === color._id

                    return (
                        <button
                            key={color._id}
                            onClick={() => handleColorClick(color._id)}
                            style={{ background: color.code }}
                            className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-110
                                ${isActive
                                    ? 'ring ring-black scale-110'
                                    : 'hover:ring-1 hover:ring-gray-400'
                                }
                            `}
                        >
                            {isActive && (
                                <Check size={14} className='text-white drop-shadow' />
                            )}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
