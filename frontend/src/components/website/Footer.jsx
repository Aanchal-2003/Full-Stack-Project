import { FaTwitter, FaFacebook, FaInstagramSquare, FaYoutube, FaPinterest, FaStripe } from "react-icons/fa";
import { RxCaretDown } from "react-icons/rx";
import { FaCcVisa } from "react-icons/fa6";
import { SiPaypal, SiMastercard, SiVisa, SiStripe, SiKlarna } from "react-icons/si";


const Footer = () => {
    return (
        <div className="w-full bg-white">
            <footer className="bg-white text-gray-300 mt-5  max-w-7xl mx-auto">
                <div className="max-w-7xl mx-auto px-6 py-10 md:flex justify-between">
                    <div className="grid-col-5">
                        <h2 className="text-black font-bold uppercase"> Swoo - 1st NYC tech online market</h2>
                        <p className="text-[#000000] text-[14px] mt-4 hidden md:block">HOTLINE 24/7</p>
                        <span className="text-[30px] text-[#E15E43] hidden md:block font-bold"> (025) 3686 25 16</span>
                        <p className="text-[#000000] text-[14px] mt-4">257 Thatcher Road St, Brooklyn, Manhattan, <br /> NY 10092</p>
                        <span className="text-[#000000] text-[14px] ">contact@Swootechmart.com</span>
                        <div className="flex text-black gap-8  mt-5">
                            <div className="bg-gray-300 rounded-full p-2">
                                <FaTwitter />
                            </div>
                            <div className="bg-gray-300 rounded-full p-2">
                                <FaFacebook />
                            </div><div className="bg-gray-300 rounded-full p-2">
                                <FaInstagramSquare />
                            </div><div className="bg-gray-300 rounded-full p-2">
                                <FaYoutube />
                            </div><div className="bg-gray-300 rounded-full p-2">
                                <FaPinterest />
                            </div>
                        </div>
                    </div>
                    <div className="grid-col-5 hidden md:block">
                        <h2 className="text-black font-bold uppercase"> top Categories</h2>
                        <ul className="text-[#666666] mt-4  flex flex-col text-[14px] gap-2">
                            <li>Laptops</li>
                            <li>PC & Computers</li>
                            <li>Cell Phones</li>
                            <li>Tablets</li>
                            <li>Gaming & VR</li>
                            <li>Networks</li>
                            <li>Camera</li>
                            <li>Sounds</li>
                            <li>Office</li>
                        </ul>
                    </div>
                    <div className="grid-col-5 mt-5 md:mt-0">
                        <h2 className="text-black font-bold uppercase"> company</h2>
                        <ul className="text-[#666666] mt-4 flex flex-col text-[14px] gap-2">
                            <li>About Swoo</li>
                            <li>Contact </li>
                            <li>Career</li>
                            <li>Blog</li>
                            <li>Sitemap</li>
                            <li>Store Locations</li>
                        </ul>
                    </div>
                    <div className="grid-col-5 mt-5 md:mt-0">
                        <h2 className="text-black font-bold uppercase"> help center</h2>
                        <ul className="text-[#666666] mt-4 flex flex-col text-[14px] gap-2">
                            <li>Customer Service</li>
                            <li>Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Trach Order</li>
                            <li>FAQs</li>
                            <li>My Account</li>
                            <li>Product Support</li>
                        </ul>
                    </div>
                    <div className="grid-col-5 hidden md:block">
                        <h2 className="text-black font-bold uppercase">partner</h2>
                        <ul className="text-[#666666] mt-4 flex flex-col text-[14px] gap-2">
                            <li>Become Seller</li>
                            <li>Affiliate </li>
                            <li>Advertise</li>
                            <li>Partnership</li>
                        </ul>
                    </div>
                </div>
                <div className=" hidden md:flex gap-4 items-center">
                    <button className="text-black border ms-20 flex justify-center items-center gap-4 border-gray-300 px-4 py-2 rounded text-[14px]">USD <RxCaretDown className="text-2xl" /></button>
                    <button className="text-black border flex justify-center items-center gap-4 border-gray-300 px-4 py-2 rounded text-[14px]">Eng <RxCaretDown className="text-2xl" /></button>
                    <p className="text-[18px] ms-50 font-bold text-black uppercase">subscribe & get <span className="text-[#E15E43]">10% off</span>for your first order</p>
                </div>
                <div className=" ">
                    <input type="email" placeholder="Enter your email address" className="text-[#757575] border border-gray rounded outline-0 w-[50%] ms-5 md:ms-125 p-2" />
                    <span className="text-[#E15E43] uppercase text-[14px] font-bold ">subscribe </span>
                    <p className="text-[#666666] ms-5 md:ms-125 text-[13px] mt-2 italic">By subscribing, you’re accepted the our Policy</p>
                </div>
                <div className="md:flex justify-between items-center px-6 py-10">
                    <p className="text-[#666666] text-[14px]">© 2024 <span className="text-black font-bold ">Shawonetc3</span> . All Rights Reserved</p>
                    <div className="flex mt-5 md:mt-0 gap-6 text-3xl text-black">
                        <SiPaypal />
                        <SiMastercard />
                        <SiVisa />
                        <SiStripe />
                        <SiKlarna />
                    </div>
                    <span className="text-[#0D6EFD] text-[14px] hidden md:block"> Mobile Site</span>
                </div>
            </footer>
        </div>
    );
};



export default Footer;