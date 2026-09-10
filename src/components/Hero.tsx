"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LeetcodeIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

const socials = [
  { href: site.github, label: "GitHub", icon: GithubIcon },
  { href: site.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  { href: site.leetcode, label: "LeetCode", icon: LeetcodeIcon },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16">
      <div className="grid-overlay pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <Container className="relative z-10">
        <motion.div
          initial={reduceMotion ? false : { y: 12 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="type-meta mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-line bg-bg-elevated px-3 py-1.5 font-mono tracking-[0.14em] text-muted uppercase">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span className="truncate">SWE @ InTalksAI</span>
            <span className="hidden truncate sm:inline">· {site.location}</span>
          </p>

          <p className="type-meta mb-3 font-medium text-accent">{site.title}</p>

          <h1 className="display type-hero text-ink">
            Building Intelligent Systems with{" "}
            <span className="text-accent">AI & Software Engineering.</span>
          </h1>

          <p className="type-hero-sub mt-5 max-w-2xl text-muted">
            {site.hero.supporting}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {site.hero.badges.map((badge) => (
              <span
                key={badge}
                className="type-meta rounded-full border border-line bg-bg-elevated px-3 py-1 text-muted"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#work"
              className="type-body inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 font-medium text-bg transition-opacity hover:opacity-90"
            >
              View My Work
              <ArrowDownRight size={16} />
            </a>
            <a
              href="#contact"
              className="type-body inline-flex items-center justify-center rounded-full border border-line px-5 py-2.5 text-ink transition-colors hover:border-accent/40 hover:bg-accent-soft"
            >
              Let&apos;s Connect
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="type-meta inline-flex items-center gap-2 text-muted transition-colors hover:text-ink"
              >
                <item.icon size={16} />
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>

        <HeroSystemMap />
      </Container>
    </section>
  );
}

const systemFlow = [
  "Conversations",
  "FastAPI",
  "Intent routing",
  "LLM agents",
  "Redis context",
  "PostgreSQL",
];

function HeroSystemMap() {
  return (
    <div className="mt-10 sm:mt-12" aria-hidden="true">
      <div className="glass card-pad rounded-2xl">
        <p className="type-meta mb-3 font-mono tracking-[0.16em] text-dim uppercase">
          System sketch · conversational AI backend
        </p>
        <ol className="flex flex-wrap items-center gap-2">
          {systemFlow.map((node, index) => (
            <li key={node} className="flex items-center gap-2">
              <span className="type-meta rounded-full border border-line bg-bg-elevated px-3 py-1 text-ink">
                {node}
              </span>
              {index < systemFlow.length - 1 ? (
                <span className="text-dim">→</span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
