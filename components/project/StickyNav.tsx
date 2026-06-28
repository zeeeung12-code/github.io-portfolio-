"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

type Props = {
  title: string;
  nextSlug: string;
  nextTitle: string;
};

/** Contextual sticky bar that appears once the cover is scrolled past. */
export default function StickyNav({ title, nextSlug, nextTitle }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 top-0 z-[55] border-b border-ink-line bg-ink/85 backdrop-blur-md"
        >
          <div className="shell flex h-14 items-center justify-between">
            <Link
              href="/work"
              className="group flex items-center gap-2 text-[11px] tracking-[0.12em] text-muted transition-colors hover:text-cream"
            >
              <FiArrowLeft className="transition-transform group-hover:-translate-x-0.5" />
              ALL WORK
            </Link>

            <span className="hidden truncate text-sm font-medium text-cream sm:block">
              {title}
            </span>

            <Link
              href={`/work/${nextSlug}`}
              className="group flex items-center gap-2 text-[11px] tracking-[0.12em] text-cream transition-colors hover:text-accent"
            >
              <span className="hidden text-muted group-hover:text-accent md:inline">
                {nextTitle}
              </span>
              NEXT
              <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
