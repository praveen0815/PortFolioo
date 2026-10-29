import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

const strip = ["Python", "FastAPI", "LLMs", "LangChain", "AI Agents", "PostgreSQL", "Redis"] as const;

export function TechStrip() {
  return (
    <section className="border-b border-line bg-black/40 py-8 sm:py-10" aria-label="Technologies">
      <Container className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-12">
        <p className="type-meta shrink-0 max-w-[9rem] text-dim">Building With</p>
        <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
          {strip.map((item) => (
            <li key={item} className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              <span className="display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                {item}
              </span>
            </li>
          ))}
        </ul>
        <p className="sr-only">
          Primary stack also includes {site.hero.badges.join(", ")}.
        </p>
      </Container>
    </section>
  );
}
