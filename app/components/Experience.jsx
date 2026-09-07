// ﻿"use client";

// import React, { useState, useRef, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // ─────────────────────────────────────────────────────────────────────────────
// // EXPERIENCE DATA
// // Add videos later: drop <company>.mp4 in public/videos/ and set videoSrc below
// // ─────────────────────────────────────────────────────────────────────────────
// const EXPERIENCES = [
//   {
//     id: "markmyad",
//     company: "MarkMyAd",
//     tagline: "AI-Powered Video Analytics",
//     role: "Project Head | Computer Vision & ML Intern",
//     employmentType: "Internship",
//     duration: "July 2026 – Present",
//     location: "Remote, India",
//     isCurrent: true,
//     description:
//       "Developing real-time video analytics pipelines using YOLO, DeepSORT, and OpenCV for automated object detection and multi-object tracking. Leading computer vision and ML development — driving model integration and deployment of production systems.",
//     responsibilities: [
//       "Developed real-time video analytics pipelines using YOLO, DeepSORT, and OpenCV",
//       "Optimized multi-object tracking pipelines for efficient real-time inference",
//       "Built CV solutions enabling automated detection and tracking at scale",
//       "Led ML development — model integration, testing, and production deployment",
//     ],
//     technologies: ["YOLO", "DeepSORT", "OpenCV", "Python", "Computer Vision", "Deep Learning"],
//     websiteUrl: "markmyad.com",
//     videoSrc: "https://4mdckcg73rtuqy6f.private.blob.vercel-storage.com/markmyad.mp4?vercel-blob-valid-until=1788815414303&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfNG1EQ2tjZzczcnRVcVk2ZiIsIm93bmVySWQiOiJ0ZWFtX0tWcWZZUGpRU3NJWXE1VmU4dGJBYml4TiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzg4ODU4MjgxMDQ1LCJpYXQiOjE3ODg4MTUwODIxMzV9.gawtrzylGTC-LqbTEM8Emo7pipV6VTK9mpw1h9pR1f4&vercel-blob-signature=HCcF1DRnUJwoe4qv0Ona8VfiA7G4bQ8oEs2mhXyEeus",
//     accent: "#ea580c",
//   },
//   {
//     id: "kreditbee",
//     company: "KreditBee",
//     tagline: "Generative AI & LLM Engineering",
//     role: "Software Engineer Intern (Generative AI)",
//     employmentType: "Internship",
//     duration: "May 2026 – July 2026",
//     location: "Bangalore, India",
//     isCurrent: false,
//     description:
//       "Engineered a Gemini-powered AI voice agent for automated customer conversations. Built an AI user simulator and LLM evaluator to automate testing, and benchmarked responses using embeddings and UMAP analysis.",
//     responsibilities: [
//       "Engineered Gemini-powered AI voice agent with context-aware LLM responses",
//       "Built AI user simulator and LLM evaluator for automated conversation testing",
//       "Benchmarked AI responses using embeddings, UMAP, and similarity analysis",
//       "Developed diverse customer interaction test scenarios at scale",
//     ],
//     technologies: ["Gemini API", "LLMs", "Voice AI", "Embeddings", "UMAP", "Python", "AI Agents"],
//     websiteUrl: "kreditbee.com",
//     videoSrc: "https://4mdckcg73rtuqy6f.private.blob.vercel-storage.com/kreditbee.mp4?vercel-blob-valid-until=1788815395046&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfNG1EQ2tjZzczcnRVcVk2ZiIsIm93bmVySWQiOiJ0ZWFtX0tWcWZZUGpRU3NJWXE1VmU4dGJBYml4TiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzg4ODU4MjgxMDQ1LCJpYXQiOjE3ODg4MTUwODIxMzV9.gawtrzylGTC-LqbTEM8Emo7pipV6VTK9mpw1h9pR1f4&vercel-blob-signature=yuREsPkdJfxGWZxBn56NRP7c6NruU3fxKzhHog-Vx0I",
//     accent: "#8b5cf6",
//   },
//   {
//     id: "jurident",
//     company: "Valsco (Jurident)",
//     tagline: "Full Stack Engineering",
//     role: "Full Stack Development Intern",
//     employmentType: "Internship",
//     duration: "Feb 2026 – May 2026",
//     location: "Remote, India",
//     isCurrent: false,
//     description:
//       "Built the complete full-stack application — React frontend paired with Node.js, FastAPI, and Firebase backend. Developed and optimized RESTful APIs and database queries ensuring low latency, scalability, and efficient data flow.",
//     responsibilities: [
//       "Built full-stack app with React frontend and Node.js / FastAPI / Firebase backend",
//       "Developed and optimized RESTful APIs ensuring low latency and scalability",
//       "Improved database query performance for efficient data flow",
//       "Collaborated with team via Git workflows and Agile practices",
//     ],
//     technologies: ["React", "Node.js", "FastAPI", "Firebase", "PostgreSQL", "Git"],
//     websiteUrl: "jurident.com",
//     videoSrc: "https://4mdckcg73rtuqy6f.private.blob.vercel-storage.com/jurident.mp4?vercel-blob-valid-until=1788815368016&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfNG1EQ2tjZzczcnRVcVk2ZiIsIm93bmVySWQiOiJ0ZWFtX0tWcWZZUGpRU3NJWXE1VmU4dGJBYml4TiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzg4ODU4MjgxMDQ1LCJpYXQiOjE3ODg4MTUwODIxMzV9.gawtrzylGTC-LqbTEM8Emo7pipV6VTK9mpw1h9pR1f4&vercel-blob-signature=0JwbTr-A0wA5ZBIVpP5W3t7QpGW6iiKPaQ799MArXP0",
//     accent: "#06b6d4",
//   },
//   {
//     id: "bluestock",
//     company: "Bluestock Fintech",
//     tagline: "Fintech Platform Development",
//     role: "Software Development Intern",
//     employmentType: "Internship",
//     duration: "June 2025 – July 2025",
//     location: "Remote, India",
//     isCurrent: false,
//     description:
//       "Built a full-stack IPO web application using React.js, Node.js, and PostgreSQL with a responsive UI translated from Figma designs. Implemented REST APIs, database schema optimization, and Git-based version control workflows.",
//     responsibilities: [
//       "Built full-stack IPO web app with React.js, Node.js, and PostgreSQL",
//       "Created responsive UI from Figma designs matching production standards",
//       "Developed and tested RESTful APIs using Postman",
//       "Implemented PostgreSQL schema optimisation and Git workflows",
//     ],
//     technologies: ["React.js", "Node.js", "PostgreSQL", "REST APIs", "Figma", "Git", "Postman"],
//     websiteUrl: "bluestock.in",
//     videoSrc: "https://4mdckcg73rtuqy6f.private.blob.vercel-storage.com/bluestock.mp4?vercel-blob-valid-until=1788815178137&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfNG1EQ2tjZzczcnRVcVk2ZiIsIm93bmVySWQiOiJ0ZWFtX0tWcWZZUGpRU3NJWXE1VmU4dGJBYml4TiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzg4ODU4MjgxMDQ1LCJpYXQiOjE3ODg4MTUwODIxMzV9.gawtrzylGTC-LqbTEM8Emo7pipV6VTK9mpw1h9pR1f4&vercel-blob-signature=nERcGu1xrfyfyegelYmrMTFazTJ4akpHyxji5meM1uk",
//     accent: "#ea580c",
//   },
// ];

