import Link from "next/link";
import { footerIndex, site, social } from "@/data/site";
import CopyButton from "./CopyButton";

export default function Footer() {
  return (
    <footer className="relative bg-ink pt-24 pb-10">
      <div className="shell">
        <div className="flex flex-col justify-between gap-14 lg:flex-row">
          {/* Manifesto */}
          <p className="max-w-sm text-lg font-medium leading-relaxed text-cream md:text-xl">
            {site.manifesto.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>

          {/* Columns */}
          <div className="flex gap-20 sm:gap-28">
            <div className="flex flex-col gap-3">
              <span className="label mb-2 text-[10px] text-faint">Contact</span>
              <CopyButton value={site.email} />
              <CopyButton value={site.phone} />
            </div>

            <div className="flex flex-col gap-3">
              <span className="label mb-2 text-[10px] text-faint">Index</span>
              {footerIndex.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-cream"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-ink-line pt-6 sm:flex-row">
          <p className="text-xs text-faint">
            © 2026 {site.name} · {site.role}
          </p>
          <div className="flex items-center gap-5">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted transition-colors hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Accent baseline */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-bronze to-transparent opacity-70" />
    </footer>
  );
}
