import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Journey() {
  return (
    <section id="journey" className="section-pad scroll-mt-24">
      <Container>
        <Reveal>
          <SectionHeading
            index="Journey"
            title={site.journey.message}
            description="A deliberate path from engineering fundamentals into AI software systems."
          />
        </Reveal>

        <Reveal>
          <ol className="grid gap-px overflow-hidden rounded-[2rem] bg-line sm:grid-cols-2 lg:grid-cols-7">
            {site.journey.steps.map((step, index) => (
              <li key={step} className="bg-bg-elevated p-5">
                <span className="type-meta text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="display mt-8 text-base font-semibold leading-snug text-ink">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