// // ─────────────────────────────────────────────────────────────────────────────
// // LAPTOP SCREEN AREA — percentages within the 2000×2000 laptop PNG container
// // Tune these four values until the video aligns with the transparent screen.
// // top/left/right = distance from that edge; bottom = distance from bottom edge.
// // ─────────────────────────────────────────────────────────────────────────────
// const SCREEN = {
//   top: "28.7%",
//   left: "18.3%",
//   right: "18.3%",
//   bottom: "31%",
//   radius: "0.4%",
// };

// // ─────────────────────────────────────────────────────────────────────────────
// // VARIANT PRESETS
// // ─────────────────────────────────────────────────────────────────────────────
// const fadeUp = (delay = 0) => ({
//   initial: { opacity: 0, y: 18 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.38, delay, ease: "easeOut" },
// });

// const STAGGER = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
// };
// const STAGGER_ITEM = {
//   hidden: { opacity: 0, y: 14 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
// };

// // ─────────────────────────────────────────────────────────────────────────────
// // VIDEO FALLBACK
// // ─────────────────────────────────────────────────────────────────────────────
// function VideoFallback({ exp }) {
//   const r = parseInt(exp.accent.slice(1, 3), 16);
//   const g = parseInt(exp.accent.slice(3, 5), 16);
//   const b = parseInt(exp.accent.slice(5, 7), 16);

//   return (
//     <div
//       className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden select-none"
//       style={{ background: "linear-gradient(135deg,#09090f 0%,#0d0d18 60%,#09090f 100%)" }}
//     >
//       {/* Animated grid */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(${r},${g},${b},0.06) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(${r},${g},${b},0.06) 1px, transparent 1px)
//           `,
//           backgroundSize: "28px 28px",
//         }}
//       />

//       {/* Central glow */}
//       <div
//         className="absolute rounded-full blur-3xl"
//         style={{
//           width: "55%", height: "55%",
//           top: "22%", left: "22%",
//           background: `radial-gradient(circle, rgba(${r},${g},${b},0.18) 0%, transparent 70%)`,
//         }}
//       />

//       {/* Content */}
//       <div className="relative z-10 text-center px-6">
//         <p
//           className="text-[9px] uppercase tracking-[0.35em] mb-3 font-Outfit"
//           style={{ color: exp.accent }}
//         >
//           {exp.employmentType}
//         </p>
//         <h3 className="text-2xl font-bold text-white font-Outfit mb-1">{exp.company}</h3>
//         <p className="text-xs text-white/30 font-Outfit mb-7">{exp.tagline}</p>

//         <div className="flex items-center justify-center gap-2">
//           <motion.span
//             className="w-1.5 h-1.5 rounded-full"
//             style={{ background: exp.accent }}
//             animate={{ opacity: [0.4, 1, 0.4] }}
//             transition={{ duration: 1.6, repeat: Infinity }}
//           />
//           <p className="text-[10px] text-white/25 font-Outfit tracking-wider">
//             Demo preview coming soon
//           </p>
//         </div>
//       </div>

//       {/* Website URL bottom */}
//       <p className="absolute bottom-5 text-[9px] text-white/15 font-Outfit tracking-widest">
//         {exp.websiteUrl}
//       </p>
//     </div>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // SCREEN CONTENT — only this animates on experience change (frame stays static)
// // ─────────────────────────────────────────────────────────────────────────────
// function ScreenContent({ exp }) {
//   const videoRef = useRef(null);
//   const hasVideo = Boolean(exp.videoSrc);

//   useEffect(() => {
//     if (!videoRef.current || !hasVideo) return;
//     videoRef.current.play().catch(() => {});
//     return () => { if (videoRef.current) videoRef.current.pause(); };
//   }, [hasVideo]);

