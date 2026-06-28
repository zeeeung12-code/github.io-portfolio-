import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Kim Jieun · Brand Experience Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0b0a",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#e89000",
            fontSize: 24,
            letterSpacing: 6,
          }}
        >
          <div style={{ width: 48, height: 2, background: "#e89000" }} />
          BRAND EXPERIENCE DESIGNER
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#e8e4dc", fontSize: 130, fontWeight: 800, lineHeight: 1.05 }}>
            Kim Jieun
          </div>
          <div style={{ color: "#9b978f", fontSize: 34, marginTop: 20 }}>
            Branding · Package · Character · Space · Web/UX
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", color: "#6f6b65", fontSize: 24 }}>
          <span>Portfolio</span>
          <span style={{ color: "#bf8040", letterSpacing: 4 }}>JIEUN KIM</span>
        </div>
      </div>
    ),
    size,
  );
}
