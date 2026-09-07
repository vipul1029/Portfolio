"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const dotX   = useMotionValue(-100);
  const dotY   = useMotionValue(-100);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const glowX = useSpring(rawX, { stiffness: 90, damping: 18, mass: 0.6 });
  const glowY = useSpring(rawY, { stiffness: 90, damping: 18, mass: 0.6 });

  const visible = useRef(false);

  useEffect(() => {
    // Only on pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      visible.current = true;
    };

    const onLeave = () => {
      dotX.set(-200);
      dotY.set(-200);
      rawX.set(-200);
      rawY.set(-200);
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      {/* Outer diffused glow — follows with lag */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: glowX, y: glowY, translateX: "-50%", translateY: "-50%" }}
      >
        {/* Large soft halo */}
        <div style={{
          width: 80, height: 80, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,77,0,0.13) 0%, transparent 70%)",
          filter: "blur(10px)",
        }} />
      </motion.div>

      {/* Inner ring — slight lag */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: glowX, y: glowY, translateX: "-50%", translateY: "-50%" }}
      >
        <div style={{
          width: 28, height: 28, borderRadius: "50%",
          border: "1px solid rgba(255,77,0,0.35)",
          boxShadow: "0 0 10px rgba(255,77,0,0.15)",
        }} />
      </motion.div>

      {/* Sharp orange dot — direct, no lag */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      >
        <div style={{
          width: 7, height: 7, borderRadius: "50%",
          background: "#FF4D00",
          boxShadow: "0 0 8px rgba(255,77,0,0.9), 0 0 2px rgba(255,77,0,1)",
        }} />
      </motion.div>
    </>
  );
}
