import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
    <section id="about" className="section-pad scroll-mt-20">
      <Container>
        <Reveal>
          <SectionHeading
            index="01 / About"
            title="Software that reasons, routes, and responds."
            description="Focused on generative AI, large language models, and the backend systems that make them useful."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <Reveal>
            <div className="type-body space-y-4 text-muted">
              {site.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass card-pad rounded-2xl">
              <p className="type-meta mb-3 font-mono tracking-[0.16em] text-dim uppercase">
                Currently focused on
              </p>
              <ul className="space-y-2.5">
                {focus.map((item) => (
                  <li key={item} className="type-body flex items-start gap-3 text-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
