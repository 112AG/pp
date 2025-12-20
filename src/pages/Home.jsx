import React, { useRef, useCallback } from "react";
import HeroOne from "../component/HeroOne";
import work from "../assets/artistrebelwork.webp";
import product from "../assets/artist-product.webp";
import work2 from "../assets/artistrebelworktwo.webp";
import HeroTwo from "../component/HeroTwo";
import Experience from "../component/Experience";
import Clip from "../component/Clip";
import Stickers from "../component/Stickers";
import Slide from "../component/Slide";
import artist from "../assets/artistmainimage.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aritistrebelMotiongraphics from '../assets/MobileView/aritistrebel-motiongraphics.webp';
import aritstRebelVideo from '../assets/MobileView/aritst-rebel-video.webp';
import aritstrebelPrintdesign from '../assets/MobileView/aritstrebel-printdesign.webp';
import artistrebelBackground from '../assets/MobileView/artistrebel-background.webp';
import artistrebelBrandidentity from '../assets/MobileView/artistrebel-brandidentity.webp';
import artistrebelName from '../assets/MobileView/artistrebel-name.webp';
import artistrebelVideoediting from '../assets/MobileView/artistrebel-videoediting.webp';
import artistrebelcamera from '../assets/MobileView/artistrebel-camera.webp';
import artistrebelproductgraph from '../assets/MobileView/artistrebel-productgraph.webp';


gsap.registerPlugin(ScrollTrigger);

