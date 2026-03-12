import React from 'react';
import CategorySection from '@/components/website/Home/CategorySection';
import HeroSection from '@/components/website/Home/HeroSection';
import Featured from '@/components/website/Home/Featured';
import TopCategories from '@/components/website/Home/TopCategories';
import Deals from '@/components/website/Home/Deals';
import PreOrder from '@/components/website/Home/PreOrder';
import BestSeller from '@/components/website/Home/BestSeller';
import TopCellphones from '@/components/website/Home/TopCellphones';
import BestLaptops from '@/components/website/Home/BestLaptops';
import Audio from '@/components/website/Home/Audio';
import RecentlyViewed from '@/components/website/Home/RecentlyViewed';

export default function page() {
  return (
    <div className='w-full bg-gray-200 mx-auto px-6 py-4 '>
      <div className='max-w-7xl mx-auto'>

        <div className='md:grid grid-cols-5 mt-5 gap-4'>
          <CategorySection />
          <HeroSection  />
        </div>

        <div className="md:grid grid-cols-2 gap-6 mt-5">
          <Featured />
          <TopCategories />
        </div>

        <Deals />
        <PreOrder />
        <BestSeller />
        <TopCellphones />
        <BestLaptops />
        <Audio />
        
        <div className='grid grid-cols-2 gap-6 mt-10'>
          <div>
            <img className='w-[646px] h-[180px] rounded-2xl' src="/images/mobile2.png" alt="" />
          </div>
          <div>
            <img className='w-[646px] h-[180px] rounded-2xl' src="/images/mobile2.png" alt="" />
          </div>
        </div>

        <RecentlyViewed />

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
    </div>
  )
}
