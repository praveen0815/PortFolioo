import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const focus = [
  "LLM-powered applications",
  "AI agents & orchestration",
  "Conversational systems",
  "FastAPI backends",
  "REST APIs",
  "Context & state workflows",
];

export function About() {
  return (
    <section id="about" className="section-pad scroll-mt-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-20">
          <Reveal>
            <p className="type-meta mb-4 font-medium tracking-[0.16em] text-accent uppercase">
              Behind the Systems
            </p>
            <h2 className="display type-section text-ink">
              Building Intelligent Software That Solves Real Problems
            </h2>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="type-hero-sub text-muted">
              I&apos;m focused on generative AI, large language models, conversational systems, and the backend engineering that makes them useful.
            </p>
            <div className="type-body mt-6 space-y-4 text-muted">
              {site.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {focus.map((item) => (
                <li key={item} className="type-body flex items-start gap-3 text-ink">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-primary type-meta mt-8">
              Let&apos;s Connect
              <span className="btn-arrow">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
