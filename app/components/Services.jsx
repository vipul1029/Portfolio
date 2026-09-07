"use client";

import React from "react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    num: "01",
    title: "Full-Stack Development",
    description:
      "End-to-end web applications with responsive UI, optimized backend systems, authentication, REST APIs, and database integration built for scale.",
    tags: ["React", "Node.js", "MongoDB", "PostgreSQL"],
  },
  {
    num: "02",
    title: "Backend Engineering",
    description:
      "Secure, production-grade backend architectures and server-side logic with high-performance API design and database-driven systems.",
    tags: ["Node.js", "FastAPI", "Express", "REST APIs"],
  },
  {
    num: "03",
    title: "Computer Vision",
    description:
      "Real-time AI vision pipelines — object detection, multi-object tracking, and video analytics using state-of-the-art deep learning models.",
    tags: ["YOLO", "OpenCV", "DeepSORT", "Python"],
  },
  {
    num: "04",
    title: "Generative AI & LLMs",
    description:
      "LLM-powered applications, AI voice agents, RAG pipelines, and intelligent chatbots using Gemini, LangChain, and embeddings.",
    tags: ["Gemini", "LangChain", "RAG", "AI Agents"],
  },
  {
    num: "05",
    title: "Machine Learning",
    description:
      "Building and deploying ML models for prediction, classification, and analytics — integrated into real-world production applications.",
    tags: ["Python", "Scikit-learn", "XGBoost", "Flask"],
  },
  {
    num: "06",
    title: "AI-Powered Applications",
    description:
      "Combining scalable web architecture with AI to deliver intelligent, automated, and data-driven user experiences end-to-end.",
    tags: ["AI Systems", "APIs", "Python", "React"],
  },
];

const OPPORTUNITIES = [
  "Frontend Internship",
  "Backend Internship",
  "Full-Stack Internship",
  "ML / AI Internship",
  "Software Development",
  "Freelance Projects",
  "Startup Collaboration",
  "Open Source",
  "Hackathons",
];

const C       = "#FF4D00";
const C_DARK  = "#CC3D00";
const C_LIGHT = "#FF6A2A";
const rgba    = (a) => `rgba(255,77,0,${a})`;

const lightGrid = `linear-gradient(rgba(185,155,100,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(185,155,100,0.28) 1px, transparent 1px)`;

