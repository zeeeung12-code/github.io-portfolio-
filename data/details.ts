import detailsJson from "./details.json";

export type DetailStrip = { src: string; w: number; h: number };
export type DetailManifest = {
  contentBottom: number;
  w: number;
  strips: DetailStrip[];
};

const details = detailsJson as Record<string, DetailManifest>;

export function getDetail(slug: string): DetailManifest | undefined {
  return details[slug];
}
