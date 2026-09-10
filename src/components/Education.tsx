import { education } from "@/data/education";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  const item = education[0];

  return (
    <section id="education" className="section-pad scroll-mt-20">
      <Container>
        <Reveal>
          <SectionHeading index="07 / Education" title="Academic Background" />
        </Reveal>

        <Reveal>
          <article className="glass card-pad max-w-xl rounded-2xl">
            <h3 className="display type-degree text-ink">{item.title}</h3>
            <p className="type-institution mt-1.5 text-muted">{item.institution}</p>
            <p className="type-cgpa mt-2 text-accent">{item.detail}</p>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
