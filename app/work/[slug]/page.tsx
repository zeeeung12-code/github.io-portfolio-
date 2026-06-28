import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ScrollProgress from "@/components/project/ScrollProgress";
import StickyNav from "@/components/project/StickyNav";
import DetailStrips from "@/components/project/DetailStrips";
import NextProject from "@/components/project/NextProject";
import { getProject, projects } from "@/data/projects";
import { getDetail } from "@/data/details";

const detailProjects = projects.filter((p) => p.hasDetail);

export function generateStaticParams() {
  return detailProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = project.detailTitle ?? project.title;
  return {
    title,
    description: `${title} — ${project.category}. ${project.oneLiner}`.trim(),
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  const detail = getDetail(slug);

  if (!project || !project.hasDetail || !detail) notFound();

  const idx = detailProjects.findIndex((p) => p.slug === slug);
  const next = detailProjects[(idx + 1) % detailProjects.length];

  return (
    <>
      <ScrollProgress color={project.theme.accent} />
      <StickyNav
        title={project.detailTitle ?? project.title}
        nextSlug={next.slug}
        nextTitle={next.title}
      />

      <article>
        <DetailStrips strips={detail.strips} />
      </article>

      <NextProject project={next} />
    </>
  );
}
