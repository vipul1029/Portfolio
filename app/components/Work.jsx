// // // // // "use client";

// // // // // import React from "react";
// // // // // import Image from "next/image";
// // // // // import { motion } from "framer-motion";
// // // // // import { assets } from "@/assets/assets";

// // // // // const Work = ({ isDarkMode }) => {
// // // // //   const workData = [
// // // // //     {
// // // // //       title: "Shoporia — E-commerce Frontend",
// // // // //       description: "Modern & responsive e-commerce UI built with Next.js.",
// // // // //       bgImage: "/work-9.png",
// // // // //       link: "https://shoporia-frontend.vercel.app/",
// // // // //       tag: "Fullstack",
// // // // //     },
// // // // //     {
// // // // //       title: "Food Ordering Platform",
// // // // //       description: "Food delivery app with cart and checkout experience.",
// // // // //       bgImage: "/work-1.png",
// // // // //       link: "https://food-delivery-site-vipul1007s-projects.vercel.app/",
// // // // //       tag: "Fullstack",
// // // // //     },
// // // // //     {
// // // // //       title: "Virtual Eclipse — Solar Eclipse Visualization",
// // // // //       description: "Interactive solar eclipse visualization web app.",
// // // // //       bgImage: "/work-8.png",
// // // // //       link: "https://virtual-eclipse.vercel.app/",
// // // // //       tag: "Visualization",
// // // // //     },
// // // // //       {
// // // // //   title: "Cancer Awareness & Support",
// // // // //   description: "",
// // // // //   bgImage: "/work-10.png",
// // // // //   link: "https://cancer-awareness-website-ten.vercel.app/",
// // // // //   tag: "React.js",
// // // // // },
// // // // //     {
// // // // //       title: "NVZ - Tesla UI",
// // // // //       description: "Tesla-inspired landing page with smooth animations.",
// // // // //       bgImage: "/work-2.png",
// // // // //       link: "https://nvz-vipul1007s-projects.vercel.app/",
// // // // //       tag: "UI/UX",
// // // // //     },
// // // // //     {
// // // // //       title: "Lazarev Agency Clone",
// // // // //       description: "Creative agency style portfolio website.",
// // // // //       bgImage: "/work-3.png",
// // // // //       link: "https://vipul1029.github.io/Lazarev/",
// // // // //       tag: "Frontend",
// // // // //     },
// // // // //     {
// // // // //       title: "Teecraft Golf Hub",
// // // // //       description: "Interactive animated website for a golf club.",
// // // // //       bgImage: "/work-4.png",
// // // // //       link: "https://vipul1029.github.io/sidcup-gaming-site/",
// // // // //       tag: "Animation",
// // // // //     },
// // // // //     {
// // // // //       title: "Gaming Tutorial Site",
// // // // //       description: "Responsive gaming tutorial platform.",
// // // // //       bgImage: "/work-5.png",
// // // // //       link: "https://vipul1029.github.io/Miniproject/",
// // // // //       tag: "Frontend",
// // // // //     },
// // // // //     {
// // // // //       title: "AI Resume Builder",
// // // // //       description: "AI-powered resume & cover letter generator.",
// // // // //       bgImage: "/work-6.png",
// // // // //       link: "https://resume-cover-letter-maker-q96u.vercel.app/",
// // // // //       tag: "AI",
// // // // //     },
// // // // //     {
// // // // //       title: "Sales Prediction",
// // // // //       description: "ML model to forecast sales from historical data.",
// // // // //       bgImage: "/work-7.png",
// // // // //       link: "https://github.com/vipul1029/Sales-Prediction",
// // // // //       tag: "Machine Learning",
// // // // //     }

// // // // //   ];

// // // // //   return (
// // // // //     <motion.section
// // // // //       id="work"
// // // // //       initial={{ opacity: 0 }}
// // // // //       whileInView={{ opacity: 1 }}
// // // // //       transition={{ duration: 1 }}
// // // // //       className="relative w-full px-[12%] py-20 scroll-mt-20 
// // // // //                  bg-gradient-to-b from-gray-100 to-white
// // // // //                  dark:from-darkTheme dark:to-darkHover"
// // // // //     >
// // // // //       {/* Titles */}
// // // // //       <h4 className="text-center mb-2 text-lg font-Ovo">My Projects</h4>
// // // // //       <h2 className="text-center text-5xl font-Ovo mb-6">My Latest Work</h2>
// // // // //       <p className="text-center max-w-2xl mx-auto mb-14 font-Ovo 
// // // // //                     text-gray-700 dark:text-gray-300">
// // // // //         A curated showcase of projects highlighting my frontend, full-stack,
// // // // //         and machine learning experience.
// // // // //       </p>

// // // // //       {/* Grid */}
// // // // //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
// // // // //         {workData.map((item, index) => (
// // // // //           <motion.a
// // // // //             key={index}
// // // // //             href={item.link}
// // // // //             target="_blank"
// // // // //             rel="noopener noreferrer"
// // // // //             whileHover={{ y: -6, scale: 1.02 }}
// // // // //             transition={{ duration: 0.3 }}
// // // // //             className="relative rounded-xl overflow-hidden group cursor-pointer 
// // // // //                        shadow-lg"
// // // // //           >
// // // // //             {/* Image */}
// // // // //             <div
// // // // //               className="relative w-full h-[260px]"
// // // // //               style={{
// // // // //                 backgroundImage: `url(${item.bgImage})`,
// // // // //                 backgroundSize: "cover",
// // // // //                 backgroundPosition: "center",
// // // // //               }}
// // // // //             >
// // // // //               {/* Dark overlay */}
// // // // //               <div className="absolute inset-0 bg-black/35 group-hover:bg-black/55 transition duration-300" />

// // // // //               {/* Tag */}
// // // // //               <span className="absolute top-4 left-4 z-10 text-xs px-3 py-1 
// // // // //                                rounded-full bg-white/90 text-black font-semibold">
// // // // //                 {item.tag}
// // // // //               </span>

