import { getProductById } from '@/api/product';
import MultipleImageAdd from '@/components/admin/MultipleImage';
import React from 'react'

export default async function page({ params }) {
    const resolvePromise = await params;
    const product = await getProductById(resolvePromise?.product_id);
    return (
        <MultipleImageAdd productData={product?.data} />
    )
}
