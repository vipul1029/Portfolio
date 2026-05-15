
// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { assets } from "@/assets/assets";

// const experiences = [
//   {
//     role: "Software Development Intern",
//     company: "KreditBee",
//     duration: "May 2026 – Present",
//     description:
//       "Working on scalable real-world applications and backend systems while contributing to production-level software development workflows.",
//     skills: ["Full Stack", "Backend Systems", "APIs", "Scalable Applications"],
//     icon: assets.code_icon,
//     iconDark: assets.code_icon_dark,
//   },
//   {
//     role: "Project Manager & Computer Vision Intern",
//     company: "MarkMyAd",
//     duration: "Feb 2026 – Present",
//     description:
//       "Led development of AI-powered video analytics systems using computer vision and deep learning for real-time tracking and monitoring solutions.",
//     skills: ["Computer Vision", "YOLO", "DeepSORT", "AI Systems"],
//     icon: assets.project_icon,
//     iconDark: assets.project_icon_dark,
//   },
//   {
//     role: "Full Stack Development Intern",
//     company: "Valsco (Jurident)",
//     duration: "Dec 2025 – Feb 2026",
//     description:
//       "Built scalable full-stack features, optimized APIs, and improved backend performance for production-ready applications.",
//     skills: ["React", "Node.js", "FastAPI", "PostgreSQL"],
//     icon: assets.code_icon,
//     iconDark: assets.code_icon_dark,
//   },
//   {
//     role: "Software Development Intern",
//     company: "Bluestock Fintech",
//     duration: "June 2025 – July 2025",
//     description:
//       "Developed and optimized a full-stack IPO web platform with responsive frontend architecture and efficient backend integrations.",
//     skills: ["Full Stack", "REST APIs", "PostgreSQL", "Git"],
//     icon: assets.edu_icon,
//     iconDark: assets.edu_icon_dark,
//   },
// ];

// const Experience = ({ isDarkMode }) => {
//   return (
//     <motion.section
//       id="experience"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.35 }}
//       className="relative w-full px-[10%] py-24 scroll-mt-20
//                  bg-gradient-to-b from-gray-100 to-white
//                  dark:from-darkTheme dark:to-darkHover"
//     >
//       {/* Background Glow */}
//       <motion.div
//         className="absolute top-10 left-10 w-32 h-32 bg-emerald-400 opacity-20 rounded-full blur-3xl"
//         animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
//         transition={{ repeat: Infinity, duration: 7 }}
//       />

//       {/* Heading */}
//       <h4 className="text-center mb-3 text-lg font-Ovo tracking-wide">
//         Professional Journey
//       </h4>

//       <h2 className="text-center text-5xl md:text-6xl font-Ovo mb-6">
//         Experience
//       </h2>

//       {/* Intro */}
//       <p className="text-center max-w-3xl mx-auto mb-16 font-Ovo text-gray-700 dark:text-gray-300 text-lg leading-8">
//         Internship experiences across software engineering, full-stack development,
//         fintech platforms, and AI-powered systems focused on building scalable,
//         real-world applications.
//       </p>

//       {/* Timeline */}
//       <div className="relative max-w-5xl mx-auto">

//         {/* Vertical Line */}
//         <div className="absolute left-5 sm:left-1/2 top-0 h-full w-[2px] bg-gray-300 dark:bg-white/20 transform sm:-translate-x-1/2" />

//         <div className="flex flex-col gap-16">

//           {experiences.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.35 }}
//               className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-8
//                 ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
//             >

//               {/* Timeline Dot */}
//               <div className="absolute left-2 sm:left-1/2 transform sm:-translate-x-1/2
//                               w-6 h-6 rounded-full bg-lime-400 border-4 border-white dark:border-darkTheme z-10" />

//               {/* Empty Space */}
//               <div className="hidden sm:block w-1/2" />

//               {/* Card */}
//               <motion.div
//                 whileHover={{ y: -4 }}
//                 className="ml-12 sm:ml-0 w-full sm:w-1/2 rounded-2xl p-6
//                            bg-white/80 dark:bg-white/5 backdrop-blur-lg
//                            border border-gray-200 dark:border-white/10
//                            shadow-lg hover:shadow-2xl transition-all duration-300"
//               >

//                 {/* Header */}
//                 <div className="flex items-start gap-4 mb-5">

//                   <div className="w-14 h-14 rounded-xl flex items-center justify-center
//                                   bg-gray-100 dark:bg-darkHover border border-gray-200
//                                   dark:border-white/10">

//                     <Image
//                       src={isDarkMode ? item.iconDark : item.icon}
//                       alt={item.role}
//                       className="w-7 h-7"
//                     />

//                   </div>

//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
//                       {item.role}
//                     </h3>

//                     <p className="text-base text-lime-600 dark:text-lime-400 font-medium">
//                       {item.company}
//                     </p>

//                     <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
//                       {item.duration}
//                     </p>
//                   </div>

//                 </div>

//                 {/* Description */}
//                 <p className="text-gray-700 dark:text-gray-300 leading-7 mb-5">
//                   {item.description}
//                 </p>

