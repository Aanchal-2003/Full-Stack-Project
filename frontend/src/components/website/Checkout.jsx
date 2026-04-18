'use client'

import { axiosAPIinstance, formatIndianCurrency, notify } from "@/utils/helper";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaPlus, FaHome, FaMoneyBillWave, FaCreditCard, FaTimes } from "react-icons/fa";
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
    const [addresses, setAddresses] = useState(user?.shipping_address || []);
    const [paymentMethod, setPaymentMethod] = useState(0);  //0 COD //1 -Online
    const [showAddressForm, setShowAddressForm] = useState(false);

    useEffect(() => {
        if (user?.shipping_address) {
            setAddresses(user.shipping_address);
        }
    }, [user]);
    const [addressFormData, setAddressFormData] = useState({
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
        contact: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddressFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAddressSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosAPIinstance.post(`/user/address/${user._id}`, addressFormData);
            if (response.data.success) {
                notify("Address added successfully", true);
                setShowAddressForm(false);
                setAddressFormData({
                    addressLine1: "",
                    addressLine2: "",
                    city: "",
                    state: "",
                    postalCode: "",
                    country: "",
                    contact: ""
                });
                
                // Update local state with the new list of addresses
                if (response.data.data) {
                    setAddresses(response.data.data);
                } else {
                    router.refresh();
                }
            } else {
                notify(response.data.message || "Failed to add address", false);
            }
        } catch (err) {
            console.log(err);
            notify("Something went wrong", false);
        }
    };

    function orderHandler() {
        if (addresses.length === 0) {
            return notify("Please add a shipping address", false);
        }
        axiosAPIinstance.post("/order/create", {
            user_id: user._id,
            paymentMethod: paymentMethod,
            shipping_address: addresses[selectedAddress]
        }).then((response) => {
            console.log(response);
            if (response.data.success) {
                if (paymentMethod == 0) {
                    router.push(`/thankYou/${response.data.order_id}`)
                } else {

                    const options = {
                        key: "rzp_test_Sa7u3XCPVwcAoe", // Using the key from your backend .env
                        currency: "INR",
                        name: "Sonam PVT LTD",
                        description: "Transaction for Order #" + response.data.order_id,
                        order_id: response.data.razorpay_order_id,
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
                            name: user?.name || "Guest User",
                            email: user?.email || "guest@example.com",
                            contact: user?.shipping_address?.[selectedAddress]?.contact || "7412890651",
                        },
                        theme: {
                            color: "#0D9488", // Teal color to match your theme
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
                        {!showAddressForm ? (
                            <button
                                onClick={() => setShowAddressForm(true)}
                                className="flex items-center gap-2 text-blue-600 font-semibold hover:underline"
                            >
                                <FaPlus /> Add New Address
                            </button>
                        ) : (
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-lg font-semibold">Enter New Address</h2>
                                    <button onClick={() => setShowAddressForm(false)} className="text-gray-500 hover:text-red-500">
                                        <FaTimes />
                                    </button>
                                </div>
                                <form onSubmit={handleAddressSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700">Address Line 1</label>
                                        <input
                                            type="text"
                                            name="addressLine1"
                                            value={addressFormData.addressLine1}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="House No, Building Name"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700">Address Line 2</label>
                                        <input
                                            type="text"
                                            name="addressLine2"
                                            value={addressFormData.addressLine2}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Street Name, Area"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={addressFormData.city}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">State</label>
                                        <input
                                            type="text"
                                            name="state"
                                            value={addressFormData.state}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Postal Code</label>
                                        <input
                                            type="text"
                                            name="postalCode"
                                            value={addressFormData.postalCode}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Country</label>
                                        <input
                                            type="text"
                                            name="country"
                                            value={addressFormData.country}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                                        <input
                                            type="text"
                                            name="contact"
                                            value={addressFormData.contact}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="md:col-span-2 flex gap-4">
                                        <button
                                            type="submit"
                                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl"
                                        >
                                            Save Address
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowAddressForm(false)}
                                            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 rounded-xl"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>

                    {/* Saved Addresses */}
                    <div className="bg-white p-5 rounded-xl shadow">
                        <h2 className="text-lg font-semibold mb-4">Select Delivery Address</h2>

                        <div className="space-y-4">
                            {(!addresses || addresses.length === 0) ? (
                                <p className="text-gray-500 text-center py-4">No addresses saved. Please add a new address.</p>
                            ) : (
                                addresses?.map((item, index) => (
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
                                ))
                            )}
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