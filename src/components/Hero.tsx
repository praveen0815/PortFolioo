"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LeetcodeIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { NeuralBackground } from "@/components/NeuralBackground";

const socials = [
  { href: site.github, label: "GitHub", icon: GithubIcon },
  { href: site.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  { href: site.leetcode, label: "LeetCode", icon: LeetcodeIcon },
];

const heroFocus = [
  { id: "01", label: "LLM Applications" },
  { id: "02", label: "AI Agents" },
  { id: "03", label: "Backend Systems" },
  { id: "04", label: "Conversational AI" },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden pt-8 pb-16 sm:pb-20 lg:min-h-[78vh] lg:pb-24">
      <NeuralBackground />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[55%] bg-[radial-gradient(circle_at_70%_50%,rgba(0,0,0,0.55),transparent_62%)]" />

      <Container className="relative z-10">
        <motion.div
          initial={reduceMotion ? false : { y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
        >
          <div>
            <p className="type-meta mb-5 text-white/80">Hey, I&apos;m Praveenkumar</p>
            <h1 className="display type-display text-white">
              AI Software
              <br />
              Engineer
            </h1>
            <p className="type-hero-sub mt-6 max-w-xl text-white/80">
              {site.hero.heading}
            </p>
            <p className="type-body mt-4 max-w-xl text-white/70">
              {site.hero.supporting}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a href="#work" className="btn-secondary type-meta">
                View My Work
                <span className="btn-arrow">
                  <ArrowUpRight size={14} />
                </span>
              </a>
              <a
                href={site.resumeHref}
                download={site.resumeDownloadName}
                className="btn-primary type-meta"
              >
                Download Resume
                <span className="btn-arrow">
                  <Download size={14} />
                </span>
              </a>
            </div>
            <a href="#contact" className="btn-ghost type-meta mt-5">
              Let&apos;s Connect
            </a>
          </div>

          <div className="max-w-md lg:justify-self-end lg:pb-6">
            <p className="display type-card text-white">
              Engineering intelligent systems that turn conversations into useful software.
            </p>
            <p className="type-body mt-4 text-white/70">
              From LLM-powered applications to scalable backend services, I build software designed to solve real-world problems.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="type-meta inline-flex items-center gap-2 text-white/75 transition-colors hover:text-white"
                >
                  <item.icon size={16} />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <ul className="relative z-10 mt-14 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {heroFocus.map((item) => (
            <li key={item.id}>
              <p className="type-meta text-white/55">#{item.id}</p>
              <p className="mt-2 text-sm font-medium text-white/90">{item.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
