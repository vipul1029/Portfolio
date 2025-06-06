// "use client";  // Add this line at the top
// import { assets } from '@/assets/assets'
// import Image from 'next/image'
// import React, { useState, useRef ,useEffect} from 'react';



// const Navbar = ( {isDarkMode,setIsDarkMode}) => {
//   const[isScroll,setIsScroll]=useState(false)
//   const sideMenuRef=useRef();
//   const openMenu=()=>{
//     sideMenuRef.current.style.transform='translate(-16rem)'
//   }
//   const closeMenu=()=>{
//     sideMenuRef.current.style.transform='translate(16rem)'
//   }
//   useEffect(()=>{
//     window.addEventListener('scroll',()=>{
//       if(scrollY>50){
//        setIsScroll(true)
//       }else{
//        setIsScroll(false)
//       }
//     })
//   },[])
//   return (
//     <>
//     <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
// <Image src ={assets.header_bg_color} alt='' className='w-full'/>
//     </div>
// <nav className={`w-full fixed px-5 lg:px-8 xl:px[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20":""}`}>
//   <a href="#top">
//             <Image src={isDarkMode ? assets.logo_dark  :assets.logo} alt=""className='w-28 cursor-pointer mr-14'/>
//         </a>
//         <ul className={`hidden md:flex item-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
//             <li><a className='font-Ovo' href="#top">Home</a></li>
//             <li><a  className='font-Ovo' href="#about">About me</a></li>
//             <li><a className='font-Ovo'href="#services">Services</a></li>
//             <li><a className='font-Ovo'href="#work">My Work</a></li>
//             <li><a className='font-Ovo'href="#contact">Contact me</a></li>
//         </ul>
//         <div className='flex items-center gap-4'>
//           <button onClick={()=>setIsDarkMode(prev=>!prev)}>
//             <Image src={isDarkMode? assets.sun_icon:assets.moon_icon} alt='' className='w-6'/>
//           </button>
//           <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"> Contact 
//           <Image src={isDarkMode? assets.arrow_icon_dark: assets.arrow_icon} alt="" className="w-3"/></a>
//        <button className="block md:hidden ml-3" onClick={openMenu}> 
//        <Image src={isDarkMode?assets.menu_white :assets.menu_black} alt='' className='w-6'/>
//        </button>
//         </div>
//         {/* mobile menu */}
//         <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
//           <div className='absolute right-6 top-6' onClick={closeMenu}>
//             <Image src={isDarkMode ?assets.close_white:assets.close_black} alt='' className='w-5 cursor-pointer'/>
//           </div>
//             <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
//             <li><a  className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
//             <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
//             <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Work</a></li>
//             <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
//         </ul>
//       </nav>
//     </>
//   )
// }

// export default Navbar











// "use client";  // Add this line at the top
// import { assets } from '@/assets/assets'
// import Image from 'next/image'
// import React, { useState, useRef, useEffect } from 'react';

// const Navbar = ({ isDarkMode, setIsDarkMode }) => {
//   const [isScroll, setIsScroll] = useState(false);
//   const sideMenuRef = useRef();

//   const openMenu = () => {
//     sideMenuRef.current.style.transform = 'translateX(0)';
//   };

//   const closeMenu = () => {
//     sideMenuRef.current.style.transform = 'translateX(100%)';
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScroll(true);
//       } else {
//         setIsScroll(false);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Background effect */}
//       <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
//         <Image src={assets.header_bg_color} alt="" className="w-full" />
//       </div>

//       {/* Navbar */}
//       <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScroll ? "bg-white bg-opacity-80 backdrop-blur-lg shadow-md dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
//         {/* Logo */}
//         <a href="#top">
//           <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Logo" className="w-28 cursor-pointer mr-14" />
//         </a>

