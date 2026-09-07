"use client";
import { assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

const STATS = [
  { num: "4+",   label: "Internships" },
  { num: "10+",  label: "Projects"    },
  { num: "8.43", label: "CGPA"        },
  { num: "2026", label: "Graduating"  },
];

const TOOLS = [
  { src: assets.vscode,     name: "VS Code"    },
  { src: assets.git,        name: "Git"        },
  { src: assets.gitHub,     name: "GitHub"     },
  { src: assets.reactlogo,  name: "React"      },
  { src: assets.nodejs,     name: "Node.js"    },
  { src: assets.mongodb,    name: "MongoDB"    },
  { src: assets.postgresql, name: "PostgreSQL" },
  { src: assets.nextjs1,    name: "Next.js"    },
  { src: assets.figma,      name: "Figma"      },
  { src: assets.postman,    name: "Postman"    },
  { src: assets.vercel,     name: "Vercel"     },
  { src: assets.render,     name: "Render"     },
];

const About = ({ isDarkMode }) => {
  const lightGrid = `linear-gradient(rgba(185,155,100,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(185,155,100,0.28) 1px, transparent 1px)`;
  const darkGrid  = `linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)`;
  return (
    <section
      id="about"
      className="relative min-h-screen w-full scroll-mt-20 overflow-hidden flex items-center"
      style={{
        backgroundColor: isDarkMode ? "#000000" : "#faf8f3",
        backgroundImage: isDarkMode ? darkGrid : lightGrid,
        backgroundSize: "40px 40px",
      }}
    >

      <div className="w-full px-[8%] py-16">

        {/* ── Section label + title ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col lg:flex-row gap-14 items-center"
        >
          {/* Left — matches photo column width */}
          <div className="lg:w-[30%] shrink-0">
            <p className="font-Outfit text-[10px] font-light tracking-[0.4em] uppercase
                          text-gray-400 dark:text-gray-500 mb-2">
              02 &middot; About Me
            </p>
            <h2
              className="font-Outfit font-black uppercase leading-[0.88] tracking-tight whitespace-nowrap
                         text-gray-900 dark:text-white"
              style={{ fontSize: "clamp(28px,4.5vw,60px)" }}
            >
              MEET{" "}
              <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-orange-400
                               bg-clip-text text-transparent">
                VIPUL
              </span>
              <span className="text-orange-500">.</span>
            </h2>
          </div>

          {/* Education card — aligns with bio column */}
          <div className="flex-1 rounded-2xl px-5 py-3 flex items-center gap-4
                          border border-gray-100 dark:border-white/[0.07]
                          bg-gray-50/60 dark:bg-white/[0.03]">
            <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl
                            bg-orange-500/10 border border-orange-500/20">
              🎓
            </div>
            <div>
              <p className="font-Outfit font-bold text-[13.5px] text-gray-900 dark:text-white leading-tight">
                B.Tech in Computer Science &amp; Engineering
              </p>
              <p className="font-Outfit text-[12px] text-orange-700 dark:text-orange-500 font-medium mt-0.5">
                VIT Vellore &nbsp;·&nbsp; 2022 – 2026
              </p>
              <p className="font-Outfit text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
                Specialisation: AI &amp; ML &nbsp;·&nbsp; CGPA 8.43 / 10
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="flex flex-col lg:flex-row gap-14 items-start">

          {/* LEFT: photo + stats */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-[30%] shrink-0 flex flex-col gap-4"
          >
            {/* photo card */}
            <div className="relative rounded-2xl overflow-hidden w-full max-w-[260px]
                            shadow-2xl shadow-black/10 dark:shadow-black/40">
              <Image
                src={assets.user_image}
                alt="Vipul Kumar"
                width={260} height={310}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 px-4 py-3
                              bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <p className="font-Outfit font-bold text-white text-[14px] leading-tight">Vipul Kumar</p>
                <p className="font-Outfit text-white/50 text-[10px]">Full Stack · AI Developer</p>
              </div>
              <div className="absolute top-3 left-3 flex items-center gap-1.5
                              bg-black/40 backdrop-blur-md border border-white/20
                              text-white text-[9px] font-Outfit font-medium
                              px-2 py-0.5 rounded-full">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-orange-500"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
                Available for work
              </div>
            </div>

            {/* stats */}
            <div className="grid grid-cols-4 gap-1.5 w-full max-w-[260px]">
              {STATS.map(({ num, label }) => (
                <div key={label}
                  className="text-center py-2.5 rounded-xl
                             border border-gray-100 dark:border-white/[0.07]
                             bg-gray-50/60 dark:bg-white/[0.03]">
                  <p className="font-Outfit font-black text-[15px] text-gray-900 dark:text-white leading-none">
                    {num}
                  </p>
                  <p className="font-Outfit text-[7.5px] text-gray-400 dark:text-gray-500 mt-0.5 leading-tight">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: bio + pills + tools */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-1 flex flex-col gap-7"
          >
            {/* bio */}
            <div className="space-y-3.5">
              <p className="font-Outfit text-[14.5px] text-gray-600 dark:text-gray-400 leading-[1.8]">
                I&apos;m a{" "}
                <span className="font-semibold text-gray-900 dark:text-white">4th-year B.Tech CSE</span>{" "}
                student at{" "}
                <span className="font-semibold text-orange-700 dark:text-orange-500">VIT Vellore</span>{" "}
                with a CGPA of <span className="font-semibold text-gray-900 dark:text-white">8.43</span>, passionate about building practical, scalable, and intelligent tech solutions that solve real problems.
              </p>
              <p className="font-Outfit text-[14.5px] text-gray-600 dark:text-gray-400 leading-[1.8]">
                Currently working as an{" "}
                <span className="font-semibold text-gray-900 dark:text-white">ML Intern @ MarkMyAd</span>{" "}
                building GenAI pipelines and computer vision systems. I&apos;ve also interned at{" "}
                <span className="font-semibold text-gray-900 dark:text-white">KreditBee</span> (Backend),{" "}
                <span className="font-semibold text-gray-900 dark:text-white">Jurident</span> (AI Legal Tech), and{" "}
                <span className="font-semibold text-gray-900 dark:text-white">Valsco Tech</span> (Full Stack) — gaining hands-on experience across the full product lifecycle.
              </p>
              <p className="font-Outfit text-[14.5px] text-gray-600 dark:text-gray-400 leading-[1.8]">
                My core interests lie in{" "}
                <span className="font-semibold text-orange-700 dark:text-orange-500">computer vision, LLMs, and generative AI</span>{" "}
                — I enjoy taking an idea from whiteboard to production. From YOLO-based crop disease detection to RAG-powered legal assistants, I focus on building systems that are not just functional but genuinely useful.
              </p>
              <p className="font-Outfit text-[14.5px] text-gray-600 dark:text-gray-400 leading-[1.8]">
                Beyond code, I actively participate in{" "}
                <span className="font-semibold text-gray-900 dark:text-white">hackathons</span>,
                contribute to open-source, and stay up to date with the latest in AI research. I&apos;m graduating in <span className="font-semibold text-gray-900 dark:text-white">2026</span> and actively looking for full-time opportunities in software engineering and AI.
              </p>
            </div>

            {/* skill pills */}
            <div className="flex flex-wrap gap-2">
              {[
                "Full-Stack Dev", "Computer Vision", "Generative AI",
                "LLM / RAG Systems", "Backend Engineering", "REST APIs",
                "Open Source",
              ].map((label) => (
                <span key={label}
                  className="px-3.5 py-1 rounded-full text-[11px] font-Outfit font-medium border
                             bg-gray-100 border-gray-200 text-gray-600
                             dark:bg-white/[0.05] dark:border-white/[0.09] dark:text-white/55">
                  {label}
                </span>
              ))}
            </div>

            {/* Beyond code
            <div className="rounded-2xl px-5 py-4 space-y-3
                            border border-gray-100 dark:border-white/[0.07]
                            bg-gray-50/60 dark:bg-white/[0.03]">
              <p className="font-Outfit text-[10px] font-semibold uppercase tracking-[0.35em] text-gray-400 dark:text-gray-500">
                Beyond the Code
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: "🏆", text: "Hackathon Enthusiast" },
                  { icon: "📖", text: "AI Research Reader" },
                  { icon: "🌐", text: "Open Source Contributor" },
                  { icon: "🎯", text: "Problem Solver" },
                  { icon: "🚀", text: "Startup Minded" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5
                                             text-[12px] font-Outfit text-gray-600 dark:text-gray-400">
                    <span>{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div> */}

            {/* divider */}
            <div className="flex items-center gap-3">
              <div className="h-px w-6 bg-orange-500/50" />
              <p className="font-Outfit text-[10px] font-semibold uppercase tracking-[0.38em]
                             text-gray-400 dark:text-gray-500">
                Tools &amp; Technologies
              </p>
              <div className="h-px flex-1 bg-gradient-to-r from-orange-500/20 to-transparent" />
            </div>

            {/* tools */}
            <div className="flex flex-wrap gap-2.5">
              {TOOLS.map(({ src, name }) => (
                <motion.div
                  key={name}
                  whileHover={{ y: -4, scale: 1.08 }}
                  transition={{ duration: 0.16 }}
                  className="flex flex-col items-center gap-1 cursor-default group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center
                                  border border-gray-100 dark:border-white/[0.08]
                                  bg-white dark:bg-white/[0.04]
                                  shadow-sm
                                  group-hover:border-orange-500/40
                                  group-hover:shadow-orange-600/15 group-hover:shadow-md
                                  transition-all duration-200">
                    <Image src={src} alt={name} width={28} height={28}
                      className="w-[28px] h-[28px] object-contain" />
                  </div>
                  <span className="font-Outfit text-[8.5px] text-gray-400 dark:text-gray-500
                                   group-hover:text-orange-700 dark:group-hover:text-orange-500
                                   transition-colors duration-200">
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
