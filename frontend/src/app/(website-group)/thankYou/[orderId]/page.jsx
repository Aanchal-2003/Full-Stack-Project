import React from 'react'
import Link from 'next/link'
export default async function page({ params }) {
    const promise = await params;
    const orderId = promise.orderId;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">

                <div className="text-green-500 text-5xl mb-3">✔</div>

                <h1 className="text-2xl font-bold mb-2">
                    Thank You for Your Order 🎉
                </h1>

                <p className="text-gray-600 mb-4">
                    Your order has been placed successfully.
                </p>

                {orderId && (
                    <p className="text-sm text-gray-500 mb-4">
                        <span className="font-semibold">Order ID:</span> {orderId}
                    </p>
                )}

                <div className="flex flex-col gap-3">
                    <Link
                        href="/orders"
                        className="bg-black text-white py-2 rounded-lg hover:bg-gray-800"
                    >
                        View Orders
                    </Link>

                    <Link
                        href="/"
                        className="border py-2 rounded-lg hover:bg-gray-100"
                    >
                        Continue Shopping
                    </Link>
                </div>

            </div>
        </div>
    )
}