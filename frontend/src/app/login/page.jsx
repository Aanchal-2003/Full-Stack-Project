'use client'

import { axiosAPIinstance, notify } from '@/utils/helper';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function AuthPage() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const cart = JSON.parse(localStorage.getItem("cart"));
    const cartData = cart != null ? cart.data : null;

    function submitHandler(e) {
        e.preventDefault()

        const payload = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        if (isLogin) {
            axiosAPIinstance.post("user/login", payload).then(
                async (response) => {
                    notify(response.data.message, response.data.success);
                    if (response.data.success) {
                        console.log("LOGIN RESPONSE:", response.data);
                        const cartResponse = await axiosAPIinstance.post("cart/sync", {
                            userId: response?.data?.data?.userId,
                            cart: cartData
                        })

                        const cart = cartResponse?.data?.cart;
                        let original_total = 0;
                        let final_total = 0;
                        const dbData = cart.map((item) => {
                            const { _id, original_price, final_price, name, thumbnail } = item.productId;
                            original_total += Number(original_price * item.qty)
                            final_total += Number(final_price * item.qty)

                            return {
                                id: _id,
                                name: name,
                                qty: item.qty,
                                final_price: final_price,
                                image: cartResponse.data.imageBaseUrl + thumbnail
                            }
                        })
                        localStorage.setItem(
                            "cart",
                            JSON.stringify({
                                original_total,
                                final_total,
                                data: dbData
                            })
                        );
                        router.push('/')
                    }
                }

            ).catch(
                (error) => {
                    notify(error?.response?.data?.message, false);
                }
            )
        }
        else {
            // ✅ REGISTER
            const name = e.target.name.value;
            const password = e.target.password.value;
            const email = e.target.email.value;
            const confirmPassword = e.target.confirmPassword.value;

            if (password !== confirmPassword) {
                notify("Passwords do not match", false);
                return;
            }

            axiosAPIinstance.post("user/register", {
                name,
                email,
                password
            })
                .then((response) => {
                    notify(response.data.message, response.data.success);

                    if (response.data.success) {
                        // After successful register → switch to login
                        setIsLogin(true);
                    }
                })
                .catch((error) => {
                    notify(error?.response?.data?.message || "Register failed", false);
                });
        }
    }

    return (
        <>
            <div className='w-full mx-auto bg-gray-200 px-6 py-4'>
                <div className='max-w-7xl mx-auto'>

                    {/* Breadcrumb */}
                    {/* <div className='px-6 py-4 rounded bg-white'>
                    <h2 className='text-[#999999] font-bold text-[14px]'>
                        Home / Shop / <span className='text-black'>
                            {isLogin ? 'Login' : 'Sign Up'}
                        </span>
                    </h2>
                </div> */}

                    {/* Form Section */}
                    <div className='px-6 py-8 rounded bg-white mt-5 grid grid-cols-1 md:grid-cols-2 gap-10'>

                        {/* Image */}
                        <div className='hidden md:block'>
                            <img src="/images/grp.png" alt="login" />
                        </div>

                        {/* Form */}
                        <form onSubmit={submitHandler} className='grid gap-4'>

                            <h2 className='text-[#01A49E] text-[28px]  font-bold'>
                                {isLogin ? 'Welcome Back' : 'Create Account'}
                            </h2>

                            <span className='text-[#999999] text-[14px] uppercase'>
                                {isLogin ? 'login to continue' : 'sign up to get started'}
                            </span>

                            {!isLogin && (
                                <div>
                                    <label className="text-sm text-gray-600">Your name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="John Deo"
                                        className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                                    />
                                </div>
                            )}

                            <div>
                                <label className="text-sm text-gray-600">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPass ? "text" : "password"}
                                        placeholder="••••••"
                                        name="password"
                                        className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 flex"
                                    />
                                    <span
                                        onClick={() => setShowPass(!showPass)}
                                        className="absolute right-3 top-3 cursor-pointer text-gray-500"
                                    >
                                        {showPass ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                            </div>

                            {/* {isLogin && (
                            <span className='text-[#999999] text-[13px] underline cursor-pointer'>
                                Forget Password ?
                            </span>
                        )} */}

                            {/* CONFIRM PASSWORD (ONLY REGISTER) */}
                            {!isLogin && (
                                <div>
                                    <label className="text-sm text-gray-600">
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showConfirmPass ? "text" : "password"}
                                            name="confirmPassword"
                                            placeholder="••••••"
                                            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 flex"
                                        />
                                        <span
                                            onClick={() =>
                                                setShowConfirmPass(!showConfirmPass)
                                            }
                                            className="absolute right-3 top-3 cursor-pointer text-gray-500"
                                        >
                                            {showConfirmPass ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>
                                </div>
                            )}

                            {/* BUTTON */}
                            <button
                                type="submit"
                                className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md transition"
                            >
                                {isLogin ? "LOGIN" : "REGISTER"}
                            </button>

                            <p className='text-[13px] text-[#999999] uppercase'>
                                {isLogin ? 'New user?' : 'Already have an account?'}
                                <span
                                    onClick={() => setIsLogin(!isLogin)}
                                    className='text-[#1ABA1A] ml-1 cursor-pointer'
                                >
                                    {isLogin ? 'Sign Up' : 'Login'}
                                </span>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
