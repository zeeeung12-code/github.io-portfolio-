"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { withBase } from "@/lib/base-path";
import type { Project } from "@/types";

type Props = {
  project: Project;
  index: number;
  /** Featured cards span 2 columns and get a larger title. */
  large?: boolean;
};

export default function WorkCard({ project, index, large = false }: Props) {
  const Inner = (
    <>
      {/* Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-sm">
        <Image
          src={withBase(project.card)}
          alt={project.title}
          fill
          quality={90}
          sizes={large ? "(max-width:768px) 100vw, 50vw" : "(max-width:640px) 100vw, 33vw"}
          className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-ink/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Hover affordance */}
        {project.hasDetail && (
          <span className="absolute right-4 top-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-cream/95 text-ink opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
            <FiArrowUpRight className="text-lg" />
          </span>
        )}
      </div>

      {/* Meta */}
      <div className="mt-5">
        <p className="label text-[10px] text-accent">{project.category}</p>
        <h3
          className={
            large
              ? "mt-3 text-2xl font-semibold text-cream transition-colors group-hover:text-accent md:text-3xl"
              : "mt-3 text-lg font-semibold text-cream transition-colors group-hover:text-accent md:text-xl"
          }
        >
          {project.title}
        </h3>
        {project.oneLiner && (
          <p className="mt-2 text-sm text-muted">{project.oneLiner}</p>
        )}
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.75, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      {project.hasDetail ? (
        <Link href={`/work/${project.slug}`} data-cursor="VIEW" className="group block">
          {Inner}
        </Link>
      ) : (
        <div className="group block cursor-default">{Inner}</div>
      )}
    </motion.div>
  );
}