//         {/* Navigation Links */}
//         <ul className={`hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 rounded-full transition-all duration-300 ${isScroll ? "" : "bg-white shadow-md bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
//           <li><a className="font-Ovo text-lg transition-all duration-300 hover:text-primary dark:hover:text-gray-300" href="#top">Home</a></li>
//           <li><a className="font-Ovo text-lg transition-all duration-300 hover:text-primary dark:hover:text-gray-300" href="#about">About me</a></li>
//           <li><a className="font-Ovo text-lg transition-all duration-300 hover:text-primary dark:hover:text-gray-300" href="#services">Services</a></li>
//           <li><a className="font-Ovo text-lg transition-all duration-300 hover:text-primary dark:hover:text-gray-300" href="#work">My Work</a></li>
//           <li><a className="font-Ovo text-lg transition-all duration-300 hover:text-primary dark:hover:text-gray-300" href="#contact">Contact me</a></li>
//         </ul>

//         {/* Right Icons */}
//         <div className="flex items-center gap-4">
//           {/* Dark Mode Toggle */}
//           <button onClick={() => setIsDarkMode(prev => !prev)} className="transition-transform duration-300 hover:scale-110">
//             <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Theme Toggle" className="w-6" />
//           </button>

//           {/* Contact Button */}
//           <a href="#contact" className="hidden lg:flex items-center gap-3 px-6 py-2 border border-gray-500 rounded-full font-Ovo text-lg transition-all duration-300 hover:bg-gray-100 dark:border-white/50 dark:hover:bg-darkHover">
//             Contact
//             <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Arrow" className="w-4" />
//           </a>

//           {/* Mobile Menu Button */}
//           <button className="block md:hidden ml-3 transition-transform duration-300 hover:scale-110" onClick={openMenu}>
//             <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="Menu" className="w-6" />
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <ul ref={sideMenuRef} className="fixed top-0 right-0 h-screen w-64 bg-white dark:bg-darkHover text-black dark:text-white shadow-md transform translate-x-full transition-transform duration-500 flex flex-col gap-6 py-20 px-10 z-50">
//           {/* Close Button */}
//           <div className="absolute right-6 top-6 cursor-pointer transition-transform duration-300 hover:scale-110" onClick={closeMenu}>
//             <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close" className="w-5" />
//           </div>

//           {/* Mobile Menu Links */}
//           <li><a className="font-Ovo text-lg transition-all duration-300 hover:text-primary dark:hover:text-gray-300" onClick={closeMenu} href="#top">Home</a></li>
//           <li><a className="font-Ovo text-lg transition-all duration-300 hover:text-primary dark:hover:text-gray-300" onClick={closeMenu} href="#about">About me</a></li>
//           <li><a className="font-Ovo text-lg transition-all duration-300 hover:text-primary dark:hover:text-gray-300" onClick={closeMenu} href="#services">Services</a></li>
//           <li><a className="font-Ovo text-lg transition-all duration-300 hover:text-primary dark:hover:text-gray-300" onClick={closeMenu} href="#work">My Work</a></li>
//           <li><a className="font-Ovo text-lg transition-all duration-300 hover:text-primary dark:hover:text-gray-300" onClick={closeMenu} href="#contact">Contact me</a></li>
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

















// "use client";

// import { assets } from '@/assets/assets';
// import Image from 'next/image';
// import React, { useState, useRef, useEffect } from 'react';

// const Navbar = ({ isDarkMode, setIsDarkMode }) => {
//   const [isScroll, setIsScroll] = useState(false);
//   const sideMenuRef = useRef();

//   const openMenu = () => {
//     sideMenuRef.current.style.transform = 'translateX(0)';
//   };

//   const closeMenu = () => {
//     sideMenuRef.current.style.transform = 'translateX(100%)';
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScroll(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Background effect */}
//       <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
//         <Image src={assets.header_bg_color} alt="" className="w-full" />
//       </div>

//       {/* Navbar */}
//       <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScroll ? "bg-white bg-opacity-80 backdrop-blur-lg shadow-md dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
//         {/* Logo */}
//         <a href="#top">
//           <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Logo" className="w-28 cursor-pointer mr-14" />
//         </a>

