"use client";

import { motion } from "framer-motion";

const body = [
  "결과물은 사용자와의 충분한 소통 속에서 성장하고 완성된다고 생각합니다.",
  "체계적인 업무 관리와 열린 피드백 수용을 통해 사용자 중심의 디자인을 지향하며",
  "전략부터 비주얼 · 패키지 · 공간 · 디지털까지 잇는 완결형 브랜드 경험을 설계합니다.",
];

const lineMask = {
  hidden: { y: "115%" },
  visible: { y: "0%" },
};

export default function Statement() {
  return (
    <section className="shell py-[clamp(5rem,12vw,11rem)]">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="label mb-8 flex items-center gap-3 text-[11px] text-accent"
      >
        <span className="h-px w-7 bg-accent" />
        PHILOSOPHY
      </motion.p>

      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-12%" }}
        transition={{ staggerChildren: 0.1 }}
        className="text-[clamp(1.7rem,3.6vw,3rem)] font-semibold leading-[1.3] text-cream"
      >
        <span className="block overflow-hidden">
          <motion.span variants={lineMask} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="block">
            실무와 학업을 병행하면서도
          </motion.span>
        </span>
        <span className="block overflow-hidden">
          <motion.span variants={lineMask} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="block">
            연봉 대비 실적 <span className="text-accent">210%</span>를 달성했습니다.
          </motion.span>
        </span>
      </motion.h2>

      <div className="mt-10 max-w-2xl space-y-1.5">
        {body.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm leading-relaxed text-muted md:text-[15px]"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
