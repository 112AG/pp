import React from 'react';
import artistrebelworkOne from '../assets/artistrebelworkOne.webp';
import artistrebelworkTwoimg from '../assets/artistrebelworkTwoimg.webp';
import artistrebelworkThreeImg from '../assets/artistrebelworkThreeImg.webp';
import artistrebelworkFourImg from '../assets/artistrebelworkFourImg.webp';
const ServiceCard = ({ borderColor, activeTabBg, titleParts, description, arrowBg, tabs, backgroundImage }) => {
  return (
<div className={`rounded-3xl border-4 ${borderColor} border-r-12 border-b-12 bg-black p-3 sm:p-8 relative overflow-hidden hover:scale-105 transition-transform duration-300`}>
      <div className="flex gap-4 mb-2 lg:mb-6">
        <div className={`px-4 py-2 text-[#000] ${activeTabBg} text-[8px] sm:text-[16px] font-bold`}>
          {tabs[0]}
        </div>
        <div className="px-4 py-2  bg-[#1E2836] text-[#9BA3AF]  text-[8px] sm:text-[16px] font-bold">
          {tabs[1]}
        </div>
      </div>
      <h2 className="text-[18px] leading-tight sm:text-[32px] sm:text-5xl font-bold text-white mb-2 sm:mb-4 uppercase tracking-[4px] font-presser-bold">
        {titleParts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < titleParts.length - 1 && <br />}
          </React.Fragment>
        ))}
      </h2>
      <p className="text-gray-400 text-[12px] leading-tight sm:text-lg max-w-md">
        {description}
      </p>
      <div className="mt-4 sm:mt-12 bg-[#9BA3AF] cursor-pointer rounded-2xl w-full h-32 sm:h-48 flex items-center justify-center  overflow-hidden bg-cover bg-center" 
               style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className={`w-8 h-8 sm:w-16 sm:h-16 rounded-full -rotate-28 ${arrowBg} flex items-center justify-center`}>
          <svg
            className="w-4 h-4 sm:w-8 sm:h-8 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={4}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto py-20 px-8">
      {/* Top Left - Yellow */}
      <ServiceCard
        borderColor="border-yellow-400"
        activeTabBg="bg-yellow-400"
        titleParts={['BRAND', 'IDENTITY']}
        tabs={['STRATEGY', 'IDENTITY']}
        description="Logos that stick. Systems that scale. We build the visual core of your business."
        arrowBg="bg-yellow-400"
        backgroundImage={artistrebelworkOne}
      />

      {/* Top Right - Cyan */}
      <ServiceCard
        borderColor="border-cyan-400"
        activeTabBg="bg-cyan-400"
        titleParts={['UI/UX', 'DESIGN']}
        tabs={['EXPERIENCE', 'WEB & APP']}
        description="Pixel-perfect interfaces that guide users and convert visitors into fans."
        arrowBg="bg-cyan-400"
        backgroundImage={artistrebelworkTwoimg}
      />

      {/* Bottom Left - Red */}
      <ServiceCard
        borderColor="border-red-500"
        activeTabBg="bg-red-500"
        titleParts={['VIDEO &', 'MOTION']}
        tabs={['STORY', 'MOTION']}
        description="High-energy edits and motion graphics that stop the scroll instantly."
        arrowBg="bg-red-500"
        backgroundImage={artistrebelworkThreeImg}
      />

      {/* Bottom Right - Orange */}
      <ServiceCard
        borderColor="border-orange-500"
        activeTabBg="bg-orange-500"
        titleParts={['PRINT &', 'PACKAGING']}
        tabs={['TACTILE', 'PRINT']}
        description="High-energy tactile and motion graphics that stop the scroll instantly."
        arrowBg="bg-orange-500"
        backgroundImage={artistrebelworkFourImg}
      />
    </div>
  );
};

export default ServicesSection;