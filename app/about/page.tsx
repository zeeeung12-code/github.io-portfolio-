import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import ProofBar from "@/components/home/ProofBar";
import ProfileSection from "@/components/about/ProfileSection";
import Timeline from "@/components/about/Timeline";
import { awards, experience, sideProjects } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "브랜드 디자이너 김지은 — 경력, 스킬, 프로젝트, 수상 이력. 전략부터 비주얼·패키지·공간·디지털까지 잇는 완결형 브랜드 경험을 설계합니다.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ProofBar />
      <ProfileSection />
      <Timeline label="EXPERIENCE" entries={experience} />
      <Timeline label="PROJECTS" entries={sideProjects} />
      <Timeline label="AWARDS & CERTIFICATIONS" entries={awards} />
    </>
  );
}
