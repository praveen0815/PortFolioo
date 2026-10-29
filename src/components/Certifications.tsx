import { certifications } from "@/data/education";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="pb-4">
      <Container>
        <Reveal>
          <div className="rule mb-8" />
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <p className="type-meta tracking-[0.16em] text-accent uppercase">
              Certifications
            </p>
            <ul className="flex flex-col gap-4 sm:flex-row sm:gap-12">
              {certifications.map((item) => (
                <li key={item.title}>
                  <p className="display text-lg font-semibold text-ink">{item.title}</p>
                  <p className="type-meta mt-1 text-muted">{item.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