const Services = ({ isDarkMode }) => {
  const dm = isDarkMode;

  return (
    <section
      id="services"
      className="relative w-full scroll-mt-20 overflow-hidden"
      style={dm
        ? { background: "#080200" }
        : { backgroundColor: "#faf8f3", backgroundImage: lightGrid, backgroundSize: "40px 40px" }
      }
    >
      {/* Noise grain — dark only */}
      {dm && (
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.022]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px",
          }}
        />
      )}

      {/* Ambient glows */}
      <div className="absolute pointer-events-none" style={{
        top: "-12%", right: "-6%", width: 720, height: 720, borderRadius: "50%",
        background: `radial-gradient(circle, ${rgba(dm ? 0.18 : 0.07)} 0%, transparent 65%)`,
        filter: "blur(55px)",
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: "-12%", left: "-6%", width: 520, height: 520, borderRadius: "50%",
        background: `radial-gradient(circle, ${rgba(dm ? 0.12 : 0.05)} 0%, transparent 65%)`,
        filter: "blur(55px)",
      }} />
      <div className="absolute pointer-events-none" style={{
        top: "38%", left: "34%", width: 380, height: 380, borderRadius: "50%",
        background: `radial-gradient(circle, ${rgba(dm ? 0.06 : 0.03)} 0%, transparent 70%)`,
        filter: "blur(80px)",
      }} />

      {/* Scan lines — dark only */}
      {dm && (
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `repeating-linear-gradient(0deg, ${rgba(0.04)} 0px, ${rgba(0.04)} 1px, transparent 1px, transparent 56px)`,
        }} />
      )}

      <div className="relative z-10 px-[8%] py-24">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p
            className="font-Outfit text-[10px] font-light tracking-[0.45em] uppercase mb-3"
            style={{ color: dm ? rgba(0.5) : rgba(0.65) }}
          >
            04 &middot; Services
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <h2
              className="font-Outfit font-black uppercase leading-[0.88] tracking-tight"
              style={{ fontSize: "clamp(34px,5vw,72px)", color: dm ? "white" : "#0f172a" }}
            >
              AREAS{" "}
              <span style={{
                backgroundImage: `linear-gradient(90deg, ${C_DARK}, ${C}, ${C_LIGHT})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                OF
              </span>
              <br />
              EXPERTISE
              <span style={{ color: C }}>.</span>
            </h2>
            <p
              className="font-Outfit text-[13.5px] max-w-[240px] leading-relaxed sm:text-right shrink-0"
              style={{ color: dm ? "rgba(255,255,255,0.32)" : "#6b7280" }}
            >
              Building scalable software, AI systems, and full-stack products.
            </p>
          </div>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col p-6 rounded-2xl overflow-hidden transition-all duration-300 cursor-default"
              style={{
                background: dm ? "rgba(255,255,255,0.022)" : "rgba(255,255,255,0.85)",
                border: dm ? `1px solid ${rgba(0.1)}` : "1px solid rgba(160,130,90,0.2)",
                boxShadow: dm ? "none" : "0 2px 12px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.border     = dm ? `1px solid ${rgba(0.38)}` : "1px solid rgba(234,88,12,0.3)";
                e.currentTarget.style.background = dm ? "rgba(255,255,255,0.038)" : "rgba(255,255,255,1)";
                e.currentTarget.style.boxShadow  = dm
                  ? `0 0 40px ${rgba(0.14)}, inset 0 1px 0 ${rgba(0.08)}`
                  : "0 8px 32px rgba(234,88,12,0.1)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border     = dm ? `1px solid ${rgba(0.1)}` : "1px solid rgba(160,130,90,0.2)";
                e.currentTarget.style.background = dm ? "rgba(255,255,255,0.022)" : "rgba(255,255,255,0.85)";
                e.currentTarget.style.boxShadow  = dm ? "none" : "0 2px 12px rgba(0,0,0,0.04)";
              }}
            >
              {/* Top accent line on hover */}
              <div
                className="absolute inset-x-0 top-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${C}, transparent)` }}
              />

              {/* Ghost number */}
              <span
                className="absolute top-3 right-4 font-Outfit font-black text-[52px] leading-none select-none pointer-events-none"
                style={{ color: dm ? rgba(0.1) : "rgba(234,88,12,0.08)" }}
              >
                {s.num}
              </span>

              {/* Dot */}
              <div className="w-2 h-2 rounded-full mb-5 shrink-0" style={{
                background: `linear-gradient(135deg, ${C_DARK}, ${C})`,
                boxShadow: `0 0 8px ${rgba(dm ? 0.6 : 0.4)}`,
              }} />

              {/* Title */}
              <h3
                className="font-Outfit font-bold text-[15.5px] leading-snug mb-3 pr-8"
                style={{ color: dm ? "rgba(255,255,255,0.88)" : "#0f172a" }}
              >
                {s.title}
              </h3>

              {/* Description */}
              <p
                className="font-Outfit text-[13px] leading-[1.8] flex-1 mb-5"
                style={{ color: dm ? "rgba(255,255,255,0.36)" : "#6b7280" }}
              >
                {s.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="font-Outfit text-[10px] font-medium px-2.5 py-0.5 rounded-full"
                    style={{
                      background: dm ? rgba(0.1) : "rgba(234,88,12,0.06)",
                      border:     dm ? `1px solid ${rgba(0.25)}` : "1px solid rgba(234,88,12,0.2)",
                      color:      dm ? rgba(0.85) : "#c2410c",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1" style={{ background: dm
            ? `linear-gradient(to right, transparent, ${rgba(0.22)})`
            : "linear-gradient(to right, transparent, rgba(160,130,90,0.28))"
          }} />
          <p
            className="font-Outfit text-[9.5px] font-semibold uppercase tracking-[0.42em] shrink-0"
            style={{ color: dm ? rgba(0.45) : "#9ca3af" }}
          >
            Open To
          </p>
          <div className="h-px flex-1" style={{ background: dm
            ? `linear-gradient(to left, transparent, ${rgba(0.22)})`
            : "linear-gradient(to left, transparent, rgba(160,130,90,0.28))"
          }} />
        </div>

        {/* Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-2.5 mb-20"
        >
          {OPPORTUNITIES.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.28, delay: i * 0.04 }}
              whileHover={{ y: -2 }}
              className="font-Outfit text-[12px] font-medium px-4 py-1.5 rounded-full transition-all duration-200 cursor-default"
              style={{
                background: dm ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.85)",
                border:     dm ? `1px solid ${rgba(0.18)}` : "1px solid rgba(160,130,90,0.22)",
                color:      dm ? "rgba(255,255,255,0.52)" : "#6b7280",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.border     = dm ? `1px solid ${rgba(0.55)}` : "1px solid rgba(234,88,12,0.38)";
                e.currentTarget.style.color      = dm ? rgba(0.9) : "#c2410c";
                e.currentTarget.style.background = dm ? rgba(0.08) : "rgba(234,88,12,0.05)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border     = dm ? `1px solid ${rgba(0.18)}` : "1px solid rgba(160,130,90,0.22)";
                e.currentTarget.style.color      = dm ? "rgba(255,255,255,0.52)" : "#6b7280";
                e.currentTarget.style.background = dm ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.85)";
              }}
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: dm
              ? "linear-gradient(135deg,#0d0100 0%,#110300 55%,#0a0100 100%)"
              : "rgba(255,255,255,0.92)",
            border:    dm ? `1px solid ${rgba(0.18)}` : "1px solid rgba(160,130,90,0.2)",
            boxShadow: dm
              ? `0 32px 80px rgba(0,0,0,0.55), inset 0 1px 0 ${rgba(0.1)}`
              : "0 8px 40px rgba(0,0,0,0.07)",
          }}
        >
          {/* Top accent line */}
          <div className="absolute inset-x-0 top-0 h-[1.5px] pointer-events-none"
            style={{ background: `linear-gradient(90deg, transparent 0%, ${C} 40%, ${C_LIGHT} 60%, transparent 100%)` }} />

          {/* Glow — top-left */}
          <div className="absolute pointer-events-none" style={{
            top: "-30%", left: "-8%", width: 500, height: 500, borderRadius: "50%",
            background: `radial-gradient(circle, ${rgba(dm ? 0.16 : 0.06)} 0%, transparent 65%)`,
            filter: "blur(60px)",
          }} />
          {/* Glow — bottom-right */}
          <div className="absolute pointer-events-none" style={{
            bottom: "-30%", right: "-6%", width: 380, height: 380, borderRadius: "50%",
            background: `radial-gradient(circle, ${rgba(dm ? 0.1 : 0.04)} 0%, transparent 65%)`,
            filter: "blur(50px)",
          }} />

          {/* Ghost "BUILD" watermark — dark only */}
          {dm && (
            <span className="absolute right-6 bottom-4 font-Outfit font-black uppercase select-none pointer-events-none leading-none"
              style={{ fontSize: "clamp(60px,9vw,120px)", color: rgba(0.04), letterSpacing: "-0.04em" }}>
              
            </span>
          )}

          {/* Corner dots */}
          <div className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full pointer-events-none" style={{ background: rgba(dm ? 0.35 : 0.25) }} />
          <div className="absolute bottom-5 left-5 w-1 h-1 rounded-full pointer-events-none" style={{ background: rgba(dm ? 0.2 : 0.15) }} />

          {/* Content — two-column on lg+ */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-7 lg:gap-0 p-7 sm:p-9">

            {/* LEFT: text */}
            <div className="flex-1 lg:pr-10">
              <p className="font-Outfit text-[9.5px] font-semibold uppercase tracking-[0.44em] mb-3"
                style={{ color: dm ? rgba(0.5) : rgba(0.65) }}>
                Let&apos;s Connect
              </p>
              <h3
                className="font-Outfit font-black uppercase leading-[0.9] tracking-tight mb-3"
                style={{ fontSize: "clamp(22px,3vw,38px)", color: dm ? "white" : "#0f172a" }}
              >
                Let&apos;s Build Something{" "}
                <span style={{
                  backgroundImage: `linear-gradient(90deg, ${C_DARK}, ${C}, ${C_LIGHT})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Impactful.
                </span>
              </h3>
              <p className="font-Outfit text-[13px] leading-relaxed max-w-sm mb-5"
                style={{ color: dm ? "rgba(255,255,255,0.35)" : "#6b7280" }}>
                Open to software engineering roles, AI/ML collaborations, internships,
                freelance projects, and impactful product development.
              </p>

              {/* Availability badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full"
                style={{
                  background: dm ? rgba(0.08) : "rgba(234,88,12,0.06)",
                  border: dm ? `1px solid ${rgba(0.2)}` : "1px solid rgba(234,88,12,0.18)",
                }}>
                <motion.span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: C }}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                <span className="font-Outfit text-[11px] font-medium"
                  style={{ color: dm ? rgba(0.75) : "#c2410c" }}>
                  Available for Internships &amp; Collaborations
                </span>
              </div>
            </div>

            {/* Vertical rule — desktop */}
            <div className="hidden lg:block w-px self-stretch mx-2 shrink-0"
              style={{ background: dm ? `linear-gradient(to bottom, transparent, ${rgba(0.2)}, transparent)` : "linear-gradient(to bottom, transparent, rgba(160,130,90,0.2), transparent)" }} />

            {/* RIGHT: buttons */}
            <div className="lg:pl-12 lg:w-[260px] flex flex-col gap-3 shrink-0">

              <a
                href="https://wa.me/919523354658"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-3 rounded-2xl font-Outfit font-semibold text-[13px] text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 group"
                style={{
                  background: `linear-gradient(135deg, ${C_DARK}, ${C})`,
                  boxShadow:  `0 4px 20px ${rgba(dm ? 0.35 : 0.25)}`,
                }}
              >
                <span>WhatsApp</span>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-200">
                  <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/vipul-kumar-7697a428a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-3 rounded-2xl font-Outfit font-semibold text-[13px] text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 group"
                style={{ background: "#0A66C2", boxShadow: "0 4px 20px rgba(10,102,194,0.3)" }}
              >
                <span>LinkedIn</span>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-200">
                  <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a
                href="#contact"
                className="flex items-center justify-between px-5 py-3 rounded-2xl font-Outfit font-semibold text-[13px] transition-all duration-200 hover:-translate-y-0.5 group"
                style={{
                  background: dm ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
                  border:     dm ? `1px solid ${rgba(0.25)}` : "1px solid rgba(160,130,90,0.28)",
                  color:      dm ? "rgba(255,255,255,0.72)" : "#374151",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = dm ? rgba(0.55) : rgba(0.45); }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = dm ? rgba(0.25) : "rgba(160,130,90,0.28)"; }}
              >
                <span>Contact Form</span>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-200">
                  <path d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
