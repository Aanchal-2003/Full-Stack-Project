import React from 'react'
import { FaLaptop, FaMobileAlt, FaCamera } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { FaTabletScreenButton } from "react-icons/fa6";
import Slider from '@/components/website/Slider';
import { ProgressBar } from '@/components/website/ProgressBar';
import Slider2 from '@/components/website/Slider2';



export default function page() {
  const catItems = [
    {
      name: "Laptops",
      icons: FaLaptop,
      number: "1"
    },
    {
      name: "PC & Computers",
      icons: RiComputerLine,
      number: "2"
    },
    {
      name: "Cell Phones",
      icons: FaMobileAlt,
      number: "3"
    },
    {
      name: "Tablets",
      icons: FaTabletScreenButton,
      number: "4"
    },
    {
      name: "Cameras",
      icons: FaCamera,
      number: "5"
    }
  ]

  return (
    <div className='max-w-7xl bg-gray-200 mx-auto px-6 py-4 '>


      {/* Category & slider */}
      <div className='grid grid-cols-5 mt-5 gap-4'>
        <div className=' bg-white rounded-2xl order-2 md:order-1 p-4'>
          <h2 className='text-[#253D4E] text-[24px] font-semibold '>Category</h2>
          {
            catItems.map((items, index) => {
              const Icon = items.icons;
              return (
                <div key={index} className='flex w-full mt-5 gap-6 space-y-3  border border-gray-300 rounded justify-between  items-center'>
                  {/* <Icon className='text-[#01A49E78]  font-bold text-xl' /> */}
                  <span className=' text-[13px] font-bold '>{items.name}</span>
                  <span className=' bg-[#01A49E78] rounded-full px-2'>{items.number}</span>
                </div>
              )
            })
          }
        </div>
        <div className='bg-gray-100  col-span-4 order-1 md:order-1 rounded-xl overflow-hidden'>
          <Slider />
        </div>
      </div>


      {/* Featured Brand & Top Categories */}
      <div className="md:grid grid-cols-2 gap-6 mt-5">
        <div className="bg-white shadow-md rounded-2xl p-4">
          <div className='flex justify-between'>
            <h2 className='uppercase font-bold text-[18px] '>featured brands</h2>
            <span className='text-[#666666] text-[13px]'>View All</span>
          </div>
          <div className='flex flex-wrap justify-between gap-2 mt-4'>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/010/994/232/small/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" className='w-[97px]' alt="" />
            <img src="https://static.vecteezy.com/system/resources/thumbnails/010/994/232/small/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" className='w-[97px]' alt="" /><img src="https://static.vecteezy.com/system/resources/thumbnails/010/994/232/small/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" className='w-[97px]' alt="" /><img src="https://static.vecteezy.com/system/resources/thumbnails/010/994/232/small/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" className='w-[97px]' alt="" /><img src="https://static.vecteezy.com/system/resources/thumbnails/010/994/232/small/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" className='w-[97px]' alt="" /><img src="https://static.vecteezy.com/system/resources/thumbnails/010/994/232/small/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" className='w-[97px]' alt="" /><img src="https://static.vecteezy.com/system/resources/thumbnails/010/994/232/small/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" className='w-[97px]' alt="" /><img src="https://static.vecteezy.com/system/resources/thumbnails/010/994/232/small/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" className='w-[97px]' alt="" /><img src="https://static.vecteezy.com/system/resources/thumbnails/010/994/232/small/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" className='w-[97px]' alt="" /><img src="https://static.vecteezy.com/system/resources/thumbnails/010/994/232/small/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" className='w-[97px]' alt="" />
          </div>
        </div>
        <div className="bg-white mt-3 md:mt-0 shadow-md rounded-2xl p-4">
          <div className='flex justify-between'>
            <h2 className='uppercase font-bold text-[18px] '>top categories</h2>
            <span className='text-[#666666] text-[13px]'>View All</span>
          </div>
          <div className='flex flex-wrap justify-evenly mt-10'>
            <div className='flex flex-col items-center justify-center'>
              <img width={113} src="/images/videogame.png
              " alt="" />
              <span>Laptops</span>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img width={113} src="/images/videogame.png
              " alt="" />
              <span>Laptops</span>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img width={113} src="/images/videogame.png
              " alt="" />
              <span>Laptops</span>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img width={113} src="/images/videogame.png
              " alt="" />
              <span>Laptops</span>
            </div>
          </div>
        </div>
      </div>


      {/* Deals of the Day */}
      <div className='grid md:grid-cols-6 gap-8 mt-5'>
        <div className='col-span-4'>
          <div className='w-full flex justify-between uppercase items-center bg-[#01A49E] py-4  px-4 rounded-2xl '>
            <h2 className='text-white font-bold text-[18px]'>deals of the day</h2>
            <span className='text-[#FFFFFF] text-[13px] '>View All</span>
          </div>
          <div className='flex px-4 bg-white rounded-2xl py-14 gap-6'>
            <div className='hidden  md:flex flex-col justify-between ' >
              <img className='w-[35px] h-[50px]' src="/images/mobile.png
              " alt="" />
              <img className='w-[35px] h-[50px]' src="/images/mobile.png
              " alt="" />
              <img className='w-[35px] h-[50px]' src="/images/mobile.png
              " alt="" />
              <img className='w-[35px] h-[50px]' src="/images/mobile.png
              " alt="" />
              <img className='w-[35px] h-[50px]' src="/images/mobile.png
              " alt="" />
            </div>
            <div className='relative ms-5 md:order-1  mt-5'>
              <span className='bg-teal-400 text-white font-bold px-6 absolute top-[-20] left-[-15] py-2 rounded-2xl'>SAVE <br /> $199.00</span>
              <img className='w-[405px] h-[350px] rounded-2xl' src="/images/mobile.png" alt="" />
            </div>
            <div className='flex flex-col gap-6 md:order-2 justify-evenly'>
              <h2 className='text-[16px] font-bold'>Xioma Redmi Note 11 Pro 256GB 2023, Black</h2>
              <p className='text-2xl  text-[#01A49E]'>$569.00 <span className='text-[#666666] text-[16px] line-through'>$750.00</span></p>
              <ul className='text-[12px] hidden md:block list-disc pl-5"'>
                <li> Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
                <li> Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
                <li> Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
              </ul>
              <div className='flex flex-row gap-6'>
                <button className='uppercase text-[#01A49E] bg-gray-200 px-3 rounded text-[13px]'>free shipping</button>
                <button className='uppercase text-[#01A49E] bg-gray-200 px-3 rounded text-[12px]'>free gift</button>
              </div>
              <div className='flex justify-between'>
                <h2 className='text-[13px] uppercase'>hurry up! <br /> Promotion will <br /> expires in</h2>
                <span className='bg-gray-200 rounded flex font-bold flex-col justify-center items-center p-2 '>-162 <span className='text-[#666666]'>d</span></span>
                <span className='bg-gray-200 rounded flex font-bold flex-col justify-center items-center p-2 '>-09 <span className='text-[#666666]'>h</span></span>
                <span className='bg-gray-200 rounded flex font-bold flex-col justify-center items-center p-2 '>-32 <span className='text-[#666666]'>m</span></span>
                <span className='bg-gray-200 rounded flex font-bold flex-col justify-center items-center p-2 '>-34 <span className='text-[#666666]'>s</span></span>
              </div>

              <div className='hidden md:block'>
                <ProgressBar />
                <p className='text-[#666666] text-[13px]'>Sold: <span className='text-black font-bold'>24/76</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-2 ml-auto hidden md:flex flex-col gap-3'>
          <img className='w-[350] h-[177px] rounded-2xl' src="/images/videogame.png" alt="" />
          <img className='w-[350] h-[177px] rounded-2xl' src="/images/tablets.png" alt="" />
          <img className='w-[350] h-[177px] rounded-2xl' src="/images/mobile2.png" alt="" />
        </div>

      </div>

      {/* Pre Order */}
      <div className='bg-[#01A49E] rounded-2xl hidden md:flex justify-evenly  gap-6 items-center '>
        <div className=''>
          <h2 className='text-[#FFFFFF] text-2xl uppercase font-semibold '>pre order</h2>
          <p className='text-[#999999] text-[10px] uppercase'>be the first to own</p>
          <span className='text-[#FFFFFF] text-[14px] capitalize'>from $399</span>
        </div>
        <img src="/images/watch.png" alt="" />
        <div className='text-[#FFFFFF] '>
          <p className='text-[12px]'>Opplo Watch Sport</p>
          <span className=' text-[12px]'>Series 8</span>
          <h2 className='text-[30px]'> A healthy leap ahead</h2>
        </div>
        <button className='bg-white rounded-full p-4'>Discover Now</button>
      </div>


      {/* Best Seller */}
      <div className='bg-white rounded-2xl mt-5 md:mt-0 px-10 py-8'>
        <div className='flex justify-between'>
          <div className='flex uppercase gap-5 text-[18px]'>
            <h2 className='font-semibold '>best seller</h2>
            <span className='hidden md:block'>new in</span>
            <span className='hidden md:block'>popular</span>
          </div>
          <span className='text-[#666666] text-[13px]'>View All</span>
        </div>
        <div>
          <Slider2 />
        </div>
      </div>


      {/* top cellphones & tablets */}
      <div className='bg-white rounded-2xl px-10 py-8 mt-10'>
        <div className='flex justify-between'>
          <h2 className='uppercase text-[18px] font-bold'>top cellphones & tablets</h2>
          <span className='text-[#666666] text-[13px]'>View All</span>
        </div>
        <div className='grid grid-cols-6   gap-6'>
          <div className='bg-[url(/images/bg.png)]   mt-5 rounded-2xl hidden md:flex flex-col gap-6 px-4 py-2 col-span-3'>
            <h2 className='text-2xl uppercase mt-2'>redmi note <br /> 12 Pro+ 5g</h2>
            <span className='text-[#666666] text-[12px]'>Rise to the challenge</span>
            <button className='bg-[#222222] uppercase text-[#FFFFFF] text-[12px] px-2 py-2 rounded-2xl w-[120px] '>shop now</button>
          </div>
          <div className='col-span-3 hidden md:flex mt-10 flex-wrap  justify-between'>
            <div className='flex gap-6'>
              <div>
                <h2 className='text-[14px]'>iPhone (iOS)</h2>
                <span className='text-[#666666] text-[12px]'>74 Items</span>
              </div>
              <img className='w-[50px] h-[50px]' src="/images/mobile.png" alt="" />
            </div>
            <div className='flex gap-6'>
              <div>
                <h2 className='text-[14px]'>iPhone (iOS)</h2>
                <span className='text-[#666666] text-[12px]'>74 Items</span>
              </div>
              <img className='w-[50px] h-[50px]' src="/images/mobile.png" alt="" />
            </div>
            <div className='flex gap-6 '>
              <div>
                <h2 className='text-[14px]'>iPhone (iOS)</h2>
                <span className='text-[#666666] text-[12px]'>74 Items</span>
              </div>
              <img className='w-[50px] h-[50px]' src="/images/mobile.png" alt="" />
            </div>
            <div className='flex gap-6 '>
              <div>
                <h2 className='text-[14px]'>iPhone (iOS)</h2>
                <span className='text-[#666666] text-[12px]'>74 Items</span>
              </div>
              <img className='w-[50px] h-[50px]' src="/images/mobile.png" alt="" />
            </div>
            <div className='flex gap-6 '>
              <div>
                <h2 className='text-[14px]'>iPhone (iOS)</h2>
                <span className='text-[#666666] text-[12px]'>74 Items</span>
              </div>
              <img className='w-[50px] h-[50px]' src="/images/mobile.png" alt="" />
            </div>
            <div className='flex gap-6 '>
              <div>
                <h2 className='text-[14px]'>iPhone (iOS)</h2>
                <span className='text-[#666666] text-[12px]'>74 Items</span>
              </div>
              <img className='w-[50px] h-[50px]' src="/images/mobile.png" alt="" />
            </div>
          </div>
        </div>
        <div className='flex justify-between mt-10'>
          <Slider2 />
        </div>
      </div>


      {/* Best Laptops & Computers */}
      <div className='bg-white rounded-2xl px-10 py-8 mt-10'>
        <div className='flex justify-between'>
          <h2 className='uppercase text-[18px] font-bold'>Best Laptops & Computers</h2>
          <span className='text-[#666666] text-[13px]'>View All</span>
        </div>
        <div className='grid grid-cols-6   gap-6'>
          <div className='bg-[url(/images/laptop.png)]  mt-5 rounded-2xl flex flex-col gap-6 px-4 py-2 col-span-3'>
            <h2 className='text-2xl text-white uppercase mt-2'><span className='font-bold'>Mobok 2 <br /> superchard </span><br /> by M2</h2>
            <span className='text-[#666666] text-white text-[12px] mb-4'>Start from <span className='text-[#01A49E]' >$1,199</span></span>
          </div>
          <div className='col-span-3 flex mt-10 flex-wrap  justify-between'>
            <div className='flex gap-6'>
              <div>
                <h2 className='text-[14px]'>iPhone (iOS)</h2>
                <span className='text-[#666666] text-[12px]'>74 Items</span>
              </div>
              <img className='w-[50px] h-[50px]' src="/images/mobile.png" alt="" />
            </div>
            <div className='flex gap-6'>
              <div>
                <h2 className='text-[14px]'>iPhone (iOS)</h2>
                <span className='text-[#666666] text-[12px]'>74 Items</span>
              </div>
              <img className='w-[50px] h-[50px]' src="/images/mobile.png" alt="" />
            </div>
            <div className='flex gap-6 '>
              <div>
                <h2 className='text-[14px]'>iPhone (iOS)</h2>
                <span className='text-[#666666] text-[12px]'>74 Items</span>
              </div>
              <img className='w-[50px] h-[50px]' src="/images/mobile.png" alt="" />
            </div>
            <div className='flex gap-6 '>
              <div>
                <h2 className='text-[14px]'>iPhone (iOS)</h2>
                <span className='text-[#666666] text-[12px]'>74 Items</span>
              </div>
              <img className='w-[50px] h-[50px]' src="/images/mobile.png" alt="" />
            </div>
            <div className='flex gap-6 '>
              <div>
                <h2 className='text-[14px]'>iPhone (iOS)</h2>
                <span className='text-[#666666] text-[12px]'>74 Items</span>
              </div>
              <img className='w-[50px] h-[50px]' src="/images/mobile.png" alt="" />
            </div>
            <div className='flex gap-6 '>
              <div>
                <h2 className='text-[14px]'>iPhone (iOS)</h2>
                <span className='text-[#666666] text-[12px]'>74 Items</span>
              </div>
              <img className='w-[50px] h-[50px]' src="/images/mobile.png" alt="" />
            </div>
          </div>
        </div>
        <div className='flex justify-between mt-10'>
          <Slider2 />
        </div>
      </div>


      {/* Audios & Cameras */}
      <div className='grid md:grid-cols-6 gap-6 mt-10'>
        <div className='col-span-2 bg-white rounded-2xl px-5 py-4  '>
          <div className='flex justify-between'>
            <h2 className='text-[18px] font-bold'>Audios & Cameras</h2>
            <span className='text-[#666666] text-[13px]'>View All</span>
          </div>
          <div className='bg-[url(/images/speaker.png)] mt-5'>
            <h2 className='text-[14px] font-bold text-white px-8 py-15 '>Best <br /> Speaker <br /> 2023</h2>
          </div>
          <div className='flex flex-wrap gap-10 items-center  justify-evenly mt-8'>
            <div className='flex flex-col items-center gap-2'>
              <img className='rounded-full w-[120px] h-[120px]' src="/images/mobile2.png" alt="" />
              <h2 className='text-[14px] font-bold'>Speaker</h2>
              <span className='text-[#666666] text-[12px]'>12 items</span>
            </div>
            <div className='flex flex-col items-center gap-2  flex-wrap'>
              <img className='rounded-full w-[120px] h-[120px]' src="/images/mobile2.png" alt="" />
              <h2 className='text-[14px] font-bold'>Speaker</h2>
              <span className='text-[#666666] text-[12px]'>12 items</span>
            </div>
            <div className='flex flex-col items-center gap-2  flex-wrap'>
              <img className='rounded-full w-[120px] h-[120px]' src="/images/mobile2.png" alt="" />
              <h2 className='text-[14px] font-bold'>Speaker</h2>
              <span className='text-[#666666] text-[12px]'>12 items</span>
            </div>
            <div className='flex flex-col items-center gap-2  flex-wrap'>
              <img className='rounded-full w-[120px] h-[120px]' src="/images/mobile2.png" alt="" />
              <h2 className='text-[14px] font-bold'>Speaker</h2>
              <span className='text-[#666666] text-[12px]'>12 items</span>
            </div>
          </div>
        </div>
        <div className='col-span-2 bg-white rounded-2xl px-5 py-4  '>
          <div className='flex justify-between'>
            <h2 className='text-[18px] font-bold'>Audios & Cameras</h2>
            <span className='text-[#666666] text-[13px]'>View All</span>
          </div>
          <div className='bg-[url(/images/speaker.png)] mt-5'>
            <h2 className='text-[14px] font-bold text-white px-8 py-15 '>Best <br /> Speaker <br /> 2023</h2>
          </div>
          <div className='flex flex-wrap gap-10 items-center  justify-evenly mt-8'>
            <div className='flex flex-col items-center gap-2'>
              <img className='rounded-full w-[120px] h-[120px]' src="/images/mobile2.png" alt="" />
              <h2 className='text-[14px] font-bold'>Speaker</h2>
              <span className='text-[#666666] text-[12px]'>12 items</span>
            </div>
            <div className='flex flex-col items-center gap-2  flex-wrap'>
              <img className='rounded-full w-[120px] h-[120px]' src="/images/mobile2.png" alt="" />
              <h2 className='text-[14px] font-bold'>Speaker</h2>
              <span className='text-[#666666] text-[12px]'>12 items</span>
            </div>
            <div className='flex flex-col items-center gap-2  flex-wrap'>
              <img className='rounded-full w-[120px] h-[120px]' src="/images/mobile2.png" alt="" />
              <h2 className='text-[14px] font-bold'>Speaker</h2>
              <span className='text-[#666666] text-[12px]'>12 items</span>
            </div>
            <div className='flex flex-col items-center gap-2  flex-wrap'>
              <img className='rounded-full w-[120px] h-[120px]' src="/images/mobile2.png" alt="" />
              <h2 className='text-[14px] font-bold'>Speaker</h2>
              <span className='text-[#666666] text-[12px]'>12 items</span>
            </div>
          </div>
        </div>
        <div className='col-span-2 bg-white rounded-2xl px-5 py-4  '>
          <div className='flex justify-between'>
            <h2 className='text-[18px] font-bold'>Audios & Cameras</h2>
            <span className='text-[#666666] text-[13px]'>View All</span>
          </div>
          <div className='bg-[url(/images/speaker.png)] mt-5'>
            <h2 className='text-[14px] font-bold text-white px-8 py-15 '>Best <br /> Speaker <br /> 2023</h2>
          </div>
          <div className='flex flex-wrap gap-10 items-center  justify-evenly mt-8'>
            <div className='flex flex-col items-center gap-2'>
              <img className='rounded-full w-[120px] h-[120px]' src="/images/mobile2.png" alt="" />
              <h2 className='text-[14px] font-bold'>Speaker</h2>
              <span className='text-[#666666] text-[12px]'>12 items</span>
            </div>
            <div className='flex flex-col items-center gap-2  flex-wrap'>
              <img className='rounded-full w-[120px] h-[120px]' src="/images/mobile2.png" alt="" />
              <h2 className='text-[14px] font-bold'>Speaker</h2>
              <span className='text-[#666666] text-[12px]'>12 items</span>
            </div>
            <div className='flex flex-col items-center gap-2  flex-wrap'>
              <img className='rounded-full w-[120px] h-[120px]' src="/images/mobile2.png" alt="" />
              <h2 className='text-[14px] font-bold'>Speaker</h2>
              <span className='text-[#666666] text-[12px]'>12 items</span>
            </div>
            <div className='flex flex-col items-center gap-2  flex-wrap'>
              <img className='rounded-full w-[120px] h-[120px]' src="/images/mobile2.png" alt="" />
              <h2 className='text-[14px] font-bold'>Speaker</h2>
              <span className='text-[#666666] text-[12px]'>12 items</span>
            </div>
          </div>
        </div>
      </div>


      {/* Two Images */}
      <div className='grid grid-cols-2 gap-6 mt-10'>
        <div>
          <img className='w-[646px] h-[180px] rounded-2xl' src="/images/mobile2.png" alt="" />
        </div>
        <div>
          <img className='w-[646px] h-[180px] rounded-2xl' src="/images/mobile2.png" alt="" />
        </div>
      </div>


      {/* your recently viewed */}
      <div className='bg-white rounded-2xl mt-10 px-10 py-8'>
        <div className='flex items-center gap-6'>
          <h2 className='font-bold text-[18px] uppercase'>your recently viewed</h2>
          <span className='text-[#666666] text-[13px]'>View All</span>
        </div>
        <Slider2 />
      </div>


      {/* Swoo – #1 Online Marketplace for technology */}
      <div className='flex flex-col gap-10 mt-10 mb-10 py-6 px-4'>
        <h2 className='text-[18px] font-bold'>Swoo – #1 Online Marketplace for technology</h2>
        <p className='text-[#666666] text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae posuere mi. Quisque iaculis dignissim scelerisque. Morbi condimentum sagittis leo vitae tempor. <br />
          Suspendisse in dolor odio. Sed aliquet ac lacus ut luctus. Fusce mattis sollicitudin sem, id lobortis nibh ullamcorper a. Donec vehicula dolor et arcu consequat mattis. <br />
          Fusce mattis nec nulla in scelerisque.</p>
        <p className='text-[#666666] text-[14px]'>Morbi pharetra sem mauris, nec aliquet ipsum vestibulum suscipit. Curabitur non euismod dui. Proin eget justo eu erat luctus placerat. Nam rhoncus ipsum ac enim faucibus, at consequat <br />
          ante maximus. Vestibulum at nibh ac odio ultrices varius. Duis vitae libero mollis, lobortis ligula id, varius erat. Sed id odio dictum, laoreet enim ac, commodo magna. Praesent sodales porttitor <br />
          maximus. Sed a lacus felis. Maecenas consectetur consequat orci scelerisque malesuada. Fusce vel orci eu tortor consequat mattis quis at ante. Class aptent taciti sociosqu ad litora <br />
          torquent per conubi,</p>
        <span className='text-[13px]'>View All</span>
      </div>


    </div>
  )
}
