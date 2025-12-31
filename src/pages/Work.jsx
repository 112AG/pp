import React from "react";
import ServiceCard from "../component/ServiceCard";
import ProcessStep from "../component/ProcessStep";
import UnforgatableLandingPage from "../component/UnforgatableLandingPage";
import { Sticker } from "lucide-react";
import Stickers from "../component/Stickers";
import artistrebelWorkBg from "../assets/artistrebelWorkBg.webp";
import artistrebelBTN from "../assets/workHeroCard/artistrebelBTN.png";
import artistrebelDesign from "../assets/workHeroCard/artistrebelDesign.png";
import artistrebelUiux from "../assets/workHeroCard/artistrebelUiux.png";
import artistrebelVs from "../assets/workHeroCard/artistrebelVs.png";
import artistrebelStar from "../assets/workHeroCard/artistrebelStar.png";
import artistrebelNBS from "../assets/workHeroCard/artistrebelNBS.png";
import artistrebeltext from "../assets/artistrebeltext.webp";
function WorkComponent() {
  return (
    <div className="pt-0">
      <div
        className="h-[1262px] flex items-center relative -top-36 justify-center px-6"
        style={{
          backgroundImage: `url(${artistrebelWorkBg})`,
          backgroundSize: "100% 80%", // Stretch to fit exactly
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src={artistrebelStar}
          className="w-[99px] hidden sm:inline-block absolute left-[16%]"
          alt=""
        />
        <img
          src={artistrebelUiux}
          className="w-[110px] hidden sm:inline-block absolute top-[20%] left-[23%]"
          alt=""
        />
        <img
          src={artistrebelDesign}
          className="w-[110px] hidden sm:inline-block absolute top-[20%] left-[48%]"
          alt=""
        />
        <img
          src={artistrebelNBS}
          className="w-[347px] absolute hidden sm:inline-block top-[20%] left-[73%]"
          alt=""
        />
        <img
          src={artistrebelVs}
          className="w-[210px] absolute hidden sm:inline-block  top-[45%] right-[6%]"
          alt=""
        />
        <div className="text-center px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <h1 className="pt-42 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] text-black leading-tight tracking-tight font-presser-bold">
            WORK THAT
            <br />
            <span className="text-orange-600"> SPEAKS </span>LOUDER{" "}
            <br className="hidden sm:block" />
            THAN WORDS
          </h1>

          {/* Subtitle */}
          <p className="mt-8 sm:mt-10 lg:mt-12 text-lg sm:text-xl md:text-2xl lg:text-[32px] font-presser-medium text-black leading-relaxed">
            From <span className="bg-yellow-300 px-2">branding</span> to motion,
            <br className="block sm:hidden" />
            I design
            <br className="hidden sm:block" />
            experiences that people remember.
          </p>

          {/* Button Image */}
          <a
            href="#"
            className="inline-block mx-auto mt-8 sm:mt-10 lg:mt-12 max-w-[90%] sm:max-w-[700px] hover:scale-105 transition-transform duration-300"
          >
            <img
              src={artistrebelBTN}
              alt="Call to action button"
              className="w-full h-auto block"
            />
          </a>
        </div>

        <div className="absolute bottom-20 rotate-1 left-0 right-0">
          <img src={artistrebeltext} alt="" />
        </div>
      </div>

      <div>
        <ServiceCard />
      </div>

      <div>
        <ProcessStep />
      </div>

      <div>
        <UnforgatableLandingPage />
      </div>

      <div>
        <Stickers />
      </div>
    </div>
  );
}

export default WorkComponent;

// "use client"

// import { Star, ArrowUpRight, Lightbulb, Palette, AlignJustify, Package, Award } from "lucide-react"
// import Stickers from "../component/Stickers"

// export default function Work() {
//   const marqueeItems = ["UI/UX", "MOTION", "STRATEGY", "WEB DESIGN", "ART DIRECTION", "BRANDING"]

//   const services = [
//     {
//       tags: ["STRATEGY", "IDENTITY"],
//       title: "BRAND IDENTITY",
//       description: "Logos that stick. Systems that scale. We build the visual soul of your business.",
//       borderColor: "border-pink-500",
//       bgColor: "bg-pink-500",
//     },
//     {
//       tags: ["EXPERIENCE", "WEB & APP"],
//       title: "UI/UX DESIGN",
//       description: "Pixel perfect interfaces that guide users and convert visitors into fans.",
//       borderColor: "border-cyan-400",
//       bgColor: "bg-cyan-400",
//     },
//     {
//       tags: ["STORY", "MOTION"],
//       title: "VIDEO & MOTION",
//       description: "High-energy edits and motion graphics that stop the instantly.",
//       borderColor: "border-yellow-400",
//       bgColor: "bg-yellow-400",
//     },
//     {
//       tags: ["TACTILE", "PRINT"],
//       title: "PRINT & PACKAGING",
//       description: "High-energy edits and motion graphics that stop the instantly.",
//       borderColor: "border-orange-500",
//       bgColor: "bg-orange-500",
//     },
//   ]

//   const processSteps = [
//     {
//       icon: Lightbulb,
//       title: "Think",
//       description: "Ideas before aesthetics. We dig deep into the why.",
//       color: "bg-cyan-400",
//     },
//     {
//       icon: Palette,
//       title: "Design",
//       description: "Crafting the visual language. Bold, loud, and unique.",
//       color: "bg-pink-500",
//     },
//     {
//       icon: AlignJustify,
//       title: "Refine",
//       description: "Pixel perfect precision. No detail is too small.",
//       color: "bg-yellow-400",
//     },
//     {
//       icon: Package,
//       title: "Deliver",
//       description: "Handover packaged for success. Ready to launch.",
//       color: "bg-orange-500",
//     },
//     { icon: Award, title: "Impact", description: "Creating waves in your industry.", color: "bg-yellow-300" },
//   ]

//   const socialLinks = [
//     { name: "LINKEDIN", color: "bg-green-400", rotate: "-rotate-12" },
//     { name: "INSTAGRAM", color: "bg-yellow-300", rotate: "rotate-6" },
//     { name: "WHATSAPP", color: "bg-green-300", rotate: "rotate-12" },
//     { name: "PINTEREST", color: "bg-red-400", rotate: "-rotate-3" },
//     { name: "YOUTUBE", color: "bg-green-400", rotate: "rotate-6" },
//   ]

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] font-sans">
//       {/* Hero Section */}
//       <section className="relative bg-[#f5f5f0] overflow-hidden">
//         {/* Grid Background */}
//         <div
//           className="absolute inset-0 opacity-30"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(200, 200, 200, 0.5) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(200, 200, 200, 0.5) 1px, transparent 1px)
//             `,
//             backgroundSize: "40px 40px",
//           }}
//         />

