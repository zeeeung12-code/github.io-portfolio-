"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import type { Project } from "@/types";

export default function NextProject({ project }: { project: Project }) {
  return (
    <section className="bg-ink">
      <Link
        href={`/work/${project.slug}`}
        data-cursor="NEXT"
        className="group relative flex min-h-[clamp(18rem,34vw,30rem)] w-full items-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            quality={90}
            sizes="100vw"
            className="object-cover opacity-50 transition-all duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        </div>

        <div className="shell relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="label text-[11px] text-accent"
          >
            NEXT PROJECT
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 inline-flex items-center gap-4 text-[clamp(2rem,5vw,3.75rem)] font-bold tracking-tight text-cream transition-colors group-hover:text-accent"
          >
            {project.title}
            <FiArrowRight className="text-[0.7em] transition-transform duration-500 group-hover:translate-x-2" />
          </motion.h2>
        </div>
      </Link>
    </section>
  );
}
