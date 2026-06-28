"use client";

import { motion } from "framer-motion";

/** Animated "SCROLL" cue at the bottom of the hero. */
export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.8 }}
      className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
    >
      <span className="label text-[10px] text-muted">SCROLL</span>
      <div className="relative h-12 w-px overflow-hidden bg-cream/15">
        <motion.div
          className="absolute inset-x-0 top-0 h-1/2 bg-accent"
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