//   return (
//     <motion.div
//       className="w-full h-full"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.35, ease: "easeOut" }}
//     >
//       {hasVideo ? (
//         <video
//           ref={videoRef}
//           src={exp.videoSrc}
//           className="w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//           preload="metadata"
//         />
//       ) : (
//         <VideoFallback exp={exp} />
//       )}
//     </motion.div>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // EXPERIENCE DETAILS (left side — desktop)
// // ─────────────────────────────────────────────────────────────────────────────
// function ExperienceDetails({ exp }) {
//   return (
//     <motion.div
//       variants={STAGGER}
//       initial="hidden"
//       animate="visible"
//       exit={{ opacity: 0, transition: { duration: 0.2 } }}
//       className="space-y-4"
//     >
//       {/* Status badge */}
//       <motion.div variants={STAGGER_ITEM}>
//         <span
//           className="inline-flex items-center gap-1.5 text-[11px] px-3 py-1 rounded-full font-Outfit font-medium"
//           style={{
//             background: `${exp.accent}18`,
//             color: exp.accent,
//             border: `1px solid ${exp.accent}35`,
//           }}
//         >
//           {exp.isCurrent && (
//             <motion.span
//               className="w-1.5 h-1.5 rounded-full"
//               style={{ background: exp.accent }}
//               animate={{ opacity: [0.4, 1, 0.4] }}
//               transition={{ duration: 1.4, repeat: Infinity }}
//             />
//           )}
//           {exp.isCurrent ? "Current Role" : "Past Experience"} · {exp.employmentType}
//         </span>
//       </motion.div>

//       {/* Company + role */}
//       <motion.div variants={STAGGER_ITEM}>
//         <h3 className="text-3xl xl:text-4xl font-Ovo text-gray-900 dark:text-white leading-tight">
//           {exp.company}
//         </h3>
//         <p
//           className="text-sm xl:text-base font-Outfit font-semibold mt-1.5"
//           style={{ color: exp.accent }}
//         >
//           {exp.role}
//         </p>
//         <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-1.5 text-xs text-gray-500 dark:text-gray-400 font-Outfit">
//           <span>{exp.duration}</span>
//           <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600" />
//           <span>{exp.location}</span>
//         </div>
//       </motion.div>

//       {/* Divider */}
//       <motion.div variants={STAGGER_ITEM} className="h-px bg-gray-200 dark:bg-white/10" />

//       {/* Description */}
//       <motion.p
//         variants={STAGGER_ITEM}
//         className="text-[13px] xl:text-[14px] leading-6 text-gray-600 dark:text-gray-300 font-Outfit"
//       >
//         {exp.description}
//       </motion.p>

//       {/* Responsibilities */}
//       <motion.div variants={STAGGER_ITEM}>
//         <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 dark:text-gray-500 font-Outfit mb-2">
//           Responsibilities
//         </p>
//         <ul className="space-y-1.5">
//           {exp.responsibilities.map((r, i) => (
//             <li
//               key={i}
//               className="flex items-start gap-2 text-[12px] xl:text-[13px] text-gray-600 dark:text-gray-300 font-Outfit leading-5"
//             >
//               <span
//                 className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
//                 style={{ background: exp.accent }}
//               />
//               {r}
//             </li>
//           ))}
//         </ul>
//       </motion.div>

//       {/* Tech stack */}
//       <motion.div variants={STAGGER_ITEM}>
//         <div className="flex flex-wrap gap-1.5">
//           {exp.technologies.map((tech) => (
//             <span
//               key={tech}
//               className="text-[10px] px-2.5 py-0.5 rounded-full font-Outfit font-medium
//                          text-gray-600 dark:text-gray-300
//                          bg-gray-100 dark:bg-white/5
//                          border border-gray-200 dark:border-white/10"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // COMPANY TABS — named tabs replacing dots, click to jump
// // ─────────────────────────────────────────────────────────────────────────────
// function CompanyTabs({ activeIndex, sectionRef }) {
//   const scrollTo = useCallback(
//     (index) => {
//       if (!sectionRef.current) return;
//       const top = sectionRef.current.getBoundingClientRect().top + window.scrollY;
//       const scrollable = sectionRef.current.offsetHeight - window.innerHeight;
//       const perItem = scrollable / EXPERIENCES.length;
//       // +10% nudge so we land inside the slot, not on the exact boundary
//       window.scrollTo({ top: top + (index + 0.1) * perItem, behavior: "smooth" });
//     },
//     [sectionRef]
//   );

//   return (
//     <div className="flex items-end gap-6 mt-6 border-b border-gray-200 dark:border-white/10">
//       {EXPERIENCES.map((exp, i) => {
//         const isActive = i === activeIndex;
//         return (
//           <button
//             key={exp.id}
//             onClick={() => scrollTo(i)}
//             aria-label={`Jump to ${exp.company}`}
//             className="relative pb-3 text-sm font-Outfit font-medium transition-colors duration-200 focus:outline-none shrink-0"
//             style={{ color: isActive ? exp.accent : undefined }}
//           >
//             <span className={isActive ? "" : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"}>
//               {exp.company}
//             </span>
//             {isActive && (
//               <motion.div
//                 layoutId="tab-underline"
//                 className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
//                 style={{ background: exp.accent }}
//                 transition={{ type: "spring", stiffness: 380, damping: 32 }}
//               />
//             )}
//           </button>
//         );
//       })}
//     </div>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // MOBILE CARD
// // ─────────────────────────────────────────────────────────────────────────────
// function MobileCard({ exp, isLast }) {
//   const videoRef = useRef(null);
//   const hasVideo = Boolean(exp.videoSrc);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.4, ease: "easeOut" }}
//       viewport={{ once: true, margin: "-60px" }}
//       className="mb-16"
//     >
//       {/* Laptop preview */}
//       <div
//         className="relative w-full mx-auto mb-8"
//         style={{ maxWidth: 400, filter: "drop-shadow(0 16px 36px rgba(0,0,0,0.4))" }}
//       >
//         {/* eslint-disable-next-line @next/next/no-img-element */}
//         <img
//           src="/laptoptrans.png"
//           alt="Laptop"
//           draggable={false}
//           className="relative w-full h-auto object-contain pointer-events-none select-none"
//           style={{ zIndex: 1 }}
//         />
//         <div
//           className="absolute overflow-hidden"
//           style={{
//             top: SCREEN.top,
//             left: SCREEN.left,
//             right: SCREEN.right,
//             bottom: SCREEN.bottom,
//             borderRadius: SCREEN.radius,
//             zIndex: 2,
//           }}
//         >
//           {hasVideo ? (
//             <video
//               ref={videoRef}
//               src={exp.videoSrc}
//               className="w-full h-full object-cover"
//               autoPlay
//               muted
//               loop
//               playsInline
//               preload="none"
//             />
//           ) : (
//             <VideoFallback exp={exp} />
//           )}
//         </div>
//       </div>

