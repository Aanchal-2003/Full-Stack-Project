'use client'

import { useEffect, useRef, useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { RxCaretDown } from "react-icons/rx";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { lsToCart, removeToCart } from "@/redux/reducers/cartReducer";
import { axiosAPIinstance, formatIndianCurrency } from "@/utils/helper";
import { FiSearch, FiShoppingCart, FiUser, FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import { useRouter, useSearchParams } from "next/navigation";
import { getCategories } from "@/api/category";
import { getproduct } from "@/api/product";

const Header = ({ user }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const cart = useSelector((store) => store.cart);
    const dispatched = useDispatch();
    const [menuOpen, setMenuOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [catOpen, setCatOpen] = useState(false);
    const [searchResults, setSearchResults] = useState({ products: [], imageBaseUrl: "" });
    const [selectedCat, setSelectedCat] = useState({ name: "All Categories", slug: "" });
    const [searchVal, setSearchVal] = useState("");
    const [showResults, setShowResults] = useState(false);
    const catRef = useRef(null);
    const searchRef = useRef(null);

    async function logOutHandler() {
        const response = await axiosAPIinstance.get("user/logout");
        dispatched(removeToCart())
        router.refresh();
    }

    const fetchCategories = async () => {
        const data = await getCategories({ status: true });
        setCategories(data.category || []);
    }

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (searchVal) params.append("name", searchVal);
        if (selectedCat.slug) params.append("categorySlug", selectedCat.slug);
        setShowResults(false);
        router.push(`/store?${params.toString()}`);
    }

    const fetchLiveResults = async (val) => {
        if (val.trim().length >= 4) {
            const data = await getproduct({ name: val, limit: 8, status: true });
            setSearchResults({ items: data.product, imageBaseUrl: data.imageBaseUrl + "main/" });
            setShowResults(true);
        } else {
            setShowResults(false);
        }
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

    useEffect(() => {
        dispatched(lsToCart());
        fetchCategories();
        // Ensure fresh state on mount
        setShowResults(false);
        setSearchResults({ items: [], imageBaseUrl: "" });
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (searchVal.trim().length >= 4) {
                fetchLiveResults(searchVal);
            } else {
                setShowResults(false);
            }
        }, 300);
        return () => clearTimeout(timeoutId);
    }, [searchVal]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (catRef.current && !catRef.current.contains(event.target)) {
                setCatOpen(false);
            }
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowResults(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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
                <div className="flex justify-center items-center relative  bg-white py-3 rounded-3xl px-4" ref={searchRef}>
                    <div className="relative" ref={catRef}>
                        <span
                            onClick={() => setCatOpen(!catOpen)}
                            className="font-bold hidden md:flex justify-center items-center text-[12px] cursor-pointer whitespace-nowrap min-w-[140px] gap-2"
                        >
                            {selectedCat.name} <FiChevronDown className="text-lg" />
                        </span>

                        {catOpen && (
                            <div className="absolute top-[48px] left-0 w-[220px] bg-white shadow-2xl rounded-xl z-[999] max-h-[400px] overflow-y-auto border border-gray-100 py-2">
                                <ul className="flex flex-col">
                                    <li
                                        onClick={() => {
                                            setSelectedCat({ name: "All Categories", slug: "" });
                                            setCatOpen(false);
                                        }}
                                        className="px-5 py-3 hover:bg-teal-50 hover:text-[#01A49E] cursor-pointer text-sm font-bold border-b border-gray-50 flex justify-between items-center transition-colors"
                                    >
                                        All Categories
                                    </li>
                                    {categories.length > 0 ? (
                                        categories.map((cat) => (
                                            <li
                                                key={cat._id}
                                                onClick={() => {
                                                    setSelectedCat({ name: cat.name, slug: cat.slug });
                                                    setCatOpen(false);
                                                }}
                                                className="px-5 py-3 hover:bg-teal-50 hover:text-[#01A49E] cursor-pointer text-sm font-medium transition-colors"
                                            >
                                                {cat.name}
                                            </li>
                                        ))
                                    ) : (
                                        <li className="px-5 py-3 text-gray-400 text-xs text-center italic">No categories found</li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="flex-1 relative flex items-center">
                        <input
                            className="pl-5 pr-14 py-1 border-0 outline-0 w-full text-sm placeholder:text-gray-400"
                            type="text"
                            placeholder="Search anything..."
                            value={searchVal}
                            onChange={(e) => setSearchVal(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            onFocus={() => searchVal.trim().length >= 4 && setShowResults(true)}
                        />

                        {/* Action Buttons (Clear & Search) */}
                        <div className="absolute right-0 flex items-center gap-2 pr-3 z-[1001]">
                            {searchVal && (
                                <FiX
                                    onClick={() => {
                                        setSearchVal("");
                                        setSearchResults({ items: [], imageBaseUrl: "" });
                                        setShowResults(false);
                                    }}
                                    title="Clear search"
                                    className="cursor-pointer text-gray-400 hover:text-red-500 transition-colors text-lg"
                                />
                            )}
                            <div className="w-[1px] h-4 bg-gray-200 mx-1"></div>
                            <FiSearch
                                onClick={handleSearch}
                                title="Search"
                                className="cursor-pointer text-[#01A49E] hover:scale-110 transition-transform text-lg"
                            />
                        </div>

                        {/* Search Results Dropdown */}
                        {showResults && searchResults.items?.length > 0 && (
                            <div className="absolute top-[45px] left-0 w-full bg-white shadow-2xl rounded-2xl z-[1000] border border-gray-100 mt-2 overflow-hidden">
                                <div className="p-3 bg-gray-50 border-b border-gray-100 text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                                    Similar Items
                                </div>
                                <div className="max-h-[350px] overflow-y-auto">
                                    {searchResults.items.map((product) => (
                                        <Link
                                            key={product._id}
                                            href={`/product/${product._id}`}
                                            onClick={() => setShowResults(false)}
                                            className="flex items-center gap-4 px-4 py-3 hover:bg-teal-50/50 transition-all duration-300 group border-b border-gray-50 last:border-0 outline-none"
                                        >
                                            <div className="w-14 h-14 bg-white border border-gray-100 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center p-1 group-hover:border-[#01A49E]/30 transition-colors shadow-sm">
                                                <img
                                                    src={searchResults.imageBaseUrl + product.thumbnail}
                                                    alt={product.name}
                                                    className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                                                    onError={(e) => { e.target.src = '/images/placeholder.png'; }}
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-bold text-gray-800 truncate mb-0.5 group-hover:text-[#01A49E] transition-colors">{product.name}</h4>
                                                <p className="text-[11px] text-[#01A49E] font-bold">{formatIndianCurrency(product.sale_price)}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <button
                                    onClick={handleSearch}
                                    className="w-full py-3 bg-white text-[#01A49E] text-xs font-bold border-t border-gray-100 hover:bg-teal-50 transition-colors"
                                >
                                    SEE ALL RESULTS
                                </button>
                            </div>
                        )}
                    </div>
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