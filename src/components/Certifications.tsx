import { certifications } from "@/data/education";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="pb-8">
      <Container>
        <Reveal>
          <div className="glass card-pad flex flex-col gap-4 rounded-2xl sm:flex-row sm:items-center sm:justify-between">
            <p className="type-meta font-mono tracking-[0.16em] text-dim uppercase">
              08 / Certifications
            </p>
            <ul className="flex flex-col gap-3 sm:flex-row sm:gap-8">
              {certifications.map((item) => (
                <li key={item.title}>
                  <p className="type-body text-ink">{item.title}</p>
                  <p className="type-meta text-muted">{item.issuer}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
