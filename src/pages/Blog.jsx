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

      <div className='border-y-amber-400 w-[714px] h-[591px] bg-red-100 rounded-[38px] overflow-hidden'>

      </div>
      <div className='border-y-amber-400 w-[714px] h-[591px] bg-black rounded-[24px]'>

      </div>

    </div>
    
    </div>
  )
}

export default Blog