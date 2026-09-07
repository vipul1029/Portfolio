"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { assets } from "@/assets/assets";
import {
  processMessage,
  getInitialContext,
  getInitialSuggestions,
  CHIP_QUERIES,
} from "@/app/lib/chatEngine";

// ─────────────────────────────────────────────
// DESIGN TOKENS — matches portfolio design language
// ─────────────────────────────────────────────

const EM = (a) => `rgba(234,88,12,${a})`;    // orange-600
const CY = (a) => `rgba(251,146,60,${a})`;   // orange-400 warm accent

const G = {
  // Panel
  panel:    { background: "rgba(10,10,10,0.93)", backdropFilter: "blur(32px)", WebkitBackdropFilter: "blur(32px)" },
  border:   `1px solid ${EM(0.2)}`,
  shadow:   `0 8px 48px rgba(0,0,0,0.7), 0 0 0 1px ${EM(0.1)}, inset 0 1px 0 rgba(255,255,255,0.04)`,

  // Surfaces
  msgArea:  { background: "rgba(0,0,0,0.25)" },
  msgBorder:`1px solid rgba(255,255,255,0.04)`,
  bot:      { background: "rgba(255,255,255,0.03)", border: `1px solid ${EM(0.1)}` },
  raised:   { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" },
  raisedSm: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" },
  tag:      { background: EM(0.07), border: `1px solid ${EM(0.18)}` },
  input:    { background: "rgba(255,255,255,0.04)", border: `1px solid ${EM(0.15)}` },
  chip:     { background: EM(0.07), border: `1px solid ${EM(0.2)}` },
  userShadow: `0 4px 20px rgba(0,0,0,0.5)`,

  // Separators
  divider:  "rgba(255,255,255,0.06)",

  // Scrollbar
  scrollbar: `${EM(0.15)} transparent`,
};

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

const LS_MESSAGES = "vipulai_messages";
const LS_CONTEXT  = "vipulai_context";

function uid() { return Math.random().toString(36).slice(2) + Date.now(); }

function parseMarkdown(text) {
  if (!text) return null;
  return text.split(/(\*\*[^*]+\*\*|\n)/g).map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**"))
      return <strong key={i} className="font-semibold text-white">{p.slice(2, -2)}</strong>;
    if (p === "\n") return <br key={i} />;
    return p;
  });
}

function scrollToSection(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const WELCOME_MSG = {
  id: "welcome", role: "bot", type: "welcome",
  content: "Hey! I'm **Vipul AI** — your guide to Vipul's portfolio.\n\nAsk me about his projects, internships, skills, education, hackathons, or anything else.",
  timestamp: Date.now(),
};

// ─────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────

const SparkleIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z"/>
    <path opacity=".4" d="M5 4l.72 2.16L8 7l-2.28.84L5 10l-.72-2.16L2 7l2.28-.84L5 4zM19 17l.72 2.16L22 20l-2.28.84L19 23l-.72-2.16L16 20l2.28-.84L19 17z"/>
  </svg>
);
const SendIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.269 20.876L5.999 12zm0 0h7.5"/>
  </svg>
);
const ResetIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
  </svg>
);
const CloseIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
  </svg>
);
const ExternalIcon = () => (
  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
  </svg>
);

// ─────────────────────────────────────────────
// BOT AVATAR
// ─────────────────────────────────────────────

function BotAvatar() {
  return (
    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shrink-0 mt-1"
      style={{ boxShadow: `0 0 12px ${EM(0.45)}` }}>
      <SparkleIcon className="w-3 h-3 text-black" />
    </div>
  );
}

// ─────────────────────────────────────────────
// TYPING INDICATOR
// ─────────────────────────────────────────────

function TypingIndicator() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.span key={i}
            className="block w-1.5 h-1.5 rounded-full bg-gradient-to-b from-orange-500 to-orange-700"
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.18 }}
          />
        ))}
      </div>
      <span className="text-[11px] italic tracking-wide text-white/65">Thinking…</span>
    </div>
  );
}

// ─────────────────────────────────────────────
// TAG PILL
// ─────────────────────────────────────────────

function TagPill({ children, variant = "default" }) {
  const color = { lime: "text-orange-500", green: "text-orange-500", current: "text-orange-500", default: "text-white/65" }[variant] || "text-white/65";
  return (
    <span className={`inline-flex items-center text-[10px] px-2 py-0.5 rounded-full font-medium ${color}`}
      style={G.tag}>
      {children}
    </span>
  );
}

