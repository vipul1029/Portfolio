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
    },
    {
      title: "Food Ordering Platform",
      description: "Food delivery app with cart and checkout experience.",
      bgImage: "/work-1.png",
      link: "https://food-delivery-site-vipul1007s-projects.vercel.app/",
      tag: "Fullstack",
    },
    {
      title: "Virtual Eclipse — Solar Eclipse Visualization",
      description: "Interactive solar eclipse visualization web app.",
      bgImage: "/work-8.png",
      link: "https://virtual-eclipse.vercel.app/",
      tag: "Visualization",
    },
    {
      title: "NVZ - Tesla UI",
      description: "Tesla-inspired landing page with smooth animations.",
      bgImage: "/work-2.png",
      link: "https://nvz-vipul1007s-projects.vercel.app/",
      tag: "UI/UX",
    },
    {
      title: "Lazarev Agency Clone",
      description: "Creative agency style portfolio website.",
      bgImage: "/work-3.png",
      link: "https://vipul1029.github.io/Lazarev/",
      tag: "Frontend",
    },
    {
      title: "Teecraft Golf Hub",
      description: "Interactive animated website for a golf club.",
      bgImage: "/work-4.png",
      link: "https://vipul1029.github.io/sidcup-gaming-site/",
      tag: "Animation",
    },
    {
      title: "Gaming Tutorial Site",
      description: "Responsive gaming tutorial platform.",
      bgImage: "/work-5.png",
      link: "https://vipul1029.github.io/Miniproject/",
      tag: "Frontend",
    },
    {
      title: "AI Resume Builder",
      description: "AI-powered resume & cover letter generator.",
      bgImage: "/work-6.png",
      link: "https://resume-cover-letter-maker-q96u.vercel.app/",
      tag: "AI",
    },
    {
      title: "Sales Prediction",
      description: "ML model to forecast sales from historical data.",
      bgImage: "/work-7.png",
      link: "https://github.com/vipul1029/Sales-Prediction",
      tag: "Machine Learning",
    },
  ];

  return (
    <motion.section
      id="work"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full px-[12%] py-20 scroll-mt-20 
                 bg-gradient-to-b from-gray-100 to-white
                 dark:from-darkTheme dark:to-darkHover"
    >
      {/* Titles */}
      <h4 className="text-center mb-2 text-lg font-Ovo">My Projects</h4>
      <h2 className="text-center text-5xl font-Ovo mb-6">My Latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mb-14 font-Ovo 
                    text-gray-700 dark:text-gray-300">
        A curated showcase of projects highlighting my frontend, full-stack,
        and machine learning experience.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {workData.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-xl overflow-hidden group cursor-pointer 
                       shadow-lg"
          >
            {/* Image */}
            <div
              className="relative w-full h-[260px]"
              style={{
                backgroundImage: `url(${item.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/55 transition duration-300" />

              {/* Tag */}
              <span className="absolute top-4 left-4 z-10 text-xs px-3 py-1 
                               rounded-full bg-white/90 text-black font-semibold">
                {item.tag}
              </span>

              {/* Text INSIDE image */}
              <div className="absolute bottom-0 left-0 right-0 z-10 
                              p-4 text-white">
                <h3 className="font-semibold text-lg leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-200 mt-1">
                  {item.description}
                </p>
              </div>

              {/* Arrow icon */}
              <div className="absolute bottom-4 right-4 z-10 w-9 h-9 
                              flex items-center justify-center rounded-full 
                              bg-white text-black 
                              group-hover:bg-lime-400 transition">
                <Image
                  src={assets.send_icon}
                  alt="open"
                  width={18}
                  height={18}
                />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* View More */}
      <motion.a
        href="https://github.com/vipul1029?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        className="mt-20 mx-auto flex items-center gap-2 w-max 
                   px-10 py-3 rounded-full border border-gray-700
                   text-gray-700 dark:text-white dark:border-white
                   hover:bg-lightHover dark:hover:bg-darkHover"
      >
        View all projects
        <Image
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="arrow"
          className="w-4"
        />
      </motion.a>
    </motion.section>
  );
};

export default Work;