//         {/* Navigation Links */}
//         <ul className={`hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 rounded-full transition-all duration-300 ${isScroll ? "" : "bg-white shadow-md bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
//           {['Home', 'About me', 'Services', 'My Work', 'Contact me'].map((item, index) => (
//             <li key={index}>
//               <a 
//                 className="font-Ovo text-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-400"
//                 href={`#${item.toLowerCase().replace(/ /g, '')}`}
//               >
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Right Icons */}
//         <div className="flex items-center gap-4">
//           {/* Dark Mode Toggle */}
//           <button 
//             onClick={() => setIsDarkMode(prev => !prev)} 
//             className="transition-transform duration-300 hover:scale-110"
//           >
//             <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Theme Toggle" className="w-6" />
//           </button>

//           {/* Contact Button */}
//           <a 
//             href="#contact" 
//             className="hidden lg:flex items-center gap-3 px-6 py-2 border border-gray-500 rounded-full font-Ovo text-lg transition-all duration-300 bg-gradient-to-r from-yellow-400 to-red-500 text-white hover:shadow-lg dark:border-white/50 hover:scale-105 transform transition-transform duration-300"
//           >
//             Contact
//             <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Arrow" className="w-4" />
//           </a>

//           {/* Mobile Menu Button */}
//           <button 
//             className="block md:hidden ml-3 transition-transform duration-300 hover:scale-110" 
//             onClick={openMenu}
//           >
//             <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="Menu" className="w-6" />
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <ul ref={sideMenuRef} className="fixed top-0 right-0 h-screen w-64 bg-white dark:bg-darkHover text-black dark:text-white shadow-md transform translate-x-full transition-transform duration-500 flex flex-col gap-6 py-20 px-10 z-50">
//           {/* Close Button */}
//           <div 
//             className="absolute right-6 top-6 cursor-pointer transition-transform duration-300 hover:scale-110" 
//             onClick={closeMenu}
//           >
//             <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close" className="w-5" />
//           </div>

//           {/* Mobile Menu Links */}
//           {['Home', 'About me', 'Services', 'My Work', 'Contact me'].map((item, index) => (
//             <li key={index}>
//               <a 
//                 className="font-Ovo text-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-400" 
//                 onClick={closeMenu} 
//                 href={`#${item.toLowerCase().replace(/ /g, '')}`}
//               >
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Navbar;












"use client";

import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(0)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(100%)';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Background effect */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* Navbar */}
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScroll ? "bg-white bg-opacity-80 backdrop-blur-lg shadow-md dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
        
        {/* Logo */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Logo" className="w-28 cursor-pointer mr-14" />
        </a>

        {/* Navigation Links */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 rounded-full transition-all duration-300 ${isScroll ? "" : "bg-white shadow-md bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
          <li>
            <a 
              className="font-Ovo text-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-400"
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            >
              Home
            </a>
          </li>
          <li><a className="font-Ovo text-lg text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-400" href="#about">About me</a></li>
          <li><a className="font-Ovo text-lg text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-400" href="#services">Services</a></li>
          <li>
            <a 
              className="font-Ovo text-lg text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-400"
              href="#work"
              onClick={(e) => { e.preventDefault(); document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); }}
            >
              My Work
            </a>
          </li>
          <li><a className="font-Ovo text-lg text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-400" href="#contact">Contact me</a></li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button onClick={() => setIsDarkMode(prev => !prev)} className="transition-transform duration-300 hover:scale-110">
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Theme Toggle" className="w-6" />
          </button>

          {/* Contact Button */}
          <a 
            href="#contact" 
            className="hidden lg:flex items-center gap-3 px-6 py-2 border border-gray-500 rounded-full font-Ovo text-lg transition-all duration-300 bg-gradient-to-r from-yellow-400 to-red-500 text-white hover:shadow-lg dark:border-white/50 hover:scale-105 transform transition-transform duration-300"
          >
            Contact
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="Arrow" className="w-4" />
          </a>

          {/* Mobile Menu Button */}
          <button className="block md:hidden ml-3 transition-transform duration-300 hover:scale-110" onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="Menu" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul ref={sideMenuRef} className="fixed top-0 right-0 h-screen w-64 bg-white dark:bg-darkHover text-black dark:text-white shadow-md transform translate-x-full transition-transform duration-500 flex flex-col gap-6 py-20 px-10 z-50">
          
          {/* Close Button */}
          <div className="absolute right-6 top-6 cursor-pointer transition-transform duration-300 hover:scale-110" onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close" className="w-5" />
          </div>

          {/* Mobile Menu Links */}
          <li>
            <a 
              className="font-Ovo text-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-400" 
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); closeMenu(); }}
            >
              Home
            </a>
          </li>
          <li><a className="font-Ovo text-lg text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-400" onClick={closeMenu} href="#about">About me</a></li>
          <li><a className="font-Ovo text-lg text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-400" onClick={closeMenu} href="#services">Services</a></li>
          <li>
            <a 
              className="font-Ovo text-lg text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-400" 
              href="#work"
              onClick={(e) => { e.preventDefault(); document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); closeMenu(); }}
            >
              My Work
            </a>
          </li>
          <li><a className="font-Ovo text-lg text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-yellow-400" onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;






