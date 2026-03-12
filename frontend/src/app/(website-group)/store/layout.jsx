import Filters from '@/components/website/Store/Filters/Filters';
import PopularCat from '@/components/website/Store/Products/PopularCat';
import ProductToolbar from '@/components/website/Store/Products/ProductToolbar';
import TopCellPhones from '@/components/website/Store/Products/TopCellPhones';
import React from 'react';

export default function RootLayout({ children }) {
    return (
        <div className='w-full mx-auto bg-gray-200  px-6 py-4'>

            <div className='max-w-7xl mx-auto'>
                {/* Home / Shop / Top Cell Phones & Tablets */}
                <div className='max-w-7xl mx-auto px-6 py-4 rounded bg-white p-10'>
                    <h2 className='text-[#999999] font-bold text-[14px]'>
                        Home / Shop / <span className='text-[14px] font-bold text-black'>Top Cell Phones & Tablets</span>
                    </h2>
                </div>

                <TopCellPhones />
                <PopularCat />

                <div className='grid grid-cols-5 mt-10 gap-5 '>
                    <div className='col-span-1'>
                        <Filters />
                    </div>
                    <div className='col-span-4 px-6 py-4 rounded-xl bg-white p-10'>
                        <ProductToolbar />
                        {children}
                    </div>
                </div>
            </div>

        </div>

    )
}
