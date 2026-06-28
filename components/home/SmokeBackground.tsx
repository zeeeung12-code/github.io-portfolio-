"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { withBase } from "@/lib/base-path";

/**
 * Hero backdrop. Uses the finished smoke + hanja composite supplied by the
 * designer, displayed full-bleed (cover) so it always fills the hero. The layer
 * is slightly larger than the viewport so the pointer parallax never exposes an
 * edge, and a slow opacity drift keeps the smoke feeling alive.
 */
export default function SmokeBackground() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });

  const x = useTransform(sx, (v) => v * 18);
  const y = useTransform(sy, (v) => v * 12);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{
          x,
          y,
          scale: 1.08,
          backgroundImage: `url(${withBase("/images/home/hero.webp")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{
          opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute inset-0"
      />
    </div>
  );
}
