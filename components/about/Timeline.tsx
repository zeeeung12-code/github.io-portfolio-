"use client";

import { motion } from "framer-motion";
import type { TimelineEntry } from "@/data/about";

type Props = {
  label: string;
  entries: TimelineEntry[];
};

/** Date-left / content-right timeline with staggered scroll reveal per row. */
export default function Timeline({ label, entries }: Props) {
  return (
    <section className="shell py-[clamp(3rem,7vw,6rem)]">
      <p className="label mb-2 flex items-center gap-3 text-[11px] text-accent">
        <span className="h-px w-7 bg-accent" />
        {label}
      </p>

      <div className="mt-4 border-t border-ink-line">
        {entries.map((e, i) => (
          <motion.div
            key={`${e.date}-${e.title}-${i}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.7, delay: (i % 6) * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 gap-3 border-b border-ink-line py-9 md:grid-cols-[200px_1fr] md:gap-10 lg:grid-cols-[240px_1fr]"
          >
            {/* Date */}
            <div className="pt-1">
              <p className="text-xs tracking-wide text-faint md:text-sm">{e.date}</p>
              {e.dateSub && (
                <p className="mt-1 text-xs text-faint/80">{e.dateSub}</p>
              )}
            </div>

            {/* Content */}
            <div>
              <h3 className="text-lg leading-snug text-cream md:text-2xl">
                {e.pre && <span className="font-normal text-cream/85">{e.pre} </span>}
                <span className="font-semibold">{e.title}</span>
              </h3>
              {e.items.length > 0 && (
                <ul className="mt-4 space-y-1.5">
                  {e.items.map((it, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-[13px] leading-relaxed text-muted md:text-sm"
                    >
                      <span className="select-none text-faint">–</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