// // // // //               {/* Text INSIDE image */}
// // // // //               <div className="absolute bottom-0 left-0 right-0 z-10 
// // // // //                               p-4 text-white">
// // // // //                 <h3 className="font-semibold text-lg leading-tight">
// // // // //                   {item.title}
// // // // //                 </h3>
// // // // //                 <p className="text-sm text-gray-200 mt-1">
// // // // //                   {item.description}
// // // // //                 </p>
// // // // //               </div>

// // // // //               {/* Arrow icon */}
// // // // //               <div className="absolute bottom-4 right-4 z-10 w-9 h-9 
// // // // //                               flex items-center justify-center rounded-full 
// // // // //                               bg-white text-black 
// // // // //                               group-hover:bg-lime-400 transition">
// // // // //                 <Image
// // // // //                   src={assets.send_icon}
// // // // //                   alt="open"
// // // // //                   width={18}
// // // // //                   height={18}
// // // // //                 />
// // // // //               </div>
// // // // //             </div>
// // // // //           </motion.a>
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* View More */}
// // // // //       <motion.a
// // // // //         href="https://github.com/vipul1029?tab=repositories"
// // // // //         target="_blank"
// // // // //         rel="noopener noreferrer"
// // // // //         whileHover={{ scale: 1.05 }}
// // // // //         className="mt-20 mx-auto flex items-center gap-2 w-max 
// // // // //                    px-10 py-3 rounded-full border border-gray-700
// // // // //                    text-gray-700 dark:text-white dark:border-white
// // // // //                    hover:bg-lightHover dark:hover:bg-darkHover"
// // // // //       >
// // // // //         View all projects
// // // // //         <Image
// // // // //           src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
// // // // //           alt="arrow"
// // // // //           className="w-4"
// // // // //         />
// // // // //       </motion.a>
// // // // //     </motion.section>
// // // // //   );
// // // // // };

// // // // // export default Work;

















// // // // "use client";

// // // // import React from "react";
// // // // import Image from "next/image";
// // // // import { motion } from "framer-motion";
// // // // import { assets } from "@/assets/assets";

// // // // const Work = ({ isDarkMode }) => {

// // // //   const workData = [
// // // //     {
// // // //       title: "Shoporia — E-commerce Frontend",
// // // //       description: "Modern & responsive e-commerce UI built with Next.js.",
// // // //       bgImage: "/work-9.png",
// // // //       link: "https://shoporia-frontend.vercel.app/",
// // // //       tag: "Fullstack",
// // // //       category: "fullstack",
// // // //     },
// // // //     {
// // // //       title: "Food Ordering Platform",
// // // //       description: "Food delivery app with cart and checkout experience.",
// // // //       bgImage: "/work-1.png",
// // // //       link: "https://food-delivery-site-vipul1007s-projects.vercel.app/",
// // // //       tag: "Fullstack",
// // // //       category: "fullstack",
// // // //     },
// // // //     {
// // // //       title: "Virtual Eclipse — Solar Eclipse Visualization",
// // // //       description: "Interactive solar eclipse visualization web app.",
// // // //       bgImage: "/work-8.png",
// // // //       link: "https://virtual-eclipse.vercel.app/",
// // // //       tag: "Visualization",
// // // //       category: "frontend",
// // // //     },
// // // //     {
// // // //       title: "Cancer Awareness & Support",
// // // //       description: "Awareness-focused React website with clean UI.",
// // // //       bgImage: "/work-10.png",
// // // //       link: "https://cancer-awareness-website-ten.vercel.app/",
// // // //       tag: "React.js",
// // // //       category: "frontend",
// // // //     },
// // // //     {
// // // //       title: "NVZ - Tesla UI",
// // // //       description: "Tesla-inspired landing page with smooth animations.",
// // // //       bgImage: "/work-2.png",
// // // //       link: "https://nvz-vipul1007s-projects.vercel.app/",
// // // //       tag: "UI/UX",
// // // //       category: "frontend",
// // // //     },
// // // //     {
// // // //       title: "Lazarev Agency Clone",
// // // //       description: "Creative agency style portfolio website.",
// // // //       bgImage: "/work-3.png",
// // // //       link: "https://vipul1029.github.io/Lazarev/",
// // // //       tag: "Frontend",
// // // //       category: "frontend",
// // // //     },
// // // //     {
// // // //       title: "Teecraft Golf Hub",
// // // //       description: "Interactive animated website for a golf club.",
// // // //       bgImage: "/work-4.png",
// // // //       link: "https://vipul1029.github.io/sidcup-gaming-site/",
// // // //       tag: "Animation",
// // // //       category: "frontend",
// // // //     },
// // // //     {
// // // //       title: "Gaming Tutorial Site",
// // // //       description: "Responsive gaming tutorial platform.",
// // // //       bgImage: "/work-5.png",
// // // //       link: "https://vipul1029.github.io/Miniproject/",
// // // //       tag: "Frontend",
// // // //       category: "frontend",
// // // //     },
// // // //     {
// // // //       title: "AI Resume Builder",
// // // //       description: "AI-powered resume & cover letter generator.",
// // // //       bgImage: "/work-6.png",
// // // //       link: "https://resume-cover-letter-maker-q96u.vercel.app/",
// // // //       tag: "AI",
// // // //       category: "ai",
// // // //     },
// // // //     {
// // // //       title: "Sales Prediction",
// // // //       description: "ML model to forecast sales from historical data.",
// // // //       bgImage: "/work-7.png",
// // // //       link: "https://github.com/vipul1029/Sales-Prediction",
// // // //       tag: "Machine Learning",
// // // //       category: "ai",
// // // //     },
// // // //   ];

