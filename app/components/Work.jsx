"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS = [
  /* ── FULL STACK ── */
  {
    title: "Shoporia — E-Commerce Platform",
    accentLabel: "Full Stack & Authentication",
    description: "Modern e-commerce platform with responsive UI, authentication, live order tracking, payments, and scalable MERN architecture.",
    bgImage: "/work-9.png",
    link: "https://shoporia-frontend.vercel.app/",
    github: null,
    tech: ["React", "Node.js", "MongoDB", "Express"],
    category: "fullstack",
    year: "2025",
  },
  {
    title: "Food Ordering Platform",
    accentLabel: "Full Stack & Payments",
    description: "Full-stack food delivery app with cart, checkout, authentication, live tracking, and payment integration.",
    bgImage: "/work-1.png",
    link: "https://food-delivery-site-vipul1007s-projects.vercel.app/",
    github: null,
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "fullstack",
    year: "2025",
  },
  {
    title: "Contact Management Web App",
    accentLabel: "Dashboard & CRUD System",
    description: "Scalable contact management system with dashboard, full CRUD operations, and responsive UI.",
    bgImage: "/work-11.png",
    link: "https://contact-management-vipul107.vercel.app/",
    github: null,
    tech: ["React", "Node.js", "PostgreSQL", "REST API"],
    category: "fullstack",
    year: "2025",
  },
  /* ── FRONTEND ── */
  {
    title: "NVZ — Tesla Inspired UI",
    accentLabel: "UI / UX & Animation",
    description: "Modern Tesla-inspired landing page with premium scroll animations and interactive experiences.",
    bgImage: "/work-2.png",
    link: "https://nvz-vipul1007s-projects.vercel.app/",
    github: null,
    tech: ["HTML", "CSS", "JavaScript", "GSAP"],
    category: "frontend",
    year: "2024",
  },
  {
    title: "Virtual Eclipse Visualization",
    accentLabel: "Data Visualization",
    description: "Interactive solar eclipse visualization platform with immersive animations and responsive UI.",
    bgImage: "/work-8.png",
    link: "https://virtual-eclipse.vercel.app/",
    github: null,
    tech: ["React", "Canvas API", "JavaScript"],
    category: "frontend",
    year: "2024",
  },
  {
    title: "Lazarev Agency Clone",
    accentLabel: "Creative & Motion Design",
    description: "Creative agency-style animated portfolio website focused on modern scroll interactions.",
    bgImage: "/work-3.png",
    link: "https://vipul1029.github.io/Lazarev/",
    github: "https://github.com/vipul1029/Lazarev",
    tech: ["HTML", "CSS", "GSAP", "Locomotive"],
    category: "frontend",
    year: "2024",
  },
  {
    title: "Cancer Awareness Platform",
    accentLabel: "Accessibility & UI Design",
    description: "Awareness-focused React application designed with accessibility, clean UI principles, and informative content layout.",
    bgImage: "/work-10.png",
    link: "https://cancer-awareness-website-ten.vercel.app/",
    github: null,
    tech: ["React", "HTML", "CSS", "JavaScript"],
    category: "frontend",
    year: "2024",
  },
  /* ── AI / ML ── */
  {
    title: "AgriInspect — Fruit Quality Evaluation",
    accentLabel: "Computer Vision & ML",
    description: "ML-powered fruit quality evaluation system using computer vision, XGBoost, and a Flask web interface.",
    bgImage: "/work-12.png",
    link: "https://agriinspect-ml-based-fruit-quality-w0sm.onrender.com/",
    github: null,
    tech: ["Python", "XGBoost", "OpenCV", "Flask"],
    category: "ai",
    year: "2025",
  },
  {
    title: "Real-Time Vehicle Detection",
    accentLabel: "Computer Vision & Tracking",
    description: "YOLO-based real-time vehicle detection and multi-object tracking system from video streams.",
    bgImage: "/vehicle_detection.png",
    link: "https://github.com/vipul1029",
    github: "https://github.com/vipul1029",
    tech: ["Python", "YOLO", "OpenCV", "DeepSORT"],
    category: "ai",
    year: "2026",
  },
  {
    title: "AI Resume Builder",
    accentLabel: "Generative AI & LangChain",
    description: "AI-powered resume and cover letter generation platform using GPT and LangChain with PDF export.",
    bgImage: "/work-6.png",
    link: "https://resume-cover-letter-maker-q96u.vercel.app/",
    github: null,
    tech: ["React", "OpenAI GPT", "LangChain", "Python"],
    category: "ai",
    year: "2025",
  },
  {
    title: "Sales Prediction ML Model",
    accentLabel: "Machine Learning & Forecasting",
    description: "ML model for predictive sales forecasting using regression and ensemble methods.",
    bgImage: "/work-7.png",
    link: "https://github.com/vipul1029/Sales-Prediction",
    github: "https://github.com/vipul1029/Sales-Prediction",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    category: "ai",
    year: "2024",
  },
];

const FILTERS = [
  { key: "all",       label: "All Projects" },
  { key: "fullstack", label: "Full Stack"   },
  { key: "frontend",  label: "Frontend"     },
  { key: "ai",        label: "AI / ML"      },
];

const ACCENT = {
  fullstack: { color: "#ea580c" },
  frontend:  { color: "#6366f1" },
  ai:        { color: "#ea580c" },
};

const CAT_LABEL = { fullstack: "Full Stack", frontend: "Frontend", ai: "AI / ML" };

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LIGHT_TINT = {
  fullstack: "rgba(250,205,205,0.6)",
  frontend:  "rgba(253,240,195,0.6)",
  ai:        "rgba(180,245,205,0.5)",
};
const DARK_TINT = {
  fullstack: "rgba(80,20,20,0.35)",
  frontend:  "rgba(80,70,10,0.35)",
  ai:        "rgba(10,60,30,0.35)",
};