// ─────────────────────────────────────────────
// PROJECT CARD
// ─────────────────────────────────────────────

function ProjectCard({ project }) {
  return (
    <div className="group rounded-2xl overflow-hidden hover:translate-y-[-1px] transition-all duration-300"
      style={{ ...G.bot }}>
      {project.image && (
        <div className="relative w-full h-28 overflow-hidden">
          <img src={project.image} alt={project.name}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"/>
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(8,8,20,0.95), rgba(8,8,20,0.4), transparent)" }}/>
          <div className="absolute bottom-2.5 left-3"><TagPill variant="lime">{project.tag}</TagPill></div>
        </div>
      )}
      <div className="p-3.5 space-y-2.5">
        <h4 className="text-[13px] font-semibold leading-tight tracking-tight text-white">{project.name}</h4>
        <p className="text-[11px] leading-5 text-white/65">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 5).map((t) => <TagPill key={t}>{t}</TagPill>)}
        </div>
        <div className="flex gap-2 pt-0.5">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-700 text-black font-bold active:scale-95 transition-all">
              Live Demo <ExternalIcon/>
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] px-3 py-1.5 rounded-full text-white/65 hover:text-white/80 active:scale-95 transition-all"
              style={G.raisedSm}>
              GitHub <ExternalIcon/>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// EXPERIENCE CARD
// ─────────────────────────────────────────────

