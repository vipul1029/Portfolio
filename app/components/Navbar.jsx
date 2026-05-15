// // "use client";

// // import { assets } from "@/assets/assets";
// // import Image from "next/image";
// // import React, { useState, useRef, useEffect } from "react";

// // const Navbar = ({ isDarkMode, setIsDarkMode }) => {
// //   const [isScroll, setIsScroll] = useState(false);
// //   const sideMenuRef = useRef();

// //   const openMenu = () => {
// //     sideMenuRef.current.style.transform = "translateX(0)";
// //   };

// //   const closeMenu = () => {
// //     sideMenuRef.current.style.transform = "translateX(100%)";
// //   };

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScroll(window.scrollY > 50);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <>
// //       {/* Background effect */}
// //       <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
// //         <Image src={assets.header_bg_color} alt="" className="w-full" />
// //       </div>

// //       {/* Navbar */}
// //       <nav
// //         className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300
// //         ${
// //           isScroll
// //             ? "bg-white/80 backdrop-blur-lg shadow-md dark:bg-darkTheme dark:shadow-white/20"
// //             : ""
// //         }`}
// //       >
// //         {/* Logo */}
// //         <a
// //           href="#"
// //           onClick={(e) => {
// //             e.preventDefault();
// //             window.scrollTo({ top: 0, behavior: "smooth" });
// //           }}
// //         >
// //           <Image
// //             src={isDarkMode ? assets.logo_dark : assets.logo}
// //             alt="Logo"
// //             className="w-28 cursor-pointer mr-14"
// //           />
// //         </a>

// //         {/* Desktop Navigation */}
// //         <ul
// //           className={`hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 rounded-full transition-all duration-300
// //           ${
// //             isScroll
// //               ? ""
// //               : "bg-white/70 shadow-md dark:bg-transparent dark:border dark:border-white/50"
// //           }`}
// //         >
// //           {[
// //             { name: "Home", link: "#" },
// //             { name: "About me", link: "#about" },
// //             { name: "Experience", link: "#experience" },
// //             { name: "Services", link: "#services" },
// //             { name: "Certificates", link: "#certificates" },
// //             { name: "My Work", link: "#work" },
// //             { name: "Contact me", link: "#contact" },
// //           ].map(({ name, link }) => (
// //             <li key={name}>
// //               <a
// //                 href={link}
// //                 className="font-Ovo text-lg text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-400 transition"
// //               >
// //                 {name}
// //               </a>
// //             </li>
// //           ))}
// //         </ul>

// //         {/* Right Section */}
// //         <div className="flex items-center gap-4">
// //           {/* Theme Toggle */}
// //           <button
// //             onClick={() => setIsDarkMode((prev) => !prev)}
// //             className="transition-transform duration-300 hover:scale-110"
// //           >
// //             <Image
// //               src={isDarkMode ? assets.sun_icon : assets.moon_icon}
// //               alt="Theme Toggle"
// //               className="w-6"
// //             />
// //           </button>

// //           {/* Premium Contact Button */}
// //           <a
// //             href="#contact"
// //             className="
// //               hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-full
// //               font-Ovo text-lg font-semibold transition-all duration-300
// //               bg-gradient-to-r from-indigo-600 to-purple-600 text-white
// //               hover:from-indigo-600 hover:to-blue-500
// //               hover:shadow-[0_10px_30px_rgba(79,70,229,0.45)]
// //               hover:scale-[1.04]
// //               dark:from-yellow-400 dark:to-red-500
// //               dark:hover:from-orange-500 dark:hover:to-orange-500
// //             "
// //           >
// //             Contact me
// //             <Image
// //               src={assets.arrow_icon}
// //               alt="Arrow"
// //               className="w-4"
// //             />
// //           </a>

// //           {/* Mobile Menu Button */}
// //           <button
// //             className="block md:hidden ml-2 transition-transform duration-300 hover:scale-110"
// //             onClick={openMenu}
// //           >
// //             <Image
// //               src={isDarkMode ? assets.menu_white : assets.menu_black}
// //               alt="Menu"
// //               className="w-6"
// //             />
// //           </button>
// //         </div>