//       {/* Details */}
//       <div className="space-y-4">
//         <span
//           className="inline-flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-full font-Outfit font-medium"
//           style={{
//             background: `${exp.accent}18`,
//             color: exp.accent,
//             border: `1px solid ${exp.accent}35`,
//           }}
//         >
//           {exp.isCurrent && (
//             <motion.span
//               className="w-1.5 h-1.5 rounded-full"
//               style={{ background: exp.accent }}
//               animate={{ opacity: [0.4, 1, 0.4] }}
//               transition={{ duration: 1.4, repeat: Infinity }}
//             />
//           )}
//           {exp.isCurrent ? "Current" : "Past"} · {exp.employmentType}
//         </span>

//         <div>
//           <h3 className="text-3xl font-Ovo text-gray-900 dark:text-white">{exp.company}</h3>
//           <p
//             className="text-base font-Outfit font-semibold mt-1"
//             style={{ color: exp.accent }}
//           >
//             {exp.role}
//           </p>
//           <p className="text-sm text-gray-500 dark:text-gray-400 font-Outfit mt-1">
//             {exp.duration} · {exp.location}
//           </p>
//         </div>

//         <p className="text-sm leading-7 text-gray-600 dark:text-gray-300 font-Outfit">
//           {exp.description}
//         </p>

//         <ul className="space-y-2">
//           {exp.responsibilities.map((r, i) => (
//             <li
//               key={i}
//               className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300 font-Outfit leading-6"
//             >
//               <span
//                 className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
//                 style={{ background: exp.accent }}
//               />
//               {r}
//             </li>
//           ))}
//         </ul>

//         <div className="flex flex-wrap gap-2">
//           {exp.technologies.map((tech) => (
//             <span
//               key={tech}
//               className="text-[11px] px-3 py-1 rounded-full font-Outfit font-medium
//                          text-gray-600 dark:text-gray-300
//                          bg-gray-100 dark:bg-white/5
//                          border border-gray-200 dark:border-white/10"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </div>

//       {!isLast && <div className="mt-14 h-px bg-gray-200 dark:bg-white/10" />}
//     </motion.div>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // MAIN COMPONENT
// // ─────────────────────────────────────────────────────────────────────────────
// const Experience = ({ isDarkMode }) => {
//   const lightGrid = `linear-gradient(rgba(185,155,100,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(185,155,100,0.28) 1px, transparent 1px)`;
//   const darkGrid  = `linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)`;
//   const [activeIndex, setActiveIndex] = useState(0);
//   const desktopRef = useRef(null);

//   // Scroll-driven active index — passive listener, cleaned up on unmount
//   useEffect(() => {
//     const onScroll = () => {
//       const el = desktopRef.current;
//       if (!el) return;
//       const scrollable = el.offsetHeight - window.innerHeight;
//       if (scrollable <= 0) return;
//       const scrolled = Math.max(0, -el.getBoundingClientRect().top);
//       const progress = Math.min(1, scrolled / scrollable);
//       const next = Math.min(
//         Math.floor(progress * EXPERIENCES.length),
//         EXPERIENCES.length - 1
//       );
//       setActiveIndex((prev) => (prev === next ? prev : next));
//     };

//     window.addEventListener("scroll", onScroll, { passive: true });
//     onScroll(); // initialise on mount
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const active = EXPERIENCES[activeIndex];

//   return (
//     <section
//       id="experience"
//       className="relative scroll-mt-20"
//       style={{
//         backgroundColor: isDarkMode ? "#000000" : "#faf8f3",
//         backgroundImage: isDarkMode ? darkGrid : lightGrid,
//         backgroundSize: "40px 40px",
//       }}
//     >
//       {/* ══════════════════════════════════════════════════════
//           MOBILE LAYOUT  (visible below lg breakpoint)
//       ══════════════════════════════════════════════════════ */}
//       <div className="lg:hidden px-[8%] py-24">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <p className="text-sm font-Ovo tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-3">
//             Professional Journey
//           </p>
//           <h2 className="text-5xl font-Ovo text-gray-900 dark:text-white mb-6">
//             Experience
//           </h2>
//           <p className="max-w-xl mx-auto text-base font-Outfit text-gray-600 dark:text-gray-300 leading-7">
//             Internship experiences across Generative AI, computer vision, and full-stack engineering.
//           </p>
//         </div>

//         {EXPERIENCES.map((exp, i) => (
//           <MobileCard key={exp.id} exp={exp} isLast={i === EXPERIENCES.length - 1} />
//         ))}
//       </div>

//       {/* ══════════════════════════════════════════════════════
//           DESKTOP SCROLL-DRIVEN LAYOUT  (visible lg+)
//           This div is tall so there is scroll space to trigger each experience.
//       ══════════════════════════════════════════════════════ */}
//       <div
//         ref={desktopRef}
//         className="hidden lg:block"
//         style={{ height: `${EXPERIENCES.length * 60}vh` }}
//         aria-label="Experience timeline"
//       >
//         {/* Sticky panel — stays fixed to viewport while outer div scrolls */}
//         <div className="sticky top-0 h-screen overflow-hidden flex">

