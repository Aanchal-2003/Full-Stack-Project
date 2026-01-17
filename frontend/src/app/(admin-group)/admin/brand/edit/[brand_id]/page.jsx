import { getBrandById } from '@/api/brand';
import EditBrand from '@/components/admin/EditBrand'
import React from 'react'

export default async function page({ params }) {
    const resolvePromise = await params;
    const brand = await getBrandById(resolvePromise?.brand_id);
    const data = brand != null ? brand.data : {};
    return (
        <EditBrand brand={data} />
    )
}
