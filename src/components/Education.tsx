import { education } from "@/data/education";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  const item = education[0];

  return (
    <section id="education" className="section-pad scroll-mt-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading index="Education" title="Academic Background" />
          </Reveal>
          <Reveal>
            <article className="border-t border-line pt-6">
              <h3 className="display type-degree text-ink">{item.title}</h3>
              <p className="type-institution mt-2 text-muted">{item.institution}</p>
              <p className="type-cgpa mt-3 text-accent">{item.detail}</p>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
