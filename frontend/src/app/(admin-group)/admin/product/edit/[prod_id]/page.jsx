import { getProductById } from '@/api/product';
import EditProduct from '@/components/admin/EditProduct';
import React from 'react'

export default async function page({ params }) {
    const resolvePromise = await params;
    const product = await getProductById(resolvePromise?.prod_id);
    const data = product != null ? product.data : {};
    
    return (
        <EditProduct product={data} />
    )
}