// // // //   const sectionMeta = {
// // // //     fullstack: {
// // // //       title: "Full-Stack Projects",
// // // //       description:
// // // //         "End-to-end applications combining modern frontend interfaces with scalable backend logic, authentication, and real-world workflows.",
// // // //     },
// // // //     frontend: {
// // // //       title: "Frontend & UI Projects",
// // // //       description:
// // // //         "Pixel-perfect, responsive, and animated interfaces focused on user experience and modern design principles.",
// // // //     },
// // // //     ai: {
// // // //       title: "AI & Machine Learning Projects",
// // // //       description:
// // // //         "Projects leveraging machine learning and AI to solve real-world problems using data-driven insights.",
// // // //     },
// // // //   };

// // // //   const renderSection = (category) => (
// // // //     <>
// // // //       <h3 className="text-3xl font-Ovo text-center mt-24 mb-3">
// // // //         {sectionMeta[category].title}
// // // //       </h3>

// // // //       <p className="text-center max-w-3xl mx-auto mb-12 text-gray-600 dark:text-gray-400 font-Ovo">
// // // //         {sectionMeta[category].description}
// // // //       </p>

// // // //       {/* ✅ CENTERED GRID (SAFE) */}
// // // //       <div
// // // //         className="grid gap-8 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
// // // //         style={{ justifyItems: "center" }}
// // // //       >
// // // //         {workData
// // // //           .filter(item => item.category === category)
// // // //           .map((item, index) => (
// // // //             <motion.a
// // // //               key={index}
// // // //               href={item.link}
// // // //               target="_blank"
// // // //               rel="noopener noreferrer"
// // // //               whileHover={{ y: -6, scale: 1.02 }}
// // // //               transition={{ duration: 0.3 }}
// // // //               className="relative w-full max-w-[380px] rounded-xl overflow-hidden group cursor-pointer shadow-lg"
// // // //             >
// // // //               <div
// // // //                 className="relative w-full h-[260px]"
// // // //                 style={{
// // // //                   backgroundImage: `url(${item.bgImage})`,
// // // //                   backgroundSize: "cover",
// // // //                   backgroundPosition: "center",
// // // //                 }}
// // // //               >
// // // //                 <div className="absolute inset-0 bg-black/35 group-hover:bg-black/55 transition duration-300" />

// // // //                 <span className="absolute top-4 left-4 z-10 text-xs px-3 py-1 rounded-full bg-white/90 text-black font-semibold">
// // // //                   {item.tag}
// // // //                 </span>

// // // //                 <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white">
// // // //                   <h3 className="font-semibold text-lg leading-tight">
// // // //                     {item.title}
// // // //                   </h3>
// // // //                   <p className="text-sm text-gray-200 mt-1">
// // // //                     {item.description}
// // // //                   </p>
// // // //                 </div>

// // // //                 {/* send icon (warning fixed) */}
// // // //                 <div className="absolute bottom-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white text-black group-hover:bg-lime-400 transition">
// // // //                   <Image
// // // //                     src={assets.send_icon}
// // // //                     alt="open"
// // // //                     width={18}
// // // //                     height={18}
// // // //                     className="w-auto h-auto"
// // // //                   />
// // // //                 </div>
// // // //               </div>
// // // //             </motion.a>
// // // //           ))}
// // // //       </div>
// // // //     </>
// // // //   );

// // // //   return (
// // // //     <motion.section
// // // //       id="work"
// // // //       initial={{ opacity: 0 }}
// // // //       whileInView={{ opacity: 1 }}
// // // //       transition={{ duration: 1 }}
// // // //       className="relative w-full px-[12%] py-20 scroll-mt-20 
// // // //                  bg-gradient-to-b from-gray-100 to-white
// // // //                  dark:from-darkTheme dark:to-darkHover"
// // // //     >
// // // //       <h4 className="text-center mb-2 text-lg font-Ovo">My Projects</h4>
// // // //       <h2 className="text-center text-5xl font-Ovo mb-6">My Latest Work</h2>
// // // //       <p className="text-center max-w-2xl mx-auto mb-16 font-Ovo 
// // // //                     text-gray-700 dark:text-gray-300">
// // // //         A curated showcase of my work across full-stack development,
// // // //         frontend engineering, and AI-driven applications.
// // // //       </p>

// // // //       {renderSection("fullstack")}
// // // //       {renderSection("frontend")}
// // // //       {renderSection("ai")}

// // // //       <motion.a
// // // //         href="https://github.com/vipul1029?tab=repositories"
// // // //         target="_blank"
// // // //         rel="noopener noreferrer"
// // // //         whileHover={{ scale: 1.05 }}
// // // //         className="mt-24 mx-auto flex items-center gap-2 w-max 
// // // //                    px-10 py-3 rounded-full border border-gray-700
// // // //                    text-gray-700 dark:text-white dark:border-white
// // // //                    hover:bg-lightHover dark:hover:bg-darkHover"
// // // //       >
// // // //         View all projects
// // // //         <Image
// // // //           src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
// // // //           alt="arrow"
// // // //           className="w-4"
// // // //         />
// // // //       </motion.a>
// // // //     </motion.section>
// // // //   );
// // // // };

// // // // export default Work;
















// // // "use client";

// // // import React from "react";
// // // import Image from "next/image";
// // // import { motion } from "framer-motion";
// // // import { assets } from "@/assets/assets";

// // // const Work = ({ isDarkMode }) => {

