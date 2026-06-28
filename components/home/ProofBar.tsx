"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/site";
import CountUp from "@/components/ui/CountUp";

export default function ProofBar() {
  return (
    <section className="shell pb-[clamp(4rem,9vw,8rem)]">
      <div className="grid grid-cols-1 gap-y-12 border-t border-ink-line pt-14 sm:grid-cols-3 sm:gap-y-0">
        {stats.map((s, i) => (
          <motion.div
            key={s.sublabel}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="sm:px-10 sm:first:pl-0 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:border-ink-line"
          >
            <div className="flex items-end gap-1 leading-none text-cream">
              <span className="text-[clamp(3rem,5vw,4.5rem)] font-semibold tracking-tight">
                <CountUp value={s.value} />
              </span>
              {s.unit && (
                <span className="mb-2 text-xl font-medium text-accent md:text-2xl">
                  {s.unit}
                </span>
              )}
              {s.value2 && (
                <>
                  <span className="mb-2 px-2 text-2xl font-light text-faint">|</span>
                  <span className="text-[clamp(3rem,5vw,4.5rem)] font-semibold tracking-tight">
                    <CountUp value={s.value2} />
                  </span>
                  {s.unit2 && (
                    <span className="mb-2 text-xl font-medium text-accent md:text-2xl">
                      {s.unit2}
                    </span>
                  )}
                </>
              )}
            </div>
            <p className="mt-4 text-sm text-cream/90">{s.label}</p>
            <p className="label mt-1.5 text-[10px] text-faint">{s.sublabel}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
