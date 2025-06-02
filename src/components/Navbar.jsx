import React, { useState } from "react";
import logo from "../assets/logo.svg";
import "../assets/hamburgers.css";

function Navbar() {
  const [isNavActive, setIsNavActive] = useState(false);

  const handleNavButtonClick = () => {
    document.body.style.overflow = isNavActive ? "auto" : "hidden";
    setIsNavActive(!isNavActive);
  };

  return (
    <div className="h-[80px] flex justify-between items-center gap-6 px-4 md:px-8" role="navigation">
      <div className="cursor-pointer">
        <a href="/" className="flex items-center">
          <img src={logo} alt="INvestF Logo" className="h-44 md:h-48 w-auto" />
        </a>
      </div>

      <ul className="flex items-center gap-6 md:gap-8 text-gray-800 font-Regular tracking-wide max-[950px]:hidden">
        <li className="hover:text-[#FF734F] hover:cursor-pointer transition-colors duration-300 text-nowrap">
          <a href="/">HOME</a>
        </li>
        <li className="hover:text-[#FF734F] hover:cursor-pointer transition-colors duration-300 text-nowrap">
          <a href="#blog">BLOG</a>
        </li>
        <li className="hover:text-[#FF734F] hover:cursor-pointer transition-colors duration-300 text-nowrap">
          <a href="#trading-tutorial">INVESTMENT 101</a>
        </li>
        <li className="hover:text-[#FF734F] hover:cursor-pointer transition-colors duration-300 text-nowrap">
          <a href="#about">ABOUT</a>
        </li>
        <li className="hover:text-[#FF734F] hover:cursor-pointer transition-colors duration-300 text-nowrap">
          <a href="#contact">CONTACT</a>
        </li>
      </ul>

      <button
        type="button"
        className={`hamburger hamburger--emphatic ${isNavActive ? "is-active" : ""} min-[950px]:hidden`}
        onClick={handleNavButtonClick}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      {isNavActive && (
        <div className="min-h-screen w-full bg-[#E0EAF3] absolute top-[80px] left-0 min-[950px]:hidden z-50">
          <ul className="flex flex-col items-center gap-8 text-2xl font-bold text-[#1D1D1D] tracking-wider mt-16 pb-20">
            <li className="hover:text-[#FF734F]" onClick={handleNavButtonClick}>
              <a href="/">HOME</a>
            </li>
            <li className="hover:text-[#FF734F]" onClick={handleNavButtonClick}>
              <a href="#blog">BLOG</a>
            </li>
            <li className="hover:text-[#FF734F]" onClick={handleNavButtonClick}>
              <a href="#trading-tutorial">สอนเทรด</a>
            </li>
            <li className="hover:text-[#FF734F]" onClick={handleNavButtonClick}>
              <a href="#about">ABOUT</a>
            </li>
            <li className="hover:text-[#FF734F]" onClick={handleNavButtonClick}>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;