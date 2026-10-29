"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "relative z-40 transition-colors duration-300",
        open ? "bg-black/70 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav
        className="shell flex h-16 items-center justify-between lg:h-[4.5rem]"
        aria-label="Primary"
      >
        <a href="#top" className="display text-sm font-semibold tracking-tight text-ink">
          {site.name}
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="type-meta text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary type-meta hidden lg:inline-flex">
          Let&apos;s Connect
          <span className="btn-arrow">
            <ArrowUpRight size={14} />
          </span>
        </a>

        <button
          type="button"
          className="mobile-nav-toggle h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-ink"
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
        className="border-t border-white/10 bg-bg/95 backdrop-blur-xl lg:hidden"
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
              className="btn-primary type-meta mt-2 w-full justify-center"
              onClick={() => setOpen(false)}
            >
              Let&apos;s Connect
              <span className="btn-arrow">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