// "use client";

// import { assets } from '@/assets/assets';
// import Image from 'next/image';
// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Navbar = ({ isDarkMode, setIsDarkMode }) => {
//   const [isScroll, setIsScroll] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Detect scroll to change navbar background
//   useEffect(() => {
//     const onScroll = () => setIsScroll(window.scrollY > 60);
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   // Smooth scroll helper
//   const smoothScrollTo = (id) => {
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: 'smooth' });
//     setMenuOpen(false);
//   };

//   return (
//     <>
//       <motion.nav
//         initial={{ backgroundColor: 'rgba(255,255,255,0)' }}
//         animate={{
//           backgroundColor: isScroll ? (isDarkMode ? 'rgba(31, 41, 55, 0.9)' : 'rgba(255, 255, 255, 0.95)') : 'rgba(255,255,255,0)',
//           boxShadow: isScroll ? (isDarkMode ? '0 2px 10px rgba(255,255,255,0.1)' : '0 2px 10px rgba(0,0,0,0.1)') : 'none',
//           backdropFilter: isScroll ? 'saturate(180%) blur(10px)' : 'none',
//         }}
//         transition={{ duration: 0.3 }}
//         className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-14 py-4`}
//       >
//         {/* Logo */}
//         <a
//           href="#"
//           onClick={(e) => {
//             e.preventDefault();
//             window.scrollTo({ top: 0, behavior: 'smooth' });
//             setMenuOpen(false);
//           }}
//           className="flex items-center cursor-pointer"
//           aria-label="Homepage"
//         >
//           <Image
//             src={isDarkMode ? assets.logo_dark : assets.logo}
//             alt="Logo"
//             className="w-28"
//             priority
//           />
//         </a>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex gap-10 font-Ovo text-lg font-semibold text-gray-700 dark:text-gray-300 select-none">
//           {['home', 'about', 'services', 'work', 'contact'].map((section) => (
//             <li key={section}>
//               <button
//                 onClick={() => smoothScrollTo(section)}
//                 className="relative px-2 py-1 rounded-md hover:text-purple-600 dark:hover:text-yellow-400 transition-colors duration-300"
//               >
//                 {section === 'home' ? 'Home' :
//                  section === 'about' ? 'About me' :
//                  section === 'services' ? 'Services' :
//                  section === 'work' ? 'My Work' : 'Contact me'}
//                 <motion.span
//                   layoutId="underline"
//                   className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 dark:bg-yellow-400 rounded"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 0 }}
//                   whileHover={{ opacity: 1 }}
//                 />
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Right controls */}
//         <div className="flex items-center gap-6">
//           {/* Dark Mode Toggle */}
//           <button
//             onClick={() => setIsDarkMode((prev) => !prev)}
//             aria-label="Toggle dark mode"
//             className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-purple-600 hover:text-white dark:hover:bg-yellow-400 transition-colors duration-300"
//           >
//             <Image
//               src={isDarkMode ? assets.sun_icon : assets.moon_icon}
//               alt="Toggle Theme"
//               className="w-6 h-6"
//             />
//           </button>

//           {/* Contact Button (desktop only) */}
//           <button
//             onClick={() => smoothScrollTo('contact')}
//             className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 select-none"
//           >
//             Contact
//             <Image
//               src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
//               alt="Arrow"
//               className="w-4 h-4"
//             />
//           </button>