// //         {/* Mobile Menu */}
// //         <ul
// //           ref={sideMenuRef}
// //           className="fixed top-0 right-0 h-screen w-64 bg-white dark:bg-darkHover
// //                      text-black dark:text-white shadow-md transform translate-x-full
// //                      transition-transform duration-500 flex flex-col gap-6 py-20 px-10 z-50"
// //         >
// //           {/* Close Button */}
// //           <div
// //             className="absolute right-6 top-6 cursor-pointer transition-transform hover:scale-110"
// //             onClick={closeMenu}
// //           >
// //             <Image
// //               src={isDarkMode ? assets.close_white : assets.close_black}
// //               alt="Close"
// //               className="w-5"
// //             />
// //           </div>

// //           {[
// //             { name: "Home", link: "#" },
// //             { name: "About me", link: "#about" },
// //             { name: "Experience", link: "#experience" },
// //             { name: "Services", link: "#services" },
// //             { name: "Certificates", link: "#certificates" },
// //             { name: "My Work", link: "#work" },
// //             { name: "Contact me", link: "#contact" },
// //           ].map(({ name, link }) => (
// //             <li key={name}>
// //               <a
// //                 href={link}
// //                 onClick={closeMenu}
// //                 className="font-Ovo text-lg text-gray-700 dark:text-gray-300
// //                            hover:text-primary dark:hover:text-yellow-400 transition"
// //               >
// //                 {name}
// //               </a>
// //             </li>
// //           ))}
// //         </ul>
// //       </nav>
// //     </>
// //   );
// // };

// // export default Navbar;


































// "use client";

// import { assets } from "@/assets/assets";
// import Image from "next/image";
// import React, { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";

// const Navbar = ({ isDarkMode, setIsDarkMode }) => {

//   const [isScroll, setIsScroll] = useState(false);

//   const sideMenuRef = useRef();

//   const openMenu = () => {
//     sideMenuRef.current.style.transform = "translateX(0)";
//   };

//   const closeMenu = () => {
//     sideMenuRef.current.style.transform = "translateX(100%)";
//   };

//   useEffect(() => {

//     const handleScroll = () => {
//       setIsScroll(window.scrollY > 40);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);

//   }, []);

//   const navLinks = [
//     { name: "Home", link: "#" },
//     { name: "About", link: "#about" },
//     { name: "Experience", link: "#experience" },
//     { name: "Expertise", link: "#services" },
//     { name: "Certificates", link: "#certificates" },
//     { name: "Projects", link: "#work" },
//     { name: "Contact", link: "#contact" },
//   ];

//   return (
//     <>

//       {/* Background Effect */}
//       <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">

//         <Image
//           src={assets.header_bg_color}
//           alt=""
//           className="w-full"
//         />

//       </div>

//       {/* Navbar */}
//       <motion.nav
//         initial={{ y: -80, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.35 }}
//         className={`fixed top-0 left-0 w-full z-50 px-5 lg:px-8 xl:px-[8%]
//                     py-4 flex items-center justify-between transition-all duration-300
//                     ${
//                       isScroll
//                         ? "bg-white/70 dark:bg-darkTheme/80 backdrop-blur-xl shadow-lg border-b border-gray-200 dark:border-white/10"
//                         : "bg-transparent"
//                     }`}
//       >

//         {/* Logo */}
//         <a
//           href="#"
//           onClick={(e) => {
//             e.preventDefault();
//             window.scrollTo({
//               top: 0,
//               behavior: "smooth",
//             });
//           }}
//         >

//           <Image
//             src={isDarkMode ? assets.logo_dark : assets.logo}
//             alt="Logo"
//             loading="eager"
//             className="w-28 cursor-pointer"
//           />

//         </a>

//         {/* Desktop Nav */}
//         <ul
//           className={`hidden lg:flex items-center gap-8 px-10 py-3 rounded-full
//                      transition-all duration-300 backdrop-blur-xl
//                      ${
//                        isScroll
//                          ? "bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10"
//                          : "bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-md"
//                      }`}
//         >

//           {navLinks.map((item, index) => (

//             <motion.li
//               key={index}
//               whileHover={{ y: -2 }}
//               transition={{ duration: 0.2 }}
//             >

//               <a
//                 href={item.link}
//                 className="relative font-Ovo text-[17px] text-gray-700 dark:text-gray-300
//                            hover:text-black dark:hover:text-white transition-all duration-300
//                            after:absolute after:left-0 after:-bottom-1 after:h-[2px]
//                            after:w-0 hover:after:w-full after:bg-lime-400
//                            after:transition-all after:duration-300"
//               >

