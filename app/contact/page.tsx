import type { Metadata } from "next";
import ContactView from "@/components/contact/ContactView";

export const metadata: Metadata = {
  title: "Contact",
  description: "브랜드 디자이너 김지은에게 연락하기 — 이메일 zeeeung12@gmail.com",
};

export default function ContactPage() {
  return <ContactView />;
}