//           {/* Mobile menu toggle */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="md:hidden p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
//             aria-label={menuOpen ? 'Close menu' : 'Open menu'}
//           >
//             <Image
//               src={menuOpen ? (isDarkMode ? assets.close_white : assets.close_black) : (isDarkMode ? assets.menu_white : assets.menu_black)}
//               alt="Menu toggle"
//               className="w-6 h-6"
//             />
//           </button>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {menuOpen && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               key="backdrop"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.5 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setMenuOpen(false)}
//               className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
//             />

//             {/* Slide-in Menu */}
//             <motion.aside
//               key="menu"
//               initial={{ x: '100%' }}
//               animate={{ x: 0 }}
//               exit={{ x: '100%' }}
//               transition={{ type: 'tween', duration: 0.35 }}
//               className="fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 z-50 shadow-lg flex flex-col p-10 gap-8"
//             >
//               <button
//                 onClick={() => setMenuOpen(false)}
//                 aria-label="Close menu"
//                 className="self-end p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
//               >
//                 <Image
//                   src={isDarkMode ? assets.close_white : assets.close_black}
//                   alt="Close"
//                   className="w-6 h-6"
//                 />
//               </button>

//               <nav className="flex flex-col gap-6 font-Ovo text-xl font-semibold text-gray-800 dark:text-gray-100">
//                 {['home', 'about', 'services', 'work', 'contact'].map((section) => (
//                   <button
//                     key={section}
//                     onClick={() => smoothScrollTo(section)}
//                     className="text-left hover:text-purple-600 dark:hover:text-yellow-400 transition-colors duration-300"
//                   >
//                     {section === 'home' ? 'Home' :
//                      section === 'about' ? 'About me' :
//                      section === 'services' ? 'Services' :
//                      section === 'work' ? 'My Work' : 'Contact me'}
//                   </button>
//                 ))}
//               </nav>
//             </motion.aside>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;








// "use client";

// import { assets } from '@/assets/assets';
// import Image from 'next/image';
// import React, { useState, useRef, useEffect } from 'react';

// const Navbar = ({ isDarkMode, setIsDarkMode }) => {
//   const [isScroll, setIsScroll] = useState(false);
//   const sideMenuRef = useRef();

//   const openMenu = () => {
//     sideMenuRef.current.style.transform = 'translateX(0)';
//   };

//   const closeMenu = () => {
//     sideMenuRef.current.style.transform = 'translateX(100%)';
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScroll(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Helper to smooth scroll to section by id
//   const smoothScrollTo = (id) => {
//     if (id === 'home') {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     } else {
//       const el = document.getElementById(id);
//       if (el) el.scrollIntoView({ behavior: 'smooth' });
//     }
//     closeMenu();
//   };

//   return (
//     <>
//       {/* Background effect */}
//       <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
//         <Image src={assets.header_bg_color} alt="" className="w-full" />
//       </div>

//       {/* Navbar */}
//       <nav
//         className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
//           isScroll
//             ? 'bg-white bg-opacity-80 backdrop-blur-lg shadow-md dark:bg-darkTheme dark:shadow-white/20'
//             : ''
//         }`}
//       >
//         {/* Logo */}
//         <a
//           href="#"
//           onClick={(e) => {
//             e.preventDefault();
//             window.scrollTo({ top: 0, behavior: 'smooth' });
//             closeMenu();
//           }}
//         >
//           <Image
//             src={isDarkMode ? assets.logo_dark : assets.logo}
//             alt="Logo"
//             className="w-28 cursor-pointer mr-14"
//           />
//         </a>

//         {/* Desktop Navigation Links */}
//         <ul
//           className={`hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 rounded-full transition-all duration-300 ${
//             isScroll
//               ? ''
//               : 'bg-white shadow-md bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'
//           } font-Ovo text-lg font-semibold text-purple-700 dark:text-purple-300 select-none`}
//         >
//           <li>
//             <button
//               onClick={() => smoothScrollTo('home')}
//               className="hover:text-purple-900 dark:hover:text-purple-400 transition-colors duration-300"
//             >
//               Home
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => smoothScrollTo('about')}
//               className="hover:text-purple-900 dark:hover:text-purple-400 transition-colors duration-300"
//             >
//               About me
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => smoothScrollTo('services')}
//               className="hover:text-purple-900 dark:hover:text-purple-400 transition-colors duration-300"
//             >
//               Services
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => smoothScrollTo('work')}
//               className="hover:text-purple-900 dark:hover:text-purple-400 transition-colors duration-300"
//             >
//               My Work
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => smoothScrollTo('contact')}
//               className="hover:text-purple-900 dark:hover:text-purple-400 transition-colors duration-300"
//             >
//               Contact me
//             </button>
//           </li>
//         </ul>

