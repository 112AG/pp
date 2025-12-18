import React, { useRef, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ahmedabadArtist from "../assets/cities/ahmedabadArtist.png";
import DelhiArtist from "../assets/cities/DelhiArtist.png";
import kolkataArtist from "../assets/cities/kolkataArtist.png";
import mumbaiArtist from "../assets/cities/mumbaiArtist.png";
import varanasiArtist from "../assets/cities/varanasiArtist.png";

gsap.registerPlugin(ScrollTrigger);

// Memoized experience item component
// Memoized experience item component
const ExperienceItem = React.memo(({ exp, index }) => (
  <div className="relative pl-14 sm:pl-16 md:pl-20 lg:pl-24 exp-item ">
    {/* Landmark Icon */}
    <div className="absolute left-0 top-0 flex items-center justify-center w-8 sm:w-10 md:w-12 lg:w-16 flex-col">
      <img
        src={exp.icon}
        alt={exp.location}
        className="h-8 sm:h-10 md:h-12 lg:h-16 xl:h-20 object-contain"
        loading="lazy"
      />
    </div>

    {/* Text Info */}
    <div>
      <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[40px] font-bold font-presser-bold break-words whitespace-normal sm:whitespace-nowrap">
        {exp.role}
      </h3>
      <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-[20px] font-maisonneue-medium break-words">
        {exp.company}
      </p>
      <p
        className={`${exp.color} text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-[16px] font-semibold font-presser-bold`}
      >
        {exp.location}
      </p>
    </div>
  </div>
));

ExperienceItem.displayName = 'ExperienceItem';

const TimelineLine = React.memo(({ style }) => (
  <div 
    className="absolute left-[9%] min-[300px]:left-[7.8%] min-[400px]:left-[7.2%] min-[600px]:left-[6.3%] sm:left-[7.2%] md:left-[9.6%] lg:left-[13%] 2xl:left-[12%] w-[6px] sm:w-[8px] md:w-[12px] h-[60px] sm:h-[84px] md:h-[144px] bg-gradient-to-t from-[#0A0A0A] via-[#FFFFFF] to-[#0A0A0A] origin-top timeline-line"
    style={style}
  />
));

TimelineLine.displayName = 'TimelineLine';

function Experience() {
  const containerRef = useRef(null);
  const headRef = useRef(null);
  const pageRef = useRef(null);

  const experiences = useMemo(() => [
    {
      role: "ASSISTANT DESIGN MANAGER",
      company: "Adz Network Media (APR 2023 – Present) REMOTE",
      location: "Ahmedabad",
      icon: ahmedabadArtist,
      color: "text-yellow-400",
    },
    {
      role: "SR. GRAPHIC DESIGNER",
      company: "SBM Industries (Mar 2022 – Apr 2023)",
      location: "Delhi",
      icon: DelhiArtist,
      color: "text-cyan-400",
    },
    {
      role: "SR. GRAPHIC DESIGNER",
      company: "Adwell International Pvt. Ltd. (Jun 2020 – Mar 2022)",
      location: "Kolkata, West Bengal",
      icon: kolkataArtist,
      color: "text-orange-400",
    },
    {
      role: "GRAPHIC DESIGNER",
      company: "Imagine ART & Company (Feb 2019 – May 2020)",
      location: "Mumbai, Maharashtra",
      icon: mumbaiArtist,
      color: "text-red-400",
    },
    {
      role: "ASSISTANT PHOTOGRAPHER",
      company: "Filmy Foto (Apr 2018 – Jan 2019)",
      location: "Varanasi, Uttar Pradesh",
      icon: varanasiArtist,
      color: "text-green-400",
    },
  ], []);

  const timelinePositions = useMemo(() => [
    { top: "8%" },
    { top: "30%" },
    { top: "50%" },
    { top: "70%" },
  ], []);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".exp-item").forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              end: "bottom 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.utils.toArray(".timeline-line").forEach((line, i) => {
        gsap.fromTo(
          line,
          { scaleY: 0, transformOrigin: "top center", opacity: 0 },
          {
            scaleY: 1,
            opacity: 1,
            duration: 1,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: line,
              start: "top 75%",
              end: "bottom 60%",
              scrub: 1,
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // FIXED: Responsive text scroll animation
  useGSAP(() => {
    if (!headRef.current || !pageRef.current) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 640px)",
        isTablet: "(min-width: 641px) and (max-width: 1023px)",
        isDesktop: "(min-width: 1024px)",
        isLargeDesktop: "(min-width: 1280px)",
        isExtraLargeDesktop: "(min-width: 1536px)",
      },
      (context) => {
        const { isMobile, isTablet, isDesktop, isLargeDesktop, isExtraLargeDesktop } = context.conditions;
        
        const textWidth = headRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        
        // Calculate proper scroll distance based on screen size
        const scrollDistance = textWidth + viewportWidth;
        
        // Adjust scroll duration and pin height based on screen size
        let endValue;
        if (isMobile) {
          endValue = `+=${scrollDistance * 0.7}`; // Shorter scroll on mobile
        } else if (isTablet) {
          endValue = `+=${scrollDistance * 0.85}`; // Medium scroll on tablet
        } else if (isDesktop) {
          endValue = `+=${scrollDistance * 0.9}`; // Full scroll on desktop
        } else if (isLargeDesktop) {
          endValue = `+=${scrollDistance * 0.9}`; // Full scroll on desktop
        } else {
          endValue = `+=${scrollDistance * 0.9}`; // Full scroll on desktop
        }

        gsap.to(headRef.current, {
          x: -(textWidth + viewportWidth),
          ease: "none",
          scrollTrigger: {
            trigger: pageRef.current,
            scroller: "body",
            start: 'top 20%',
            end: endValue,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          }
        });
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <div>
      {/* Experience Section */}
      <div ref={containerRef} className="three mt-12 py-12 relative z-10">
        <h1
          className="text-center font-extrabold leading-tight text-[30px] sm:text-[53px] md:text-[62px] lg:text-[84px] xl:text-[94px] text-[#EEE6E2] mb-8 tracking-wide px-4 font-presser-bold"
          style={{ letterSpacing: "0.04em" }}
        >
          EXPERIENCE
        </h1>

        <div className="relative xl:scale-110 max-w-4xl 2xl:max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-20">
          {timelinePositions.map((pos, index) => (
            <TimelineLine key={index} style={pos} />
          ))}

          <div className="flex flex-col gap-8 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-20 mx-auto w-[92%] sm:w-[90%] md:w-[85%] lg:w-[80%]">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* FIXED: Responsive Scrolling Text Section */}
      <div ref={pageRef} className='page overflow-hidden h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center relative z-0 '>
        <h1 
          ref={headRef} 
          className="text-[60px] min-[400px]:text-[80px] sm:text-[100px] md:text-[140px] lg:text-[200px] xl:text-[260px] 2xl:text-[340px] whitespace-nowrap text-[#696969] font-presser-semibold"
        >
          Building Brands, Designing Experiences.
        </h1>
      </div>
    </div>
  );
}

export default Experience;

// // Memoized experience item component
// const ExperienceItem = React.memo(({ exp, index }) => (
//   <div className="relative pl-14 sm:pl-16 md:pl-20 lg:pl-24 exp-item">
//     {/* Landmark Icon */}
//     <div className="absolute left-0 top-0 flex items-center justify-center w-8 sm:w-10 md:w-12 lg:w-16 flex-col">
//       <img
//         src={exp.icon}
//         alt={exp.location}
//         className="h-8 sm:h-10 md:h-12 lg:h-16 xl:h-20 object-contain"
//         loading="lazy"
//       />
//     </div>

//     {/* Text Info */}
//     <div>
//       <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[40px] font-bold font-presser-bold break-words whitespace-normal sm:whitespace-nowrap">
//         {exp.role}
//       </h3>
//       <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-[20px] font-maisonneue-medium break-words">
//         {exp.company}
//       </p>
//       <p
//         className={`${exp.color} text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-[16px] font-semibold font-presser-bold`}
//       >
//         {exp.location}
//       </p>
//     </div>
//   </div>
// ));

// ExperienceItem.displayName = 'ExperienceItem';

// // Timeline line component
// const TimelineLine = React.memo(({ style }) => (
//   <div 
//     className="absolute left-[6.6%] sm:left-[7.2%] md:left-[9.6%] lg:left-[13%] 2xl:left-[12%] w-[6px] sm:w-[8px] md:w-[12px] h-[60px] sm:h-[84px] md:h-[144px] bg-gradient-to-t from-[#0A0A0A] via-[#FFFFFF] to-[#0A0A0A] origin-top timeline-line"
//     style={style}
//   />
// ));

// TimelineLine.displayName = 'TimelineLine';

// function Experience() {
//   const containerRef = useRef(null);
//   const headRef = useRef(null);
//   const pageRef = useRef(null);

//   // Memoize experiences array
//   const experiences = useMemo(() => [
//     {
//       role: "ASSISTANT DESIGN MANAGER",
//       company: "Adz Network Media (APR 2023 – Present) REMOTE",
//       date: "Apr 2023 – Present",
//       location: "Ahmedabad",
//       icon: ahmedabadArtist,
//       color: "text-yellow-400",
//     },
//     {
//       role: "SR. GRAPHIC DESIGNER",
//       company: "SBM Industries (Mar 2022 – Apr 2023)",
//       date: "Mar 2022 – Apr 2022",
//       location: "Delhi",
//       icon: DelhiArtist,
//       color: "text-cyan-400",
//     },
//     {
//       role: "SR. GRAPHIC DESIGNER",
//       company: "Adwell International Pvt. Ltd. (Jun 2020 – Mar 2022)",
//       date: "Dec 2020 – Mar 2022",
//       location: "Kolkata, West Bengal",
//       icon: kolkataArtist,
//       color: "text-orange-400",
//     },
//     {
//       role: "GRAPHIC DESIGNER",
//       company: "Imagine ART & Company (Feb 2019 – May 2020)",
//       date: "Oct 2019 – May 2020",
//       location: "Mumbai, Maharashtra",
//       icon: mumbaiArtist,
//       color: "text-red-400",
//     },
//     {
//       role: "ASSISTANT PHOTOGRAPHER",
//       company: "Filmy Foto (Apr 2018 – Jan 2019)",
//       date: "Apr 2018 – Jan 2019",
//       location: "Varanasi, Uttar Pradesh",
//       icon: varanasiArtist,
//       color: "text-green-400",
//     },
//   ], []);

//   // Memoize timeline positions
//   const timelinePositions = useMemo(() => [
//     { top: "8%" },
//     { top: "30%" },
//     { top: "50%" },
//     { top: "70%" },
//   ], []);

//   useGSAP(() => {
//     const ctx = gsap.context(() => {
//       // Animate each experience item
//       gsap.utils.toArray(".exp-item").forEach((item, i) => {
//         gsap.fromTo(
//           item,
//           { opacity: 0, y: 80 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.8,
//             delay: i * 0.1,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: item,
//               markers: false,
//               start: "top 90%",
//               end: "bottom 80%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       });

//       // Animate connecting line progress (grow from top to bottom)
//       gsap.utils.toArray(".timeline-line").forEach((line, i) => {
//         gsap.fromTo(
//           line,
//           { scaleY: 0, transformOrigin: "top center", opacity: 0 },
//           {
//             scaleY: 1,
//             opacity: 1,
//             duration: 1,
//             delay: i * 0.2,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: line,
//               markers: false,
//               start: "top 75%",
//               end: "bottom 60%",
//               scrub: 1,
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   // Text scroll animation - separate useGSAP
//   useGSAP(() => {
//     if (!headRef.current || !pageRef.current) return;

//     const textWidth = headRef.current.scrollWidth;
//     const viewportWidth = window.innerWidth;

//     gsap.to(headRef.current, {
//       x: -(textWidth + viewportWidth), // Move completely off screen
//       ease: "none",
//       scrollTrigger: {
//         trigger: pageRef.current,
//         scroller: "body",
//         markers: false,
//         start: 'top 20%',
//         end: () => `+=${textWidth * 1}`, // Longer scroll distance
//         scrub: 1,
//         pin: true,
//         pinSpacing: true,
//       }
//     });
//   }, []);

//   return (
//     <div className="">
//       {/* Experience Section */}
//       <div ref={containerRef} className="three mt-12 py-12 relative z-10">
//         {/* Heading */}
//         <h1
//           className="text-center font-extrabold leading-tight text-[30px] sm:text-[53px] md:text-[62px] lg:text-[84px] xl:text-[94px] text-[#EEE6E2] mb-8 tracking-wide font-presser-bold px-4"
//           style={{ letterSpacing: "0.04em" }}
//         >
//           EXPERIENCE
//         </h1>

//         <div className="relative xl:scale-110 max-w-4xl 2xl:max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-20">
//           {/* Vertical timeline lines */}
//           {timelinePositions.map((pos, index) => (
//             <TimelineLine key={index} style={pos} />
//           ))}

//           {/* Experience items */}
//           <div className="flex flex-col gap-8 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-20 mx-auto w-[92%] sm:w-[90%] md:w-[85%] lg:w-[80%]">
//             {experiences.map((exp, index) => (
//               <ExperienceItem key={index} exp={exp} index={index} />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Scrolling Text Section - Separate from Experience */}
//       <div ref={pageRef} className='page overflow-hidden h-[70vh] flex items-center relative z-0 bg-red-400'>
//         <h1 
//           ref={headRef} 
//           className="text-[400px] sm:text-[80px] md:text-[120px] lg:text-[300px] 2xl:text-[340px] bg-black whitespace-nowrap text-[#696969] font-presser-semibold"
//         >
//           Building Brands, Designing Experiences.
//         </h1>
//       </div>
//     </div>
//   );
// }

// export default Experience;

// old code 
//                                                                                                                                 One

// import React, { useRef, useMemo } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import ahmedabadArtist from "../assets/cities/ahmedabadArtist.png";
// import DelhiArtist from "../assets/cities/DelhiArtist.png";
// import kolkataArtist from "../assets/cities/kolkataArtist.png";
// import mumbaiArtist from "../assets/cities/mumbaiArtist.png";
// import varanasiArtist from "../assets/cities/varanasiArtist.png";

// gsap.registerPlugin(ScrollTrigger);

// // Memoized experience item component
// const ExperienceItem = React.memo(({ exp, index }) => (
//   <div className="relative pl-14 sm:pl-16 md:pl-20 lg:pl-24 exp-item ">
//     {/* Landmark Icon */}
//     <div className="absolute left-0 top-0 flex items-center justify-center w-8 sm:w-10 md:w-12 lg:w-16 flex-col">
//       <img
//         src={exp.icon}
//         alt={exp.location}
//         className="h-8 sm:h-10 md:h-12 lg:h-16 xl:h-20 object-contain"
//         loading="lazy"
//       />
//     </div>

//     {/* Text Info */}
//     <div>
//       <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[40px] font-bold font-presser-bold break-words whitespace-normal sm:whitespace-nowrap">
//         {exp.role}
//       </h3>
//       <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-[20px] font-maisonneue-medium break-words">
//         {exp.company}
//       </p>
//       <p
//         className={`${exp.color} text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-[16px] font-semibold font-presser-bold`}
//       >
//         {exp.location}
//       </p>
//     </div>
//   </div>
// ));

// ExperienceItem.displayName = 'ExperienceItem';

// // Timeline line component
// const TimelineLine = React.memo(({ style }) => (
//   <div 
//     className="absolute left-[8.2%] sm:left-[7.2%] md:left-[9.6%] lg:left-[13%] 2xl:left-[12%] w-[6px] sm:w-[8px] md:w-[12px] h-[60px] sm:h-[84px] md:h-[144px] bg-gradient-to-t from-[#0A0A0A] via-[#FFFFFF] to-[#0A0A0A] origin-top timeline-line"
//     style={style}
//   />
// ));

// TimelineLine.displayName = 'TimelineLine';

// function Experience() {
//   const containerRef = useRef(null);
//   const headRef = useRef(null);
//   const pageRef = useRef(null);

//   // Memoize experiences array
//   const experiences = useMemo(() => [
//     {
//       role: "ASSISTANT DESIGN MANAGER",
//       company: "Adz Network Media (APR 2023 – Present) REMOTE",
//       date: "Apr 2023 – Present",
//       location: "Ahmedabad",
//       icon: ahmedabadArtist,
//       color: "text-yellow-400",
//     },
//     {
//       role: "SR. GRAPHIC DESIGNER",
//       company: "SBM Industries (Mar 2022 – Apr 2023)",
//       date: "Mar 2022 – Apr 2022",
//       location: "Delhi",
//       icon: DelhiArtist,
//       color: "text-cyan-400",
//     },
//     {
//       role: "SR. GRAPHIC DESIGNER",
//       company: "Adwell International Pvt. Ltd. (Jun 2020 – Mar 2022)",
//       date: "Dec 2020 – Mar 2022",
//       location: "Kolkata, West Bengal",
//       icon: kolkataArtist,
//       color: "text-orange-400",
//     },
//     {
//       role: "GRAPHIC DESIGNER",
//       company: "Imagine ART & Company (Feb 2019 – May 2020)",
//       date: "Oct 2019 – May 2020",
//       location: "Mumbai, Maharashtra",
//       icon: mumbaiArtist,
//       color: "text-red-400",
//     },
//     {
//       role: "ASSISTANT PHOTOGRAPHER",
//       company: "Filmy Foto (Apr 2018 – Jan 2019)",
//       date: "Apr 2018 – Jan 2019",
//       location: "Varanasi, Uttar Pradesh",
//       icon: varanasiArtist,
//       color: "text-green-400",
//     },
//   ], []);

//   // Memoize timeline positions
//   const timelinePositions = useMemo(() => [
//     { top: "8%" },
//     { top: "30%" },
//     { top: "50%" },
//     { top: "70%" },
//   ], []);

//   useGSAP(() => {
//     const ctx = gsap.context(() => {
//       // Animate each experience item
//       gsap.utils.toArray(".exp-item").forEach((item, i) => {
//         gsap.fromTo(
//           item,
//           { opacity: 0, y: 80 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.8,
//             delay: i * 0.1,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: item,
//               markers:false,
//               start: "top 90%",
//               end: "bottom 80%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       });

//       // Animate connecting line progress (grow from top to bottom)
//       gsap.utils.toArray(".timeline-line").forEach((line, i) => {
//         gsap.fromTo(
//           line,
//           { scaleY: 0, transformOrigin: "top center", opacity: 0 },
//           {
//             scaleY: 1,
//             opacity: 1,
//             duration: 1,
//             delay: i * 0.2,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: line,
//               markers:false,
//               start: "top 75%",
//               end: "bottom 60%",
//               scrub:1,
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   // Text scroll animation - separate useGSAP
//   useGSAP(() => {
//     if (!headRef.current || !pageRef.current) return;

//     const textWidth = headRef.current.scrollWidth;
//     const viewportWidth = window.innerWidth;

//     gsap.to(headRef.current, {
//       x: -(textWidth + viewportWidth), // Move completely off screen
//       ease: "none",
//       scrollTrigger: {
//         trigger: pageRef.current,
//         scroller: "body",
//         markers: true,
//         start: 'top 20%',
//         end: () => `+=${textWidth * 1}`, // Longer scroll distance
//         scrub: 1,
//         pin: true,
//       }
//     });
//   }, []);

//   return (
//     <div className="pp">
//       {/* Experience Section */}
//       <div ref={containerRef} className="three mt-12 py-12">
//         {/* Heading */}
//         <h1
//           className="text-center font-extrabold leading-tight text-[30px] sm:text-[53px] md:text-[62px] lg:text-[84px] xl:text-[94px] text-[#EEE6E2] mb-8 tracking-wide font-presser-bold px-4"
//           style={{ letterSpacing: "0.04em" }}
//         >
//           EXPERIENCE
//         </h1>

//         <div className="relative xl:scale-110 max-w-4xl 2xl:max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-20">
//           {/* Vertical timeline lines */}
//           {timelinePositions.map((pos, index) => (
//             <TimelineLine key={index} style={pos} />
//           ))}

//           {/* Experience items */}
//           <div className="flex flex-col gap-8 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-20 mx-auto w-[92%] sm:w-[90%] md:w-[85%] lg:w-[80%]">
//             {experiences.map((exp, index) => (
//               <ExperienceItem key={index} exp={exp} index={index} />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Scrolling Text Section - Separate from Experience */}
//       <div ref={pageRef} className='page overflow-hidden h-[90vh] flex items-center'>
//         <h1 
//           ref={headRef} 
//           className="text-[400px] sm:text-[80px] md:text-[120px] lg:text-[300px] 2xl:text-[340px] whitespace-nowrap text-[#696969] font-presser-semibold"
//         >
//           Building Brands, Designing Experiences.
//         </h1>
//       </div>
//     </div>
//   );
// }

// export default Experience;

//                                                                                                                                 Two

// import React, { useRef, useMemo } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import ahmedabadArtist from "../assets/cities/ahmedabadArtist.png";
// import DelhiArtist from "../assets/cities/DelhiArtist.png";
// import kolkataArtist from "../assets/cities/kolkataArtist.png";
// import mumbaiArtist from "../assets/cities/mumbaiArtist.png";
// import varanasiArtist from "../assets/cities/varanasiArtist.png";

// gsap.registerPlugin(ScrollTrigger);

// // Memoized experience item component
// const ExperienceItem = React.memo(({ exp, index }) => (
//   <div className="relative pl-14 sm:pl-16 md:pl-20 lg:pl-24 exp-item">
//     {/* Landmark Icon */}
//     <div className="absolute left-0 top-0 flex items-center justify-center w-8 sm:w-10 md:w-12 lg:w-16 flex-col">
//       <img
//         src={exp.icon}
//         alt={exp.location}
//         className="h-8 sm:h-10 md:h-12 lg:h-16 xl:h-20 object-contain"
//         loading="lazy"
//       />
//     </div>

//     {/* Text Info */}
//     <div>
//       <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[40px] font-bold font-presser-bold break-words whitespace-normal sm:whitespace-nowrap">
//         {exp.role}
//       </h3>
//       <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-[20px] font-maisonneue-medium break-words">
//         {exp.company}
//       </p>
//       <p
//         className={`${exp.color} text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-[16px] font-semibold font-presser-bold`}
//       >
//         {exp.location}
//       </p>
//     </div>
//   </div>
// ));

// ExperienceItem.displayName = 'ExperienceItem';

// // Timeline line component
// const TimelineLine = React.memo(({ style }) => (
//   <div 
//     className="absolute left-[6.4%] sm:left-[7.2%] md:left-[9.6%] lg:left-[13%] 2xl:left-[12%] w-[6px] sm:w-[8px] md:w-[12px] h-[60px] sm:h-[84px] md:h-[144px] bg-gradient-to-t from-[#0A0A0A] via-[#FFFFFF] to-[#0A0A0A] origin-top timeline-line"
//     style={style}
//   />
// ));

// TimelineLine.displayName = 'TimelineLine';

// function Experience() {
//   const containerRef = useRef(null);

//   // Memoize experiences array
//   const experiences = useMemo(() => [
//     {
//       role: "ASSISTANT DESIGN MANAGER",
//       company: "Adz Network Media (APR 2023 – Present) REMOTE",
//       date: "Apr 2023 – Present",
//       location: "Ahmedabad",
//       icon: ahmedabadArtist,
//       color: "text-yellow-400",
//     },
//     {
//       role: "SR. GRAPHIC DESIGNER",
//       company: "SBM Industries (Mar 2022 – Apr 2023)",
//       date: "Mar 2022 – Apr 2022",
//       location: "Delhi",
//       icon: DelhiArtist,
//       color: "text-cyan-400",
//     },
//     {
//       role: "SR. GRAPHIC DESIGNER",
//       company: "Adwell International Pvt. Ltd. (Jun 2020 – Mar 2022)",
//       date: "Dec 2020 – Mar 2022",
//       location: "Kolkata, West Bengal",
//       icon: kolkataArtist,
//       color: "text-orange-400",
//     },
//     {
//       role: "GRAPHIC DESIGNER",
//       company: "Imagine ART & Company (Feb 2019 – May 2020)",
//       date: "Oct 2019 – May 2020",
//       location: "Mumbai, Maharashtra",
//       icon: mumbaiArtist,
//       color: "text-red-400",
//     },
//     {
//       role: "ASSISTANT PHOTOGRAPHER",
//       company: "Filmy Foto (Apr 2018 – Jan 2019)",
//       date: "Apr 2018 – Jan 2019",
//       location: "Varanasi, Uttar Pradesh",
//       icon: varanasiArtist,
//       color: "text-green-400",
//     },
//   ], []);

//   // Memoize timeline positions
//   const timelinePositions = useMemo(() => [
//     { top: "8%" },
//     { top: "30%" },
//     { top: "50%" },
//     { top: "70%" },
//   ], []);

//   useGSAP(() => {
//     const ctx = gsap.context(() => {
//       // Animate each experience item
//       gsap.utils.toArray(".exp-item").forEach((item, i) => {
//         gsap.fromTo(
//           item,
//           { opacity: 0, y: 80 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.8,
//             delay: i * 0.1,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: item,
//               start: "top 90%",
//               end: "bottom 60%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       });

//       // Animate connecting line progress (grow from top to bottom)
//       gsap.utils.toArray(".timeline-line").forEach((line, i) => {
//         gsap.fromTo(
//           line,
//           { scaleY: 0, transformOrigin: "top center", opacity: 0 },
//           {
//             scaleY: 1,
//             opacity: 1,
//             duration: 1,
//             delay: i * 0.2,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: line,
//               start: "top 85%",
//               end: "bottom 60%",
//               toggleActions: "play none none reverse",
//             },
//           }
//         );
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);
// // text scroll
//  const headRef = React.useRef();