function Home() {
  
  const imgRef = useRef();
  const artistref = useRef();
  const num1Ref = useRef(null);
  const num2Ref = useRef(null);
  const num3Ref = useRef(null);

  // Memoize the update function
  const updateNumber = useCallback((element, value) => {
    if (element) element.textContent = Math.round(value);
  }, []);

  useGSAP(() => {
    // Disable GSAP animations on small screens (mobile)
    if (typeof window !== "undefined" && window.matchMedia("(max-width:640px)").matches) {
      return () => {};
    }

    const ctx = gsap.context(() => {
      // Rotation animation
      gsap.to(imgRef.current, {
        rotation: -360,
        duration: 12,
        ease: "none",
        repeat: -1,
        transformOrigin: "center center",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play pause resume pause",
        },
      });

      // Artist image animation
      gsap.fromTo(
        artistref.current,
        {
          opacity: 0,
          y: 20,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imgRef.current,
            markers: false,
            start: "top 90%",
            end: "bottom 70%",
            toggleActions: "play none none reverse",
            scrub: true,
          },
        }
      );

      // Number counter animations
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 3 },
        scrollTrigger: {
          trigger: ".numStart",
          start: "top 40%",
          end: "bottom top",
          toggleActions: "play none none none",
        },
      });

      tl.to(
        { value: 0 },
        {
          value: 6,
          onUpdate: function () {
            updateNumber(num1Ref.current, this.targets()[0].value);
          },
          duration: 1.5,
        },
        0
      )
        .to(
          { value: 0 },
          {
            value: 100,
            onUpdate: function () {
              updateNumber(num2Ref.current, this.targets()[0].value);
            },
          },
          0
        )
        .to(
          { value: 0 },
          {
            value: 999,
            onUpdate: function () {
              updateNumber(num3Ref.current, this.targets()[0].value);
            },
            duration: 2.5,
          },
          0
        );
    });

    // Cleanup function
    return () => ctx.revert();
  }, [updateNumber]);

  return (
    <div className="overflow-x-hidden w-full">
      <HeroOne />

      <div className="relative hidden sm:inline-block">
        <img src={work} alt="" loading="lazy" className="sm:h-auto" />
        <img
          ref={imgRef}
          src={product}
          alt=""
          loading="lazy"
          className="absolute h-[46%] bottom-[-4%] right-[18.5%]"
        />
        <img
          ref={artistref}
          src={artist}
          alt=""
          loading="lazy"
          className="absolute h-[160%] sm:h-[106%] top-[-20%] sm:top-2 md:top-4 left-[31%] sm:left-[37%]"
        />
      </div>
      <div className="relative inline-block sm:hidden">
        <img src={artistrebelBackground} alt="" />
        <img src={artistrebelName} alt="" className="absolute top-[-10.5%] left-[18%] h-[113%]"/>
        <img src={artistrebelBrandidentity} alt="" className="w-[18%] absolute left-[10%] rotate-0 top-[-7%]"/>
<img
  src={artistrebelVideoediting}
  alt=""
  className="absolute w-[16%] top-[16%] right-[28px] opacity-100 rounded-[1.84px] rotate-0"
/>

<img
  src={aritstrebelPrintdesign}
  alt=""
  className="absolute w-[22%] top-[40%] right-[10px] opacity-100 rotate-0"
/>

<img
  src={aritstRebelVideo}
  alt=""
  className="absolute w-[24%] top-[40%] left-[26px] opacity-100 rotate-0"
/>

<img
  src={aritistrebelMotiongraphics}
  alt=""
  className="absolute w-[14%] top-[74%] left-[16px]"
/>
<div className="absolute right-[0] top-[84%] w-[100%] h-[38%]">
  <img src={artistrebelproductgraph} alt="" className="w-[22%] absolute right-[2%]" />
  <img src={artistrebelcamera} alt="" className="w-[6%] absolute right-[10%] top-[35%]" />
</div>
      </div>

      <HeroTwo />

      <div className="w-[80%] mx-auto">
        <h1
          className="
            w-full 
            break-words 
            text-center 
            font-extrabold 
            leading-tight 
            text-[#EEE6E2] 
            mb-8 
            font-presser-bold
            text-[24px]
            sm:text-[28px]
            md:text-[32px]   
            lg:text-[34px]       
            xl:text-[40px]       
            2xl:text-[40px]      
          "
        >
          CLIENT OVERVIEW
        </h1>

        <div className="numStart relative">
          <img
            src={work2}
            alt="Background"
            loading="lazy"
            className="object-cover object-center"
          />
          <div className="text-[#0a0a0a] text-center  absolute max-[320px]:bottom-[26.5%] max-[320px]:left-[14%] max-[2000px]:bottom-[27.5%] max-[2000px]:left-[15%] bottom-[27.5%] left-[15%] rotate-[17deg] text-[4vw] font-presser-bold">
            <span ref={num1Ref}>0</span>
            <span>+</span>
          </div>
          <div className="text-[#0a0a0a] absolute max-[320px]:bottom-[21.5%] max-[320px]:left-[0%] max-[1800px]:bottom-[23.5%] max-[1800px]:left-[0%] max-[2000px]:bottom-[21.5%] max-[2000px]:left-[0%] bottom-[21.5%] w-full text-center text-[4vw] font-presser-bold">
            <span ref={num2Ref}>0</span>
            <span>+</span>
          </div>
          <div className="absolute bottom-[26.5%] -right-[0%] -translate-x-1/2 text-[#0a0a0a] text-center -rotate-[17deg] font-presser-bold whitespace-nowrap text-[4vw]">
            <span ref={num3Ref}>0</span>
            <span>+</span>
          </div>
        </div>
      </div>

      <Experience />

      {/* <Slide /> */}

      <Clip />

      <Stickers />
    </div>
  );
}

export default Home;

// import React, { useRef } from "react";
// import HeroOne from "../component/HeroOne";
// import work from "../assets/artistrebelwork.webp";
// import product from "../assets/artist-product.webp";
// import work2 from "../assets/artistrebelworktwo.webp";
// import HeroTwo from "../component/HeroTwo";
// import Experience from "../component/Experience";
// import Clip from "../component/Clip";
// import Stickers from "../component/Stickers";
// import Slide from "../component/Slide";
// import artist from "../assets/artistmainimage.webp";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// function Home() {
//   const imgRef = useRef();
//   const artistref = useRef();
//   const num1Ref = useRef(null);
//   const num2Ref = useRef(null);
//   const num3Ref = useRef(null);

