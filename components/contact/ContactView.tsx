"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { site, social } from "@/data/site";
import RevealText from "@/components/ui/RevealText";

export default function ContactView() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (value: string, key: string) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(key);
    window.setTimeout(() => setCopied(null), 1600);
  };

  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-32 text-center">
      {/* Ambient glow (수미상관 with home smoke) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60%] w-[80%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(232,144,0,0.12),transparent_70%)]" />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="label relative mb-8 text-[11px] text-accent"
      >
        CONTACT
      </motion.p>

      <RevealText
        as="h1"
        immediate
        lines={["함께 좋은 경험을", "설계하고 싶습니다."]}
        className="relative text-[clamp(1.8rem,4.5vw,3.5rem)] font-semibold leading-[1.25] text-cream"
      />

      <motion.button
        type="button"
        onClick={() => copy(site.email, "email")}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        data-cursor="COPY"
        className="group relative mt-12 inline-block text-[clamp(1.5rem,5vw,3.5rem)] font-light tracking-tight text-cream transition-colors duration-300 hover:text-accent"
      >
        {site.email}
        <span className="mt-2 block h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
      </motion.button>

      <motion.button
        type="button"
        onClick={() => copy(site.phone, "phone")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        data-cursor="COPY"
        className="relative mt-6 text-sm text-muted transition-colors hover:text-cream"
      >
        {site.phone}
      </motion.button>

      {/* Copy feedback */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="relative mt-4 flex items-center gap-1.5 text-xs text-accent"
          >
            <FiCheck />
            {copied === "email" ? "이메일이" : "전화번호가"} 복사되었습니다
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.95 }}
        className="relative mt-10 flex items-center gap-8"
      >
        {social.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.12em] text-muted transition-colors hover:text-cream"
          >
            {s.label}
          </a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.15 }}
        className="relative mt-24 flex flex-col items-center gap-3"
      >
        <p className="text-sm text-muted">감사합니다</p>
        <p className="font-serif text-2xl tracking-[0.2em] text-cream/80">{site.hanja}</p>
      </motion.div>
    </section>
  );
}
