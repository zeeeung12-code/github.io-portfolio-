/** Base path the site is served from (e.g. "/repo" on GitHub Pages). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * Prefix an absolute public asset path with the base path. next/image and
 * next/link handle this automatically — use this only for hardcoded URLs in
 * inline styles or plain <a href> tags.
 */
export function withBase(path: string) {
  return `${basePath}${path}`;
}
