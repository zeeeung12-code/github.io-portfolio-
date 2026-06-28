"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Fixed top scroll-progress bar. */
export default function ScrollProgress({ color = "#e89000" }: { color?: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left"
      style={{ scaleX, backgroundColor: color }}
      aria-hidden
    />
  );
}
