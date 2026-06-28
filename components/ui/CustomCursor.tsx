"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom cursor: a small dot that trails the pointer, expanding into a ring
 * (with an optional label) over elements marked `data-cursor` / interactive.
 * Only renders on fine-pointer (desktop) devices.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string>("");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.5 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const el = (e.target as HTMLElement)?.closest(
        "a, button, [role='button'], [data-cursor]",
      ) as HTMLElement | null;

      if (el) {
        setHovering(true);
        setLabel(el.dataset.cursor && el.dataset.cursor !== "true" ? el.dataset.cursor : "");
      } else {
        setHovering(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Center dot — tracks instantly */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
        style={{ x, y }}
        animate={{ opacity: hovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      {/* Trailing ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cream/60"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? (label ? 84 : 48) : 28,
          height: hovering ? (label ? 84 : 48) : 28,
          borderColor: hovering ? "rgba(232,144,0,0.9)" : "rgba(232,228,220,0.5)",
          backgroundColor: label ? "rgba(232,144,0,0.12)" : "rgba(0,0,0,0)",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 24 }}
      >
        {label && (
          <span className="label text-[10px] text-cream">{label}</span>
        )}
      </motion.div>
    </>
  );
}