// // //   const workData = [
// // //     {
// // //       title: "Shoporia — E-commerce Frontend",
// // //       description: "Modern & responsive e-commerce UI built with Next.js.",
// // //       bgImage: "/work-9.png",
// // //       link: "https://shoporia-frontend.vercel.app/",
// // //       tag: "Fullstack",
// // //       category: "fullstack",
// // //     },
// // //     {
// // //       title: "Food Ordering Platform",
// // //       description: "Food delivery app with cart and checkout experience.",
// // //       bgImage: "/work-1.png",
// // //       link: "https://food-delivery-site-vipul1007s-projects.vercel.app/",
// // //       tag: "Fullstack",
// // //       category: "fullstack",
// // //     },
// // //     {
// // //       title: "Virtual Eclipse — Solar Eclipse Visualization",
// // //       description: "Interactive solar eclipse visualization web app.",
// // //       bgImage: "/work-8.png",
// // //       link: "https://virtual-eclipse.vercel.app/",
// // //       tag: "Visualization",
// // //       category: "frontend",
// // //     },
// // //     {
// // //       title: "Cancer Awareness & Support",
// // //       description: "Awareness-focused React website with clean UI.",
// // //       bgImage: "/work-10.png",
// // //       link: "https://cancer-awareness-website-ten.vercel.app/",
// // //       tag: "React.js",
// // //       category: "frontend",
// // //     },
// // //     {
// // //       title: "NVZ - Tesla UI",
// // //       description: "Tesla-inspired landing page with smooth animations.",
// // //       bgImage: "/work-2.png",
// // //       link: "https://nvz-vipul1007s-projects.vercel.app/",
// // //       tag: "UI/UX",
// // //       category: "frontend",
// // //     },
// // //     {
// // //       title: "Lazarev Agency Clone",
// // //       description: "Creative agency style portfolio website.",
// // //       bgImage: "/work-3.png",
// // //       link: "https://vipul1029.github.io/Lazarev/",
// // //       tag: "Frontend",
// // //       category: "frontend",
// // //     },
// // //     {
// // //       title: "Teecraft Golf Hub",
// // //       description: "Interactive animated website for a golf club.",
// // //       bgImage: "/work-4.png",
// // //       link: "https://vipul1029.github.io/sidcup-gaming-site/",
// // //       tag: "Animation",
// // //       category: "frontend",
// // //     },
// // //     {
// // //       title: "Gaming Tutorial Site",
// // //       description: "Responsive gaming tutorial platform.",
// // //       bgImage: "/work-5.png",
// // //       link: "https://vipul1029.github.io/Miniproject/",
// // //       tag: "Frontend",
// // //       category: "frontend",
// // //     },
// // //     {
// // //       title: "AI Resume Builder",
// // //       description: "AI-powered resume & cover letter generator.",
// // //       bgImage: "/work-6.png",
// // //       link: "https://resume-cover-letter-maker-q96u.vercel.app/",
// // //       tag: "AI",
// // //       category: "ai",
// // //     },
// // //     {
// // //       title: "Sales Prediction",
// // //       description: "ML model to forecast sales from historical data.",
// // //       bgImage: "/work-7.png",
// // //       link: "https://github.com/vipul1029/Sales-Prediction",
// // //       tag: "Machine Learning",
// // //       category: "ai",
// // //     },
// // //   ];

// // //   const sectionMeta = {
// // //     fullstack: {
// // //       title: "Full-Stack Projects",
// // //       description:
// // //         "End-to-end applications combining modern frontend interfaces with scalable backend logic and real-world workflows.",
// // //     },
// // //     frontend: {
// // //       title: "Frontend & UI Projects",
// // //       description:
// // //         "Pixel-perfect, responsive, and animated interfaces focused on user experience and modern design principles.",
// // //     },
// // //     ai: {
// // //       title: "AI & Machine Learning Projects",
// // //       description:
// // //         "Projects leveraging machine learning and AI techniques to solve real-world problems using data-driven insights.",
// // //     },
// // //   };

// // //   const renderSection = (category) => {
// // //     const projects = workData.filter(item => item.category === category);

// // //     return (
// // //       <>
// // //         {/* Section Title */}
// // //         <h3 className="text-3xl font-Ovo text-center mt-28 mb-3 flex justify-center items-center gap-3">
// // //           {sectionMeta[category].title}
// // //           <span className="text-sm px-3 py-1 rounded-full bg-black/10 dark:bg-white/10">
// // //             {projects.length}
// // //           </span>
// // //         </h3>

// // //         {/* Section Description */}
// // //         <p className="text-center max-w-3xl mx-auto mb-6 text-gray-600 dark:text-gray-400 font-Ovo">
// // //           {sectionMeta[category].description}
// // //         </p>

// // //         {/* Divider */}
// // //         <motion.div
// // //           initial={{ width: 0 }}
// // //           whileInView={{ width: "80px" }}
// // //           transition={{ duration: 0.6 }}
// // //           className="mx-auto mb-12 h-[2px] bg-gradient-to-r from-lime-400 to-emerald-500 rounded-full"
// // //         />

// // //         {/* Grid */}
// // //         <div
// // //           className="grid gap-8 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
// // //           style={{ justifyItems: "center" }}
// // //         >
// // //           {projects.map((item, index) => (
// // //             <motion.a
// // //               key={index}
// // //               href={item.link}
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               whileHover={{ y: -8, scale: 1.04 }}
// // //               transition={{ duration: 0.3 }}
// // //               className="relative w-full max-w-[380px] rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
// // //             >
// // //               <div
// // //                 className="relative w-full h-[260px]"
// // //                 style={{
// // //                   backgroundImage: `url(${item.bgImage})`,
// // //                   backgroundSize: "cover",
// // //                   backgroundPosition: "center",
// // //                 }}
// // //               >
// // //                 {/* Overlay */}
// // //                 <div className="absolute inset-0 bg-black/35 group-hover:bg-black/60 transition duration-300" />

// // //                 {/* Tag */}
// // //                 <span
// // //                   className={`absolute top-4 left-4 z-10 text-xs px-3 py-1 rounded-full font-semibold text-white
// // //                     ${item.category === "fullstack" && "bg-emerald-500"}
// // //                     ${item.category === "frontend" && "bg-indigo-500"}
// // //                     ${item.category === "ai" && "bg-orange-500"}
// // //                   `}
// // //                 >
// // //                   {item.tag}
// // //                 </span>

// // //                 {/* Hover CTA */}
// // //                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
// // //                   <span className="px-5 py-2 bg-white text-black rounded-full text-sm font-semibold">
// // //                     View Project
// // //                   </span>
// // //                 </div>

