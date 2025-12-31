import React from 'react';

const ServiceCard = ({ borderColor, activeTabBg, titleParts, description, arrowBg, tabs }) => {
  return (
    <div className={`w-full max-w-sm mx-auto rounded-3xl border-4 ${borderColor} relative overflow-hidden hover:scale-105 transition-transform duration-300 bg-black p-4 sm:p-6 lg:p-8`}>
  <div className="flex flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
    <div className={`px-3 py-1.5 sm:px-4 sm:py-2 text-[#000] ${activeTabBg} text-sm sm:text-base font-bold`}>
      {tabs[0]}
    </div>
    <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#1E2836] text-[#9BA3AF] text-sm sm:text-base font-bold">
      {tabs[1]}
    </div>
  </div>

  <h2 className="whitespace-wrap max-[324px]:text-[20px] text-[23px] sm:text-4xl lg:text-5xl font-bold text-white mb-4 uppercase tracking-[2px] font-presser-bold leading-tight">
    {titleParts.map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < titleParts.length - 1 && <br />}
      </React.Fragment>
    ))}
  </h2>

  <p className="text-gray-400 text-[12.5px] sm:text-lg max-w-md">
    {description}
  </p>

  <div className="mt-8 sm:mt-12 bg-[#9BA3AF] rounded-2xl w-full h-32 sm:h-40 lg:h-48 flex items-center justify-center">
    <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full -rotate-28 ${arrowBg} flex items-center justify-center`}>
      <svg
        className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-black"
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto py-20 px-8">
      {/* Top Left - Yellow */}
      <ServiceCard
        borderColor="border-yellow-400"
        activeTabBg="bg-yellow-400"
        titleParts={['BRAND', 'IDENTITY']}
        tabs={['STRATEGY', 'IDENTITY']}
        description="Logos that stick. Systems that scale. We build the visual core of your business."
        arrowBg="bg-yellow-400"
      />

      {/* Top Right - Cyan */}
      <ServiceCard
        borderColor="border-cyan-400"
        activeTabBg="bg-cyan-400"
        titleParts={['UI/UX', 'DESIGN']}
        tabs={['EXPERIENCE', 'WEB & APP']}
        description="Pixel-perfect interfaces that guide users and convert visitors into fans."
        arrowBg="bg-cyan-400"
      />

      {/* Bottom Left - Red */}
      <ServiceCard
        borderColor="border-red-500"
        activeTabBg="bg-red-500"
        titleParts={['VIDEO &', 'MOTION']}
        tabs={['STORY', 'MOTION']}
        description="High-energy edits and motion graphics that stop the scroll instantly."
        arrowBg="bg-red-500"
      />

      {/* Bottom Right - Orange */}
      <ServiceCard
        borderColor="border-orange-500"
        activeTabBg="bg-orange-500"
        titleParts={['PRINT &', 'PACKAGING']}
        tabs={['TACTILE', 'PRINT']}
        description="High-energy tactile and motion graphics that stop the scroll instantly."
        arrowBg="bg-orange-500"
      />
    </div>
  );
};

export default ServicesSection;