import { getCategoryById } from '@/api/category';
import EditCategory from '@/components/admin/EditCategory'
import React from 'react'

export default async function page({ params }) {
    const resolvePromise = await params;
    const category = await getCategoryById(resolvePromise?.category_id);
    const data = category != null ? category.data : {};
    return (
        <EditCategory category={data} />
    )
}
