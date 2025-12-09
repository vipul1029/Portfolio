"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(0)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(100%)";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background effect */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300
        ${
          isScroll
            ? "bg-white/80 backdrop-blur-lg shadow-md dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        {/* Desktop Navigation */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 rounded-full transition-all duration-300
          ${
            isScroll
              ? ""
              : "bg-white/70 shadow-md dark:bg-transparent dark:border dark:border-white/50"
          }`}
        >
          {[
            { name: "Home", link: "#" },
            { name: "About me", link: "#about" },
            { name: "Services", link: "#services" },
            { name: "Certificates", link: "#certificates" },
            { name: "My Work", link: "#work" },
            { name: "Contact me", link: "#contact" },
          ].map(({ name, link }) => (
            <li key={name}>
              <a
                href={link}
                className="font-Ovo text-lg text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-400 transition"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="transition-transform duration-300 hover:scale-110"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Theme Toggle"
              className="w-6"
            />
          </button>

          {/* Premium Contact Button */}
          <a
            href="#contact"
            className="
              hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-full
              font-Ovo text-lg font-semibold transition-all duration-300
              bg-gradient-to-r from-indigo-600 to-purple-600 text-white
              hover:from-indigo-600 hover:to-blue-500
              hover:shadow-[0_10px_30px_rgba(79,70,229,0.45)]
              hover:scale-[1.04]
              dark:from-yellow-400 dark:to-red-500
              dark:hover:from-orange-500 dark:hover:to-orange-500
            "
          >
            Contact me
            <Image
              src={assets.arrow_icon}
              alt="Arrow"
              className="w-4"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden ml-2 transition-transform duration-300 hover:scale-110"
            onClick={openMenu}
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu"
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="fixed top-0 right-0 h-screen w-64 bg-white dark:bg-darkHover
                     text-black dark:text-white shadow-md transform translate-x-full
                     transition-transform duration-500 flex flex-col gap-6 py-20 px-10 z-50"
        >
          {/* Close Button */}
          <div
            className="absolute right-6 top-6 cursor-pointer transition-transform hover:scale-110"
            onClick={closeMenu}
          >
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="Close"
              className="w-5"
            />
          </div>

          {[
            { name: "Home", link: "#" },
            { name: "About me", link: "#about" },
            { name: "Services", link: "#services" },
            { name: "Certificates", link: "#certificates" },
            { name: "My Work", link: "#work" },
            { name: "Contact me", link: "#contact" },
          ].map(({ name, link }) => (
            <li key={name}>
              <a
                href={link}
                onClick={closeMenu}
                className="font-Ovo text-lg text-gray-700 dark:text-gray-300
                           hover:text-primary dark:hover:text-yellow-400 transition"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
