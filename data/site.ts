import type { NavItem, Stat } from "@/types";

export const site = {
  name: "Kim Jieun",
  nameKo: "김지은",
  hanja: "晝耕夜讀",
  role: "Brand Experience Designer",
  email: "zeeeung12@gmail.com",
  phone: "010 2477 8084",
  manifesto: ["체계적인 업무 관리와", "열린 피드백 수용을 통해,", "사용자 중심의 디자인을 지향합니다."],
  mottoTag: "[주경야독]",
  motto: ["낮에는 농사일을 하고", "밤에는 글을 읽는다."],
  heroCategories: "BRANDING / VISUAL SYSTEM / PACKAGE / CHARACTER / CONTENT",
  heroSub: [
    "실무와 학업을 병행하는 환경에서도 흔들림 없는 퍼포먼스를 유지하며",
    "개인 목표 실적 대비 210% 이상을 달성한 브랜드 디자이너 김지은입니다.",
  ],
} as const;

export const nav: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "WORK", href: "/work" },
  { label: "CONTACT", href: "/contact" },
];

export const footerIndex: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export const social: { label: string; href: string }[] = [
  { label: "Behance", href: "https://www.behance.net/34a2eb72" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/hopebestlife?igsh=eDh0ZmY0MmhvYmQ5&utm_source=qr",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/지은-김-943691375",
  },
];

/** Home / About proof bar. */
export const stats: Stat[] = [
  { value: "210", unit: "%+", label: "개인 목표 실적 달성률", sublabel: "PERFORMANCE" },
  { value: "10", unit: "%+", label: "리브랜딩 매출 성장", sublabel: "REVENUE GROWTH" },
  { value: "6", unit: "yr", value2: "3", unit2: "yr", label: "총 디자인 경력 6년 · BX 3년차", sublabel: "EXPERIENCE" },
];
