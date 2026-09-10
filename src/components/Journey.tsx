import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Journey() {
  return (
    <section id="journey" className="section-pad scroll-mt-20">
      <Container>
        <Reveal>
          <SectionHeading
            index="05 / Journey"
            title={site.journey.message}
            description="A deliberate path from engineering fundamentals into AI software systems."
          />
        </Reveal>

        <Reveal>
          <ol className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-7">
            {site.journey.steps.map((step, index) => (
              <li
                key={step}
                className="glass relative flex min-h-[96px] flex-col justify-between rounded-2xl p-3.5"
              >
                <span className="type-meta font-mono text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="type-meta leading-snug font-medium text-ink">{step}</p>
                {index < site.journey.steps.length - 1 ? (
                  <span className="pointer-events-none absolute top-1/2 -right-2 hidden h-px w-4 bg-line lg:block" />
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