// // //                 {/* Text */}
// // //                 <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white">
// // //                   <h3 className="font-semibold text-lg leading-tight">
// // //                     {item.title}
// // //                   </h3>
// // //                   <p className="text-sm text-gray-200 mt-1">
// // //                     {item.description}
// // //                   </p>
// // //                 </div>

// // //                 {/* Arrow */}
// // //                 <div className="absolute bottom-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white text-black group-hover:bg-lime-400 transition">
// // //                   <Image
// // //                     src={assets.send_icon}
// // //                     alt="open"
// // //                     width={18}
// // //                     height={18}
// // //                     className="w-auto h-auto"
// // //                   />
// // //                 </div>
// // //               </div>
// // //             </motion.a>
// // //           ))}
// // //         </div>
// // //       </>
// // //     );
// // //   };

// // //   return (
// // //     <motion.section
// // //       id="work"
// // //       initial={{ opacity: 0 }}
// // //       whileInView={{ opacity: 1 }}
// // //       transition={{ duration: 1 }}
// // //       className="relative w-full px-[12%] py-20 scroll-mt-20 
// // //                  bg-gradient-to-b from-gray-100 to-white
// // //                  dark:from-darkTheme dark:to-darkHover"
// // //     >
// // //       <h4 className="text-center mb-2 text-lg font-Ovo">My Projects</h4>
// // //       <h2 className="text-center text-5xl font-Ovo mb-6">My Latest Work</h2>
// // //       <p className="text-center max-w-2xl mx-auto mb-20 font-Ovo 
// // //                     text-gray-700 dark:text-gray-300">
// // //         A curated showcase of my work across full-stack development,
// // //         frontend engineering, and AI-driven applications.
// // //       </p>

// // //       {renderSection("fullstack")}
// // //       {renderSection("frontend")}
// // //       {renderSection("ai")}

// // //       {/* View More */}
// // //       <motion.a
// // //         href="https://github.com/vipul1029?tab=repositories"
// // //         target="_blank"
// // //         rel="noopener noreferrer"
// // //         whileHover={{ scale: 1.05 }}
// // //         className="mt-28 mx-auto flex items-center gap-2 w-max 
// // //                    px-10 py-3 rounded-full border border-gray-700
// // //                    text-gray-700 dark:text-white dark:border-white
// // //                    hover:bg-lightHover dark:hover:bg-darkHover"
// // //       >
// // //         View all projects
// // //         <Image
// // //           src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
// // //           alt="arrow"
// // //           className="w-4"
// // //         />
// // //       </motion.a>
// // //     </motion.section>
// // //   );
// // // };

// // // export default Work;















// // "use client";

// // import React from "react";
// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import { assets } from "@/assets/assets";

// // const Work = ({ isDarkMode }) => {

// //   const workData = [
// //     {
// //       title: "Shoporia — E-commerce Frontend",
// //       description: "Modern & responsive e-commerce UI built with Next.js.",
// //       bgImage: "/work-9.png",
// //       link: "https://shoporia-frontend.vercel.app/",
// //       tag: "Fullstack",
// //       category: "fullstack",
// //     },
// //     {
// //       title: "Food Ordering Platform",
// //       description: "Food delivery app with cart and checkout experience.",
// //       bgImage: "/work-1.png",
// //       link: "https://food-delivery-site-vipul1007s-projects.vercel.app/",
// //       tag: "Fullstack",
// //       category: "fullstack",
// //     },
// //     {
// //       title: "Virtual Eclipse — Solar Eclipse Visualization",
// //       description: "Interactive solar eclipse visualization web app.",
// //       bgImage: "/work-8.png",
// //       link: "https://virtual-eclipse.vercel.app/",
// //       tag: "Visualization",
// //       category: "frontend",
// //     },
// //     {
// //       title: "Cancer Awareness & Support",
// //       description: "Awareness-focused React website with clean UI.",
// //       bgImage: "/work-10.png",
// //       link: "https://cancer-awareness-website-ten.vercel.app/",
// //       tag: "React.js",
// //       category: "frontend",
// //     },
// //     {
// //       title: "NVZ - Tesla UI",
// //       description: "Tesla-inspired landing page with smooth animations.",
// //       bgImage: "/work-2.png",
// //       link: "https://nvz-vipul1007s-projects.vercel.app/",
// //       tag: "UI/UX",
// //       category: "frontend",
// //     },
// //     {
// //       title: "AI Resume Builder",
// //       description: "AI-powered resume & cover letter generator.",
// //       bgImage: "/work-6.png",
// //       link: "https://resume-cover-letter-maker-q96u.vercel.app/",
// //       tag: "AI",
// //       category: "ai",
// //     },
// //   ];

// //   const sectionMeta = {
// //     fullstack: {
// //       title: "Full-Stack Projects",
// //       description:
// //         "Scalable, real-world applications combining modern UI, backend logic, and complete user flows.",
// //       glow: "from-emerald-400/20 to-cyan-400/20",
// //     },
// //     frontend: {
// //       title: "Frontend & UI Projects",
// //       description:
// //         "Visually refined, animated, and responsive interfaces built with strong UX principles.",
// //       glow: "from-indigo-400/20 to-purple-400/20",
// //     },
// //     ai: {
// //       title: "AI & Machine Learning Projects",
// //       description:
// //         "AI-driven applications leveraging machine learning to create intelligent, data-powered experiences.",
// //       glow: "from-orange-400/20 to-pink-400/20",
// //     },
// //   };

// //   const renderSection = (category) => {
// //     const projects = workData.filter(p => p.category === category);

// //     return (
// //       <section className="relative mt-32">
// //         {/* Background Accent */}
// //         <div
// //           className={`absolute inset-0 -z-10 blur-3xl bg-gradient-to-br ${sectionMeta[category].glow}`}
// //         />

// //         {/* Title */}
// //         <h3 className="text-4xl md:text-5xl font-Ovo text-center mb-4">
// //           {sectionMeta[category].title}
// //         </h3>