//   // useGSAP(() => {
//   //   let mm = gsap.matchMedia();

//   //   mm.add(
//   //     {
//   //       isMobile: "(max-width: 768px)",
//   //       isTablet: "(min-width: 769px) and (max-width: 1279px)",
//   //       isLargeScreen: "(min-width: 1280px)",
//   //     },
//   //     () => {
//   //       const el = headRef.current;
//   //       const elWidth = el.scrollWidth; // total text width
//   //       const vw = window.innerWidth;   // viewport width

//   //       // how much we need to move (element width - viewport width)
//   //       const moveX = -(elWidth - vw);

//   //       gsap.to(el, {
//   //         x: moveX, // ✅ always scroll full width regardless of screen
//   //         ease: "none",
//   //         scrollTrigger: {
//   //           trigger: ".page",
//   //           start: "top 50%",
//   //           end: "top -80%",
//   //           scrub: 2,
//   //           pin: true,
//   //           markers: false,
//   //         },
//   //       });
//   //     }
//   //   );
//   // }, []);

//   useGSAP(() => {


//         gsap.to(
//           headRef.current,{
//             transform: 'translateX(-150%)',
//             scrollTrigger: {
//               trigger: containerRef.current,
//               scroller: "body",
//               markers: true,
//               start: 'top 0%',
//               end: 'bottom -150%',
//               scrub: 2,
//               pin: true,
//             }
//           }
//         );
      
