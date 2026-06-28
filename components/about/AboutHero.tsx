"use client";

import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { aboutHero } from "@/data/about";

const fade = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-[clamp(7rem,14vw,11rem)]">
      {/* Warm glow */}
      <div className="pointer-events-none absolute -right-[10%] top-0 h-[70%] w-[55%] bg-[radial-gradient(ellipse_at_center,rgba(232,144,0,0.16),transparent_65%)]" />

      <div className="shell relative">
        <motion.p
          {...fade}
          transition={{ duration: 0.6 }}
          className="label mb-10 flex items-center gap-3 text-[11px] text-accent"
        >
          <span className="h-px w-7 bg-accent" />
          {aboutHero.label}
        </motion.p>

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          {/* Name */}
          <div>
            <motion.h1
              {...fade}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(3rem,7vw,5.5rem)] font-extrabold leading-none tracking-tight text-cream"
            >
              {aboutHero.name}
            </motion.h1>
            <motion.div
              {...fade}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-5"
            >
              <p className="text-base text-cream/90 md:text-lg">{aboutHero.subtitleKo}</p>
              <p className="label mt-1 text-[10px] text-faint">{aboutHero.subtitleEn}</p>
            </motion.div>
          </div>

          {/* Contact + download */}
          <motion.div
            {...fade}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col items-start gap-1.5 md:items-end"
          >
            {aboutHero.contact.map((c) => (
              <p key={c} className="text-sm text-muted">
                {c}
              </p>
            ))}
            <a
              href="/Kim_Jieun_Resume.pdf"
              download="김지은_포트폴리오_브랜드디자인.pdf"
              className="group mt-4 flex items-center gap-2 rounded-full bg-cream px-6 py-2.5 text-xs font-medium tracking-[0.1em] text-ink transition-colors hover:bg-accent"
            >
              PDF DOWNLOAD
              <FiArrowDown className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        {/* Intro body */}
        <motion.div
          {...fade}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-14 space-y-1.5 text-sm leading-relaxed text-muted md:text-[15px]"
        >
          <p>{aboutHero.body[0]}</p>
          <p>
            실무와 학업을 병행하며 개인 목표 실적 대비{" "}
            <span className="font-medium text-accent">210% 이상</span>을 달성했고,
          </p>
          <p>
            리브랜딩 프로젝트로 매출{" "}
            <span className="font-medium text-accent">10.35%</span> 성장을 이끌었습니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