//                 {item.name}

//               </a>

//             </motion.li>

//           ))}

//         </ul>

//         {/* Right Side */}
//         <div className="flex items-center gap-4">

//           {/* Theme Toggle */}
//           <motion.button
//             whileHover={{ rotate: 15, scale: 1.08 }}
//             transition={{ duration: 0.2 }}
//             onClick={() => setIsDarkMode((prev) => !prev)}
//             className="w-11 h-11 rounded-full flex items-center justify-center
//                        bg-white/80 dark:bg-white/5 backdrop-blur-lg
//                        border border-gray-200 dark:border-white/10
//                        shadow-sm hover:shadow-md transition-all duration-300"
//           >

//             <Image
//               src={isDarkMode ? assets.sun_icon : assets.moon_icon}
//               alt="Theme Toggle"
//               className="w-5"
//             />

//           </motion.button>

//           {/* Contact Button */}
//           <motion.a
//             whileHover={{ y: -2 }}
//             transition={{ duration: 0.2 }}
//             href="#contact"
//             className="hidden md:flex items-center gap-3 px-6 py-3 rounded-full
//                        font-medium text-[16px]
//                        bg-gradient-to-r from-lime-400 to-emerald-500
//                        text-black shadow-lg hover:shadow-2xl
//                        transition-all duration-300"
//           >

//             Contact

//             <Image
//               src={assets.arrow_icon}
//               alt="Arrow"
//               className="w-4"
//             />

//           </motion.a>

//           {/* Mobile Menu Button */}
//           <motion.button
//             whileHover={{ scale: 1.08 }}
//             transition={{ duration: 0.2 }}
//             className="block lg:hidden"
//             onClick={openMenu}
//           >

//             <Image
//               src={isDarkMode ? assets.menu_white : assets.menu_black}
//               alt="Menu"
//               className="w-6"
//             />

//           </motion.button>

//         </div>

//         {/* Mobile Sidebar */}
//         <div
//           ref={sideMenuRef}
//           className="fixed top-0 right-0 w-72 h-screen
//                      bg-white/95 dark:bg-darkHover/95
//                      backdrop-blur-2xl
//                      border-l border-gray-200 dark:border-white/10
//                      shadow-2xl
//                      transform translate-x-full
//                      transition-transform duration-500 z-50"
//         >

//           {/* Close Button */}
//           <div className="flex justify-end p-6">

//             <motion.button
//               whileHover={{ rotate: 90 }}
//               transition={{ duration: 0.2 }}
//               onClick={closeMenu}
//             >

//               <Image
//                 src={isDarkMode ? assets.close_white : assets.close_black}
//                 alt="Close"
//                 className="w-5"
//               />

//             </motion.button>

//           </div>

//           {/* Mobile Links */}
//           <ul className="flex flex-col gap-6 px-10 mt-10">

//             {navLinks.map((item, index) => (

//               <motion.li
//                 key={index}
//                 initial={{ opacity: 0, x: 40 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{
//                   duration: 0.3,
//                   delay: index * 0.05,
//                 }}
//               >

//                 <a
//                   href={item.link}
//                   onClick={closeMenu}
//                   className="text-lg font-Ovo text-gray-700 dark:text-gray-300
//                              hover:text-lime-500 dark:hover:text-lime-400
//                              transition-all duration-300"
//                 >

//                   {item.name}

//                 </a>

//               </motion.li>

//             ))}

//           </ul>

//           {/* Bottom CTA */}
//           <div className="absolute bottom-10 left-0 w-full px-8">

//             <a
//               href="#contact"
//               onClick={closeMenu}
//               className="flex items-center justify-center gap-3
//                          w-full py-3 rounded-full
//                          bg-gradient-to-r from-lime-400 to-emerald-500
//                          text-black font-semibold shadow-lg"
//             >

//               Let’s Connect

//               <Image
//                 src={assets.arrow_icon}
//                 alt="Arrow"
//                 className="w-4"
//               />

//             </a>

//           </div>

//         </div>

//       </motion.nav>

//     </>
//   );
// };

// export default Navbar;



























