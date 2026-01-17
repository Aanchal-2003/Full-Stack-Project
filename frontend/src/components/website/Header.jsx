'use client'

import { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { RxCaretDown } from "react-icons/rx";
import Link from "next/link";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="w-full bg-white">
            <div className="max-w-7xl bg-white mx-auto px-6 py-4 rounded ">
                <div className="hidden md:flex justify-between items-center ">
                    <div className="flex gap-4 justify-center items-center text-[12px]">
                        <p className="w-[99px] h-[28px] bg-[#EBEEF6] flex rounded justify-center items-center "> Hotline 24/7</p>
                        <span className="font-bold"> (025) 3886 25 16</span>
                    </div>
                    <div className="flex gap-5 justify-center items-center text-[14px]">
                        <Link href={"/website/about"}>
                            <p>Sell on Swoo</p>
                        </Link >
                        <Link href={"/website/singleProduct"}>
                            <p>Order Tracki</p>
                        </Link>
                        <button className="flex border border-gray-100 rounded p-1" >USD <RxCaretDown className="text-2xl " />  | Eng <RxCaretDown className="text-2xl " /></button>
                    </div>
                </div>
                <div>
                    <div className="mt-4">
                        <div>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2">
                                    <Link className="flex gap-2" href={"/"}>
                                        <img className="w-[40px]" src="/images/Rectangle-2.png" alt="Rectangle" />

                                        <p className="font-bold hidden md:block text-[14px]">SWOO <br /> TECH MART</p>
                                    </Link>
                                    <ul className="hidden md:flex text-[14px] gap-10 ms-20 font-bold justify-center items-center">
                                        <Link href={"/"}>
                                            <li className="flex items-center">HOME <RxCaretDown className="text-2xl " /></li>
                                        </Link>
                                        <Link href={"/website/profile"}>
                                            <li className="flex items-center">PAGES <RxCaretDown className="text-2xl" /></li>
                                        </Link>
                                        <Link href={"/website/store"}>
                                            <li className="flex items-center">PRODUCTS <RxCaretDown className="text-2xl" /></li>
                                        </Link>
                                        <Link href={"/website/contact"}>
                                            <li className="flex ">CONTACT</li>
                                        </Link>
                                    </ul>
                                </div>
                                <div className="hidden md:flex gap-10 justify-center items-center ">
                                    <div className="uppercase">
                                        <Link href={"/website/checkout"}>
                                            <span className="text-[#666666] text-[11px]">welcome</span>
                                        </Link>
                                        <div className="flex items-center gap-2">
                                            <Link href={"/website/login"}>
                                                <p className="font-bold text-[14px]">log in /  </p>
                                            </Link>
                                            <Link href={"/website/register"}>
                                                <span className="font-bold text-[14px]"> register</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="bg-gray-300 relative py-4 px-5 rounded-full"></div>
                                        <span className="bg-[#01A49E] text-white flex justify-center items-center absolute rounded-full px-2">1</span>
                                        <div>

                                            <Link href={"/website/cart"}>
                                                <span className="text-[#666666] text-[11px] uppercase">cart</span>
                                            </Link>
                                            <p className="font-bold text-[14px]">$1,689.00</p>
                                        </div>
                                    </div>
                                </div>
                                <FaBars
                                    className="md:hidden text-xl cursor-pointer"
                                    onClick={openMenu}
                                />
                            </div>
                            {menuOpen && (
                                <div className="md:hidden mt-4 bg-white shadow rounded">
                                    <ul className="flex flex-col gap-4 p-4 font-bold">
                                        <li>HOME</li>
                                        <li>PAGES</li>
                                        <li>PRODUCTS</li>
                                        <li>CONTACT</li>
                                        <li className="border-t pt-3">LOG IN / REGISTER</li>
                                    </ul>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto grid  md:grid-cols-2 px-6 py-4 rounded bg-[#01A49E]">
                <div className="flex justify-center items-center   bg-white py-3 rounded-3xl px-4">
                    <span className="font-bold  hidden md:flex justify-center items-center text-[12px]">All Categories <RxCaretDown className="text-2xl" /></span>
                    <input className="ms-5" type="text" placeholder="Search anything..." />
                    <FaSearch className="ml-auto " />
                </div>
                <div className=" gap-5 hidden md:flex text-[14px] justify-center items-center uppercase text-white">
                    <p>free shipping over $199</p>
                    <p> 30 days money back</p>
                    <p> 100% secure payment</p>
                </div>
            </div>
        </header>
    );
};


export default Header;