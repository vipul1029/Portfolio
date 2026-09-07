"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * PhoneMockup — wraps any children and displays them as the phone screen.
 * The phone PNG frame sits on top (z-20), content sits below clipped to screen bounds (z-10).
 * Dynamic Island is rendered as an SVG overlay (z-30).
 *
 * Usage:
 *   <PhoneMockup width={300}>
 *     <YourScreenContent />
 *   </PhoneMockup>
 */
export default function PhoneMockup({ children, width = 280, className = "" }) {
  // All values are % of the total image dimensions (portrait phone PNG)
  const screen = {
    top: "2.3%",
    left: "5.09%",
    right: "5.18%",
    bottom: "2.24%",
  };

  return (
    <motion.div
      className={`relative select-none ${className}`}
      style={{ width }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* ── Screen content (below phone frame) ── */}
      <div
        className="absolute overflow-hidden"
        style={{
          top: screen.top,
          left: screen.left,
          right: screen.right,
          bottom: screen.bottom,
          borderRadius: screen.borderRadius,
          zIndex: 10,
        }}
      >
        {children}
      </div>

      {/* ── Phone frame (on top, pointer-events-none so screen content is clickable) ── */}
      <Image
        src="/codewayphone.png"
        alt="Phone mockup"
        width={1120}
        height={2280}
        className="relative w-full h-auto pointer-events-none"
        style={{ zIndex: 20 }}
        priority
      />

      {/* DI pill already drawn in the phone PNG — no overlay needed */}
    </motion.div>
  );
}
