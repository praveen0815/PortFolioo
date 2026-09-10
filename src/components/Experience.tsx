import { experience } from "@/data/experience";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  const company = experience[0];

  return (
    <section id="experience" className="section-pad scroll-mt-20">
      <Container>
        <Reveal>
          <SectionHeading
            index="02 / Experience"
            title="Engineering contributions at InTalksAI."
            description="Building backend services and conversational AI for banking workflows — from APIs to LLM orchestration."
          />
        </Reveal>

        <Reveal>
          <div className="glass card-pad rounded-3xl">
            <div className="mb-6 flex flex-col gap-1.5 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="type-meta font-mono tracking-[0.16em] text-accent uppercase">
                  Current
                </p>
                <h3 className="display type-card mt-1.5 text-ink">
                  {company.company}
                </h3>
              </div>
              <p className="type-meta text-muted">Coimbatore, Tamil Nadu</p>
            </div>

            <ol className="relative space-y-8 border-l border-line pl-5 sm:pl-7">
              {company.roles.map((role) => (
                <li key={`${role.title}-${role.start}`} className="relative">
                  <span
                    className={`absolute top-1.5 -left-[27px] h-2.5 w-2.5 rounded-full border sm:-left-[35px] ${
                      role.current
                        ? "border-accent bg-accent"
                        : "border-line bg-bg-elevated"
                    }`}
                  />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h4 className="type-body font-medium text-ink">
                      {role.title}
                      <span className="type-meta ml-2 font-normal text-muted">
                        {role.type}
                      </span>
                    </h4>
                    <p className="type-meta shrink-0 font-mono text-dim">
                      {role.start} – {role.end}
                    </p>
                  </div>
                  <p className="type-meta mt-1 text-muted">
                    {role.workMode} · {role.location}
                  </p>

                  {role.contributions.length > 0 ? (
                    <ul className="mt-3 space-y-2">
                      {role.contributions.map((item) => (
                        <li
                          key={item}
                          className="type-body text-muted"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