function ProjectCard({ item, index, isDarkMode }) {
  const accent = ACCENT[item.category];
  const tint   = isDarkMode ? DARK_TINT[item.category] : LIGHT_TINT[item.category];
  const cardBg = isDarkMode ? "#131313" : "#ffffff";
  const cardBgEnd = isDarkMode ? "#111111" : "#fafaf8";

  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col rounded-[24px] overflow-hidden
                 shadow-md hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/40
                 transition-all duration-300 cursor-pointer"
      style={{
        background: `linear-gradient(175deg, ${tint} 0%, ${cardBg} 38%, ${cardBgEnd} 100%)`,
      }}
    >
      {/* ── Content area ── */}
      <div className="px-6 pt-6 pb-4 flex flex-col gap-2.5 flex-1">

        {/* GitHub icon + Year */}
        <div className="flex items-center justify-between">
          <motion.div
            onClick={(e) => { if (item.github) { e.preventDefault(); window.open(item.github, "_blank"); } }}
            whileHover={{ scale: 1.15, backgroundColor: "rgba(0,0,0,0.08)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="w-8 h-8 rounded-full
                        border border-gray-300/70 dark:border-white/10
                        bg-white/60 dark:bg-white/[0.04]
                        flex items-center justify-center
                        text-gray-600 dark:text-gray-400
                        cursor-pointer z-10 relative"
          >
            <GitHubIcon />
          </motion.div>
          <span className="text-[11px] font-Outfit font-medium
                           text-gray-500 dark:text-gray-500
                           border border-gray-300/70 dark:border-white/10
                           bg-white/60 dark:bg-white/[0.04]
                           px-3 py-1 rounded-full">
            {item.year}
          </span>
        </div>

        {/* Title */}
        <h4 className="font-Outfit font-black text-[24px] leading-[1.22]
                       text-gray-900 dark:text-white mt-1">
          {item.title}
        </h4>

        {/* Accent label */}
        <p
          className="text-[9px] font-Outfit font-bold uppercase tracking-[0.28em]"
          style={{ color: accent.color }}
        >
          {item.accentLabel}
        </p>

        {/* Description */}
        <p className="font-Outfit text-[13px] text-gray-500 dark:text-gray-400 leading-[1.75] line-clamp-3">
          {item.description}
        </p>
      </div>

      {/* ── Inset image with tech pills ── */}
      <div className="mx-3 mb-3 rounded-[16px] overflow-hidden relative h-[195px] shrink-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.05]"
          style={{ backgroundImage: `url(${item.bgImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Tech pills */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex flex-wrap gap-1.5">
          {item.tech.map((t) => (
            <span
              key={t}
              className="text-[9px] font-Outfit font-semibold uppercase tracking-wider
                         px-2.5 py-[5px] rounded-full
                         bg-white dark:bg-black/65
                         text-gray-700 dark:text-gray-300
                         shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

const Work = ({ isDarkMode }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const lightGrid = `linear-gradient(rgba(185,155,100,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(185,155,100,0.28) 1px, transparent 1px)`;
  const darkGrid  = `linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)`;

  const filtered = activeFilter === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section
      id="work"
      className="relative w-full scroll-mt-20"
      style={{
        backgroundColor: isDarkMode ? "#000000" : "#faf8f3",
        backgroundImage: isDarkMode ? darkGrid : lightGrid,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/5 dark:bg-orange-600/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-400/4 dark:bg-indigo-500/6 blur-[100px] pointer-events-none" />

      <div className="px-[8%] py-24">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-Outfit text-[10px] font-light tracking-[0.4em] uppercase
                        text-gray-400 dark:text-gray-500 mb-2">
            03 &middot; My Work
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <h2
              className="font-Outfit font-black uppercase leading-[0.88] tracking-tight
                         text-gray-900 dark:text-white"
              style={{ fontSize: "clamp(34px,5vw,68px)" }}
            >
              FEATURED{" "}
              <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-orange-400
                               bg-clip-text text-transparent">
                WORK
              </span>
              <span className="text-orange-500">.</span>
            </h2>
            <p className="font-Outfit text-[14px] text-gray-500 dark:text-gray-400
                          max-w-xs leading-relaxed sm:text-right shrink-0">
              Projects spanning full-stack, AI systems,<br className="hidden sm:block" /> and modern UI engineering.
            </p>
          </div>
        </motion.div>

        {/* ── Filter tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-5 py-1.5 rounded-full text-[12px] font-Outfit font-medium border transition-all duration-200
                ${activeFilter === f.key
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900 dark:border-white"
                  : "bg-transparent text-gray-500 dark:text-gray-400 border-gray-200 dark:border-white/15 hover:border-gray-400 dark:hover:border-white/30"
                }`}
            >
              {f.label}
              <span className={`ml-1.5 text-[10px] ${activeFilter === f.key ? "opacity-60" : "opacity-40"}`}>
                ({f.key === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.category === f.key).length})
              </span>
            </button>
          ))}
        </motion.div>

        {/* ── Project grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((item, i) => (
              <ProjectCard key={item.title} item={item} index={i} isDarkMode={isDarkMode} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── GitHub CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/vipul1029?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full
                       font-Outfit font-semibold text-[14px]
                       bg-[#0a0a0a] dark:bg-white
                       text-white dark:text-gray-900
                       shadow-lg hover:shadow-xl hover:shadow-black/30 dark:hover:shadow-white/10
                       transition-shadow duration-300"
          >
            <span className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200">
              <GitHubIcon />
            </span>
            View all on GitHub
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="opacity-60">
              <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4M11.5 1.5V9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
