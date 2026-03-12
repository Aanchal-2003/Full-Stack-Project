import React from 'react';
import { getCategories } from '@/api/category';
import { getBrand } from '@/api/brand';
import { getColor } from '@/api/color';
import PriceFilter from './PriceFilter';
import ColorFilter from './ColorFilter';
import BrandFilter from './BrandFilter';
import CategoryFilter from './CategoryFilter';
import Link from 'next/link';

export default async function Filters() {
    const categoriesData = await getCategories({ status: true });
    const brandsData = await getBrand({ status: true });
    const colorsData = await getColor({ status: true });

    return (
        <aside className='text-sm space-y-8 sticky top-20'>

            {/* HEADER */}
            <div className='flex items-center justify-between'>
                <h3 className='text-lg font-semibold'>Filters</h3>
                <Link href="/store" className='text-xs text-blue-600 hover:underline'>
                    Clear All
                </Link>
            </div>

            {/* CATEGORY */}
            <CategoryFilter categoriesData={categoriesData} />

            {/* PRICE */}
            <PriceFilter />

            {/* COLOR */}
            <ColorFilter colorsData={colorsData} />

            {/* BRAND */}
            <BrandFilter brandsData={brandsData} />

        </aside>
    )
}
