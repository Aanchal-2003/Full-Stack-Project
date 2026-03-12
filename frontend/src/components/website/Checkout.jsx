'use client'

import { axiosAPIinstance, formatIndianCurrency } from "@/utils/helper";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaPlus, FaHome, FaMoneyBillWave, FaCreditCard } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useRazorpay } from "react-razorpay";
import { removeToCart } from "@/redux/reducers/cartReducer";



export default function CheckoutPage({ user }) {
    console.log(user)
    const dispacher = useDispatch();
    const { error, isLoading, Razorpay } = useRazorpay();
    const router = useRouter()
    const cart = useSelector((store) => store.cart);
    const [selectedAddress, setSelectedAddress] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState(0);  //0 COD //1 -Online



    function orderHandler() {
        axiosAPIinstance.post("/order/create", {
            user_id: user._id,
            paymentMethod: paymentMethod,
            shipping_address: user.shipping_address[selectedAddress]
        }).then((response) => {
            console.log(response);
            if (response.data.success) {
                if (paymentMethod == 0) {
                    router.push(`/thankYou/${response.data.order_id}`)
                } else {

                    const options = {
                        key: "rzp_test_hYGOo0vBKlVRkD",
                        currency: "INR",
                        name: "Sonam PVT LTD",
                        description: "Test Transaction",
                        order_id: response.data.razorpay_order_id, // Generate order_id on server
                        handler: (Razorpayresponse) => {
                            axiosAPIinstance.post("order/success",
                                {
                                    order_id: response.data.order_id,
                                    user_id: user?._id,
                                    razorpay_response: Razorpayresponse
                                }
                            ).then(
                                (successresponse) => {
                                    console.log(successresponse)

                                    if (successresponse.data.status) {
                                        router.push(`/thankYou/${response.data.order_id}`)
                                        dispacher(removeToCart())
                                    }
                                }
                            ).catch(
                                (err) => {
                                    console.log(err)
                                }
                            )
                        },
                        prefill: {
                            name: user.name,
                            email: user.email,
                            contact: "7412890651",
                        },
                        theme: {
                            color: "#F37254",
                        },
                    };

                    const razorpayInstance = new Razorpay(options);
                    razorpayInstance.open();

                }
            }
        }).catch((error) => {
            console.log(error)
        })
    }



    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LEFT SECTION */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Add Address */}
                    <div className="bg-white p-5 rounded-xl shadow">
                        <button className="flex items-center gap-2 text-blue-600 font-semibold hover:underline">
                            <FaPlus /> Add New Address
                        </button>
                    </div>

                    {/* Saved Addresses */}
                    <div className="bg-white p-5 rounded-xl shadow">
                        <h2 className="text-lg font-semibold mb-4">Select Delivery Address</h2>

                        <div className="space-y-4">
                            {user?.shipping_address?.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedAddress(index)}
                                    className={`border rounded-xl p-4 cursor-pointer transition ${selectedAddress === index
                                        ? "border-blue-600 bg-blue-50"
                                        : "border-gray-200 hover:border-blue-400"
                                        }`}
                                >
                                    <div className="flex justify-between items-start">
                                        <div>

                                            <p className="text-sm text-gray-600 mt-1">
                                                {item.addressLine1}
                                            </p>
                                            <p className="text-sm text-gray-600 mt-1">
                                                {item.addressLine2} -{item.city}- <br /> {item.country}-{item.
                                                    postalCode} -{item.state}
                                            </p>
                                            <p className="text-sm text-gray-600 mt-1">
                                                Phone: {item.contact}
                                            </p>
                                        </div>


                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="bg-white p-5 rounded-xl shadow">
                        <h2 className="text-lg font-semibold mb-4">Payment Method</h2>

                        <div className="space-y-3">
                            {/* COD */}
                            <div
                                onClick={() => setPaymentMethod(0)}
                                className={`border p-4 rounded-xl cursor-pointer flex items-center gap-3 ${paymentMethod === 0
                                    ? "border-blue-600 bg-blue-50"
                                    : "border-gray-200"
                                    }`}
                            >
                                <FaMoneyBillWave className="text-green-600" />
                                <span className="font-medium">Cash on Delivery</span>
                            </div>

                            {/* Online */}
                            <div
                                onClick={() => setPaymentMethod(1)}
                                className={`border p-4 rounded-xl cursor-pointer flex items-center gap-3 ${paymentMethod === 1
                                    ? "border-blue-600 bg-blue-50"
                                    : "border-gray-200"
                                    }`}
                            >
                                <FaCreditCard className="text-purple-600" />
                                <span className="font-medium">Online Payment</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="bg-white p-5 rounded-xl shadow h-fit">
                    <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                            <span>Price </span>
                            <span>{formatIndianCurrency((cart?.original_total))}</span>
                        </div>

                        <div className="flex justify-between text-green-600">
                            <span>Discount</span>
                            <span>- {formatIndianCurrency((cart?.original_total) - (cart?.final_total))}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Delivery Charges</span>
                            <span className="text-green-600">FREE</span>
                        </div>

                        <hr />

                        <div className="flex justify-between font-semibold text-lg">
                            <span>Total Amount</span>
                            <span>{formatIndianCurrency((cart?.final_total))}</span>
                        </div>
                    </div>

                    <button onClick={orderHandler} className="w-full mt-6 bg-teal-500 hover:bg-teal-700 cursur-pointer text-white py-3 rounded-xl font-semibold">
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
}