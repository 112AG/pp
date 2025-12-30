import React from 'react';

const ServiceCard = ({ borderColor, activeTabBg, titleParts, description, arrowBg, tabs }) => {
  return (
    <div className={`rounded-3xl border-4 ${borderColor} border-r-12 border-b-12 bg-black p-8 relative overflow-hidden hover:scale-105 transition-transform duration-300`}>
      <div className="flex gap-4 mb-6">
        <div className={`px-4 py-2 text-[#000] ${activeTabBg} text-[16px] font-bold`}>
          {tabs[0]}
        </div>
        <div className="px-4 py-2  bg-[#1E2836] text-[#9BA3AF] text-[16px] font-bold">
          {tabs[1]}
        </div>
      </div>
      <h2 className="text-5xl font-bold text-white mb-4 uppercase tracking-[2px] font-presser-bold">
        {titleParts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < titleParts.length - 1 && <br />}
          </React.Fragment>
        ))}
      </h2>
      <p className="text-gray-400 text-lg max-w-md">
        {description}
      </p>
      <div className="mt-12 bg-[#9BA3AF] rounded-2xl w-full h-48 flex items-center justify-center">
        <div className={`w-16 h-16 rounded-full -rotate-28 ${arrowBg} flex items-center justify-center`}>
          <svg
            className="w-8 h-8 text-black"
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