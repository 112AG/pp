import React from 'react'
import { Link } from 'react-router-dom'
import blogbackground from '../assets/blogbackground.webp';
import artistrebelblog from '../assets/artistrebelblog.webp';

function Blog() {
  const categories = [
    { label: "ALL RANTS", bgColor: "bg-red-500", textColor: "text-white" },
    { label: "DESIGN", bgColor: "bg-yellow-400", textColor: "text-black" },
    { label: "UI/UX", bgColor: "bg-cyan-400", textColor: "text-black" },
    { label: "TUTORIALS", bgColor: "bg-gray-200", textColor: "text-black" },
    { label: "INDUSTRY", bgColor: "bg-lime-400", textColor: "text-black" },
  ]

  return (
    <div>
    <div className="bg-cover bg-center pt-[90px]" style={{ backgroundImage: `url(${blogbackground})` }}>
      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center pt-8 pb-24">
        {/* Red blog banner */}
        <div className="mb-4 relative w-[260px] flex items-center">
          <img src={artistrebelblog} alt="" />
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-black text-black text-center mb-2 tracking-tight font-presser-bold">REBEL</h1>

        {/* Archives in red */}
        <h2 className="text-5xl md:text-6xl font-black text-red-600 text-center mb-8  font-presser-bold">ARCHIVES</h2>

        {/* Tagline */}
        <p className="text-center text-sm md:text-[32px] text-black font-medium leading-tight font-presser-medium">
          Unfiltered thoughts on design, tech,
          <br />
          and the beautiful chaous of creativity
        </p>
      </div>

      {/* Divider line */}
      <div className="w-full border-t-2 border-black"></div>

      {/* Category buttons */}
      <div className="flex flex-wrap gap-2 justify-center py-4 px-4">
        {categories.map((category) => (
          <button
            key={category.label}
            className={`${category.bgColor} ${category.textColor} font-black text-xs md:text-sm px-4 py-2 border-2 border-black hover:opacity-80 transition-opacity`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>

    <div className='flex items-center justify-center gap-[112px] min-h-[900px]'>
      {/* card one */}
      <div className='border-none w-[714px] h-[591px] bg-red-100 rounded-[38px] overflow-hidden' style={{boxShadow: '0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(245,197,24,0.22), 0 0 120px rgba(245,197,24,0.08)'}}>
        <div className='h-[459px] bg-teal-800 relative px-12 pt-12'>
          <div className='bg-red-500 text-white font-bold rounded-[4px] h-[40px] w-[120px] text-center flex items-center justify-center'>FEATURED</div>
          <div className='absolute bottom-3'>
            <p className='text-[#F5C518] font-bold'>OCT 24, 2023</p>
            <p className='font-presser-bold text-[32px] leading-tight whitespace-wrap'>WHY MINIMALIST DESIGN <br /> IS BORING</p>
          </div>
        </div>
        <div className='h-[132px] w-full bg-[#121912] px-12 py-2.5'>
          <p className='text-[#7A8A9E] font-maisonneue-demi pb-2'>We've polished the soul out of the internet. it's time to bring back texture, chaos, and personality to out...</p>
          <hr className='mb-2.5'/>
          <div className='flex items-center justify-between'>
            <div className='rounded-full bg-[#1A2230] text-[#4A5A6A] px-4 p-1 text-[12px] font-bold'>OPINION</div>
            <div className='h-[40px] w-[40px] bg-[#F5C518] rounded-full'><i class="ri-arrow-right-up-line text-black"></i></div>
          </div>
        </div>
      </div>

      {/* card two */}
   
      <div className='border-y-amber-400 w-[714px] h-[591px] bg-red-100 rounded-[38px] overflow-hidden' style={{boxShadow: '0 30px 60px rgba(30,10,2,0.8), 0 0 40px rgba(255,80,60,0.22), 0 0 120px rgba(255,80,60,0.08)'}}>
        <div className='h-[459px] bg-teal-800 relative p-8'>
          <div className='bg-red-500 text-white font-bold rounded-[4px] h-[40px] w-[120px] text-center flex items-center justify-center'>PROCESS</div>
          <div className='absolute bottom-0'>
            <p className='text-[#F5C518] font-bold'>OCT 24, 2023</p>
            <p className='font-presser-bold text-[32px] leading-tight whitespace-wrap'>MASTERING THE ART <br /> OF CREATIVE CHAOS</p>
          </div>
        </div>
        <div className='h-[132px] w-full bg-[#121912]'></div>
        <div></div>
      </div>
    </div>
    
    </div>
  )
}

export default Blog