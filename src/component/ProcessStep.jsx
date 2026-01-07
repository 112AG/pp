import React from "react";
import frame1 from "../assets/frames/artistrebelFrames1.webp";
import frame2 from "../assets/frames/artistrebelFrames2.webp";
import frame3 from "../assets/frames/artistrebelFrames3.webp";
import frame4 from "../assets/frames/artistrebelFrames4.webp";
import frame5 from "../assets/frames/artistrebelFrames5.webp";

const ProcessStep = ({ color, icon, title, description, frame }) => {
  return (
    <div className="flex items-center gap-3 sm:gap-8 max-w-[800px] mx-auto relative z-10">
      {/* Icon Circle */}
<div className="w-[40px] h-[40px] sm:w-20 sm:h-20 flex-shrink-0">
  <img
    src={frame}
    alt="frame"
    className="w-full h-full object-contain"
    loading="eager"
  />
</div>


      {/* Content */}
      <div className="flex-1 bg-[#212121] rounded-3xl px-3 max-[380px]:py-2 py-5 sm:px-8 sm:py-6">
        <h3
          className={`text-[18px] md:text-[37px] font-presser-bold mg-0 sm:mb-2 ${color.replace(
            "border-",
            "text-"
          )}`}
        >
          {title}
        </h3>
        <p className="text-gray-400 text-[12px] md:text-[29px] font-maisonneue-demi leading-tight">
          {description}
        </p>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  return (
<section
  className="three mt-12 py-12 relative z-10 will-change-transform"
  style={{ transform: "translateZ(0)" }}
>
      <div className="max-w-4xl mx-auto px-8 relative">
        {/* Section Title */}
        <h2
          className="
  text-3xl 
  sm:text-5xl 
  md:text-6xl 
  lg:text-7xl 
  xl:text-8xl
  font-black 
  uppercase 
  tracking-[-0.02em] 
  text-white 
  text-center 
  mb-12 
  sm:mb-16 
  md:mb-20 
  lg:mb-24 
  font-['Presser','Helvetica_Neue','Arial',sans-serif]
"
        >
          THE PROCESS
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line (spans full steps area to connect all items) */}
          <div className="absolute max-[328px]:left-[7.5%] left-[5%] sm:left-[6.3%] md:left-[6.5%] lg:left-[6.5%] top-14 bottom-14 w-[4px] bg-[#2F3742] origin-top timeline-line z-0"></div>

          {/* Steps */}
          <div className="space-y-20">
            <ProcessStep
              color="border-yellow-400 text-yellow-400"
              icon={
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
              }
              title="Think"
              description="Ideas before aesthetics. We dig deep into the why."
              frame={frame5}
            />

            <ProcessStep
              color="border-red-500 text-red-500"
              icon={
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 15H5.5l6.5-15z" />
                </svg>
              }
              title="Design"
              description="Crafting the visual language. Bold, loud, and unique."
              frame={frame1}
            />

            <ProcessStep
              color="border-cyan-400 text-cyan-400"
              icon={
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
                </svg>
              }
              title="Refine"
              description="Pixel perfect precision. No detail is too small."
              frame={frame2}
            />

            <ProcessStep
              color="border-orange-500 text-orange-500"
              icon={
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 15l-5-5 1.4-1.4L11 14.2l6.6-6.6L19 9l-8 8z" />
                </svg>
              }
              title="Deliver"
              description="Handover packaged for success. Ready to launch."
              frame={frame3}
            />

            <ProcessStep
              color="border-green-400 text-green-400"
              icon={
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              }
              title="Impact"
              description="Creating waves in your industry."
              frame={frame4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
