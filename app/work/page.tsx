import type { Metadata } from "next";
import WorkCard from "@/components/work/WorkCard";
import Reveal from "@/components/ui/Reveal";
import { archiveProjects, getProject, workFeaturedOrder } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "브랜드 디자이너 김지은의 셀렉티드 워크 — 브랜딩, 패키지, 캐릭터, 공간, 웹/UX 프로젝트 모음.",
};

export default function WorkPage() {
  const featured = workFeaturedOrder
    .map((slug) => getProject(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-[clamp(7rem,14vw,11rem)] pb-[clamp(2rem,5vw,4rem)]">
        <div className="pointer-events-none absolute -right-[8%] top-0 h-[80%] w-[50%] bg-[radial-gradient(ellipse_at_center,rgba(232,144,0,0.14),transparent_65%)]" />
        <div className="shell relative">
          <Reveal>
            <p className="label mb-6 flex items-center gap-3 text-[11px] text-accent">
              <span className="h-px w-7 bg-accent" />
              PORTFOLIO
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-bold tracking-tight text-cream">
              SELECTED WORK
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-sm text-muted md:text-base">김지은 포트폴리오</p>
          </Reveal>
        </div>
      </section>

      {/* Featured 2×2 */}
      <section className="shell pb-[clamp(3rem,6vw,5rem)]">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
          {featured.map((p, i) => (
            <WorkCard key={p.slug} project={p} index={i} large />
          ))}
        </div>
      </section>

      {/* Archive 3-up */}
      <section className="shell pb-[clamp(5rem,10vw,9rem)]">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-3">
          {archiveProjects.map((p, i) => (
            <WorkCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
