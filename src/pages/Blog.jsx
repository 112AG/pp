import React from "react";
import { Link } from "react-router-dom";
import artistrebelBlogbg from "../assets/artistrebelBlogbg.webp";
import artistrebelblog from "../assets/artistrebelblog.webp";
import artistrebelblogbgtwo from "../assets/artistrebelblogbgtwo.webp";
import artistrebeltwos from "../assets/artistrebeltwos.webp";
import artistrebelblogmail from "../assets/artistrebelblogmail.webp";
import Stickers from "../component/Stickers.jsx"
import artistrebelBlogbgOne from "../assets/artistrebelBlogbgOne.webp";
import artistrebelBlogbgTwo from "../assets/artistrebelBlogbgTwo.webp";
import artistrebelcalendar from "../assets/artistrebelcalendar.png";
function Blog() {
  const categories = [
    { label: "ALL RANTS", bgColor: "bg-red-500", textColor: "text-white" },
    { label: "DESIGN", bgColor: "bg-yellow-400", textColor: "text-black" },
    { label: "UI/UX", bgColor: "bg-cyan-400", textColor: "text-black" },
    { label: "TUTORIALS", bgColor: "bg-gray-200", textColor: "text-black" },
    { label: "INDUSTRY", bgColor: "bg-lime-400", textColor: "text-black" },
  ];

  return (
    <div className="flex flex-col gap-16 sm:gap-24 md:gap-40 2xl:gap-[304px]">
    {/* section one */}
      <div className="bg-cover bg-center pt-[90px] bg-emerald-900"
        style={{ backgroundImage: `url(${artistrebelBlogbg})` }}
      >
        {/* Main content */}
        <div className="flex-1 px-2 flex flex-col items-center justify-center pt-8 pb-24">
          {/* Red blog banner */}
          <div className="mb-4 relative w-[260px] flex items-center">
            <img src={artistrebelblog} alt="" />
          </div>

          {/* Title */}
          <h1 className="text-[32px] leading-[23px] sm:leading-tight sm:text-6xl md:text-7xl font-black text-black text-center mb-2 tracking-tight font-presser-bold">
            REBEL
          </h1>

          {/* Archives in red */}
          <h2 className="text-[32px] sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-[#FE3649] to-[#F59C0C] bg-clip-text text-transparent text-center sm:mb-8 font-presser-bold">
            ARCHIVES
          </h2>

          {/* Tagline */}
          <p className="text-center text-[12px] sm:text-sm md:text-[32px] text-black font-medium leading-tight font-presser-medium">
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
              className={`${category.bgColor} ${category.textColor} font-black hover:bg-gray-300  text-xs md:text-sm px-4 py-2 border-2 border-black hover:opacity-80 transition-opacity`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
      {/* section two */}
      <div className="flex px-4 flex-col min-[1580px]:mb-0 min-[1580px]:flex-row items-center justify-center gap-[56px] jsm:gap-[90px] md:gap-[120px] mx-auto">
        {/* card one */}
        <div className="border-none w-full md:w-[714px] md:h-[591px] bg-red-100 rounded-[38px] overflow-hidden"
          style={{
            boxShadow:
              "0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(245,197,24,0.22), 0 0 120px rgba(245,197,24,0.08)",
          }}
        >
          <div className="h-[260px] sm:h-[459px] relative pt-4 px-4 sm:px-12 sm:pt-12  overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: `url(${artistrebelBlogbgTwo})`, backgroundSize: `130% 160%` }}>
            <div className="bg-red-500 text-[12px] sm:text-[16px] text-white font-bold rounded-[3px] rounded-tl-[20px]  sm:rounded-[4px] h-[30px] sm:h-[40px] w-[100px] sm:w-[120px] text-center flex items-center justify-center">
              FEATURED
            </div>
            <div className="absolute bottom-3">
              <div className="flex items-center justify-start gap-1">
                <img src={artistrebelcalendar} alt="" className="h-[12px] sm:h-[24px] mt-1" />
              <p className="text-[#F5C518] text-[10px] sm:text-[18px] pt-1 font-bold">OCT 24, 2023</p>
              </div>
              <p className="font-presser-bold sm:text-[32px] leading-tight whitespace-wrap">
                WHY MINIMALIST DESIGN <br className="hidden sm:inline-block"/> IS BORING
              </p>
            </div>
          </div>
          <div className="sm:h-[132px] w-full bg-[#121912] sm:px-12 sm:py-2.5 px-4 py-2.5">
            <p className="text-[#7A8A9E] text-[12px] sm:text-[14px] font-maisonneue-demi pb-2">
              We've polished the soul out of the internet. it's time to bring
              back texture, chaos, and personality to out...
            </p>
            <hr className="mb-2.5" />
            <div className="flex items-center justify-between">
              <div className="rounded-full bg-[#1A2230] text-[#4A5A6A] px-4 p-1 text-[12px] font-bold">
                OPINION
              </div>
              <div className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] bg-[#F5C518] rounded-full  flex items-center justify-center font-bold">
                <i class="ri-arrow-right-up-line sm:text-[28px] text-black"></i>
              </div>
            </div>
          </div>
        </div>

        {/* card two */}

        <div
          className="border-y-amber-400 w-full md:w-[714px] md:h-[591px] bg-red-100 rounded-[38px] overflow-hidden"
          style={{
            boxShadow:
              "0 30px 60px rgba(30,10,2,0.8), 0 0 40px rgba(255,80,60,0.22), 0 0 120px rgba(255,80,60,0.08)",
          }}
        >
          <div className="h-[260px] sm:h-[459px] relative pt-4 px-4 sm:px-12 sm:pt-12  overflow-hidden bg-cover bg-center"
                            style={{ backgroundImage: `url(${artistrebelBlogbgOne})`, backgroundSize: `105% 160%` }}>
            <div className="bg-red-500 text-[12px] sm:text-[16px] text-white font-bold rounded-[3px] rounded-tl-[20px]  sm:rounded-[4px] h-[30px] sm:h-[40px] w-[100px] sm:w-[120px] text-center flex items-center justify-center">
              PROCESS
            </div>
            <div className="absolute bottom-3">
              <div className="flex items-center justify-start gap-1">
                <img src={artistrebelcalendar} alt="" className="h-[12px] sm:h-[24px] mt-1" />
              <p className="text-[#F5C518] text-[10px] sm:text-[18px] pt-1 font-bold">OCT 24, 2023</p>
              </div>              <p className="font-presser-bold sm:text-[32px] leading-tight whitespace-wrap">
                MASTERING THE ART <br className="hidden sm:inline-block"/> OF CREATIVE CHAOS
              </p>
            </div>
          </div>
          <div className="sm:h-[132px] w-full bg-[#121912] sm:px-12 sm:py-2.5 px-4 py-2.5">
            <p className="text-[#7A8A9E] text-[12px] sm:text-[14px] font-maisonneue-demi pb-2">
              How to harness messiness to fuel your best ideas. <br className="hidden"/> Structure
              is overated
            </p>
            <hr className="mb-2.5" />
            <div className="flex items-center justify-between">
              <div className="rounded-full bg-[#1A2230] text-[#4A5A6A] px-4 p-1 text-[12px] font-bold">
                OPINION
              </div>
              <div className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] bg-[#F5C518] rounded-full  flex items-center justify-center font-bold">
                <i class="ri-arrow-right-up-line sm:text-[28px] text-black"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section three */}
      <div className="h-full w-full px-4 mx-auto flex flex-col items-center justify-center">
        <div
          className="h-[320px] min-[498px]:h-[400px] min-[1580px]:h-[497px] w-full mx-4 min-[1040px]:w-[998px] min-[1580px]:w-[1544px] bg-cover bg-center flex items-center justify-center flex-col px-2 overflow-hidden rounded-2xl"
          style={{ backgroundImage: `url(${artistrebeltwos})` }}
        >
          <img src={artistrebelblogmail} alt="" className="mx-auto min-[1580px]:pt-[30px] pt-[16px]" />
          <p className="uppercase text-[#2E3441] text-[24px] sm:text-[45px] font-presser-bold leading-tight">
            join the
          </p>
          <p
            className="uppercase   bg-gradient-to-r from-[#FE3A47] to-[#FA682C] font-presser-bold leading-tight text-[24px] sm:text-[45px] 
           bg-clip-text text-transparent"
          >
            rebellion
          </p>
          <p className="uppercase text-[#AEB1B9]">no spam . just chaos.</p>

          <div className="w-full max-w-[1073px] px-4 mx-auto space-y-4 pt-[4px] min-[1580px]:pt-[12px]">
      
      {/* Email Input */}
      <input
        type="email"
        placeholder="YOUR@EMAIL.COM"
        className="
          w-full
          h-[42px]
          sm:h-[52px]
          px-4
          border
          border-gray-500
          bg-[#f3f3f3]
          text-gray-600
          placeholder:text-gray-400
          uppercase
          outline-none
          focus:border-black
        "
      />

      {/* Subscribe Button */}
      <button
        className="
          w-full
          h-[42px]
          sm:h-[52px]
          bg-black
          text-[#AFAFAF]
          uppercase
          font-semibold
          tracking-wide
          border
          border-black
          hover:bg-white
          hover:text-black
          transition-all
          duration-300
        "
      >
        Subscribe
      </button>

    </div>
        </div>
      </div>
      {/* section four */}
      <Stickers/>
    </div>
  );
}

export default Blog;
