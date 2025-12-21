import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/artistrebelogo.png";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full text-white z-50 nav-gradient-blur">
      
      <div className=" mx-auto flex items-center justify-between px-6 sm:px-12 py-4 z-10 relative">
        {/* Logo */}
        <Link
          to="/"
          className="w-[50px] sm:w-[90px] md:w-[90px] lg:w-[111px] font-extrabold tracking-wide"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-full w-full object-cover object-center"
          />
        </Link>

        {/* Desktop Nav */}
        
        <nav className="hidden md:flex gap-8 text-lg font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-1 pb-1.5 rounded-full font-medium transition-colors duration-300 ease-in-out ${
                isActive
                  ? "bg-yellow-400 text-black font-bold"
                  : "text-white hover:text-yellow-400"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              `px-3 py-1 pb-1.5 rounded-full font-medium transition-colors duration-300 ease-in-out ${
                isActive
                  ? "bg-yellow-400 text-black font-bold"
                  : "text-white hover:text-yellow-400"
              }`
            }
          >
            Work
          </NavLink>

          {/* <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-1 rounded-full font-medium transition-colors duration-300 ease-in-out ${
                isActive
                  ? "bg-yellow-400 text-black font-bold"
                  : "text-white hover:text-yellow-400"
              }`
            }
          >
            About
          </NavLink> */}

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `px-3 py-1 rounded-full font-medium transition-colors duration-300 ease-in-out ${
                isActive
                  ? "bg-yellow-400 text-black font-bold"
                  : "text-white hover:text-yellow-400"
              }`
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-1 rounded-full font-medium transition-colors duration-300 ease-in-out ${
                isActive
                  ? "bg-[#EE3C4B] text-white font-bold"
                  : "text-white hover:text-yellow-400"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        {/* <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          {open ? (
            // Close (X) Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button> */}
        <div
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col items-center justify-center gap-[8px] relative z-10"
        >
          <div className={`h-[2px] w-[22px] bg-white transition-all ease-in duration-100 rounded-full ${open? 'rotate-45':'rotate-0'}`}></div>
          <div className={`h-[2px] w-[22px] bg-white transition-all ease-in duration-100 rounded-full ${open? 'hidden':'block'}`}></div>
          <div className={`h-[2px] w-[22px] bg-white transition-all ease-in duration-100 absolute rounded-full ${open? '-rotate-45 bottom-0':'rotate-0'}`}></div>
        </div>
      </div>
                

      {/* Mobile Nav (always rendered; visibility & transitions controlled by classes) */}
      <div
        className={`md:hidden bg-yellow-300 flex items-center justify-start pt-[120px] uppercase flex-col font-bold absolute top-0 w-screen text-black backdrop-blur-[2px] px-6 py-4 space-y-4 text-lg text-[18px] h-screen transform transition-transform transition-opacity duration-500 ease-out ${open ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-12 opacity-0 pointer-events-none'}`}
        aria-hidden={!open}
      >
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="block hover:text-red-400 active:text-red-400 transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/work"
            onClick={() => setOpen(false)}
            className="block hover:text-red-400 active:text-red-400 transition"
          >
            Work
          </NavLink>

          <NavLink
            to="/blog"
            onClick={() => setOpen(false)}
            className="block hover:text-red-400 active:text-red-400 transition"
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="block hover:text-red-400 active:text-red-400 transition"
          >
            Contact
          </NavLink>
        </div>
      <style jsx>{`
  .nav-gradient-blur {
    background: rgba(0, 0, 0, 0);
  }
  
  .nav-gradient-blur::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(12px);
    mask-image: linear-gradient(to bottom, black 80%, black 40%, black 30%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black 80%, black 40%, black 30%, transparent 100%);
    z-index: 0;
  }
`}</style>
    </header>
  );
}

export default Header;
