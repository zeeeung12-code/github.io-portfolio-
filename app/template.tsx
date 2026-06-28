"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Re-mounts on every route change, so this plays a theme wipe reveal on each
 * navigation (and the initial load). Respects reduced-motion via MotionConfig.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[70] origin-bottom bg-ink"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />
    </>
  );
}