//   }, []);

//   return (
//     <div>
//       <div ref={containerRef} className="three mt-12 py-12 overflow-hidden">
//       {/* Heading */}
//       <h1
//         className="text-center font-extrabold leading-tight text-[30px] sm:text-[53px] md:text-[62px] lg:text-[84px] xl:text-[94px] text-[#EEE6E2] mb-8 tracking-wide font-presser-bold px-4"
//         style={{ letterSpacing: "0.04em" }}
//       >
//         EXPERIENCE
//       </h1>

//       <div className="relative xl:scale-110 max-w-4xl 2xl:max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-20">
//         {/* Vertical timeline lines */}
//         {timelinePositions.map((pos, index) => (
//           <TimelineLine key={index} style={pos} />
//         ))}

//         {/* Experience items */}
//         <div className="flex flex-col gap-8 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-20 mx-auto w-[92%] sm:w-[90%] md:w-[85%] lg:w-[80%]">
//           {experiences.map((exp, index) => (
//             <ExperienceItem key={index} exp={exp} index={index} />
//           ))}
//         </div>
//       </div>

      
//     </div>
//     <div className='page'>
//       <h1 
//         ref={headRef} 
//         className="text-[50px] sm:text-[80px] md:text-[120px] lg:text-[200px] whitespace-nowrap text-[#696969] text-center mt-12 font-presser-bold"
//       >
//         Building Brands, Designing Experiences.
//       </h1>
//     </div>
//     </div>
//   );
// }

// export default Experience;
