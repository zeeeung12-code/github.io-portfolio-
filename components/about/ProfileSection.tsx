"use client";

import { motion } from "framer-motion";
import { keywords, profile, skills } from "@/data/about";
import Reveal from "@/components/ui/Reveal";

function Badge({ children, i }: { children: string; i: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.5, delay: (i % 8) * 0.04 }}
      className="cursor-default rounded-full border border-ink-line bg-ink-soft px-4 py-2 text-[13px] text-cream/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
    >
      {children}
    </motion.span>
  );
}

export default function ProfileSection() {
  return (
    <section className="shell grid grid-cols-1 gap-x-16 gap-y-14 py-[clamp(4rem,9vw,8rem)] lg:grid-cols-2">
      {/* Left: profile */}
      <div>
        <p className="label mb-8 flex items-center gap-3 text-[11px] text-accent">
          <span className="h-px w-7 bg-accent" />
          PROFILE
        </p>

        <Reveal>
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] leading-snug text-cream">
            <span className="font-normal">{profile.heading[0]}</span>
            <br />
            <span className="font-bold">{profile.heading[1]}</span>
          </h2>
        </Reveal>

        <div className="mt-8 space-y-6">
          {profile.paragraphs.map((para, i) => (
            <Reveal key={i} delay={0.1 + i * 0.1}>
              <div className="space-y-1 text-sm leading-relaxed text-muted md:text-[15px]">
                {para.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Right: keyword + skills */}
      <div className="flex flex-col gap-12">
        <div>
          <p className="label mb-6 flex items-center gap-3 text-[11px] text-accent">
            <span className="h-px w-7 bg-accent" />
            KEYWORD
          </p>
          <div className="flex flex-wrap gap-2.5">
            {keywords.map((k, i) => (
              <Badge key={k} i={i}>
                {k}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <p className="label mb-6 flex items-center gap-3 text-[11px] text-accent">
            <span className="h-px w-7 bg-accent" />
            SKILLS
          </p>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((s, i) => (
              <Badge key={s} i={i}>
                {s}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