function ExperienceCard({ exp }) {
  return (
    <div className="rounded-2xl p-4 space-y-3" style={G.bot}>
      <div className="flex items-start justify-between gap-2">
        <div>
          <h4 className="text-[13px] font-semibold leading-tight text-white">{exp.role}</h4>
          <p className="text-[12px] font-medium mt-0.5 text-orange-500">{exp.company}</p>
        </div>
        {exp.type === "current" && (
          <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-medium text-orange-500"
            style={G.raisedSm}>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse inline-block"/>Live
          </span>
        )}
      </div>
      <p className="text-[11px] font-medium text-white/65">{exp.duration}</p>
      <p className="text-[12px] leading-5 text-white/70">{exp.description}</p>
      {exp.responsibilities && (
        <ul className="space-y-1.5">
          {exp.responsibilities.map((r, i) => (
            <li key={i} className="text-[11px] flex gap-2 text-white/65">
              <span className="mt-0.5 shrink-0 text-orange-500">›</span><span>{r}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-1 pt-0.5">
        {exp.technologies.map((t) => <TagPill key={t}>{t}</TagPill>)}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// SKILLS DISPLAY
// ─────────────────────────────────────────────

const CAT_COLORS = {
  "Frontend":               "text-blue-400",
  "Backend":                "text-orange-500",
  "Databases":              "text-purple-400",
  "Programming Languages":  "text-yellow-400",
  "AI / ML & Data Science": "text-cyan-400",
  "Tools & Platforms":      "text-gray-400",
};

function SkillsDisplay({ categories }) {
  return (
    <div className="space-y-4">
      {Object.entries(categories).map(([key, cat]) => (
        <div key={key}>
          <p className="text-[10px] font-semibold uppercase tracking-widest mb-2 text-white/65">{cat.name}</p>
          <div className="flex flex-wrap gap-1.5">
            {cat.items.map((skill) => (
              <span key={skill}
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium ${CAT_COLORS[cat.name] || "text-white/65"}`}
                style={G.raisedSm}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// MESSAGE CONTENT RENDERER
// ─────────────────────────────────────────────

function MessageContent({ msg, onClose }) {
  const { type, content } = msg;

  if (type === "welcome" || type === "text" || type === "skill_check")
    return <p className="text-[13px] leading-6 text-white/65">{parseMarkdown(content)}</p>;

  if (type === "about")
    return (
      <div className="space-y-3">
        <p className="text-[13px] leading-6 text-white/65">{msg.intro}</p>
        <div className="rounded-xl p-3 space-y-2" style={{ background: "rgba(0,0,0,0.2)", border: G.msgBorder }}>
          {[{ icon: "🏢", text: msg.currentRole }, { icon: "📍", text: msg.location }, { icon: "✅", text: msg.availability, accent: true }]
            .map(({ icon, text, accent }) => (
              <div key={text} className={`flex items-start gap-2 text-[12px] ${accent ? "text-orange-500" : "text-white/65"}`}>
                <span>{icon}</span><span>{text}</span>
              </div>
            ))}
        </div>
      </div>
    );

  if (type === "education") {
    const { data } = msg;
    return (
      <div className="space-y-3">
        <div className="rounded-xl p-4 space-y-2" style={G.bot}>
          <p className="text-[13px] font-semibold text-white">{data.degree}</p>
          <p className="text-[12px] font-medium text-orange-500">{data.institution}</p>
          <p className="text-[11px] text-white/65">{data.duration} · {data.year}</p>
          <div className="flex items-center gap-2 pt-1">
            <span className="text-[11px] text-white/70">GPA</span>
            <span className="text-lg font-black bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent leading-none">{data.gpa}</span>
          </div>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest mb-2 text-white/65">Courses</p>
          <div className="flex flex-wrap gap-1.5">{data.courses.map((c) => <TagPill key={c}>{c}</TagPill>)}</div>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest mb-2 text-white/65">Activities</p>
          {data.activities.map((a, i) => (
            <p key={i} className="text-[11px] leading-5 mb-1.5 flex gap-1.5 text-white/65">
              <span className="shrink-0 text-orange-500">›</span><span>{a}</span>
            </p>
          ))}
        </div>
      </div>
    );
  }

  if (type === "skills")
    return (
      <div className="space-y-4">
        <p className="text-[13px] leading-6 text-white/65">{parseMarkdown(msg.intro)}</p>
        <SkillsDisplay categories={msg.categories}/>
      </div>
    );

  if (type === "experience_list")
    return (
      <div className="space-y-3">
        <p className="text-[13px] text-white/65">{parseMarkdown(msg.intro)}</p>
        {msg.experiences.map((exp) => <ExperienceCard key={exp.id} exp={exp}/>)}
      </div>
    );

  if (type === "experience_detail") return <ExperienceCard exp={msg.experience}/>;

  if (type === "project_list")
    return (
      <div className="space-y-3">
        <p className="text-[13px] text-white/65">{parseMarkdown(msg.intro)}</p>
        <div className="space-y-3">{msg.projects.map((p) => <ProjectCard key={p.id} project={p}/>)}</div>
        <a href="https://github.com/vipul1029?tab=repositories" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[11px] text-orange-500 hover:text-orange-400 transition-colors">
          View all repositories on GitHub <ExternalIcon/>
        </a>
      </div>
    );

  if (type === "project_detail") return <ProjectCard project={msg.project}/>;

  if (type === "hackathons")
    return (
      <div className="space-y-3">
        <p className="text-[13px] text-white/65">{parseMarkdown(msg.intro)}</p>
        {msg.hackathons.map((h) => (
          <div key={h.id} className="rounded-2xl p-4 space-y-2" style={G.bot}>
            <h4 className="text-[13px] font-semibold text-white">{h.name}</h4>
            <p className="text-[11px] font-medium text-orange-500">{h.organizer}</p>
            <p className="text-[12px] leading-5 text-white/70">{h.description}</p>
            {h.highlights.length > 0 && (
              <ul className="space-y-1">
                {h.highlights.map((hi, i) => (
                  <li key={i} className="text-[11px] flex gap-1.5 text-white/65">
                    <span className="text-orange-500">›</span>{hi}
                  </li>
                ))}
              </ul>
            )}
            {h.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1 pt-1">{h.technologies.map((t) => <TagPill key={t}>{t}</TagPill>)}</div>
            )}
            {h.link && (
              <a href={h.link} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] px-3 py-1.5 rounded-full text-white/65 hover:text-white/80 transition mt-1"
                style={G.raisedSm}>
                Certificate <ExternalIcon/>
              </a>
            )}
          </div>
        ))}
      </div>
    );

  if (type === "certifications")
    return (
      <div className="space-y-2.5">
        <p className="text-[13px] text-white/65">{parseMarkdown(msg.intro)}</p>
        {msg.certifications.map((cert) => (
          <div key={cert.id} className="flex items-start justify-between gap-3 rounded-xl px-3.5 py-3"
            style={G.raisedSm}>
            <div>
              <p className="text-[12px] font-semibold leading-tight text-white">{cert.name}</p>
              <p className="text-[11px] mt-1 text-white/55">{cert.issuer}</p>
            </div>
            {cert.link && (
              <a href={cert.link} target="_blank" rel="noopener noreferrer"
                className="shrink-0 text-[10px] px-2.5 py-1.5 rounded-full font-semibold text-orange-500 hover:text-orange-400 transition"
                style={G.raisedSm}>
                Verify
              </a>
            )}
          </div>
        ))}
      </div>
    );

  if (type === "contact") {
    const { data } = msg;
    return (
      <div className="space-y-3">
        <div className="rounded-xl p-4 space-y-2.5" style={{ background: "rgba(0,0,0,0.2)", border: G.msgBorder }}>
          {[{ icon: "✉️", text: data.email }, { icon: "📞", text: data.phone }, { icon: "📍", text: data.location }]
            .map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2.5 text-[12px] text-white/65">
                <span>{icon}</span><span className="font-mono">{text}</span>
              </div>
            ))}
          <div className="flex items-center gap-2 pt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"/>
            <span className="text-[12px] font-medium text-orange-500">{data.availability}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href={data.whatsapp} target="_blank" rel="noopener noreferrer"
            className="text-[11px] px-4 py-2 rounded-full font-bold text-white bg-gradient-to-r from-orange-600 to-orange-600 active:scale-95 transition-all">
            WhatsApp
          </a>
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-[11px] px-4 py-2 rounded-full font-bold text-white bg-[#0A66C2] active:scale-95 transition-all">
            LinkedIn
          </a>
          <a href={data.github} target="_blank" rel="noopener noreferrer"
            className="text-[11px] px-4 py-2 rounded-full text-white/65 hover:text-white/80 active:scale-95 transition-all"
            style={G.raisedSm}>
            GitHub
          </a>
        </div>
      </div>
    );
  }

  if (type === "resume")
    return (
      <div className="space-y-3">
        <p className="text-[13px] text-white/65">{parseMarkdown(msg.content)}</p>
        <div className="flex gap-2.5">
          <a href={msg.url} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-700 text-black font-bold active:scale-95 transition-all">
            View Resume <ExternalIcon/>
          </a>
          <a href={msg.url} download
            className="text-[11px] px-4 py-2 rounded-full text-white/65 hover:text-white/80 active:scale-95 transition-all"
            style={G.raisedSm}>
            Download PDF
          </a>
        </div>
      </div>
    );

  if (type === "navigate")
    return (
      <div className="space-y-3">
        <p className="text-[13px] text-white/65">{parseMarkdown(msg.content)}</p>
        <button onClick={() => { scrollToSection(msg.sectionId); onClose?.(); }}
          className="inline-flex items-center gap-2 text-[11px] px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-700 text-black font-bold active:scale-95 transition-all">
          Take me there →
        </button>
      </div>
    );

  if (type === "fallback")
    return <p className="text-[13px] leading-6 text-white/70">{parseMarkdown(msg.content)}</p>;

  return <p className="text-[13px] leading-6 text-white/65">{parseMarkdown(content)}</p>;
}

// ─────────────────────────────────────────────
// SUGGESTION CHIPS
// ─────────────────────────────────────────────

function SuggestionChips({ chips, onChipClick, disabled }) {
  if (!chips?.length) return null;
  return (
    <div className="shrink-0 px-3 py-2" style={{ borderTop: `1px solid ${G.divider}` }}>
      <div className="flex flex-wrap gap-1">
        {chips.map((chip) => (
          <button key={chip} disabled={disabled} onClick={() => onChipClick(chip)}
            className="text-[10px] px-2.5 py-1 rounded-full text-orange-500/90 hover:text-orange-400 active:scale-95 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            style={G.chip}>
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// CHAT INPUT
// ─────────────────────────────────────────────

function ChatInput({ onSend, disabled }) {
  const [value, setValue] = useState("");

  function handleSend() {
    const t = value.trim();
    if (!t || disabled) return;
    onSend(t); setValue("");
  }
  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
  }

  return (
    <div className="shrink-0 px-3 pb-3 pt-2">
      <div className="flex items-center gap-2 px-1 py-1 rounded-2xl" style={G.input}>
        <input type="text" value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown} disabled={disabled}
          placeholder="Ask me anything about Vipul…"
          aria-label="Message Vipul AI"
          className="flex-1 bg-transparent pl-3 py-2 text-[13px] outline-none text-white disabled:opacity-40 placeholder-white/25"
        />
        <button onClick={handleSend} disabled={disabled || !value.trim()}
          aria-label="Send"
          className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-700 text-black active:scale-90 transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed shrink-0"
          style={{ boxShadow: `0 0 16px ${EM(0.35)}` }}>
          <SendIcon/>
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// CHAT HEADER
// ─────────────────────────────────────────────

function ChatHeader({ onClose, onReset }) {
  return (
    <div className="shrink-0">
      <div className="h-[1.5px] bg-gradient-to-r from-transparent via-orange-600/60 to-transparent"/>
      <div className="flex items-center gap-3 px-4 py-3.5" style={{ borderBottom: `1px solid ${G.divider}` }}>
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="relative w-10 h-10 rounded-full overflow-hidden" style={{ border: `1px solid ${EM(0.25)}` }}>
            <Image src={assets.profile_img} alt="Vipul Kumar" fill sizes="40px" className="object-cover opacity-90"/>
          </div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-orange-500 border-[1.5px] border-black shadow-lg"
            style={{ boxShadow: `0 0 6px ${EM(0.7)}` }}/>
        </div>

        {/* Title */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-bold tracking-tight text-white">Vipul AI</span>
            <span className="text-[8px] px-1.5 py-0.5 rounded font-black tracking-widest uppercase text-orange-500"
              style={G.raisedSm}>PRO</span>
          </div>
          <p className="text-[10px] font-medium tracking-wide text-white/65">Interactive Portfolio Engine</p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button onClick={onReset} title="New conversation"
            className="w-8 h-8 rounded-xl flex items-center justify-center text-white/65 hover:text-white/70 active:scale-90 transition-all duration-200"
            style={G.raisedSm}>
            <ResetIcon/>
          </button>
          <button onClick={onClose} title="Close"
            className="w-8 h-8 rounded-xl flex items-center justify-center text-white/65 hover:text-white/70 active:scale-90 transition-all duration-200"
            style={G.raisedSm}>
            <CloseIcon/>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// TRIGGER BUTTON
// ─────────────────────────────────────────────

function TriggerButton({ onClick }) {
  return (
    <motion.button onClick={onClick} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }}
      aria-label="Open Vipul AI" className="relative group">
      {/* Ambient glow — expands on hover */}
      <div className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle, ${EM(0.1)} 0%, transparent 70%)`, filter: "blur(14px)" }}/>
      {/* Pulsing ring */}
      <motion.div className="absolute inset-0 rounded-full"
        style={{ border: `1px solid ${EM(0.35)}` }}
        animate={{ scale: [1, 1.65, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}/>
      {/* Dark glass pill — matches portfolio card language */}
      <div className="relative flex items-center gap-2.5 px-5 py-3 rounded-full font-Outfit font-bold text-[13px]"
        style={{
          background: "rgba(10,10,10,0.92)",
          border: `1px solid ${EM(0.28)}`,
          boxShadow: `0 0 20px ${EM(0.15)}, 0 4px 20px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.05)`,
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          color: "#ea580c",
        }}>
        <SparkleIcon className="w-3.5 h-3.5"/>
        <span>Ask Vipul AI</span>
      </div>
    </motion.button>
  );
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────

export default function VipulAI() {
  const [isOpen, setIsOpen]           = useState(false);
  const [messages, setMessages]       = useState([WELCOME_MSG]);
  const [isTyping, setIsTyping]       = useState(false);
  const [suggestions, setSuggestions] = useState(getInitialSuggestions());
  const [context, setContext]         = useState(getInitialContext());
  const [hydrated, setHydrated]       = useState(false);
  const messagesAreaRef               = useRef(null);

  useEffect(() => {
    setHydrated(true);
    try {
      const m = localStorage.getItem(LS_MESSAGES);
      const c = localStorage.getItem(LS_CONTEXT);
      if (m) {
        const parsed = JSON.parse(m);
        if (Array.isArray(parsed) && parsed.length) {
          setMessages(parsed);
          const last = [...parsed].reverse().find((x) => x.role === "bot" && x.suggestions);
          if (last?.suggestions) setSuggestions(last.suggestions);
        }
      }
      if (c) setContext(JSON.parse(c));
    } catch {}
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(LS_MESSAGES, JSON.stringify(messages));
      localStorage.setItem(LS_CONTEXT, JSON.stringify(context));
    } catch {}
  }, [messages, context, hydrated]);

  useEffect(() => {
    const el = messagesAreaRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape" && isOpen) setIsOpen(false); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [isOpen]);

  const sendMessage = useCallback(async (text) => {
    if (!text.trim() || isTyping) return;
    setMessages((p) => [...p, { id: uid(), role: "user", content: text, timestamp: Date.now() }]);
    setIsTyping(true); setSuggestions([]);
    await new Promise((r) => setTimeout(r, 550 + Math.random() * 450));
    const { response, context: newCtx } = processMessage(text, context);
    setMessages((p) => [...p, { id: uid(), role: "bot", timestamp: Date.now(), suggestions: response.suggestions, ...response }]);
    setContext(newCtx);
    setSuggestions(response.suggestions || getInitialSuggestions());
    setIsTyping(false);
  }, [context, isTyping]);

  const handleChipClick = useCallback((chip) => sendMessage(CHIP_QUERIES[chip] || chip), [sendMessage]);

  const handleReset = useCallback(() => {
    setMessages([WELCOME_MSG]);
    setContext(getInitialContext());
    setSuggestions(getInitialSuggestions());
    try { localStorage.removeItem(LS_MESSAGES); localStorage.removeItem(LS_CONTEXT); } catch {}
  }, []);

  if (!hydrated) return null;

  return (
    <>
      {/* ── Trigger ── */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <AnimatePresence>
          {!isOpen && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }} transition={{ type: "spring", stiffness: 320, damping: 22 }}>
              <TriggerButton onClick={() => setIsOpen(true)}/>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed z-[9999] inset-x-3 bottom-3 top-16 sm:inset-auto sm:bottom-6 sm:right-6 sm:top-auto sm:w-[390px] sm:h-[82vh] sm:max-h-[640px] rounded-2xl sm:rounded-3xl overflow-hidden"
            style={{ ...G.panel, border: G.border, boxShadow: G.shadow }}
            role="dialog" aria-modal="true" aria-label="Vipul AI"
          >
            {/* Subtle grid texture — matches portfolio pages */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}/>
            {/* Ambient emerald orbs */}
            <div className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl"
              style={{ background: `radial-gradient(circle, ${EM(0.07)} 0%, transparent 70%)` }}/>
            <div className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 rounded-full blur-3xl"
              style={{ background: `radial-gradient(circle, ${CY(0.04)} 0%, transparent 70%)` }}/>

            <div className="relative flex flex-col" style={{ height: "100%" }}>
              <ChatHeader onClose={() => setIsOpen(false)} onReset={handleReset}/>

              {/* Messages */}
              <div ref={messagesAreaRef}
                className="flex-1 min-h-0 overflow-y-auto px-3 py-4 space-y-4 mx-2 my-2 rounded-xl"
                style={{
                  ...G.msgArea,
                  border: G.msgBorder,
                  scrollbarWidth: "thin",
                  scrollbarColor: G.scrollbar,
                }}>
                {messages.map((msg) => (
                  <motion.div key={msg.id}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.role === "bot" && <BotAvatar/>}
                    {msg.role === "user" ? (
                      <div className="max-w-[82%] px-4 py-2.5 rounded-2xl rounded-tr-sm bg-gradient-to-br from-orange-500 to-orange-700 text-black text-[13px] font-semibold leading-6"
                        style={{ boxShadow: G.userShadow }}>
                        {msg.content}
                      </div>
                    ) : (
                      <div className="flex-1 min-w-0 px-4 py-3.5 rounded-2xl rounded-tl-sm"
                        style={G.bot}>
                        <MessageContent msg={msg} onClose={() => setIsOpen(false)}/>
                      </div>
                    )}
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    className="flex gap-2.5 justify-start">
                    <BotAvatar/>
                    <div className="px-4 py-3 rounded-2xl rounded-tl-sm" style={G.bot}>
                      <TypingIndicator/>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Bottom: chips + input */}
              <div className="shrink-0 flex flex-col">
                <AnimatePresence>
                  {suggestions.length > 0 && !isTyping && (
                    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }} transition={{ duration: 0.18 }}>
                      <SuggestionChips chips={suggestions} onChipClick={handleChipClick} disabled={isTyping}/>
                    </motion.div>
                  )}
                </AnimatePresence>
                <ChatInput onSend={sendMessage} disabled={isTyping}/>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
