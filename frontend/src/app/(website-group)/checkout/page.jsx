import { getUser } from '@/api/user'
import Checkout from '@/components/website/Checkout'
import React from 'react'

export default async function page() {
    const user = await getUser();
    return (
        <Checkout user={user} />
  )
}