//                 {/* Skills */}
//                 <div className="flex flex-wrap gap-3">

//                   {item.skills.map((skill, idx) => (
//                     <span
//                       key={idx}
//                       className="px-4 py-2 rounded-full text-sm
//                                  bg-gray-900 text-white
//                                  dark:bg-white dark:text-black"
//                     >
//                       {skill}
//                     </span>
//                   ))}

//                 </div>

//               </motion.div>

//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Experience;






























"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/assets/assets";

const experiences = [
  {
    role: "Software Development Intern",
    company: "KreditBee",
    duration: "May 2026 – Present",
    description:
      "Building scalable production-grade applications and backend systems while contributing to real-world software engineering workflows.",
    skills: ["Full Stack", "Backend", "APIs", "Scalable Systems"],
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    glow: "from-emerald-400/20 to-lime-400/20",
  },
  {
    role: "Project Manager & Computer Vision Intern",
    company: "MarkMyAd",
    duration: "Feb 2026 – Present",
    description:
      "Led AI-powered video analytics projects focused on real-time object detection, tracking, and intelligent monitoring systems.",
    skills: ["YOLO", "DeepSORT", "Computer Vision", "AI Systems"],
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    glow: "from-orange-400/20 to-pink-400/20",
  },
  {
    role: "Full Stack Development Intern",
    company: "Valsco (Jurident)",
    duration: "Dec 2025 – Feb 2026",
    description:
      "Developed scalable frontend and backend modules with optimized APIs and database performance for production-ready applications.",
    skills: ["React", "FastAPI", "Node.js", "PostgreSQL"],
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    glow: "from-cyan-400/20 to-blue-400/20",
  },
  {
    role: "Software Development Intern",
    company: "Bluestock Fintech",
    duration: "June 2025 – July 2025",
    description:
      "Built and optimized a full-stack IPO platform with responsive UI, REST APIs, and scalable backend integrations.",
    skills: ["REST APIs", "PostgreSQL", "Full Stack", "Git"],
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    glow: "from-violet-400/20 to-indigo-400/20",
  },
];

const Experience = ({ isDarkMode }) => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="relative w-full px-[8%] py-28 scroll-mt-20
                 bg-gradient-to-b from-gray-100 to-white
                 dark:from-darkTheme dark:to-darkHover overflow-hidden"
    >

      {/* Background Blurs */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-emerald-400 opacity-20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-400 opacity-20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />

      {/* Heading */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-center mb-3 text-lg font-Ovo tracking-wide"
      >
        Professional Journey
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-center text-5xl md:text-6xl font-Ovo mb-6"
      >
        Experience
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="text-center max-w-3xl mx-auto mb-20 font-Ovo text-gray-700 dark:text-gray-300 text-lg leading-8"
      >
        Internship experiences across software engineering, AI-powered systems,
        computer vision, and scalable full-stack development environments.
      </motion.p>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">

        {/* Center Line */}
        <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-lime-400/70 to-cyan-400/70 -translate-x-1/2" />

        <div className="flex flex-col gap-16 lg:gap-24">

          {experiences.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className={`relative flex flex-col lg:flex-row items-center gap-10
                ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            >

              {/* Timeline Dot */}
              <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2
                              w-6 h-6 rounded-full bg-lime-400 border-4 border-white
                              dark:border-darkTheme z-20 shadow-lg shadow-lime-400/50" />

              {/* Empty Side */}
              <div className="hidden lg:block w-1/2" />

              {/* Experience Card */}
              <motion.div
                whileHover={{ y: -6 }}
                className="relative w-full lg:w-1/2 rounded-3xl overflow-hidden
                           border border-white/20 dark:border-white/10
                           bg-white/80 dark:bg-white/5 backdrop-blur-xl
                           shadow-xl hover:shadow-2xl transition-all duration-300"
              >

                {/* Glow Layer */}
                <div
                  className={`absolute inset-0 opacity-60 bg-gradient-to-br ${item.glow}`}
                />

                {/* Card Content */}
                <div className="relative z-10 p-8">

                  {/* Top */}
                  <div className="flex items-start gap-5 mb-6">

                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center
                                    bg-white/80 dark:bg-darkHover/80 border border-white/20
                                    shadow-md">

                      <Image
                        src={isDarkMode ? item.iconDark : item.icon}
                        alt={item.role}
                        className="w-8 h-8"
                      />

                    </div>

                    <div>

                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white leading-tight">
                        {item.role}
                      </h3>

                      <p className="text-lime-600 dark:text-lime-400 font-semibold mt-1 text-lg">
                        {item.company}
                      </p>

                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        {item.duration}
                      </p>

                    </div>

                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 leading-8 mb-6 text-[15px] sm:text-base">
                    {item.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3">

                    {item.skills.map((skill, idx) => (

                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full text-sm
                                   bg-gray-900 text-white
                                   dark:bg-white dark:text-black
                                   shadow-sm"
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>

              </motion.div>

            </motion.div>
          ))}

        </div>

      </div>

    </motion.section>
  );
};

export default Experience;