//         {/* Right Icons */}
//         <div className="flex items-center gap-4">
//           {/* Dark Mode Toggle */}
//           <button
//             onClick={() => setIsDarkMode((prev) => !prev)}
//             className="transition-transform duration-300 hover:scale-110"
//           >
//             <Image
//               src={isDarkMode ? assets.sun_icon : assets.moon_icon}
//               alt="Theme Toggle"
//               className="w-6"
//             />
//           </button>

//           {/* Contact Button */}
//           <button
//             onClick={() => smoothScrollTo('contact')}
//             className="hidden lg:flex items-center gap-3 px-6 py-2 border border-gray-500 rounded-full font-Ovo text-lg transition-all duration-300 bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:shadow-lg dark:border-white/50 hover:scale-105 transform transition-transform duration-300"
//           >
//             Contact
//             <Image
//               src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
//               alt="Arrow"
//               className="w-4"
//             />
//           </button>

//           {/* Mobile Menu Button */}
//           <button
//             className="block md:hidden ml-3 transition-transform duration-300 hover:scale-110"
//             onClick={openMenu}
//           >
//             <Image
//               src={isDarkMode ? assets.menu_white : assets.menu_black}
//               alt="Menu"
//               className="w-6"
//             />
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <ul
//           ref={sideMenuRef}
//           className="fixed top-0 right-0 h-screen w-64 bg-white dark:bg-darkHover text-purple-700 dark:text-purple-300 shadow-md transform translate-x-full transition-transform duration-500 flex flex-col gap-6 py-20 px-10 z-50 font-Ovo text-xl font-semibold select-none"
//         >
//           {/* Close Button */}
//           <div
//             className="absolute right-6 top-6 cursor-pointer transition-transform duration-300 hover:scale-110 text-purple-700 dark:text-purple-300"
//             onClick={closeMenu}
//           >
//             <Image
//               src={isDarkMode ? assets.close_white : assets.close_black}
//               alt="Close"
//               className="w-5"
//             />
//           </div>

//           {/* Mobile Menu Links */}
//           <li>
//             <button
//               onClick={() => smoothScrollTo('home')}
//               className="hover:text-purple-900 dark:hover:text-purple-400 transition-colors duration-300 text-left w-full"
//             >
//               Home
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => smoothScrollTo('about')}
//               className="hover:text-purple-900 dark:hover:text-purple-400 transition-colors duration-300 text-left w-full"
//             >
//               About me
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => smoothScrollTo('services')}
//               className="hover:text-purple-900 dark:hover:text-purple-400 transition-colors duration-300 text-left w-full"
//             >
//               Services
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => smoothScrollTo('work')}
//               className="hover:text-purple-900 dark:hover:text-purple-400 transition-colors duration-300 text-left w-full"
//             >
//               My Work
//             </button>
//           </li>
//           <li>
//             <button
//               onClick={() => smoothScrollTo('contact')}
//               className="hover:text-purple-900 dark:hover:text-purple-400 transition-colors duration-300 text-left w-full"
//             >
//               Contact me
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Navbar;












// "use client";

// import { assets } from '@/assets/assets';
// import Image from 'next/image';
// import React, { useState, useRef, useEffect } from 'react';

// const Navbar = ({ isDarkMode, setIsDarkMode }) => {
//   const [isScroll, setIsScroll] = useState(false);
//   const sideMenuRef = useRef();

//   const openMenu = () => {
//     sideMenuRef.current.style.transform = 'translateX(0)';
//   };

