"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  lines: string[];
  className?: string;
  /** Start automatically on mount (hero) instead of waiting for scroll. */
  immediate?: boolean;
  delay?: number;
  as?: "h1" | "h2" | "p" | "div";
};

/** Line-by-line masking reveal (translateY up from a clipped box). */
export default function RevealText({
  lines,
  className,
  immediate = false,
  delay = 0,
  as = "div",
}: Props) {
  const Wrapper = motion[as];
  return (
    <Wrapper
      className={className}
      initial="hidden"
      {...(immediate
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: { once: true, margin: "-12%" } })}
      transition={{ staggerChildren: 0.08, delayChildren: delay }}
    >
      {lines.map((line, i) => (
        <span key={i} className={cn("block overflow-hidden", i > 0 && "")}>
          <motion.span
            className="block will-change-transform"
            variants={{
              hidden: { y: "115%" },
              visible: { y: "0%" },
            }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Wrapper>
  );
}
