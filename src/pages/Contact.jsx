import React from "react";
import Stickers from "../component/Stickers";
import number from "../assets/contact/artistrebelnumber.webp";
import email from "../assets/contact/artistrebelgmail.webp";
import location from "../assets/contact/artistrebelahemdabad.webp";
import tag from "../assets/contact/artistrebeltag.webp";
import { Link } from "react-router-dom";
import layer from "../assets/MobileView/artistrebel-contactlayer.webp";

function Contact() {
  return (
    <div className="h-full flex flex-col gap-12 sm:gap-24">
      {/* MOBILE DEVICES ONLY */}
      <div className="contact-bg sm:hidden relative z-30 pt-[65px] max-[321px]:h-[90vh] max-[641px]:h-[70vh] rounded-b-[56px]">
        <div className="w-full h-[125px] flex items-center justify-center absolute -bottom-16 -z-30">
          <img src={layer} alt="" className="h-[123px]" />
        </div>
        <div className="z-30 w-full flex flex-col items-center justify-center px-4 py-0">
          {/* Heading */}
          <h1 className="text-[24px] font-presser-bold font-extrabold text-black uppercase text-center leading-tight">
            Contact Us
          </h1>
          <p className="max-[340px]:text-[9px] text-[10px] font-presser-bold font-bold text-black text-center">
            Ready to Make Your Brand Stand Out?
          </p>

          {/* Form (single-column, centered to match design) */}
          <form className="w-full max-w-[360px] mx-auto flex flex-col gap-2 mt-1 px-4">
            {/* Name */}
            <div>
              <label className="block text-[10px] text-[#131B23] font-bold mb-c">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full placeholder:text-[10px] h-[30px] text-sm px-3 rounded-[2px] bg-[#131B23] text-white placeholder-gray-400 focus:outline-none contact-form-input"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[10px] text-[#131B23] font-bold mb-0.5">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full placeholder:text-[10px] h-[30px] text-sm px-3 rounded-sm bg-[#131B23] text-white placeholder-gray-400 focus:outline-none contact-form-input"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[10px] text-[#131B23] font-bold mb-0.5">
                Phone Number (WhatsApp preferred)
              </label>
              <input
                type="tel"
                placeholder="+91"
                className="w-full placeholder:text-[10px] h-[30px] text-sm px-3 rounded-sm bg-[#131B23] text-white placeholder-gray-400 focus:outline-none contact-form-input"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-[10px] text-[#131B23] font-bold mb-0.5">
                Service
              </label>
              <input
                type="text"
                placeholder="What do you need help with?"
                className="w-full placeholder:text-[10px] h-[30px] text-sm px-3 rounded-sm bg-[#131B23] text-white placeholder-gray-400 focus:outline-none contact-form-input"
              />
            </div>

            {/* Budget */}
            <div>
              <label className="block text-[10px] text-[#131B23] font-bold mb-0.5">
                Budget
              </label>
              <input
                type="text"
                placeholder="Estimated Budget"
                className="w-full placeholder:text-[10px] h-[30px] text-sm px-3 rounded-sm bg-[#131B23] text-white placeholder-gray-400 focus:outline-none contact-form-input"
              />
            </div>

            {/* Message (textarea) */}
            <div>
              <label className="block text-[10px] text-[#131B23] font-bold mb-0.5">
                Message
              </label>
              <textarea
                placeholder="Tell me about your project"
                className="w-full placeholder:text-[10px] h-[30px] text-sm px-3 py-2 rounded-sm bg-[#131B23] text-white placeholder-gray-400 focus:outline-none resize-none contact-form-input"
              />
            </div>

            {/* Submit Button (full-width) */}
            <div className="">
              <button
                type="submit"
                className="w-full h-[30px] bg-[#EE3C4B] text-white font-bold text-[15px] contact-submit"
              >
                <span className="bg-[#EE3C4B] w-full h-full flex items-center justify-center tracking-wider">
                  Let's Connect
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* LARGE SCREEN ONLY */}
      <div className="contact-bg-two hidden sm:block relative z-30 pt-[74px] xl:pt-[140px] min-h-[140vh] xl:min-h-[170vh]">
        <div className="w-full h-[330px] flex items-center justify-center absolute bottom-[10%] xl:bottom-[8.5%] z-[-40]">
          <img src={layer} alt="" className="h-full " />
        </div>
        <div className="z-[40] w-full flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 xl:px-20 py-10">
          {/* Heading */}
          <h1 className="text-[28px] sm:text-[64px] xl:text-[84px] font-presser-bold font-extrabold text-black uppercase text-center leading-tight">
            Contact Us
          </h1>
          <p className="text-[12px] sm:text-xl 2xl:text-[28px] font-presser-bold font-bold text-black text-center sm:mb-10">
            Ready to Make Your Brand Stand Out?
          </p>

          {/* Form */}
          <form className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-6">
            {/* Name */}
            <div>
              <label className="block text-[10px] sm:text-sm xl:text-[20px] text-[#131B23] font-semibold mb-1 sm:mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full px-2 sm:px-4 xl:px-8 xl:py-6 py-1.5 sm:py-3 rounded-md bg-[#131B23] text-white placeholder-gray-400 placeholder:text-[12px] focus:outline-none"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-[10px] sm:text-sm xl:text-[20px] text-[#131B23] font-semibold mb-1 sm:mb-2">
                Service
              </label>
              <input
                type="text"
                placeholder="What do you need help with?"
                className="w-full px-2 sm:px-4 xl:px-8 xl:py-6 py-1.5 sm:py-3 rounded-[6px] bg-[#131B23] text-white placeholder-gray-400 placeholder:text-[12px] focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[10px] sm:text-sm xl:text-[20px] text-[#131B23] font-semibold mb-1 sm:mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-2 sm:px-4 xl:px-8 xl:py-6 py-1.5 sm:py-3 rounded-[6px] bg-[#131B23] text-white placeholder-gray-400 placeholder:text-[12px] focus:outline-none"
              />
            </div>

            {/* Budget */}
            <div>
              <label className="block text-[10px] sm:text-sm xl:text-[20px] text-[#131B23] font-semibold mb-1 sm:mb-2">
                Budget
              </label>
              <input
                type="text"
                placeholder="Estimated Budget"
                className="w-full px-2 sm:px-4 xl:px-8 xl:py-6 py-1.5 sm:py-3 rounded-[6px] bg-[#131B23] text-white placeholder-gray-400 placeholder:text-[12px] focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-[10px] sm:text-sm xl:text-[20px] text-[#131B23] whitespace-nowrap font-semibold mb-1 sm:mb-2">
                Phone Number{" "}
                <span className="sm:inline">(WhatsApp preferred):</span>
              </label>
              <input
                type="tel"
                placeholder="+91"
                className="w-full px-2 sm:px-4 xl:px-8 xl:py-6 py-1.5 sm:py-3 rounded-[6px] bg-[#131B23] text-white placeholder-gray-400 placeholder:text-[12px] focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-[10px] sm:text-sm xl:text-[20px] text-[#131B23] font-semibold mb-1 sm:mb-2">
                Message
              </label>
              <input
                type="text"
                placeholder="Tell me about your project"
                className="w-full px-2 sm:px-4 xl:px-8 xl:py-6 py-1.5 sm:py-3 rounded-[6px] bg-[#131B23] text-white placeholder-gray-400 placeholder:text-[12px] focus:outline-none"
              />
            </div>
          </form>

          {/* Submit Button */}
          <div className="mt-4 sm:mt-10 2xl:scale-140">
            <button
              type="submit"
              className="px-7 sm:px-12 font-presser-bold py-2.5 sm:py-4 bg-[#EE3C4B] text-white font-bold text-[12px] sm:text-lg rounded-[6px] hover:scale-105 transition-transform duration-300 shadow-[0_6px_0_#0B0E14]"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>

      {/* THANK YOU SECTION */}
      <div className="relative">
        <a
          href="tel:+911234567890"
          className="w-[36%] sm:w-[26%] lg:w-[30%] 2xl:w-[40%] max-w-[436px] absolute top-38 min-[400px]:top-46 -rotate-36 sm:rotate-0 sm:-top-78 left-[8%]"
        >
          <img src={number} alt="Call us" />
        </a>

        <a
          href="mailto:artistrebel10@gmail.com"
          className="w-[40%] sm:w-[26%] lg:w-[30%] 2xl:w-[40%] max-w-[557px] absolute right-14 sm:right-14 -rotate-12 sm:rotate-0 top-[62%] sm:-top-48"
        >
          <img src={email} alt="Email us" />
        </a>

        <a
          href="https://goo.gl/maps/yourLocationLink"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-[32%] translate-x-1/2 -bottom-10 sm:bottom-0 w-[38%] sm:w-[28%] lg:w-[20%] 2xl:w-[40%] max-w-[340px]"
        >
          <img src={location} alt="Location" className="w-full h-auto" />
        </a>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mt-4 xl:text-9xl text-center font-presser-bold">
          Thank You
        </h1>

        <div className="w-full max-[400px]:h-[24vh] max-[500px]:h-[28vh] h-[38vh] sm:h-[36vh] md:h-[28vh] lg:h-[38vh]">
          <div className="w-[70%] sm:w-[50%] lg:w-[40%] max-w-[460px] absolute left-1/2 -translate-x-1/2">
            <img src={tag} alt="" />
          </div>
        </div>
      </div>

      <Stickers />
    </div>
  );
}

export default Contact;