//         {/* Red diagonal stripe */}
//         <div className="absolute bottom-0 left-0 right-0 h-16 bg-red-500 transform -skew-y-1 translate-y-8" />

//         <div className="relative z-10 px-6 py-16 max-w-4xl mx-auto text-center">
//           {/* Top badge */}
//           <div className="flex justify-center mb-4">
//             <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">—</span>
//           </div>

//           {/* Badges */}
//           <div className="relative">
//             <span className="absolute -top-2 left-1/4 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded transform -rotate-12">
//               ANUS
//             </span>
//             <span className="absolute top-0 right-1/3 bg-green-400 text-black text-[10px] font-bold px-2 py-0.5 rounded transform rotate-6">
//               DESIGN
//             </span>
//             <span className="absolute top-4 right-8 bg-[#1a1a1a] text-white text-[10px] font-bold px-3 py-1 rounded-full transform rotate-12">
//               NO BORING STUFF
//             </span>
//           </div>

//           {/* Main Headline */}
//           <h1 className="text-4xl md:text-6xl font-black text-[#1a1a1a] leading-tight mt-8">
//             WORK THAT{" "}
//             <span className="relative inline-block">
//               <span className="relative z-10 text-[#1a1a1a]">SPEAKS</span>
//               <span
//                 className="absolute inset-0 bg-red-500 -skew-x-3 transform scale-110 -z-0"
//                 style={{ top: "20%", bottom: "20%" }}
//               />
//             </span>{" "}
//             LOUDER
//             <br />
//             THAN WORDS
//           </h1>

//           {/* Star icon */}
//           <div className="flex items-center justify-center gap-2 mt-4">
//             <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
//           </div>

