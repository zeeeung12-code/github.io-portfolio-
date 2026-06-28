"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { featuredProjects } from "@/data/projects";
import { withBase } from "@/lib/base-path";
import type { Project } from "@/types";

export default function SelectedWork() {
  return (
    <section className="bg-ink py-[clamp(3rem,6vw,6rem)]">
      {/* Header */}
      <div className="shell mb-12 flex items-end justify-between">
        <div>
          <p className="label mb-4 flex items-center gap-3 text-[11px] text-accent">
            <span className="h-px w-7 bg-accent" />
            PORTFOLIO
          </p>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold tracking-tight text-cream">
            SELECTED WORK
          </h2>
        </div>
        <Link
          href="/work"
          className="group hidden items-center gap-1.5 text-[11px] tracking-[0.15em] text-muted transition-colors hover:text-cream sm:flex"
        >
          VIEW ALL WORK
          <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* Rows */}
      <div className="flex flex-col">
        {featuredProjects.map((project, i) => (
          <WorkRow key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function WorkRow({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.8, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/work/${project.slug}`}
        data-cursor="VIEW"
        className="group relative flex min-h-[clamp(15rem,26vw,24rem)] w-full items-center overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={withBase(project.cover)}
            alt={project.title}
            fill
            priority={index === 0}
            quality={95}
            sizes="100vw"
            className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
          />
          {/* Overlay — banners already carry a baked left gradient, so keep this
              light: a subtle dim that lifts on hover. */}
          <div className="absolute inset-0 bg-ink/25 transition-opacity duration-700 group-hover:opacity-0" />
        </div>

        {/* Content */}
        <div className="shell relative z-10 flex w-full items-center justify-between">
          <div className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
            <p className="label mb-4 text-[10px] text-accent">{project.category}</p>
            <h3 className="text-[clamp(1.7rem,3.4vw,2.75rem)] font-semibold leading-tight text-cream">
              {project.title}
            </h3>
            <p className="mt-3 text-sm text-muted md:text-base">{project.oneLiner}</p>
          </div>

          {/* Clickable affordance → detail page */}
          <span className="hidden shrink-0 items-center gap-4 sm:flex">
            <span className="label text-[10px] text-cream/0 transition-colors duration-500 group-hover:text-cream/80">
              VIEW PROJECT
            </span>
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-cream/30 text-cream transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
              <FiArrowUpRight className="text-xl transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
