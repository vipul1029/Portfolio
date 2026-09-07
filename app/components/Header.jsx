"use client";

import { assets } from '@/assets/assets';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  SiNodedotjs, SiFastapi, SiOpencv, SiDocker,
  SiMongodb, SiPostgresql, SiGit, SiPython,
  SiReact, SiNextdotjs, SiGooglegemini, SiLangchain, SiYolo,
} from "react-icons/si";

/* ── Scramble text effect ── */
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function ScrambleWord({ words, cycleMs = 3800, scrambleDuration = 550, delay = 0, className }) {
  const [text, setText] = useState(words[0]);
  const idxRef = useRef(0);

  useEffect(() => {
    const scrambleTo = (target) => {
      const steps = 14;
      let step = 0;
      const tick = () => {
        step++;
        const progress = step / steps;
        setText(
          target.split('').map((ch, i) => {
            if (ch === ' ' || ch === '.' || ch === '-') return ch;
            if (i / target.length < progress) return ch;
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          }).join('')
        );
        if (step < steps) setTimeout(tick, scrambleDuration / steps);
        else setText(target);
      };
      tick();
    };

    const start = setTimeout(() => {
      const id = setInterval(() => {
        idxRef.current = (idxRef.current + 1) % words.length;
        scrambleTo(words[idxRef.current]);
      }, cycleMs);
      return () => clearInterval(id);
    }, delay);

    return () => clearTimeout(start);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span className={className}>{text}</span>;
}

const TECH_ITEMS = [
  { name: "Python",      Icon: SiPython,       lightColor: "text-blue-500",    darkColor: "dark:text-blue-400"    },
  { name: "React",       Icon: SiReact,        lightColor: "text-cyan-500",    darkColor: "dark:text-cyan-400"    },
  { name: "Next.js",     Icon: SiNextdotjs,    lightColor: "text-gray-700",    darkColor: "dark:text-white/70"    },
  { name: "Node.js",     Icon: SiNodedotjs,    lightColor: "text-orange-700", darkColor: "dark:text-orange-500" },
  { name: "FastAPI",     Icon: SiFastapi,      lightColor: "text-teal-600",    darkColor: "dark:text-teal-400"    },
  { name: "OpenCV",      Icon: SiOpencv,       lightColor: "text-orange-600",  darkColor: "dark:text-orange-500"  },
  { name: "YOLO",        Icon: SiYolo,         lightColor: "text-orange-600",  darkColor: "dark:text-orange-400"  },
  { name: "Docker",      Icon: SiDocker,       lightColor: "text-sky-500",     darkColor: "dark:text-sky-400"     },
  { name: "MongoDB",     Icon: SiMongodb,      lightColor: "text-orange-700", darkColor: "dark:text-orange-500" },
  { name: "PostgreSQL",  Icon: SiPostgresql,   lightColor: "text-indigo-500",  darkColor: "dark:text-indigo-400"  },
  { name: "Gemini API",  Icon: SiGooglegemini, lightColor: "text-purple-500",  darkColor: "dark:text-purple-400"  },
  { name: "LangChain",   Icon: SiLangchain,    lightColor: "text-yellow-600",  darkColor: "dark:text-yellow-400"  },
  { name: "Git",         Icon: SiGit,          lightColor: "text-red-500",     darkColor: "dark:text-red-400"     },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

/* ─────────────────────────────────────────────
   SCREEN 1 — Profile / Home
───────────────────────────────────────────── */
function HomeScreen() {
  return (
    <div className="relative p-4 flex flex-col gap-3 min-h-full overflow-hidden">
      {/* single subtle glow */}
      <div className="absolute -top-8 -right-8 w-36 h-36 bg-orange-600/12 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div>
        <p className="text-[8px] font-bold tracking-[0.32em] uppercase text-orange-500/85 mb-0.5">Portfolio</p>
        <h1 className="text-[18px] font-black text-white leading-tight">Vipul Kumar</h1>
        <p className="text-[10px] text-white/45">Full Stack &amp; AI Developer</p>
      </div>

      {/* Profile card */}
      <div className="relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.07] p-3">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
        <div className="flex items-center gap-3">
          {/* Avatar with spinning ring */}
          <div className="relative shrink-0 w-[52px] h-[52px]">
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{ width: "160%", height: "160%", background: "conic-gradient(from 0deg,#ea580c,#fbbf24,#ea580c,#fbbf24)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-[2px] rounded-[10px] bg-[#080810]" />
            </div>
            <div className="absolute inset-[2px] rounded-[10px] overflow-hidden">
              <Image src={assets.profile_img} alt="Vipul" width={52} height={52} className="w-full h-full object-cover" />
            </div>
            <motion.span
              className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-orange-600 ring-2 ring-[#080810]"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2.2, repeat: Infinity }}
            />
          </div>
          <div>
            <p className="text-[12px] font-bold text-white">Vipul Kumar</p>
            <p className="text-[9px] text-orange-500 font-semibold">● Available for work</p>
            <p className="text-[8px] text-white/45 mt-0.5">VIT Vellore · B.Tech CSE</p>
            <p className="text-[8px] text-white/50">8.43 CGPA</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { n: "4+",   l: "Internships" },
          { n: "10+",  l: "Projects"    },
          { n: "8.43", l: "GPA / 10"   },
        ].map(({ n, l }) => (
          <div key={l} className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-2 text-center">
            <p className="text-[15px] font-black text-white leading-none">{n}</p>
            <p className="text-[7px] text-white/40 mt-0.5">{l}</p>
          </div>
        ))}
      </div>

      {/* Roles */}
      <div className="flex flex-wrap gap-1.5">
        {["Full Stack", "AI / ML", "GenAI", "Computer Vision"].map((r) => (
          <span key={r} className="text-[8px] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.07] text-white/40">{r}</span>
        ))}
      </div>

      {/* Active role */}
      <div className="rounded-xl bg-orange-600/[0.08] border border-orange-600/[0.15] px-3 py-2 flex items-center gap-2">
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
        <div>
          <p className="text-[10px] font-bold text-orange-400">ML Intern @ MarkMyAd</p>
          <p className="text-[8px] text-white/40">GenAI · Computer Vision · 2025</p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SCREEN 2 — Projects
───────────────────────────────────────────── */
function ProjectsScreen() {
  const projects = [
    { name: "AgriInspect", emoji: "🌿", desc: "YOLO crop disease detection",  tech: ["YOLO", "FastAPI", "React"]     },
    { name: "CodeWay",     emoji: "◈",  desc: "AI-powered coding platform",   tech: ["Next.js", "GenAI", "Node"]     },
    { name: "Jurident",    emoji: "⚖️", desc: "Legal document AI assistant",  tech: ["LangChain", "RAG", "FastAPI"]  },
    { name: "KisanBot",    emoji: "◉",  desc: "Multilingual agri chatbot",    tech: ["Gemini API", "Python"]         },
  ];

  return (
    <div className="p-4">
      <div className="mb-4">
        <p className="text-[8px] font-bold tracking-[0.32em] uppercase text-orange-500/85 mb-0.5">Portfolio</p>
        <h2 className="text-[18px] font-black text-white leading-tight">My Work</h2>
        <p className="text-[9px] text-white/40">10+ projects · AI &amp; Web</p>
      </div>

      <div className="space-y-2.5">
        {projects.map(({ name, emoji, desc, tech }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="relative rounded-2xl bg-white/[0.03] border border-white/[0.06] p-3 overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-orange-600/50" />
            <div className="pl-2">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[13px]">{emoji}</span>
                <p className="text-[11px] font-bold text-white">{name}</p>
                <span className="ml-auto text-[8px] text-orange-500/60 font-semibold">View →</span>
              </div>
              <p className="text-[8.5px] text-white/40 mb-1.5 leading-snug">{desc}</p>
              <div className="flex flex-wrap gap-1">
                {tech.map((t) => (
                  <span key={t} className="text-[7.5px] font-medium px-1.5 py-0.5 rounded-full bg-white/[0.05] text-white/40 border border-white/[0.07]">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SCREEN 3 — Skills
───────────────────────────────────────────── */
function SkillsScreen() {
  const cats = [
    { label: "AI / ML",   skills: ["Python", "YOLO", "OpenCV", "LangChain", "Gemini"] },
    { label: "Frontend",  skills: ["React", "Next.js", "Tailwind", "Framer"]           },
    { label: "Backend",   skills: ["Node.js", "FastAPI", "MongoDB", "PostgreSQL"]      },
    { label: "DevOps",    skills: ["Docker", "Git", "Linux", "AWS"]                    },
  ];

  return (
    <div className="p-4 relative">
      <div className="absolute top-0 right-0 w-28 h-28 bg-orange-600/[0.07] rounded-full blur-3xl pointer-events-none" />

      <div className="mb-4">
        <p className="text-[8px] font-bold tracking-[0.32em] uppercase text-orange-500/85 mb-0.5">Arsenal</p>
        <h2 className="text-[18px] font-black text-white leading-tight">Tech Stack</h2>
        <p className="text-[9px] text-white/40">Tools I build with</p>
      </div>

      <div className="space-y-3.5">
        {cats.map(({ label, skills }, ci) => (
          <div key={label}>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-px flex-1 bg-white/[0.06]" />
              <p className="text-[8px] font-semibold text-white/50 uppercase tracking-[0.22em]">{label}</p>
              <div className="h-px flex-1 bg-white/[0.06]" />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((s, si) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: ci * 0.1 + si * 0.04 }}
                  className="text-[9px] font-medium px-2.5 py-1 rounded-full bg-white/[0.04] text-white/50 border border-white/[0.07]"
                >{s}</motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SCREEN 4 — Experience
───────────────────────────────────────────── */
function ExperienceScreen() {
  const exp = [
    { co: "MarkMyAd",    role: "ML Intern",         period: "2025 – Now", active: true,  desc: "GenAI pipelines · Computer Vision" },
    { co: "KreditBee",   role: "GenAI Intern",       period: "2024",      active: false, desc: "LLM fine-tuning · RAG systems"     },
    { co: "Jurident",    role: "Full Stack Intern",  period: "2024",      active: false, desc: "Legal AI · React + FastAPI"         },
    { co: "Valsco Tech", role: "SDE Intern",         period: "2023",      active: false, desc: "Full-stack web development"         },
  ];

  return (
    <div className="p-4 relative">
      <div className="mb-4">
        <p className="text-[8px] font-bold tracking-[0.32em] uppercase text-orange-500/85 mb-0.5">Career</p>
        <h2 className="text-[18px] font-black text-white leading-tight">Experience</h2>
        <p className="text-[9px] text-white/40">4+ internships · 2 years</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-[9px] top-2 bottom-2 w-px bg-white/[0.06]" />
        <div className="space-y-3">
          {exp.map(({ co, role, period, active, desc }, i) => (
            <motion.div
              key={co}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.09 }}
              className="flex gap-3"
            >
              {/* dot */}
              <div className="relative shrink-0 mt-2">
                <div className="w-[18px] h-[18px] rounded-full bg-orange-600/20 border border-orange-500/30 flex items-center justify-center z-10">
                  <div className="w-[6px] h-[6px] rounded-full bg-orange-500" />
                </div>
                {active && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-orange-600/30"
                    animate={{ scale: [1, 2.5, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                )}
              </div>
              {/* card */}
              <div className="flex-1 rounded-xl bg-white/[0.03] border border-white/[0.06] p-2.5">
                <div className="flex items-start justify-between gap-1">
                  <div>
                    <p className="text-[11px] font-bold text-white leading-tight">{co}</p>
                    <p className="text-[9px] font-medium text-orange-400/85">{role}</p>
                  </div>
                  <div className="flex flex-col items-end gap-0.5 shrink-0">
                    <span className="text-[7px] text-white/50">{period}</span>
                    {active && (
                      <span className="text-[6.5px] px-1.5 py-0.5 rounded-full bg-orange-600/12 text-orange-500/85 border border-orange-500/30 font-semibold">LIVE</span>
                    )}
                  </div>
                </div>
                <p className="text-[8px] text-white/40 mt-1 leading-snug">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PhoneScreen — auto-cycles all 4
───────────────────────────────────────────── */
const SCREENS = [
  { id: "home",       label: "Home",    icon: "⊞", component: HomeScreen },
  { id: "projects",  label: "Work",    icon: "◈", component: ProjectsScreen },
  { id: "skills",    label: "Skills",  icon: "◉", component: SkillsScreen },
  { id: "exp",       label: "Journey", icon: "○", component: ExperienceScreen },
];

function PhoneScreen() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const scrollRef = useRef(null);
  const rafRef = useRef(null);
  const timerRef = useRef(null);

  const advance = () => {
    setDir(1);
    setActive((s) => (s + 1) % SCREENS.length);
  };

  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    clearTimeout(timerRef.current);

    // With mode="wait" AnimatePresence the old screen exits for 420ms before the
    // new one mounts, so we must re-read scrollRef.current AFTER that delay.
    const ENTER_MS  = 460;   // just past the 420ms slide-in animation
    const PAUSE_MS  = 700;   // hold at top so user reads before scrolling
    const SCROLL_MS = 2600;  // duration to scroll to bottom
    const HOLD_MS   = 650;   // hold at bottom before switching page

    timerRef.current = setTimeout(() => {
      const el = scrollRef.current;   // now correctly points to the new screen
      if (!el) return;
      el.scrollTop = 0;

      requestAnimationFrame(() => {
        const maxScroll = el.scrollHeight - el.clientHeight;

        if (maxScroll < 4) {
          timerRef.current = setTimeout(advance, PAUSE_MS + HOLD_MS);
          return;
        }

        // Pause at top, then scroll down
        timerRef.current = setTimeout(() => {
          let startTime = null;
          const tick = (ts) => {
            if (!startTime) startTime = ts;
            const t = Math.min((ts - startTime) / SCROLL_MS, 1);
            const eased = t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2;
            el.scrollTop = eased * maxScroll;
            if (t < 1) {
              rafRef.current = requestAnimationFrame(tick);
            } else {
              timerRef.current = setTimeout(advance, HOLD_MS);
            }
          };
          rafRef.current = requestAnimationFrame(tick);
        }, PAUSE_MS);
      });
    }, ENTER_MS);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const goTo = (i) => {
    cancelAnimationFrame(rafRef.current);
    clearTimeout(timerRef.current);
    setDir(i > active ? 1 : -1);
    setActive(i);
  };

  const ActiveScreen = SCREENS[active].component;

  return (
    <div className="w-full h-full bg-[#080810] flex flex-col overflow-hidden font-Outfit">

      {/* Status bar */}
      <div className="flex justify-between items-center px-4 pt-2.5 pb-0 text-[8px] text-white/50 shrink-0">
        <span className="font-semibold">9:41</span>
        <div className="flex gap-1.5 items-center">
          <span className="tracking-tight">●●●</span>
          <span>WiFi</span>
          <span>100%</span>
        </div>
      </div>

      {/* Slide area */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence custom={dir} initial={false} mode="wait">
          <motion.div
            key={active}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.42, ease: [0.25, 0.46, 0.45, 0.94] }}
            ref={(el) => { if (el) scrollRef.current = el; }}
            className="phone-scroll absolute inset-0 overflow-y-scroll overflow-x-hidden"
          >
            <ActiveScreen />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="shrink-0 flex justify-center gap-1.5 pb-1 pt-0.5">
        {SCREENS.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => goTo(i)}
            animate={{ width: i === active ? 16 : 5, opacity: i === active ? 1 : 0.3 }}
            transition={{ duration: 0.3 }}
            className={`h-1 rounded-full ${i === active ? "bg-orange-500" : "bg-white/40"}`}
          />
        ))}
      </div>

      {/* Bottom nav */}
      <div className="shrink-0 border-t border-white/[0.06] px-5 py-1.5 flex justify-around items-center">
        {SCREENS.map(({ label, icon }, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`flex flex-col items-center gap-0.5 transition-all duration-200 ${i === active ? "text-orange-500 scale-110" : "text-white/50"}`}
          >
            <span className="text-[13px]">{icon}</span>
            <span className="text-[6.5px] font-medium">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Phone frame with 3D tilt
───────────────────────────────────────────── */
function PhoneMockupRight() {
  const cardRef = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 120, damping: 18 });
  const springY = useSpring(rawY, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  const onMouseMove = (e) => {
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    rawX.set((e.clientX - left) / width - 0.5);
    rawY.set((e.clientY - top) / height - 0.5);
  };
  const onMouseLeave = () => { rawX.set(0); rawY.set(0); };

  return (
    <div style={{ perspective: "1000px" }} className="w-full">
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="relative w-full cursor-default"
      >
        {/* Screen content */}
        <div
          className="absolute overflow-hidden"
          style={{
            top: "calc(2.1% )",
            left: "4.8%",
            right: "4.8%",
            bottom: "1.9%",
            borderRadius: "5%",
            zIndex: 10,
          }}
        >
          <PhoneScreen />
        </div>

        {/* Phone frame */}
        <Image
          src="/codewayphone.png"
          alt="Phone"
          width={1120}
          height={2280}
          className="relative w-full h-auto pointer-events-none"
          style={{ zIndex: 20 }}
          priority
        />
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Header
───────────────────────────────────────────── */
const Header = ({ isDarkMode }) => {
  const lightGrid = `linear-gradient(rgba(185,155,100,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(185,155,100,0.28) 1px, transparent 1px)`;
  const darkGrid  = `linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)`;
  return (
    <div
      className="relative min-h-screen w-full flex flex-col overflow-hidden"
      style={{
        backgroundColor: isDarkMode ? "#000000" : "#faf8f3",
        backgroundImage: isDarkMode ? darkGrid : lightGrid,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full dark:bg-orange-600/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full dark:bg-cyan-500/6 blur-[100px] pointer-events-none" />

      {/* Main */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center px-[8%] pt-24 pb-4 gap-8 lg:gap-12">

        {/* Left: text */}
        <motion.div
          className="flex flex-col items-start w-full lg:w-[62%]"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Badge + greeting on same row */}
          <motion.div variants={fadeUp} className="flex items-center gap-5 mb-4 flex-wrap">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full
                             border border-orange-500/40 bg-orange-50 dark:bg-orange-600/12
                             text-orange-800 dark:text-orange-500 text-[12px] font-Outfit font-medium shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
              Open to Opportunities &middot; ML Intern @ MarkMyAd
            </span>

            {/* Hi! I Am + arrow + photo */}
            <div className="flex items-center gap-2">
              <div className="leading-tight">
                <p className="font-Outfit font-light text-gray-400 dark:text-gray-500 text-[13px]">Hi! I Am</p>
                <h2 className="font-Outfit font-black text-orange-600 dark:text-orange-500 text-[26px] leading-none">
                  Vipul Kumar.
                </h2>
              </div>

              {/* dashed arrow */}
              <svg width="80" height="48" viewBox="0 0 80 48" fill="none"
                   className="text-orange-600 dark:text-orange-500 shrink-0">
                <path d="M 4 42 C 18 42 30 6 68 16"
                  stroke="currentColor" strokeWidth="1.6"
                  strokeDasharray="5 3.5" strokeLinecap="round" />
                <path d="M 61 9 L 70 16 L 62 22"
                  stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* circular photo with green ring */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5, ease: "backOut" }}
                className="relative shrink-0 w-[84px] h-[84px] flex items-center justify-center"
              >
                {/* outer pulsing glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-orange-500/30"
                  animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.05, 0.4] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* solid green circle */}
                <div className="absolute inset-[4px] rounded-full border-[2.5px] border-orange-600 pointer-events-none" />
                {/* photo */}
                <div className="w-[66px] h-[66px] rounded-full overflow-hidden shadow-lg shadow-orange-600/20">
                  <Image
                    src={assets.profile_img}
                    alt="Vipul Kumar"
                    width={66}
                    height={66}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-Outfit font-light text-[10px] tracking-[0.38em] uppercase text-gray-400 dark:text-gray-500 mb-3"
          >
            01 &middot; Full-Stack &amp; AI Engineer
          </motion.p>

          <motion.div variants={fadeUp} className="leading-none">
            <h1 className="font-Outfit font-black uppercase leading-[0.88] tracking-tight">
              <ScrambleWord
                words={['BUILDING', 'CRAFTING', 'SHIPPING', 'DESIGNING']}
                delay={0}
                className="block text-[clamp(42px,7.5vw,108px)] text-gray-900 dark:text-white"
              />
              <ScrambleWord
                words={['SCALABLE', 'POWERFUL', 'CREATIVE', 'ADVANCED']}
                delay={200}
                className="block text-[clamp(42px,7.5vw,108px)] bg-gradient-to-r from-orange-500 via-amber-400 to-orange-400 bg-clip-text text-transparent"
              />
              <span className="block text-[clamp(42px,7.5vw,108px)] text-gray-900 dark:text-white">
                <ScrambleWord
                  words={['SYSTEMS', 'FUTURES', 'PRODUCTS', 'VISIONS']}
                  delay={400}
                />
                <span className="text-orange-500">.</span>
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-md text-[14px] font-Outfit text-gray-500 dark:text-gray-400 leading-6"
          >
            B.Tech CSE at VIT Vellore &mdash; building full-stack applications,
            computer vision pipelines, and generative AI systems.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-3">
            <a href="#contact"
               className="px-7 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900
                          font-Outfit font-semibold text-[14px] hover:scale-[1.03] active:scale-[0.98]
                          hover:bg-orange-600 dark:hover:bg-orange-500
                          transition-all duration-300 flex items-center gap-2 shadow-lg">
              Contact Me
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/Vipul_VIT_Resume.pdf" download
               className="px-7 py-3 rounded-full border border-gray-300 dark:border-white/20
                          text-gray-700 dark:text-white font-Outfit font-medium text-[14px]
                          hover:bg-gray-100 dark:hover:bg-white/5 active:scale-[0.98]
                          transition-all duration-300 flex items-center gap-2">
              Resume
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Right: phone */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="hidden lg:flex items-center justify-center w-[35%] max-w-[270px] shrink-0"
        >
          <PhoneMockupRight />
        </motion.div>

      </div>

      {/* Tech marquee */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="w-full pb-6"
      >
        {/* label row */}
        <div className="flex items-center gap-3 px-[8%] mb-3">
          <div className="h-px w-8 bg-orange-500/50" />
          <p className="text-[10px] font-Outfit font-semibold uppercase tracking-[0.38em] text-gray-400 dark:text-gray-500">
            Tech Stack
          </p>
          <div className="h-px flex-1 bg-gradient-to-r from-orange-500/20 to-transparent" />
        </div>

        {/* scrolling track */}
        <div className="relative overflow-hidden
                        border-y dark:border-white/[0.06] py-3"
             style={{ borderColor: "rgba(160,130,90,0.15)", background: "transparent" }}>

          {/* fade edges — match warm cream background */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none
                          dark:hidden"
               style={{ background: "linear-gradient(to right, #faf8f3, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none
                          dark:hidden"
               style={{ background: "linear-gradient(to left, #faf8f3, transparent)" }} />
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none
                          hidden dark:block"
               style={{ background: "linear-gradient(to right, #000000, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none
                          hidden dark:block"
               style={{ background: "linear-gradient(to left, #000000, transparent)" }} />

          <motion.div
            className="flex items-center gap-3"
            style={{ width: "max-content" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          >
            {[...TECH_ITEMS, ...TECH_ITEMS].map((item, i) => (
              <span key={i} className="flex items-center gap-2 shrink-0">
                {/* icon-only pill */}
                <span
                  className={`flex items-center justify-center w-11 h-11 rounded-2xl shadow-md
                              bg-white border border-gray-200 ${item.lightColor}
                              dark:bg-gray-900 dark:border-white/[0.08] ${item.darkColor}`}
                  title={item.name}>
                  <item.Icon size={22} />
                </span>
                {/* separator */}
                <span className="text-gray-300 dark:text-white/10 text-[8px] select-none">✦</span>
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

    </div>
  );
};

export default Header;
