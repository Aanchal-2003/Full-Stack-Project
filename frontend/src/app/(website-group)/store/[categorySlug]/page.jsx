import { getproduct } from '@/api/product';
import ProductCard from '@/components/website/Store/Products/ProductCard';
import ProductToolbar from '@/components/website/Store/Products/ProductToolbar';
import React from 'react';

export default async function page({ params, searchParams }) {
    const categorySlugPromise = await params;
    const categorySlug = categorySlugPromise?.categorySlug;
    const promiseResolve = await searchParams;
    const color_ids = await promiseResolve?.color_ids ?? null;
    const brandSlug = await promiseResolve?.brandSlug ?? null;
    const min_price = await promiseResolve?.min_price ?? null;
    const max_price = await promiseResolve?.max_price ?? null;
    const limit = promiseResolve?.limit ?? null;

    const productData = await getproduct({ status: true, categorySlug, color_ids: color_ids, brandSlug, min_price, max_price, limit })
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3gap-6'>
                {
                    productData?.product?.length > 0
                        ?
                        productData.product.map((product) => (
                            <ProductCard product={product} imageBaseUrl={productData.imageBaseUrl} key={product._id} />
                        ))
                        :
                        <h2>No Product Found</h2>
                }
            </div>
                <ProductToolbar />
        </div>

    )
}
