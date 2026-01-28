import React, { useState } from "react";
import Stickers from "../component/Stickers";
import number from "../assets/contact/artistrebelnumber.webp";
import email from "../assets/contact/artistrebelgmail.webp";
import location from "../assets/contact/artistrebelahemdabad.webp";
import tag from "../assets/contact/artistrebeltag.webp";
import { Link } from "react-router-dom";
import layer from "../assets/MobileView/artistrebel-contactlayer.webp";
import emailjs from "@emailjs/browser";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.phone) {
    setStatus("Please fill Name, Email & Phone");
    return;
  }

  emailjs
    .send(
      "service_fwojmtk",      // e.g. service_xxxxx
      "template_plegf5r",     // e.g. contact_form
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        budget: formData.budget,
        message: formData.message,
      },
      "4X2-7geZnd1eDgyqU"       // EmailJS public key
    )
    .then(
      () => {
        setStatus("Thank you! We'll get back to you soon ✨");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
        });
      },
      (error) => {
        console.error(error);
        setStatus("Something went wrong. Please try again.");
      }
    );
};


  return (
    <div className="h-full flex flex-col gap-12 sm:gap-0">
      {/* MOBILE DEVICES ONLY */}
      <div className="contact-bg sm:hidden relative z-30 pt-[65px] max-[274px]:h-[620px] max-[320px]:h-[570px] max-[641px]:h-[580px] rounded-b-[56px]">
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

          {status && (
            <p
              className={`mt-2 text-center text-[11px] ${
                status.includes("Thank") ? "text-green-700" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[360px] mx-auto flex flex-col gap-2 mt-1 px-4"
          >
            {/* Name */}
            <div>
              <label className="block text-[10px] text-[#131B23] font-bold mb-c">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                name="phone"
                value={formData.phone}
                onChange={handleChange}
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
                name="service"
                value={formData.service}
                onChange={handleChange}
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
                name="budget"
                value={formData.budget}
                onChange={handleChange}
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
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project"
                rows={2}
                className="w-full placeholder:text-[10px] text-sm px-3 py-2 rounded-sm bg-[#131B23] text-white placeholder-gray-400 focus:outline-none resize-none contact-form-input"
              />
            </div>

            {/* Submit Button */}
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
      <div className="contact-bg-two hidden sm:block relative z-30 pt-[74px] xl:pt-[140px] min-h-[1200px] xl:min-h-[1400px]">
        <div className="w-full h-[330px] lg:h-[450px] flex items-center justify-center absolute bottom-[6%] lg:bottom-[1%] xl:bottom-[4%] z-[-40]">
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

          {status && (
            <p
              className={`mt-6 text-center ${
                status.includes("Thank") ? "text-green-700" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4 sm:gap-6"
          >
            <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-6">
            {/* Name */}
            <div>
              <label className="block text-[10px] sm:text-sm xl:text-[20px] text-[#131B23] font-semibold mb-1 sm:mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                name="service"
                value={formData.service}
                onChange={handleChange}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                name="budget"
                value={formData.budget}
                onChange={handleChange}
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
                name="phone"
                value={formData.phone}
                onChange={handleChange}
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
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project"
                className="w-full px-2 sm:px-4 xl:px-8 xl:py-6 py-1.5 sm:py-3 rounded-[6px] bg-[#131B23] text-white placeholder-gray-400 placeholder:text-[12px] focus:outline-none"
              />
            </div>
            </div>
            {/* Submit Button */}
            <div className="mt-4 sm:mt-10 2xl:scale-140">
              <button
                type="submit"
                className="px-7 sm:px-12 cursor-pointer font-presser-bold py-2.5 sm:py-4 bg-[#EE3C4B] text-white font-bold text-[12px] sm:text-lg rounded-[6px] hover:scale-105 transition-transform duration-300 shadow-[0_6px_0_#0B0E14]"
              >
                Let's Connect
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* THANK YOU SECTION */}
      <div className="relative">
        <a
          href="tel:+917007703054"
          className="w-[32%] sm:w-[26%]  2xl:w-[40%] max-w-[436px] absolute top-3 rotate-0 sm:-top-28 left-[2%]"
        >
          <img src={number} alt="Call us" />
        </a>

        <a
          href="mailto:artistrebel10@gmail.com"
          className="w-[38%] sm:w-[26%] 2xl:w-[40%] max-w-[557px] absolute right-2 sm:right-14 rotate-0 top-12 sm:-top-18"
        >
          <img src={email} alt="Email us" />
        </a>

        <a
          href="https://goo.gl/maps/yourLocationLink"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-[32%] translate-x-1/2 -bottom-18 sm:-bottom-1 md:-bottom-12 w-[38%] sm:w-[28%] 2xl:w-[40%] max-w-[440px]"
        >
          <img src={location} alt="Location" className="w-full h-auto" />
        </a>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl mt-4 xl:text-9xl text-center font-presser-bold pt-[94px]">
          Thank You
        </h1>

        <div className="w-full max-[400px]:h-[8vh] max-[500px]:h-[14vh] h-[18vh] sm:h-[36vh] md:h-[28vh] lg:h-[38vh]">
          <div className="w-[202px] sm:w-[50%] lg:w-[40%] max-w-[460px] absolute left-1/2 -translate-x-1/2">
            <img src={tag} alt="" />
          </div>
        </div>
      </div>

      <Stickers />
    </div>
  );
}

export default Contact;