//           {/* Ambient background orbs driven by active accent */}
//           <motion.div
//             key={`orb-tl-${activeIndex}`}
//             className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.07, scale: [1, 1.15, 1] }}
//             transition={{ opacity: { duration: 0.6 }, scale: { duration: 7, repeat: Infinity } }}
//             style={{ background: active.accent }}
//           />
//           <motion.div
//             key={`orb-br-${activeIndex}`}
//             className="absolute bottom-0 right-0 w-56 h-56 rounded-full blur-3xl pointer-events-none"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.05, scale: [1, 1.2, 1] }}
//             transition={{ opacity: { duration: 0.6 }, scale: { duration: 9, repeat: Infinity } }}
//             style={{ background: active.accent }}
//           />

//           {/* ── LEFT PANEL (42%) ── */}
//           <div className="w-[42%] flex flex-col justify-center px-10 xl:px-14 py-10 relative z-10">

//             {/* Animated company details */}
//             <AnimatePresence mode="wait">
//               <ExperienceDetails key={activeIndex} exp={active} />
//             </AnimatePresence>

//             {/* Company tabs navigation */}
//             <CompanyTabs activeIndex={activeIndex} sectionRef={desktopRef} />
//           </div>

//           {/* Vertical rule */}
//           <div
//             className="w-px self-stretch my-16 shrink-0"
//             style={{
//               background: `linear-gradient(to bottom, transparent, ${active.accent}20, transparent)`,
//             }}
//           />

//           {/* ── RIGHT PANEL (58%) ── */}
//           <div className="w-[58%] flex items-center justify-center px-4 xl:px-8 py-10 relative z-10">

//             {/* Section heading — bottom center of right panel */}
//             <div className="absolute bottom-10 left-0 right-0 text-center pointer-events-none">
//               <p className="text-[11px] font-Outfit uppercase tracking-[0.28em] text-gray-400 dark:text-gray-500 mb-1">
//                 Professional Journey
//               </p>
//               <h2 className="text-4xl xl:text-5xl font-Ovo text-gray-900 dark:text-white leading-tight">
//                 Experience
//               </h2>
//             </div>

//             <div
//               className="relative w-full"
//               style={{
//                 maxWidth: 760,
//                 filter: "drop-shadow(0 30px 70px rgba(0,0,0,0.5))",
//               }}
//             >
//               {/* Accent glow — transitions on accent change */}
//               <motion.div
//                 key={`glow-${activeIndex}`}
//                 className="absolute left-1/2 -translate-x-1/2 blur-3xl rounded-full pointer-events-none"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.08 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//                 style={{ width: "70%", height: "30%", bottom: "2%", background: active.accent }}
//               />

//               {/* Static laptop frame — never re-mounts */}
//               {/* eslint-disable-next-line @next/next/no-img-element */}
//               <img
//                 src="/laptoptrans.png"
//                 alt="Laptop mockup"
//                 draggable={false}
//                 className="relative w-full h-auto object-contain select-none pointer-events-none"
//                 style={{ zIndex: 1 }}
//               />

//               {/* Only the screen content fades in/out on scroll */}
//               <div
//                 className="absolute overflow-hidden"
//                 style={{
//                   top: SCREEN.top,
//                   left: SCREEN.left,
//                   right: SCREEN.right,
//                   bottom: SCREEN.bottom,
//                   borderRadius: SCREEN.radius,
//                   zIndex: 2,
//                 }}
//               >
//                 <AnimatePresence mode="wait">
//                   <ScreenContent key={activeIndex} exp={active} />
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;















