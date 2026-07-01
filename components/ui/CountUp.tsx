"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

type Props = {
  value: string; // numeric string, e.g. "210"
  duration?: number;
  className?: string;
};

/** Counts from 0 to `value` once it scrolls into view. */
export default function CountUp({ value, duration = 1.4, className }: Props) {
  const target = parseInt(value, 10);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (Number.isNaN(target) || !inView) return;

    // Respect reduced motion: jump straight to the final value.
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplay(target);
      return;
    }

    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
      onComplete: () => setDisplay(target),
    });

    // Safety net: guarantee the final value even if the animation is
    // interrupted or an onUpdate frame is dropped.
    const guard = window.setTimeout(
      () => setDisplay(target),
      duration * 1000 + 500,
    );

    return () => {
      controls.stop();
      window.clearTimeout(guard);
    };
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {Number.isNaN(target) ? value : display}
    </span>
  );
}