//   useGSAP(() => {
//     gsap.to(imgRef.current, {
//       rotation: -360,
//       duration: 12,
//       ease: "none",
//       repeat: -1,
//       transformOrigin: "center center",
//       scrollTrigger: {
//         trigger: imgRef.current,
//         start: "top bottom",
//         end: "bottom top",
//         toggleActions: "play pause resume pause",
//       },
//     });

//     gsap.fromTo(
//       artistref.current,
//       {
//         opacity: 0,
//         y: 20,
//         scale: 0.9,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: imgRef.current,
//           markers: false,
//           start: "top 70%",
//           end: "bottom top",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     const updateNumber = (element, value) => {
//       if (element) element.textContent = Math.round(value);
//     };

//     const tl = gsap.timeline({
//       defaults: { ease: "power2.out", duration: 3 },
//       scrollTrigger: {
//         trigger: ".numStart",
//         start: "top 40%",
//         end: "bottom top",
//         toggleActions: "play none none none",
//       },
//     });

//     tl.to(
//       { value: 0 },
//       {
//         value: 6,
//         onUpdate: function () {
//           updateNumber(num1Ref.current, this.targets()[0].value);
//         },
//         duration: 1.5,
//       },
//       0
//     )
//       .to(
//         { value: 0 },
//         {
//           value: 100,
//           onUpdate: function () {
//             updateNumber(num2Ref.current, this.targets()[0].value);
//           },
//         },
//         0
//       )
//       .to(
//         { value: 0 },
//         {
//           value: 999,
//           onUpdate: function () {
//             updateNumber(num3Ref.current, this.targets()[0].value);
//           },
//           duration: 2.5,
//         },
//         0
//       );
//   }, []);

//   return (
//     <div className="overflow-x-hidden w-full">
//       <HeroOne />

//       <div className="relative inline-block">
//         <img src={work} alt="" />
//         <img
//           ref={imgRef}
//           src={product}
//           alt=""
//           className="absolute h-[46%] bottom-[-4%] right-[18.5%]"
//         />
//         <img
//           ref={artistref}
//           src={artist}
//           alt=""
//           className="absolute h-[106%] top-2 md:top-4 left-[37%]"
//         />
//       </div>

//       <HeroTwo />

//       <div className="w-[80%] mx-auto">
//  <h1
//   className="
//     w-full 
//     break-words 
//     text-center 
//     font-extrabold 
//     leading-tight 
//     text-[#EEE6E2] 
//     mb-8 
//     font-presser-bold
//     text-[24px]
//     sm:text-[28px]
//     md:text-[32px]   
//     lg:text-[34px]       
//     xl:text-[40px]       
//     2xl:text-[40px]      
//   "
// >
//   CLIENT OVERVIEW
// </h1>

//         <div className="numStart relative">
//           <img
//             src={work2}
//             alt="Background"
//             className="object-cover object-center"
//           />
//           <div className="text-[#0a0a0a] text-center  absolute max-[320px]:bottom-[26.5%] max-[320px]:left-[14%] max-[2000px]:bottom-[27.5%] max-[2000px]:left-[15%] bottom-[27.5%] left-[15%] rotate-[17deg] text-[4vw] font-presser-bold">
//             <span ref={num1Ref}>0</span>
//             <span>+</span>
//           </div>
//           <div className="text-[#0a0a0a] absolute max-[320px]:bottom-[21.5%] max-[320px]:left-[0%] max-[1800px]:bottom-[23.5%] max-[1800px]:left-[0%] max-[2000px]:bottom-[21.5%] max-[2000px]:left-[0%] bottom-[21.5%] w-full text-center text-[4vw] font-presser-bold">
//             <span ref={num2Ref}>0</span>
//             <span>+</span>
//           </div>
//           <div
//             className="absolute bottom-[26.5%] -right-[0%] -translate-x-1/2 text-[#0a0a0a] text-center -rotate-[17deg] font-presser-bold whitespace-nowrap text-[4vw]">
//             <span ref={num3Ref}>0</span>
//             <span>+</span>
//           </div>
//         </div>
//       </div>

//       <Experience />

//       <Slide />

//       <Clip />

//       <Stickers />
//     </div>
//   );
// }

// export default Home;
