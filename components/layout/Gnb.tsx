"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";
import { withBase } from "@/lib/base-path";

export default function Gnb() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ink/80 py-4 backdrop-blur-md"
          : "bg-transparent py-6 md:py-7",
      )}
    >
      <div className="shell relative z-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-3" aria-label="Home">
          <span className="font-serif text-xl tracking-[0.15em] text-cream md:text-2xl">
            {site.hanja}
          </span>
          <span className="label hidden text-[10px] text-muted sm:block">
            JIEUN KIM
          </span>
        </Link>

        {/* Center nav (desktop) */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="label group relative text-[11px] text-cream/80 transition-colors hover:text-cream"
            >
              {item.label}
              <span
                className={cn(
                  "absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-400",
                  isActive(item.href) ? "w-full" : "w-0 group-hover:w-full",
                )}
              />
            </Link>
          ))}
        </nav>

        {/* Resume + mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href={withBase("/Kim_Jieun_Resume.pdf")}
            download="김지은_포트폴리오_브랜드디자인.pdf"
            className="group hidden items-center gap-1.5 rounded-full border border-cream/30 px-5 py-2 text-[11px] tracking-[0.15em] text-cream transition-colors hover:border-accent hover:text-accent sm:flex"
          >
            RESUME
            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Menu"
          >
            <span
              className={cn(
                "h-px w-6 bg-cream transition-transform duration-300",
                open && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-cream transition-transform duration-300",
                open && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>
    </header>

    {/* Mobile overlay — rendered outside <header> so the header's
        backdrop-filter doesn't trap this fixed element to the bar height */}
    <AnimatePresence>
      {open && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-ink md:hidden"
        >
            {nav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.08 * i + 0.1 }}
              >
                <Link
                  href={item.href}
                  className="font-serif text-3xl text-cream"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <a
              href={withBase("/Kim_Jieun_Resume.pdf")}
              download="김지은_포트폴리오_브랜드디자인.pdf"
              className="mt-4 flex items-center gap-1.5 rounded-full border border-cream/30 px-6 py-2.5 text-sm tracking-[0.15em] text-cream"
            >
              RESUME <FiArrowUpRight />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