// //         <p className="text-center max-w-3xl mx-auto mb-10 text-gray-600 dark:text-gray-400 font-Ovo text-lg">
// //           {sectionMeta[category].description}
// //         </p>

// //         {/* Divider */}
// //         <motion.div
// //           initial={{ width: 0 }}
// //           whileInView={{ width: "100px" }}
// //           transition={{ duration: 0.6 }}
// //           className="mx-auto mb-16 h-[3px] bg-gradient-to-r from-lime-400 to-emerald-500 rounded-full"
// //         />

// //         {/* Grid */}
// //         <div
// //           className="grid gap-10 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
// //           style={{ justifyItems: "center" }}
// //         >
// //           {projects.map((item, index) => (
// //             <motion.a
// //               key={index}
// //               href={item.link}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               initial={{ opacity: 0, y: 40 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: index * 0.1 }}
// //               whileHover={{ y: -10, scale: 1.05 }}
// //               className="relative w-full max-w-[380px] rounded-2xl overflow-hidden group cursor-pointer
// //                          bg-white/70 dark:bg-white/5 backdrop-blur-lg
// //                          border border-white/20 shadow-xl hover:shadow-2xl transition"
// //             >
// //               {/* Image */}
// //               <div
// //                 className="relative h-[260px]"
// //                 style={{
// //                   backgroundImage: `url(${item.bgImage})`,
// //                   backgroundSize: "cover",
// //                   backgroundPosition: "center",
// //                 }}
// //               >
// //                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

// //                 {/* Tag */}
// //                 <span className="absolute top-4 left-4 px-4 py-1 rounded-full text-xs font-semibold text-white bg-black/60 backdrop-blur">
// //                   {item.tag}
// //                 </span>

// //                 {/* CTA */}
// //                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
// //                   <span className="px-6 py-2 bg-white text-black rounded-full font-semibold">
// //                     View Project
// //                   </span>
// //                 </div>
// //               </div>

// //               {/* Content */}
// //               <div className="p-5">
// //                 <h4 className="text-lg font-semibold mb-1">
// //                   {item.title}
// //                 </h4>
// //                 <p className="text-sm text-gray-600 dark:text-gray-400">
// //                   {item.description}
// //                 </p>
// //               </div>

// //               {/* Arrow */}
// //               <div className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center rounded-full
// //                               bg-lime-400 text-black">
// //                 <Image
// //                   src={assets.send_icon}
// //                   alt="open"
// //                   width={18}
// //                   height={18}
// //                   className="w-auto h-auto"
// //                 />
// //               </div>
// //             </motion.a>
// //           ))}
// //         </div>
// //       </section>
// //     );
// //   };

// //   return (
// //     <motion.section
// //       id="work"
// //       initial={{ opacity: 0 }}
// //       whileInView={{ opacity: 1 }}
// //       transition={{ duration: 1 }}
// //       className="relative w-full px-[10%] py-28 bg-gradient-to-b from-gray-100 to-white
// //                  dark:from-darkTheme dark:to-darkHover"
// //     >
// //       <h4 className="text-center mb-3 text-lg font-Ovo tracking-wide">
// //         My Work
// //       </h4>

// //       <h2 className="text-center text-5xl md:text-6xl font-Ovo mb-6">
// //         My Latest Work
// //       </h2>

// //       <p className="text-center max-w-3xl mx-auto mb-24 font-Ovo text-gray-700 dark:text-gray-300 text-lg">
// //         A carefully curated collection of projects showcasing my skills in
// //         full-stack development, frontend engineering, and AI-powered solutions.
// //       </p>

// //       {renderSection("fullstack")}
// //       {renderSection("frontend")}
// //       {renderSection("ai")}
// //     </motion.section>
// //   );
// // };

// // export default Work;




































// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { assets } from "@/assets/assets";

// const Work = ({ isDarkMode }) => {

//   const workData = [
//     {
//       title: "Shoporia — E-commerce Frontend",
//       description: "Modern & responsive e-commerce UI built with Next.js.",
//       bgImage: "/work-9.png",
//       link: "https://shoporia-frontend.vercel.app/",
//       tag: "Fullstack",
//       category: "fullstack",
//     },
//     {
//       title: "Food Ordering Platform",
//       description: "Food delivery app with cart and checkout experience.",
//       bgImage: "/work-1.png",
//       link: "https://food-delivery-site-vipul1007s-projects.vercel.app/",
//       tag: "Fullstack",
//       category: "fullstack",
//     },

//     /* ---------- FRONTEND ---------- */
//     {
//       title: "Virtual Eclipse — Solar Eclipse Visualization",
//       description: "Interactive solar eclipse visualization web app.",
//       bgImage: "/work-8.png",
//       link: "https://virtual-eclipse.vercel.app/",
//       tag: "Visualization",
//       category: "frontend",
//     },
//     {
//       title: "Cancer Awareness & Support",
//       description: "Awareness-focused React website with clean UI.",
//       bgImage: "/work-10.png",
//       link: "https://cancer-awareness-website-ten.vercel.app/",
//       tag: "React.js",
//       category: "frontend",
//     },
//     {
//       title: "NVZ - Tesla UI",
//       description: "Tesla-inspired landing page with smooth animations.",
//       bgImage: "/work-2.png",
//       link: "https://nvz-vipul1007s-projects.vercel.app/",
//       tag: "UI/UX",
//       category: "frontend",
//     },
//     {
//       title: "Lazarev Agency Clone",
//       description: "Creative agency-style portfolio website.",
//       bgImage: "/work-3.png",
//       link: "https://vipul1029.github.io/Lazarev/",
//       tag: "Frontend",
//       category: "frontend",
//     },
//     {
//       title: "Teecraft Golf Hub",
//       description: "Interactive animated website for a golf club.",
//       bgImage: "/work-4.png",
//       link: "https://vipul1029.github.io/sidcup-gaming-site/",
//       tag: "Animation",
//       category: "frontend",
//     },
//     {
//       title: "Gaming Tutorial Site",
//       description: "Responsive gaming tutorial platform.",
//       bgImage: "/work-5.png",
//       link: "https://vipul1029.github.io/Miniproject/",
//       tag: "Frontend",
//       category: "frontend",
//     },