//           {/* Subheadline */}
//           <p className="text-gray-600 mt-4 text-sm md:text-base">
//             From <span className="underline decoration-red-500">branding</span> to motion, I design
//             <br />
//             experiences that people remember.
//           </p>

//           {/* Visual Rebel badge */}
//           <span className="inline-block mt-4 bg-yellow-300 text-black text-[10px] font-bold px-3 py-1 rounded-full transform rotate-6">
//             Visual Rebel
//           </span>

//           {/* CTA Button */}
//           <div className="mt-8">
//             <button className="bg-[#1a1a1a] text-white px-6 py-3 rounded-full font-bold text-sm inline-flex items-center gap-2 hover:bg-[#333] transition-colors">
//               Explore Projects
//               <ArrowUpRight className="w-4 h-4" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Marquee Section */}
//       <div className="py-4 overflow-hidden">
//         <div className="flex animate-marquee whitespace-nowrap">
//           {[...Array(4)].map((_, i) => (
//             <div key={i} className="flex items-center">
//               {marqueeItems.map((item, index) => (
//                 <span key={index} className="text-white font-bold text-sm mx-4 flex items-center gap-4">
//                   {item}
//                   <span className="text-gray-500">•</span>
//                 </span>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Services Section */}
//       <section className="bg-[#0a0a0a] py-16 px-6">
//         <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`bg-[#1a1a1a] rounded-xl p-6 border-2 ${service.borderColor} relative overflow-hidden`}
//             >
//               {/* Tags */}
//               <div className="flex gap-2 mb-4">
//                 {service.tags.map((tag, i) => (
//                   <span
//                     key={i}
//                     className={`text-[10px] font-bold px-2 py-0.5 rounded ${i === 0 ? service.bgColor + " text-black" : "bg-gray-700 text-white"}`}
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               {/* Title */}
//               <h3 className="text-white text-2xl font-black mb-2">{service.title}</h3>

//               {/* Description */}
//               <p className="text-gray-400 text-xs mb-8">{service.description}</p>

//               {/* Bottom gradient area */}
//               <div className={`h-20 rounded-lg ${service.bgColor} opacity-20 flex items-center justify-center`}>
//                 <div className={`w-10 h-10 rounded-full ${service.bgColor} flex items-center justify-center`}>
//                   <ArrowUpRight className="w-5 h-5 text-black" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="bg-[#0a0a0a] py-16 px-6">
//         <h2 className="text-white text-4xl font-black text-center mb-12 tracking-wider">THE PROCESS</h2>

//         <div className="max-w-md mx-auto relative">
//           {/* Vertical line */}
//           <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-700" />

//           {processSteps.map((step, index) => (
//             <div key={index} className="flex gap-6 mb-8 relative">
//               {/* Icon */}
//               <div
//                 className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center flex-shrink-0 z-10`}
//               >
//                 <step.icon className="w-5 h-5 text-black" />
//               </div>

//               {/* Content */}
//               <div className="bg-[#1a1a1a] rounded-lg p-4 flex-1 border border-gray-800">
//                 <h4 className="text-white font-black text-lg mb-1">{step.title}</h4>
//                 <p className="text-gray-400 text-sm">{step.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-[#0a0a0a] py-16 px-6 text-center">
//         <p className="text-gray-400 text-sm mb-2">Let's build</p>
//         <h2 className="text-3xl md:text-5xl font-black mb-2">
//           <span className="bg-yellow-300 text-black px-4 py-1 rounded-lg inline-block transform -rotate-1">
//             SOMETHING
//           </span>
//         </h2>
//         <h2 className="text-red-500 text-3xl md:text-5xl font-black tracking-wider mb-6">UNFORGETTABLE</h2>

//         <p className="text-gray-400 text-sm mb-8">
//           Ready to turn your brand into a visual rebellion?
//           <br />
//           Let's Break the rules together.
//         </p>

//         <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-red-600 transition-colors border-2 border-red-400">
//           Start Project
//         </button>
//       </section>

//       {/* Footer / Social Section */}
//       <section className="bg-[#0a0a0a] py-16 px-6">
//         <Stickers/>
//       </section>

//       {/* Marquee Animation Styles */}
//       <style jsx>{`
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-marquee {
//           animation: marquee 20s linear infinite;
//         }
//       `}</style>
//     </div>
//   )
// }
