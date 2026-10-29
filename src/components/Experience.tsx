import { experience } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  const company = experience[0];

  return (
    <section id="experience" className="section-pad scroll-mt-24">
      <Container>
        <Reveal>
          <SectionHeading
            index="Experience"
            title="Engineering contributions at InTalksAI."
            description="Building backend services and conversational AI for banking workflows — from APIs to LLM orchestration."
          />
        </Reveal>

        <Reveal>
          <div className="rule mb-8" />
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="display type-card text-ink">{company.company}</h3>
            <p className="type-meta text-muted">Coimbatore, Tamil Nadu</p>
          </div>

          <ol className="space-y-12">
            {company.roles.map((role) => (
              <li key={`${role.title}-${role.start}`}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="display text-2xl font-semibold text-ink">
                    {role.title}
                    <span className="type-meta ml-3 font-normal text-muted">
                      {role.type}
                    </span>
                  </h4>
                  <p className="type-meta text-dim">
                    {role.start} – {role.end}
                  </p>
                </div>
                <p className="type-meta mt-2 text-muted">
                  {role.workMode} · {role.location}
                </p>

                {role.contributions.length > 0 ? (
                  <ul className="mt-5 space-y-3">
                    {role.contributions.map((item) => (
                      <li key={item} className="type-body text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