//     /* ---------- AI / ML ---------- */
//     {
//       title: "AI Resume Builder",
//       description: "AI-powered resume & cover letter generator.",
//       bgImage: "/work-6.png",
//       link: "https://resume-cover-letter-maker-q96u.vercel.app/",
//       tag: "AI",
//       category: "ai",
//     },
//     {
//       title: "Sales Prediction",
//       description: "ML model to forecast sales from historical data.",
//       bgImage: "/work-7.png",
//       link: "https://github.com/vipul1029/Sales-Prediction",
//       tag: "Machine Learning",
//       category: "ai",
//     },
//   ];

//   const sectionMeta = {
//     fullstack: {
//       title: "Full-Stack Projects",
//       description:
//         "Scalable, real-world applications combining modern UI, backend logic, and complete user flows.",
//       glow: "from-emerald-400/20 to-cyan-400/20",
//     },
//     frontend: {
//       title: "Frontend & UI Projects",
//       description:
//         "Visually refined, animated, and responsive interfaces built with strong UX principles.",
//       glow: "from-indigo-400/20 to-purple-400/20",
//     },
//     ai: {
//       title: "AI & Machine Learning Projects",
//       description:
//         "AI-driven applications leveraging machine learning to create intelligent, data-powered experiences.",
//       glow: "from-orange-400/20 to-pink-400/20",
//     },
//   };

//   const renderSection = (category) => {
//     const projects = workData.filter(p => p.category === category);

//     return (
//       <section className="relative mt-32">
//         {/* Background Accent */}
//         <div
//           className={`absolute inset-0 -z-10 blur-3xl bg-gradient-to-br ${sectionMeta[category].glow}`}
//         />

//         {/* Title */}
//         <h3 className="text-4xl md:text-5xl font-Ovo text-center mb-4">
//           {sectionMeta[category].title}
//         </h3>

//         <p className="text-center max-w-3xl mx-auto mb-10 text-gray-600 dark:text-gray-400 font-Ovo text-lg">
//           {sectionMeta[category].description}
//         </p>

//         {/* Divider */}
//         <motion.div
//           initial={{ width: 0 }}
//           whileInView={{ width: "100px" }}
//           transition={{ duration: 0.6 }}
//           className="mx-auto mb-16 h-[3px] bg-gradient-to-r from-lime-400 to-emerald-500 rounded-full"
//         />

//         {/* Grid */}
//         <div
//           className="grid gap-10 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
//           style={{ justifyItems: "center" }}
//         >
//           {projects.map((item, index) => (
//             <motion.a
//               key={index}
//               href={item.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -10, scale: 1.05 }}
//               className="relative w-full max-w-[380px] rounded-2xl overflow-hidden group cursor-pointer
//                          bg-white/70 dark:bg-white/5 backdrop-blur-lg
//                          border border-white/20 shadow-xl hover:shadow-2xl transition"
//             >
//               {/* Image */}
//               <div
//                 className="relative h-[260px]"
//                 style={{
//                   backgroundImage: `url(${item.bgImage})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

//                 {/* Tag */}
//                 <span className="absolute top-4 left-4 px-4 py-1 rounded-full text-xs font-semibold text-white bg-black/60 backdrop-blur">
//                   {item.tag}
//                 </span>

//                 {/* CTA */}
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//                   <span className="px-6 py-2 bg-white text-black rounded-full font-semibold">
//                     View Project
//                   </span>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-5">
//                 <h4 className="text-lg font-semibold mb-1">
//                   {item.title}
//                 </h4>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   {item.description}
//                 </p>
//               </div>

//               {/* Arrow */}
//               <div className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center rounded-full
//                               bg-lime-400 text-black">
//                 <Image
//                   src={assets.send_icon}
//                   alt="open"
//                   width={18}
//                   height={18}
//                   className="w-auto h-auto"
//                 />
//               </div>
//             </motion.a>
//           ))}
//         </div>
//       </section>
//     );
//   };

//   return (
//     <motion.section
//       id="work"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       className="relative w-full px-[10%] py-28 bg-gradient-to-b from-gray-100 to-white
//                  dark:from-darkTheme dark:to-darkHover"
//     >
//       <h4 className="text-center mb-3 text-lg font-Ovo tracking-wide">
//         My Work
//       </h4>

//       <h2 className="text-center text-5xl md:text-6xl font-Ovo mb-6">
//         My Latest Work
//       </h2>

//       <p className="text-center max-w-3xl mx-auto mb-24 font-Ovo text-gray-700 dark:text-gray-300 text-lg">
//         A carefully curated collection of projects showcasing my skills in
//         full-stack development, frontend engineering, and AI-powered solutions.
//       </p>

//       {renderSection("fullstack")}
//       {renderSection("frontend")}
//       {renderSection("ai")}
//     </motion.section>
//   );
// };

// export default Work;















"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";

