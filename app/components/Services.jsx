
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Services = ({ isDarkMode }) => {
  const services = [
    {
      title: "Frontend Development",
      subtitle: "Modern, responsive UI",
      description:
        "Pixel-perfect, responsive interfaces using React, Next.js, Tailwind CSS, and modern JavaScript. Focused on clean design, performance, and smooth animations.",
      tag: "React • Next.js • Tailwind",
      icon: assets.code_icon,
      iconDark: assets.code_icon_dark,
    },
    {
      title: "Backend & APIs",
      subtitle: "Secure & scalable logic",
      description:
        "Building RESTful APIs, authentication, and database-backed features using Node.js, Express.js, MongoDB, and PostgreSQL.",
      tag: "Node.js • Express • DBs",
      icon: assets.project_icon,
      iconDark: assets.project_icon_dark,
    },
    {
      title: "Full-Stack Web Apps",
      subtitle: "End-to-end solutions",
      description:
        "From idea to deployment: complete web applications with auth, dashboards, real-time features, and integrations.",
      tag: "MERN • Next.js",
      icon: assets.project_icon,
      iconDark: assets.project_icon_dark,
    },
    {
      title: "Software Development",
      subtitle: "Robust & clean solutions",
      description:
        "Designing and developing reliable software systems with strong problem-solving, data structures, and algorithms at the core.",
      tag: "DSA • OOP • Problem Solving",
      icon: assets.edu_icon,
      iconDark: assets.edu_icon_dark,
    },
    {
      title: "AI & ML Solutions",
      subtitle: "Data-driven intelligence",
      description:
        "Machine learning models, data pipelines, and ML integration into applications using Python, Scikit-Learn, TensorFlow, and more.",
      tag: "ML • DS • Python",
      icon: assets.edu_icon,
      iconDark: assets.edu_icon_dark,
    },
    {
      title: "Portfolio & Personal Sites",
      subtitle: "Personal branding",
      description:
        "Custom-designed portfolio and personal branding websites for students, creators, and professionals with strong UI/UX.",
      tag: "Portfolios • Landing Pages",
      icon: assets.code_icon,
      iconDark: assets.code_icon_dark,
    },
    {
      title: "Freelance Projects & Collaborations",
      subtitle: "Let’s build together",
      description:
        "Open for collaborations, freelance projects, and hackathons. I love working on impactful ideas and real-world products.",
      tag: "Collab • Freelancing",
      icon: assets.project_icon,
      iconDark: assets.project_icon_dark,
    },
  ];

  const opportunities = [
    "Frontend Internship",
    "Backend Internship",
    "Full-Stack Internship",
    "Software Development Internship",
    "Machine Learning Internship",
    "Freelance Web Projects",
    "Startup / Product Collaboration",
    "Personal & Business Websites",
    "Open Source Contributions",
    "Hackathons & Tech Events",
  ];

  // WhatsApp & LinkedIn
  const whatsappLink = "https://wa.me/919523354658";
  const linkedinLink = "https://linkedin.com/in/vipul-kumar-7697a428a";

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full px-[12%] py-20 scroll-mt-20 
                 bg-gradient-to-b from-gray-100 to-white 
                 dark:from-darkTheme dark:to-darkHover"
    >
      {/* Floating background bubble */}
      <motion.div
        className="absolute -top-10 left-10 w-32 h-32 bg-purple-400 opacity-20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />

      {/* Title */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I Do
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-5xl font-Ovo"
      >
        Services & Opportunities
      </motion.h2>

      {/* Intro text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center max-w-3xl mx-auto mt-5 mb-12 font-Ovo 
                   text-gray-700 dark:text-gray-300"
      >
        I build modern, scalable web applications and AI-powered solutions.
        I&apos;m also open for internships (frontend, backend, fullstack,
        software, and ML), collaborations, freelancing, and personal/portfolio
        website projects.
      </motion.p>

      {/* Services grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10"
      >
        {services.map(
          ({ title, subtitle, description, tag, icon, iconDark }, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="border-[0.5px] border-gray-300 dark:border-white/40 
                         rounded-2xl p-6 bg-white/70 dark:bg-darkHover/40 
                         shadow-sm hover:shadow-lg hover:bg-lightHover 
                         dark:hover:bg-darkHover/70 duration-300 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center 
                             bg-gray-100 dark:bg-darkTheme/60 border border-gray-200 
                             dark:border-white/30"
                >
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                    className="w-7 h-7"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {subtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm mt-3 text-gray-700 dark:text-gray-200 leading-relaxed">
                {description}
              </p>

              <span
                className="inline-flex mt-2 w-max text-xs px-3 py-1 rounded-full 
                             bg-gray-900 text-white dark:bg-white dark:text-black"
              >
                {tag}
              </span>
            </motion.div>
          )
        )}
      </motion.div>

      {/* Opportunities chips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="max-w-3xl mx-auto mt-10"
      >
        <p className="text-center mb-4 font-Ovo text-gray-700 dark:text-gray-200">
          I&apos;m actively open to:
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {opportunities.map((item, i) => (
            <span
              key={i}
              className="text-xs sm:text-sm px-4 py-2 rounded-full border border-gray-400 
                         dark:border-white/60 text-gray-800 dark:text-white 
                         bg-white/70 dark:bg-darkHover/60 hover:-translate-y-0.5 
                         hover:shadow-md duration-300"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Contact CTAs inside Services section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="max-w-3xl mx-auto mt-12 text-center"
      >
        <h3 className="text-2xl md:text-3xl font-Ovo mb-3 text-gray-800 dark:text-white">
          Want to work with me?
        </h3>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Reach out directly on WhatsApp, connect with me on LinkedIn, or use
          the contact form below. I&apos;m happy to discuss internships,
          collaborations, freelance projects, and custom websites.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-6">
          {/* WhatsApp button */}
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.2 }}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-full text-sm md:text-base font-semibold 
                       bg-gradient-to-r from-green-500 to-emerald-500 
                       text-white shadow-md hover:shadow-xl 
                       hover:-translate-y-0.5 transition-all duration-300 
                       flex items-center gap-2"
          >
            <span>WhatsApp</span>
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <Image
                src={assets.right_arrow_white}
                alt="Arrow"
                className="w-3"
              />
            </span>
          </motion.a>

          {/* Contact section button */}
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.2 }}
            href="#contact"
            className="px-7 py-3 rounded-full text-sm md:text-base font-semibold 
                       border border-gray-700 dark:border-white 
                       text-gray-900 dark:text-white 
                       bg-white/90 dark:bg-transparent 
                       hover:bg-gray-100 dark:hover:bg-darkHover/80 
                       shadow-sm hover:shadow-md hover:-translate-y-0.5 
                       transition-all duration-300 flex items-center gap-2"
          >
            <span>Contact Section</span>
            <span className="w-7 h-7 rounded-full border border-gray-500 dark:border-white flex items-center justify-center">
              <Image
                src={assets.right_arrow_bold}
                alt="Arrow"
                className="w-3"
              />
            </span>
          </motion.a>

          {/* LinkedIn button */}
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.2 }}
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-full text-sm md:text-base font-semibold 
                       bg-[#0A66C2] text-white shadow-md 
                       hover:shadow-xl hover:-translate-y-0.5 
                       transition-all duration-300 flex items-center gap-2"
          >
            <span>LinkedIn</span>
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <Image
                src={assets.right_arrow_white}
                alt="Arrow"
                className="w-3"
              />
            </span>
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