"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// EXPERIENCE DATA
// Add videos later: drop <company>.mp4 in public/videos/ and set videoSrc below
// ─────────────────────────────────────────────────────────────────────────────
const EXPERIENCES = [
  {
    id: "markmyad",
    company: "MarkMyAd",
    tagline: "AI-Powered Video Analytics",
    role: "Project Head | Computer Vision & ML Intern",
    employmentType: "Internship",
    duration: "July 2026 – Present",
    location: "Remote, India",
    isCurrent: true,
    description:
      "Developing real-time video analytics pipelines using YOLO, DeepSORT, and OpenCV for automated object detection and multi-object tracking. Leading computer vision and ML development — driving model integration and deployment of production systems.",
    responsibilities: [
      "Developed real-time video analytics pipelines using YOLO, DeepSORT, and OpenCV",
      "Optimized multi-object tracking pipelines for efficient real-time inference",
      "Built CV solutions enabling automated detection and tracking at scale",
      "Led ML development — model integration, testing, and production deployment",
    ],
    technologies: ["YOLO", "DeepSORT", "OpenCV", "Python", "Computer Vision", "Deep Learning"],
    websiteUrl: "markmyad.com",
    videoSrc: "https://res.cloudinary.com/deydjaata/video/upload/markmyad_xuuaf7.mp4",
    accent: "#ea580c",
  },
  {
    id: "kreditbee",
    company: "KreditBee",
    tagline: "Generative AI & LLM Engineering",
    role: "Software Engineer Intern (Generative AI)",
    employmentType: "Internship",
    duration: "May 2026 – July 2026",
    location: "Bangalore, India",
    isCurrent: false,
    description:
      "Engineered a Gemini-powered AI voice agent for automated customer conversations. Built an AI user simulator and LLM evaluator to automate testing, and benchmarked responses using embeddings and UMAP analysis.",
    responsibilities: [
      "Engineered Gemini-powered AI voice agent with context-aware LLM responses",
      "Built AI user simulator and LLM evaluator for automated conversation testing",
      "Benchmarked AI responses using embeddings, UMAP, and similarity analysis",
      "Developed diverse customer interaction test scenarios at scale",
    ],
    technologies: ["Gemini API", "LLMs", "Voice AI", "Embeddings", "UMAP", "Python", "AI Agents"],
    websiteUrl: "kreditbee.com",
    videoSrc: "https://res.cloudinary.com/deydjaata/video/upload/kreditbee_kapjel.mp4",
    accent: "#8b5cf6",
  },
  {
    id: "jurident",
    company: "Valsco (Jurident)",
    tagline: "Full Stack Engineering",
    role: "Full Stack Development Intern",
    employmentType: "Internship",
    duration: "Feb 2026 – May 2026",
    location: "Remote, India",
    isCurrent: false,
    description:
      "Built the complete full-stack application — React frontend paired with Node.js, FastAPI, and Firebase backend. Developed and optimized RESTful APIs and database queries ensuring low latency, scalability, and efficient data flow.",
    responsibilities: [
      "Built full-stack app with React frontend and Node.js / FastAPI / Firebase backend",
      "Developed and optimized RESTful APIs ensuring low latency and scalability",
      "Improved database query performance for efficient data flow",
      "Collaborated with team via Git workflows and Agile practices",
    ],
    technologies: ["React", "Node.js", "FastAPI", "Firebase", "PostgreSQL", "Git"],
    websiteUrl: "jurident.com",
    videoSrc: "https://res.cloudinary.com/deydjaata/video/upload/jurident_nquwr7.mp4",
    accent: "#06b6d4",
  },
  {
    id: "bluestock",
    company: "Bluestock Fintech",
    tagline: "Fintech Platform Development",
    role: "Software Development Intern",
    employmentType: "Internship",
    duration: "June 2025 – July 2025",
    location: "Remote, India",
    isCurrent: false,
    description:
      "Built a full-stack IPO web application using React.js, Node.js, and PostgreSQL with a responsive UI translated from Figma designs. Implemented REST APIs, database schema optimization, and Git-based version control workflows.",
    responsibilities: [
      "Built full-stack IPO web app with React.js, Node.js, and PostgreSQL",
      "Created responsive UI from Figma designs matching production standards",
      "Developed and tested RESTful APIs using Postman",
      "Implemented PostgreSQL schema optimisation and Git workflows",
    ],
    technologies: ["React.js", "Node.js", "PostgreSQL", "REST APIs", "Figma", "Git", "Postman"],
    websiteUrl: "bluestock.in",
    videoSrc: "https://res.cloudinary.com/deydjaata/video/upload/bluestock_dgt5bp.mp4",
    accent: "#ea580c",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// LAPTOP SCREEN AREA — percentages within the 2000×2000 laptop PNG container
// Tune these four values until the video aligns with the transparent screen.
// top/left/right = distance from that edge; bottom = distance from bottom edge.
// ─────────────────────────────────────────────────────────────────────────────
const SCREEN = {
  top: "28.7%",
  left: "18.3%",
  right: "18.3%",
  bottom: "31%",
  radius: "0.4%",
};

// ─────────────────────────────────────────────────────────────────────────────
// VARIANT PRESETS
// ─────────────────────────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.38, delay, ease: "easeOut" },
});

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const STAGGER_ITEM = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO FALLBACK
// ─────────────────────────────────────────────────────────────────────────────
function VideoFallback({ exp }) {
  const r = parseInt(exp.accent.slice(1, 3), 16);
  const g = parseInt(exp.accent.slice(3, 5), 16);
  const b = parseInt(exp.accent.slice(5, 7), 16);

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden select-none"
      style={{ background: "linear-gradient(135deg,#09090f 0%,#0d0d18 60%,#09090f 100%)" }}
    >
      {/* Animated grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(${r},${g},${b},0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(${r},${g},${b},0.06) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Central glow */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: "55%", height: "55%",
          top: "22%", left: "22%",
          background: `radial-gradient(circle, rgba(${r},${g},${b},0.18) 0%, transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p
          className="text-[9px] uppercase tracking-[0.35em] mb-3 font-Outfit"
          style={{ color: exp.accent }}
        >
          {exp.employmentType}
        </p>
        <h3 className="text-2xl font-bold text-white font-Outfit mb-1">{exp.company}</h3>
        <p className="text-xs text-white/30 font-Outfit mb-7">{exp.tagline}</p>

        <div className="flex items-center justify-center gap-2">
          <motion.span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: exp.accent }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
          <p className="text-[10px] text-white/25 font-Outfit tracking-wider">
            Demo preview coming soon
          </p>
        </div>
      </div>

      {/* Website URL bottom */}
      <p className="absolute bottom-5 text-[9px] text-white/15 font-Outfit tracking-widest">
        {exp.websiteUrl}
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SCREEN CONTENT — only this animates on experience change (frame stays static)
// ─────────────────────────────────────────────────────────────────────────────
function ScreenContent({ exp }) {
  const videoRef = useRef(null);
  const hasVideo = Boolean(exp.videoSrc);

  useEffect(() => {
    if (!videoRef.current || !hasVideo) return;
    videoRef.current.play().catch(() => {});
    return () => { if (videoRef.current) videoRef.current.pause(); };
  }, [hasVideo]);

  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {hasVideo ? (
        <video
          ref={videoRef}
          src={exp.videoSrc}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <VideoFallback exp={exp} />
      )}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPERIENCE DETAILS (left side — desktop)
// ─────────────────────────────────────────────────────────────────────────────
function ExperienceDetails({ exp }) {
  return (
    <motion.div
      variants={STAGGER}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="space-y-4"
    >
      {/* Status badge */}
      <motion.div variants={STAGGER_ITEM}>
        <span
          className="inline-flex items-center gap-1.5 text-[11px] px-3 py-1 rounded-full font-Outfit font-medium"
          style={{
            background: `${exp.accent}18`,
            color: exp.accent,
            border: `1px solid ${exp.accent}35`,
          }}
        >
          {exp.isCurrent && (
            <motion.span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: exp.accent }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            />
          )}
          {exp.isCurrent ? "Current Role" : "Past Experience"} · {exp.employmentType}
        </span>
      </motion.div>

      {/* Company + role */}
      <motion.div variants={STAGGER_ITEM}>
        <h3 className="text-3xl xl:text-4xl font-Ovo text-gray-900 dark:text-white leading-tight">
          {exp.company}
        </h3>
        <p
          className="text-sm xl:text-base font-Outfit font-semibold mt-1.5"
          style={{ color: exp.accent }}
        >
          {exp.role}
        </p>
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mt-1.5 text-xs text-gray-500 dark:text-gray-400 font-Outfit">
          <span>{exp.duration}</span>
          <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600" />
          <span>{exp.location}</span>
        </div>
      </motion.div>

      {/* Divider */}
      <motion.div variants={STAGGER_ITEM} className="h-px bg-gray-200 dark:bg-white/10" />

      {/* Description */}
      <motion.p
        variants={STAGGER_ITEM}
        className="text-[13px] xl:text-[14px] leading-6 text-gray-600 dark:text-gray-300 font-Outfit"
      >
        {exp.description}
      </motion.p>

      {/* Responsibilities */}
      <motion.div variants={STAGGER_ITEM}>
        <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 dark:text-gray-500 font-Outfit mb-2">
          Responsibilities
        </p>
        <ul className="space-y-1.5">
          {exp.responsibilities.map((r, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-[12px] xl:text-[13px] text-gray-600 dark:text-gray-300 font-Outfit leading-5"
            >
              <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: exp.accent }}
              />
              {r}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Tech stack */}
      <motion.div variants={STAGGER_ITEM}>
        <div className="flex flex-wrap gap-1.5">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2.5 py-0.5 rounded-full font-Outfit font-medium
                         text-gray-600 dark:text-gray-300
                         bg-gray-100 dark:bg-white/5
                         border border-gray-200 dark:border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPANY TABS — named tabs replacing dots, click to jump
// ─────────────────────────────────────────────────────────────────────────────
function CompanyTabs({ activeIndex, sectionRef }) {
  const scrollTo = useCallback(
    (index) => {
      if (!sectionRef.current) return;
      const top = sectionRef.current.getBoundingClientRect().top + window.scrollY;
      const scrollable = sectionRef.current.offsetHeight - window.innerHeight;
      const perItem = scrollable / EXPERIENCES.length;
      // +10% nudge so we land inside the slot, not on the exact boundary
      window.scrollTo({ top: top + (index + 0.1) * perItem, behavior: "smooth" });
    },
    [sectionRef]
  );

  return (
    <div className="flex items-end gap-6 mt-6 border-b border-gray-200 dark:border-white/10">
      {EXPERIENCES.map((exp, i) => {
        const isActive = i === activeIndex;
        return (
          <button
            key={exp.id}
            onClick={() => scrollTo(i)}
            aria-label={`Jump to ${exp.company}`}
            className="relative pb-3 text-sm font-Outfit font-medium transition-colors duration-200 focus:outline-none shrink-0"
            style={{ color: isActive ? exp.accent : undefined }}
          >
            <span className={isActive ? "" : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"}>
              {exp.company}
            </span>
            {isActive && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                style={{ background: exp.accent }}
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MOBILE CARD
// ─────────────────────────────────────────────────────────────────────────────
function MobileCard({ exp, isLast }) {
  const videoRef = useRef(null);
  const hasVideo = Boolean(exp.videoSrc);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, margin: "-60px" }}
      className="mb-16"
    >
      {/* Laptop preview */}
      <div
        className="relative w-full mx-auto mb-8"
        style={{ maxWidth: 400, filter: "drop-shadow(0 16px 36px rgba(0,0,0,0.4))" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/laptoptrans.png"
          alt="Laptop"
          draggable={false}
          className="relative w-full h-auto object-contain pointer-events-none select-none"
          style={{ zIndex: 1 }}
        />
        <div
          className="absolute overflow-hidden"
          style={{
            top: SCREEN.top,
            left: SCREEN.left,
            right: SCREEN.right,
            bottom: SCREEN.bottom,
            borderRadius: SCREEN.radius,
            zIndex: 2,
          }}
        >
          {hasVideo ? (
            <video
              ref={videoRef}
              src={exp.videoSrc}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
            />
          ) : (
            <VideoFallback exp={exp} />
          )}
        </div>
      </div>

      {/* Details */}
      <div className="space-y-4">
        <span
          className="inline-flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-full font-Outfit font-medium"
          style={{
            background: `${exp.accent}18`,
            color: exp.accent,
            border: `1px solid ${exp.accent}35`,
          }}
        >
          {exp.isCurrent && (
            <motion.span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: exp.accent }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            />
          )}
          {exp.isCurrent ? "Current" : "Past"} · {exp.employmentType}
        </span>

        <div>
          <h3 className="text-3xl font-Ovo text-gray-900 dark:text-white">{exp.company}</h3>
          <p
            className="text-base font-Outfit font-semibold mt-1"
            style={{ color: exp.accent }}
          >
            {exp.role}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-Outfit mt-1">
            {exp.duration} · {exp.location}
          </p>
        </div>

        <p className="text-sm leading-7 text-gray-600 dark:text-gray-300 font-Outfit">
          {exp.description}
        </p>

        <ul className="space-y-2">
          {exp.responsibilities.map((r, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300 font-Outfit leading-6"
            >
              <span
                className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: exp.accent }}
              />
              {r}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-3 py-1 rounded-full font-Outfit font-medium
                         text-gray-600 dark:text-gray-300
                         bg-gray-100 dark:bg-white/5
                         border border-gray-200 dark:border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {!isLast && <div className="mt-14 h-px bg-gray-200 dark:bg-white/10" />}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const Experience = ({ isDarkMode }) => {
  const lightGrid = `linear-gradient(rgba(185,155,100,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(185,155,100,0.28) 1px, transparent 1px)`;
  const darkGrid  = `linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)`;
  const [activeIndex, setActiveIndex] = useState(0);
  const desktopRef = useRef(null);

  // Scroll-driven active index — passive listener, cleaned up on unmount
  useEffect(() => {
    const onScroll = () => {
      const el = desktopRef.current;
      if (!el) return;
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const scrolled = Math.max(0, -el.getBoundingClientRect().top);
      const progress = Math.min(1, scrolled / scrollable);
      const next = Math.min(
        Math.floor(progress * EXPERIENCES.length),
        EXPERIENCES.length - 1
      );
      setActiveIndex((prev) => (prev === next ? prev : next));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initialise on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = EXPERIENCES[activeIndex];

  return (
    <section
      id="experience"
      className="relative scroll-mt-20"
      style={{
        backgroundColor: isDarkMode ? "#000000" : "#faf8f3",
        backgroundImage: isDarkMode ? darkGrid : lightGrid,
        backgroundSize: "40px 40px",
      }}
    >
      {/* ══════════════════════════════════════════════════════
          MOBILE LAYOUT  (visible below lg breakpoint)
      ══════════════════════════════════════════════════════ */}
      <div className="lg:hidden px-[8%] py-24">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-Ovo tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-3">
            Professional Journey
          </p>
          <h2 className="text-5xl font-Ovo text-gray-900 dark:text-white mb-6">
            Experience
          </h2>
          <p className="max-w-xl mx-auto text-base font-Outfit text-gray-600 dark:text-gray-300 leading-7">
            Internship experiences across Generative AI, computer vision, and full-stack engineering.
          </p>
        </div>

        {EXPERIENCES.map((exp, i) => (
          <MobileCard key={exp.id} exp={exp} isLast={i === EXPERIENCES.length - 1} />
        ))}
      </div>

      {/* ══════════════════════════════════════════════════════
          DESKTOP SCROLL-DRIVEN LAYOUT  (visible lg+)
          This div is tall so there is scroll space to trigger each experience.
      ══════════════════════════════════════════════════════ */}
      <div
        ref={desktopRef}
        className="hidden lg:block"
        style={{ height: `${EXPERIENCES.length * 60}vh` }}
        aria-label="Experience timeline"
      >
        {/* Sticky panel — stays fixed to viewport while outer div scrolls */}
        <div className="sticky top-0 h-screen overflow-hidden flex">

          {/* Ambient background orbs driven by active accent */}
          <motion.div
            key={`orb-tl-${activeIndex}`}
            className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.07, scale: [1, 1.15, 1] }}
            transition={{ opacity: { duration: 0.6 }, scale: { duration: 7, repeat: Infinity } }}
            style={{ background: active.accent }}
          />
          <motion.div
            key={`orb-br-${activeIndex}`}
            className="absolute bottom-0 right-0 w-56 h-56 rounded-full blur-3xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05, scale: [1, 1.2, 1] }}
            transition={{ opacity: { duration: 0.6 }, scale: { duration: 9, repeat: Infinity } }}
            style={{ background: active.accent }}
          />

          {/* ── LEFT PANEL (42%) ── */}
          <div className="w-[42%] flex flex-col justify-center px-10 xl:px-14 py-10 relative z-10">

            {/* Animated company details */}
            <AnimatePresence mode="wait">
              <ExperienceDetails key={activeIndex} exp={active} />
            </AnimatePresence>

            {/* Company tabs navigation */}
            <CompanyTabs activeIndex={activeIndex} sectionRef={desktopRef} />
          </div>

          {/* Vertical rule */}
          <div
            className="w-px self-stretch my-16 shrink-0"
            style={{
              background: `linear-gradient(to bottom, transparent, ${active.accent}20, transparent)`,
            }}
          />

          {/* ── RIGHT PANEL (58%) ── */}
          <div className="w-[58%] flex items-center justify-center px-4 xl:px-8 py-10 relative z-10">

            {/* Section heading — bottom center of right panel */}
            <div className="absolute bottom-10 left-0 right-0 text-center pointer-events-none">
              <p className="text-[11px] font-Outfit uppercase tracking-[0.28em] text-gray-400 dark:text-gray-500 mb-1">
                Professional Journey
              </p>
              <h2 className="text-4xl xl:text-5xl font-Ovo text-gray-900 dark:text-white leading-tight">
                Experience
              </h2>
            </div>

            <div
              className="relative w-full"
              style={{
                maxWidth: 760,
                filter: "drop-shadow(0 30px 70px rgba(0,0,0,0.5))",
              }}
            >
              {/* Accent glow — transitions on accent change */}
              <motion.div
                key={`glow-${activeIndex}`}
                className="absolute left-1/2 -translate-x-1/2 blur-3xl rounded-full pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.08 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ width: "70%", height: "30%", bottom: "2%", background: active.accent }}
              />

              {/* Static laptop frame — never re-mounts */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/laptoptrans.png"
                alt="Laptop mockup"
                draggable={false}
                className="relative w-full h-auto object-contain select-none pointer-events-none"
                style={{ zIndex: 1 }}
              />

              {/* Only the screen content fades in/out on scroll */}
              <div
                className="absolute overflow-hidden"
                style={{
                  top: SCREEN.top,
                  left: SCREEN.left,
                  right: SCREEN.right,
                  bottom: SCREEN.bottom,
                  borderRadius: SCREEN.radius,
                  zIndex: 2,
                }}
              >
                <AnimatePresence mode="wait">
                  <ScreenContent key={activeIndex} exp={active} />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
