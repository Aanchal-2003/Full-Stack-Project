'use client'

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const ProductToolbar = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [limit, setLimit] = useState("0");
    const [sort, setSort] = useState("");

    /* 🔁 Sync URL → State */
    useEffect(() => {
        setLimit(searchParams.get("limit") || "0");
        setSort(searchParams.get("sort") || "");
    },
        [searchParams]
    );

    /* 🔢 Limit Handler */
    function limitFilterHandler(value) {
        const query = new URLSearchParams(searchParams.toString());
        // setLimit(limit);
        query.set("limit", value);
        router.push(`?${query.toString()}`);
    }

    /* 🔃 Sort Handler */
    function sortHandler(value) {
        const query = new URLSearchParams(searchParams.toString());

        if (value) query.set("sort", value);
        else query.delete("sort");

        router.push(`?${query.toString()}`);
    }

    return (
        <div className='flex flex-wrap mt-5 justify-between items-center text-sm text-gray-600'>
            <p>1-40 of 120 results</p>

            <div className='flex gap-4'>
                {/* LIMIT */}
                <select
                    value={limit}
                    onChange={(e) => limitFilterHandler(e.target.value)}
                    className='border rounded px-2 py-1'
                >
                    <option value={0} >All</option>
                    <option value={1} >1</option>
                    <option value={2} >2</option>
                    <option value={3} >3</option>
                    <option value={4} >4</option>
                    <option value={5} >5</option>
                    <option value={10} >10</option>
                </select>

                {/* SORT */}
                <select
                    value={sort}
                    onChange={(e) => sortHandler(e.target.value)}
                    className='border rounded px-2 py-1'
                >
                    <option >Latest</option>
                    <option value="price_asc" >Price Low → High</option>
                    <option value="price_desc" >Price Low → High</option>
                </select>
            </div>
        </div>
    )
}

export default ProductToolbar;