"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { DetailStrip } from "@/data/details";
import { withBase } from "@/lib/base-path";

function Cover({ strip }: { strip: DetailStrip }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: `${strip.w} / ${strip.h}` }}
    >
      <motion.div style={{ y }} className="absolute inset-0 scale-[1.13]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBase(strip.src)}
          alt="cover"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>
    </div>
  );
}

export default function DetailStrips({ strips }: { strips: DetailStrip[] }) {
  const [cover, ...rest] = strips;

  return (
    <div className="mx-auto w-full max-w-[1920px]">
      {cover && <Cover strip={cover} />}

      {rest.map((s, i) => (
        <motion.div
          key={s.src}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="-mt-px block"
        >
          <Image
            src={withBase(s.src)}
            alt=""
            width={s.w}
            height={s.h}
            quality={90}
            sizes="100vw"
            loading={i < 2 ? "eager" : "lazy"}
            className="block h-auto w-full"
          />
        </motion.div>
      ))}
    </div>
  );
}
