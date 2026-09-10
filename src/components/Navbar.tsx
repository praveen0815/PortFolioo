"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled || open ? "border-b border-line bg-bg/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav
        className="shell flex h-14 items-center justify-between md:h-16"
        aria-label="Primary"
      >
        <a href="#top" className="display type-meta font-semibold tracking-tight text-ink">
          {site.name}
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="type-meta text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="type-meta hidden rounded-full border border-line bg-accent-soft px-3.5 py-1.5 text-accent transition-colors hover:border-accent/40 hover:bg-accent/15 md:inline-flex"
        >
          Let&apos;s Connect
        </a>

        <button
          type="button"
          className="mobile-nav-toggle h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-[#111318] text-ink"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex w-4 flex-col gap-1.5" aria-hidden="true">
            <span className={cn("h-0.5 w-full rounded-full bg-white transition-transform", open && "translate-y-[8px] rotate-45")} />
            <span className={cn("h-0.5 w-full rounded-full bg-white transition-opacity", open && "opacity-0")} />
            <span className={cn("h-0.5 w-full rounded-full bg-white transition-transform", open && "-translate-y-[8px] -rotate-45")} />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-bg/95 backdrop-blur-xl md:hidden"
      >
        <ul className="flex flex-col gap-0.5 px-5 py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="type-body block rounded-xl px-3 py-2.5 text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="type-body mt-2 block rounded-xl bg-accent-soft px-3 py-2.5 text-accent"
              onClick={() => setOpen(false)}
            >
              Let&apos;s Connect
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
