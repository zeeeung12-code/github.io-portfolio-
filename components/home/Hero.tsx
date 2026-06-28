"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import RevealText from "@/components/ui/RevealText";
import SmokeBackground from "./SmokeBackground";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative flex h-svh min-h-[640px] w-full items-center overflow-hidden bg-ink">
      <SmokeBackground />

      {/* Text block */}
      <div className="shell relative z-10">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-5 text-sm tracking-[0.1em] text-accent md:text-base"
          >
            {site.mottoTag}
          </motion.p>

          <RevealText
            as="h1"
            immediate
            delay={0.35}
            lines={site.motto as unknown as string[]}
            className="text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.2] text-cream"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="label mt-8 text-[11px] text-cream/80 md:text-xs"
          >
            {site.heroCategories}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-5 space-y-1 text-[13px] leading-relaxed text-muted md:text-sm"
          >
            {site.heroSub.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
