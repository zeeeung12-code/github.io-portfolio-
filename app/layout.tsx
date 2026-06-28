import type { Metadata } from "next";
import "./globals.css";
import MotionProvider from "@/components/providers/MotionProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Gnb from "@/components/layout/Gnb";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://kimjieun.vercel.app"),
  title: {
    default: `${site.name} · ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description:
    "낮에는 일을 하고 밤에는 공부를 하는 브랜드 디자이너 김지은의 포트폴리오. 전략부터 비주얼·패키지·공간·디지털까지 잇는 완결형 브랜드 경험을 설계합니다.",
  keywords: ["김지은", "Kim Jieun", "Brand Experience Designer", "BX", "브랜드 디자이너", "포트폴리오"],
  openGraph: {
    title: `${site.name} · ${site.role}`,
    description: "완결형 브랜드 경험을 설계하는 브랜드 디자이너 김지은",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className="antialiased">
      <body className="min-h-svh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2 focus:text-sm focus:text-ink"
        >
          본문 바로가기
        </a>
        <MotionProvider>
          <SmoothScroll>
            <CustomCursor />
            <Gnb />
            <main id="main">{children}</main>
            <Footer />
          </SmoothScroll>
        </MotionProvider>
      </body>
    </html>
  );
}
