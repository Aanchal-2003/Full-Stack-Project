import { getColorById } from '@/api/color';
import EditColor from '@/components/admin/EditColor';
import React from 'react'

export default async function page({ params }) {
    const resolvePromise = await params;
    const color = await getColorById(resolvePromise?.color_id);
    const data = color != null ? color.data : {};
    return (
        <EditColor color={data} />
    )
}
