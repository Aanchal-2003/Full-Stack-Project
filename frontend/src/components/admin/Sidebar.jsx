'use client'

import React from 'react'
import { MdOutlineDashboard, MdCategory } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";
import { SiBrandfolder } from "react-icons/si";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const navItems = [
    {
      name: "Dashboard",
      icons: MdOutlineDashboard,
      link: "/admin"
    },
    {
      name: "Category",
      icons: MdCategory,
      link: "/admin/category"
    },
    {
      name: "Brand",
      icons: SiBrandfolder,
      link: "/admin/brand"
    },
    {
      name: "Color",
      icons: IoIosColorPalette,
      link: "/admin/color"
    },
    {
      name: "Product",
      icons: FaProductHunt,
      link: "/admin/product"
    }
  ]
  const pathname = usePathname();
  return (
    <aside className='bg-white shadow-xl w-64 h-[100vh] flex flex-col'>
      <div className='px-6 py-5 text-[#ff7b00]'>
        <h2 className='font-bold text-2xl'>Admin<span className='text-black'>Panel</span></h2>
      </div>
      <nav className='p-4 space-y-2.5 flex-1'>
        {
          navItems.map((items, index) => {
            const active = pathname == items.link
            const Icon = items.icons
            return (
              <Link key={index} className={`group ${active ? "bg-[#ff7b00] text-white font-bold shadow.md" : "text-gray-600 hover:bg-orange-50 hover:text-[#ff7b00]"} transition-all duration-100 flex px-4 py-3 gap-4 rounded-xl items-center hover:bg-orange-50`} href={items.link}>
                <Icon size={20} className={`transition ${active ? "text-white" : "text-[#ff7b00] group-hover:text-[#ff7b00]"}`} />
                <span className={`font-medium group-hover:text-[#ff7b00] ${active ? "text-white" : "text-gray"}`}>{items.name}</span>
                {active && <span className='w-2 h-2 rounded-full bg-white ml-auto'></span>}
              </Link>
            )
          })
        }
      </nav>

    </aside>
  )
}
