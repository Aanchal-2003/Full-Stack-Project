'use client'

import { useEffect, useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { RxCaretDown } from "react-icons/rx";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { lsToCart, removeToCart } from "@/redux/reducers/cartReducer";
import { axiosAPIinstance, formatIndianCurrency } from "@/utils/helper";
import { FiSearch, FiShoppingCart, FiUser, FiChevronDown, FiMenu } from 'react-icons/fi';
import { useRouter } from "next/navigation";

const Header = ({ user }) => {
    const router = useRouter();
    const cart = useSelector((store) => store.cart);
    const dispatched = useDispatch();
    const [menuOpen, setMenuOpen] = useState(false);

    async function logOutHandler() {
        const response = await axiosAPIinstance.get("user/logout");
        dispatched(removeToCart())
        router.refresh();
    }

    const items = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Products",
            path: "/store"
        },
        {
            name: "Contact",
            path: "/contact"
        }
    ]

    const openMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(
        () => {
            dispatched(lsToCart())
        },
        []
    )

    return (
        <header className="w-full bg-white">
            <div className="max-w-7xl bg-white mx-auto px-6 py-4 rounded ">
                <div className="hidden md:flex justify-between items-center ">
                    <div className="flex gap-4 justify-center items-center text-[12px]">
                        <p className="w-[99px] h-[28px] bg-[#EBEEF6] flex rounded justify-center items-center "> Hotline 24/7</p>
                        <span className="font-bold"> (025) 3886 25 16</span>
                    </div>
                    <div className="flex gap-5 justify-center items-center text-[14px]">
                        <p>Sell on Swoo</p>
                        <p>Order Tracki</p>

                        <div className="flex items-center gap-1 cursor-pointer">
                            USD <FiChevronDown size={14} />
                        </div>

                        <div className="flex items-center gap-1 cursor-pointer">
                            Eng <FiChevronDown size={14} />
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="flex justify-between items-center">

                        {/* LOGO */}
                        <div className="flex gap-2">
                            <Link className="flex gap-2" href={"/"}>
                                <img className="w-[40px]" src="/images/Rectangle-2.png" alt="Rectangle" />

                                <span className="font-bold hidden md:block text-[14px]">SWOO <br /> TECH MART</span>
                            </Link>
                        </div>


                        {/* Navigation */}
                        <nav className="hidden lg:flex items-center gap-8 font-medium">
                            {
                                items.map((item, index) => {
                                    return (
                                        <Link key={index} href={item.path}>
                                            <div className="flex items-center gap-1 cursor-pointer">
                                                {item.name}
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </nav>

                        <div className="hidden md:flex gap-10 justify-center items-center ">
                            <div className="uppercase">
                                <button onClick={logOutHandler} className="text-teal font-bold cursor-pointer text-[11px]">Logout</button>
                                {
                                    user ? (
                                        <Link href="/profile">
                                            <div className="flex items-center gap-2 cursor-pointer">
                                                <FiUser size={18} />
                                                <p className="font-semibold text-sm">{user.name}</p>
                                            </div>
                                        </Link>
                                    ) : (
                                        <Link href="/login">
                                            <div className="flex items-center gap-2 cursor-pointer">
                                                <FiUser size={18} />
                                                <p className="font-semibold text-sm">LOG IN / REGISTER</p>
                                            </div>
                                        </Link>
                                    )
                                }
                            </div>

                            {/* CART */}
                            <Link href={"/cart"}>
                                <div className="flex gap-2">
                                    <div className="bg-gray-300 relative py-4 px-5 rounded-full"></div>
                                    <span className="bg-[#01A49E] text-white flex justify-center items-center absolute rounded-full px-2">
                                        {cart.data.length}
                                    </span>
                                    <div>
                                        <span className="text-[#666666] text-[11px] uppercase">cart</span>
                                        <p className="font-bold text-[14px]">{formatIndianCurrency(cart.final_total)}</p>
                                    </div>
                                </div>
                            </Link>
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
            <div className="max-w-7xl mx-auto grid  md:grid-cols-2 px-6 py-4 rounded bg-[#01A49E]">

                {/*  Search Bar  */}
                <div className="flex justify-center items-center   bg-white py-3 rounded-3xl px-4">
                    <span className="font-bold  hidden md:flex justify-center items-center text-[12px]">All Categories <RxCaretDown className="text-2xl" /></span>
                    <input className="ms-5 border-0 outline-0" type="text" placeholder="Search anything..." />
                    <FaSearch className="ml-auto " />
                </div>

                {/* Info Bar */}
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