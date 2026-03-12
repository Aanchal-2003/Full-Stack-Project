import { getproduct } from '@/api/product';
import ProductCard from '@/components/website/Store/Products/ProductCard';
import Pagination from '@/components/website/Store/Products/Pagination';
import React from 'react';
import { getUser } from '@/api/user';

export default async function storePage({ searchParams }) {
    const user = await getUser();
    const promiseResolve = await searchParams;
    const color_ids = await promiseResolve?.color_ids ?? null;
    const brandSlug = await promiseResolve?.brandSlug ?? null;
    const min_price = await promiseResolve?.min_price ?? null;
    const max_price = await promiseResolve?.max_price ?? null;
    const limit = await promiseResolve?.limit ?? null;
    const sort = await promiseResolve?.sort ?? null;
    const productData = await getproduct({ status: true, color_ids, brandSlug, min_price, max_price, limit, sort })
    return (
        <>
            <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 '>
                {
                    productData?.product?.length > 0
                        ?
                        productData.product.map((product) => (
                            <ProductCard user={user} product={product} imageBaseUrl={productData.imageBaseUrl} key={product._id} />
                        ))
                        :
                        <h2>No Product Found</h2>
                }
            </div>
            <Pagination />
        </>


    )
}