const Work = ({ isDarkMode }) => {

  const workData = [
    {
      title: "Shoporia — E-commerce Frontend",
      description: "Modern & responsive e-commerce UI built with Next.js.",
      bgImage: "/work-9.png",
      link: "https://shoporia-frontend.vercel.app/",
      tag: "Fullstack",
      category: "fullstack",
    },
    {
      title: "Food Ordering Platform",
      description: "Food delivery app with cart and checkout experience.",
      bgImage: "/work-1.png",
      link: "https://food-delivery-site-vipul1007s-projects.vercel.app/",
      tag: "Fullstack",
      category: "fullstack",
    },
    {
  title: "Contact Management Web App",
  description: "A full-featured contact management application that lets users add, view, edit, and delete contact information with a responsive dashboard.",
  bgImage: "/work-11.png",
  link: "https://contact-management-vipul107.vercel.app/",
  tag: "Fullstack",
  category: "fullstack",
},

   
   
    // Frontend
    {
      title: "Virtual Eclipse — Solar Eclipse Visualization",
      description: "Interactive solar eclipse visualization web app.",
      bgImage: "/work-8.png",
      link: "https://virtual-eclipse.vercel.app/",
      tag: "Visualization",
      category: "frontend",
    },
    {
      title: "Cancer Awareness & Support",
      description: "Awareness-focused React website with clean UI.",
      bgImage: "/work-10.png",
      link: "https://cancer-awareness-website-ten.vercel.app/",
      tag: "React.js",
      category: "frontend",
    },
    {
      title: "NVZ - Tesla UI",
      description: "Tesla-inspired landing page with smooth animations.",
      bgImage: "/work-2.png",
      link: "https://nvz-vipul1007s-projects.vercel.app/",
      tag: "UI/UX",
      category: "frontend",
    },
    {
      title: "Lazarev Agency Clone",
      description: "Creative agency-style portfolio website.",
      bgImage: "/work-3.png",
      link: "https://vipul1029.github.io/Lazarev/",
      tag: "Frontend",
      category: "frontend",
    },
    {
      title: "Teecraft Golf Hub",
      description: "Interactive animated website for a golf club.",
      bgImage: "/work-4.png",
      link: "https://vipul1029.github.io/sidcup-gaming-site/",
      tag: "Animation",
      category: "frontend",
    },
    {
      title: "Gaming Tutorial Site",
      description: "Responsive gaming tutorial platform.",
      bgImage: "/work-5.png",
      link: "https://vipul1029.github.io/Miniproject/",
      tag: "Frontend",
      category: "frontend",
    },

    // AI / ML
    {
      title: "AI Resume Builder",
      description: "AI-powered resume & cover letter generator.",
      bgImage: "/work-6.png",
      link: "https://resume-cover-letter-maker-q96u.vercel.app/",
      tag: "AI",
      category: "ai",
    },
    {
      title: "Sales Prediction",
      description: "ML model to forecast sales from historical data.",
      bgImage: "/work-7.png",
      link: "https://github.com/vipul1029/Sales-Prediction",
      tag: "Machine Learning",
      category: "ai",
    },
  ];

  const sectionMeta = {
    fullstack: {
      title: "Full-Stack Projects",
      description:
        "Scalable, real-world applications combining modern UI, backend logic, and complete user flows.",
      glow: "from-emerald-400/20 to-cyan-400/20",
    },
    frontend: {
      title: "Frontend & UI Projects",
      description:
        "Visually refined, animated, and responsive interfaces built with strong UX principles.",
      glow: "from-indigo-400/20 to-purple-400/20",
    },
    ai: {
      title: "AI & Machine Learning Projects",
      description:
        "AI-driven applications leveraging machine learning to create intelligent, data-powered experiences.",
      glow: "from-orange-400/20 to-pink-400/20",
    },
  };

  const renderSection = (category) => {
    const projects = workData.filter(p => p.category === category);

    return (
      <section className="relative mt-32">
        <div className={`absolute inset-0 -z-10 blur-3xl bg-gradient-to-br ${sectionMeta[category].glow}`} />

        <h3 className="text-4xl md:text-5xl font-Ovo text-center mb-4">
          {sectionMeta[category].title}
        </h3>

        <p className="text-center max-w-3xl mx-auto mb-10 text-gray-600 dark:text-gray-400 font-Ovo text-lg">
          {sectionMeta[category].description}
        </p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 h-[3px] bg-gradient-to-r from-lime-400 to-emerald-500 rounded-full"
        />

        <div
          className="grid gap-10 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          style={{ justifyItems: "center" }}
        >
          {projects.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative w-full max-w-[380px] rounded-2xl overflow-hidden group cursor-pointer
                         bg-white/70 dark:bg-white/5 backdrop-blur-lg
                         border border-white/20 shadow-xl hover:shadow-2xl transition"
            >
              <div
                className="relative h-[260px]"
                style={{
                  backgroundImage: `url(${item.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

                <span className="absolute top-4 left-4 px-4 py-1 rounded-full text-xs font-semibold text-white bg-black/60 backdrop-blur">
                  {item.tag}
                </span>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span className="px-6 py-2 bg-white text-black rounded-full font-semibold">
                    View Project
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>

              <div className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-lime-400 text-black">
                <Image
                  src={assets.send_icon}
                  alt="open"
                  width={18}
                  height={18}
                  className="w-auto h-auto"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    );
  };

  return (
    <motion.section
      id="work"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full px-[10%] py-28 bg-gradient-to-b from-gray-100 to-white
                 dark:from-darkTheme dark:to-darkHover"
    >
      <h4 className="text-center mb-3 text-lg font-Ovo tracking-wide">
        My Projects
      </h4>

      <h2 className="text-center text-5xl md:text-6xl font-Ovo mb-6">
        My Latest Work
      </h2>

      <p className="text-center max-w-3xl mx-auto mb-24 font-Ovo text-gray-700 dark:text-gray-300 text-lg">
        A carefully curated collection of projects showcasing my skills in
        full-stack development, frontend engineering, and AI-powered solutions.
      </p>

      {renderSection("fullstack")}
      {renderSection("frontend")}
      {renderSection("ai")}

      {/* View All Projects Button */}
<motion.a
  href="https://github.com/vipul1029?tab=repositories"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.96 }}
  className="group mt-32 mx-auto flex items-center gap-4 w-max
             px-14 py-4 rounded-full
             bg-gradient-to-r from-lime-400 to-emerald-500
             text-black font-semibold text-lg
             shadow-lg hover:shadow-2xl
             transition-all duration-300"
>
  <span>View all projects</span>

  {/* Animated Arrow */}
  <span
    className="text-2xl transform transition-transform duration-300
               group-hover:translate-x-2"
  >
    →
  </span>
</motion.a>
    </motion.section>
  );
};

export default Work;
