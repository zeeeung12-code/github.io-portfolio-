import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://kimjieun.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/work", "/contact"].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date("2026-06-28"),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projectRoutes = projects
    .filter((p) => p.hasDetail)
    .map((p) => ({
      url: `${BASE}/work/${p.slug}`,
      lastModified: new Date("2026-06-28"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticRoutes, ...projectRoutes];
}