//   const closeMenu = () => {
//     sideMenuRef.current.style.transform = 'translateX(100%)';
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScroll(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const smoothScrollTo = (id) => {
//     if (id === 'home') {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     } else {
//       const el = document.getElementById(id);
//       if (el) el.scrollIntoView({ behavior: 'smooth' });
//     }
//     closeMenu();
//   };

//   return (
//     <>
//       <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
//         <Image src={assets.header_bg_color} alt="" className="w-full" />
//       </div>

//       <nav
//         className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
//           isScroll
//             ? 'bg-white bg-opacity-80 backdrop-blur-lg shadow-md dark:bg-[#0e061e] dark:shadow-white/20'
//             : ''
//         }`}
//       >
//         <a
//           href="#"
//           onClick={(e) => {
//             e.preventDefault();
//             window.scrollTo({ top: 0, behavior: 'smooth' });
//             closeMenu();
//           }}
//         >
//           <Image
//             src={isDarkMode ? assets.logo_dark : assets.logo}
//             alt="Logo"
//             className="w-28 cursor-pointer mr-14"
//           />
//         </a>

//         <ul
//           className={`hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 rounded-full transition-all duration-300 ${
//             isScroll
//               ? ''
//               : 'bg-white shadow-md bg-opacity-50 dark:border dark:border-white/50 dark:bg-[#13052a]'
//           } font-Ovo text-lg font-semibold ${isDarkMode ? 'text-purple-100' : 'text-purple-700'} select-none`}
//         >
//           {['home', 'about', 'services', 'work', 'contact'].map((id) => (
//             <li key={id}>
//               <button
//                 onClick={() => smoothScrollTo(id)}
//                 className="hover:text-purple-300 transition-colors duration-300"
//               >
//                 {id === 'about' ? 'About me' : id === 'work' ? 'My Work' : id.charAt(0).toUpperCase() + id.slice(1)}
//               </button>
//             </li>
//           ))}
//         </ul>

//         <div className="flex items-center gap-4">
//           <button
//             onClick={() => setIsDarkMode((prev) => !prev)}
//             className="transition-transform duration-300 hover:scale-110"
//           >
//             <Image
//               src={isDarkMode ? assets.sun_icon : assets.moon_icon}
//               alt="Theme Toggle"
//               className="w-6"
//             />
//           </button>

//           <button
//             onClick={() => smoothScrollTo('contact')}
//             className="hidden lg:flex items-center gap-3 px-6 py-2 border border-gray-500 rounded-full font-Ovo text-lg transition-all duration-300 bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:shadow-lg dark:border-white/50 hover:scale-105 transform transition-transform duration-300"
//           >
//             Contact
//             <Image
//               src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
//               alt="Arrow"
//               className="w-4"
//             />
//           </button>

//           <button
//             className="block md:hidden ml-3 transition-transform duration-300 hover:scale-110"
//             onClick={openMenu}
//           >
//             <Image
//               src={isDarkMode ? assets.menu_white : assets.menu_black}
//               alt="Menu"
//               className="w-6"
//             />
//           </button>
//         </div>

//         <ul
//           ref={sideMenuRef}
//           className="fixed top-0 right-0 h-screen w-64 bg-white dark:bg-[#0e061e] text-purple-100 shadow-md transform translate-x-full transition-transform duration-500 flex flex-col gap-6 py-20 px-10 z-50 font-Ovo text-xl font-semibold select-none"
//         >
//           <div
//             className="absolute right-6 top-6 cursor-pointer transition-transform duration-300 hover:scale-110 text-purple-100"
//             onClick={closeMenu}
//           >
//             <Image
//               src={isDarkMode ? assets.close_white : assets.close_black}
//               alt="Close"
//               className="w-5"
//             />
//           </div>

//           {['home', 'about', 'services', 'work', 'contact'].map((id) => (
//             <li key={id}>
//               <button
//                 onClick={() => smoothScrollTo(id)}
//                 className="hover:text-purple-300 transition-colors duration-300 text-left w-full"
//               >
//                 {id === 'about' ? 'About me' : id === 'work' ? 'My Work' : id.charAt(0).toUpperCase() + id.slice(1)}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Navbar;