import type { Project } from "@/types";

/**
 * Projects shown across Home (featured banner rows), Work index (cards), and
 * detail pages. Detail-only fields (role/period/contribution/source) are
 * finalized in STEP 5.
 *
 * Array order = Home "Selected Work" order (pair → hflow → rest → buttercat).
 * The Work index uses its own explicit order (see app/work/page.tsx).
 */
export const projects: Project[] = [
  {
    slug: "pair-chocolate",
    index: "01",
    title: "Pair Chocolate",
    category: "BRAND IDENTITY | PACKAGING | WEB CONTENTS",
    oneLiner: "감정을 선물하는 큐레이션 브랜드",
    role: "Brand Identity · Package · Web",
    period: "2024",
    contribution: "100%",
    featured: true,
    hasDetail: true,
    theme: { bg: "#f3eee7", text: "#4a3b33", accent: "#c58b7a" },
    cover: "/images/home/pair.webp",
    card: "/images/work/pair.webp",
    source: "",
  },
  {
    slug: "h-flow-campus",
    index: "02",
    title: "H-Flow Campus",
    category: "BRAND IDENTITY | PROMOTION | SPACE",
    oneLiner: "흐름으로 연결되는 캠퍼스 경험",
    role: "Brand Identity · Promotion · Space",
    period: "2024",
    contribution: "100%",
    featured: true,
    hasDetail: true,
    theme: { bg: "#f8f8f3", text: "#0c0c0c", accent: "#b9d42f" },
    cover: "/images/home/hflow.webp",
    card: "/images/work/hflow.webp",
    source: "",
  },
  {
    slug: "rest-in-nature",
    index: "03",
    title: "Rest in nature",
    category: "PROMOTION | WEB CONTENTS | AI IMAGE",
    oneLiner: "자연에서 오는 휴식의 향",
    role: "Promotion · Web · AI Image",
    period: "2024",
    contribution: "100%",
    featured: true,
    hasDetail: true,
    theme: { bg: "#ede9e0", text: "#2e3a2c", accent: "#8a5a2b" },
    cover: "/images/home/rest.webp",
    card: "/images/work/rest.webp",
    source: "",
  },
  {
    slug: "butter-cat",
    index: "04",
    title: "Butter Cat",
    category: "CHARACTER | MD | DIGITAL CONTENTS",
    oneLiner: "거리두기의 미학을 설계하는 IP",
    role: "Character · MD · Digital",
    period: "2024",
    contribution: "100%",
    featured: true,
    hasDetail: true,
    theme: { bg: "#fbf6ec", text: "#3a2e1c", accent: "#f2c84b" },
    cover: "/images/home/buttercat.webp",
    card: "/images/work/buttercat.webp",
    source: "",
  },
  {
    slug: "lotte-hotel",
    index: "05",
    title: "롯데호텔 실무 아카이브",
    category: "EDITORIAL | WEB CONTENTS",
    oneLiner: "",
    role: "Editorial · Promotion",
    period: "2023",
    contribution: "100%",
    featured: false,
    hasDetail: true,
    theme: { bg: "#0b0b0a", text: "#e8e4dc", accent: "#e89000" },
    cover: "/images/work/lotte.webp",
    card: "/images/work/lotte.webp",
    source: "",
  },
  {
    slug: "momq",
    index: "06",
    title: "유한킴벌리 실무 아카이브",
    detailTitle: "유한킴벌리 맘큐 실무 아카이브",
    category: "WEB CONTENTS",
    oneLiner: "",
    role: "Web · Promotion",
    period: "2022",
    contribution: "100%",
    featured: false,
    hasDetail: true,
    theme: { bg: "#0b0b0a", text: "#e8e4dc", accent: "#e89000" },
    cover: "/images/work/momq.webp",
    card: "/images/work/momq.webp",
    source: "",
  },
  {
    slug: "peace-is-happiness",
    index: "07",
    title: "평화는 행복해",
    category: "CHARACTER | MD | DIGITAL CONTENTS",
    oneLiner: "",
    role: "Character · MD",
    period: "2022",
    contribution: "100%",
    featured: false,
    hasDetail: false,
    theme: { bg: "#f6e9e4", text: "#5a3b30", accent: "#d98c6a" },
    cover: "/images/work/peace.webp",
    card: "/images/work/peace.webp",
    source: "",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const archiveProjects = projects.filter((p) => !p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Work index display order (differs from Home order). */
export const workFeaturedOrder = [
  "pair-chocolate",
  "h-flow-campus",
  "butter-cat",
  "rest-in-nature",
];