"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

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
      setIsScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const navLinks = [
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Services", link: "#services" },
    { name: "Certificates", link: "#certificates" },
    { name: "Projects", link: "#work" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <>

      {/* Background Effect */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">

        <Image
          src={assets.header_bg_color}
          alt=""
          className="w-full"
        />

      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className={`fixed top-0 left-0 w-full z-50 px-5 lg:px-8 xl:px-[8%]
                    py-3 flex items-center justify-between transition-all duration-300
                    ${
                      isScroll
                        ? "bg-white/70 dark:bg-darkTheme/80 backdrop-blur-xl shadow-lg border-b border-gray-200 dark:border-white/10"
                        : "bg-transparent"
                    }`}
      >

        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >

          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            loading="eager"
            className="w-24 cursor-pointer"
          />

        </a>

        {/* Desktop Nav */}
        <ul
          className={`hidden lg:flex items-center gap-8 px-8 py-2.5 rounded-full
                     transition-all duration-300 backdrop-blur-xl
                     ${
                       isScroll
                         ? "bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10"
                         : "bg-white/70 dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-md"
                     }`}
        >

          {navLinks.map((item, index) => (

            <motion.li
              key={index}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >

              <a
                href={item.link}
                className="relative font-Ovo text-[16px] text-gray-700 dark:text-gray-300
                           hover:text-black dark:hover:text-white transition-all duration-300
                           after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                           after:w-0 hover:after:w-full after:bg-lime-400
                           after:transition-all after:duration-300"
              >

                {item.name}

              </a>

            </motion.li>

          ))}

        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ rotate: 15, scale: 1.08 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="w-10 h-10 rounded-full flex items-center justify-center
                       bg-white/80 dark:bg-white/5 backdrop-blur-lg
                       border border-gray-200 dark:border-white/10
                       shadow-sm hover:shadow-md transition-all duration-300"
          >

            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Theme Toggle"
              className="w-5"
            />

          </motion.button>

          {/* Contact Button */}
          <motion.a
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            href="#contact"
            className="hidden md:flex items-center gap-3 px-5 py-2.5 rounded-full
                       font-medium text-[15px]
                       bg-gradient-to-r from-lime-400 to-emerald-500
                       text-black shadow-lg hover:shadow-2xl
                       transition-all duration-300"
          >

           Let’s Contact

            <Image
              src={assets.arrow_icon}
              alt="Arrow"
              className="w-4"
            />

          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.2 }}
            className="block lg:hidden"
            onClick={openMenu}
          >

            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu"
              className="w-6"
            />

          </motion.button>

        </div>

        {/* Mobile Sidebar */}
        <div
          ref={sideMenuRef}
          className="fixed top-0 right-0 w-72 h-screen
                     bg-white/95 dark:bg-darkHover/95
                     backdrop-blur-2xl
                     border-l border-gray-200 dark:border-white/10
                     shadow-2xl
                     transform translate-x-full
                     transition-transform duration-500 z-50"
        >

          {/* Close Button */}
          <div className="flex justify-end p-6">

            <motion.button
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
            >

              <Image
                src={isDarkMode ? assets.close_white : assets.close_black}
                alt="Close"
                className="w-5"
              />

            </motion.button>

          </div>

          {/* Mobile Links */}
          <ul className="flex flex-col gap-6 px-10 mt-10">

            {navLinks.map((item, index) => (

              <motion.li
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
              >

                <a
                  href={item.link}
                  onClick={closeMenu}
                  className="text-lg font-Ovo text-gray-700 dark:text-gray-300
                             hover:text-lime-500 dark:hover:text-lime-400
                             transition-all duration-300"
                >

                  {item.name}

                </a>

              </motion.li>

            ))}

          </ul>

          {/* Bottom CTA */}
          <div className="absolute bottom-10 left-0 w-full px-8">

            <a
              href="#contact"
              onClick={closeMenu}
              className="flex items-center justify-center gap-3
                         w-full py-3 rounded-full
                         bg-gradient-to-r from-lime-400 to-emerald-500
                         text-black font-semibold shadow-lg"
            >

              Let’s Connect

              <Image
                src={assets.arrow_icon}
                alt="Arrow"
                className="w-4"
              />

            </a>

          </div>

        </div>

      </motion.nav>

    </>
  );
};

export default Navbar;