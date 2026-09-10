"use client";

import { useMemo, useState } from "react";
import { skillGroups, type SkillPriority } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

const filters = [{ id: "all", label: "All" }, ...skillGroups.map((group) => ({
  id: group.id,
  label: group.label,
}))];

const priorityCopy: Record<SkillPriority, string> = {
  core: "Primary stack",
  strong: "Working knowledge",
  working: "Familiar",
};

export function Skills() {
  const [active, setActive] = useState("all");

  const visibleGroups = useMemo(
    () =>
      active === "all"
        ? skillGroups
        : skillGroups.filter((group) => group.id === active),
    [active],
  );

  return (
    <section id="skills" className="section-pad scroll-mt-20">
      <Container>
        <Reveal>
          <SectionHeading
            index="04 / Skills"
            title="A stack weighted toward AI systems and backends."
            description="Core tools are emphasized. Everything else is listed with the weight it actually has in my work."
          />
        </Reveal>

        <Reveal>
          <div
            className="-mx-[var(--pad-x)] mb-6 flex gap-1.5 overflow-x-auto px-[var(--pad-x)] pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
            role="tablist"
            aria-label="Skill categories"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={active === filter.id}
                onClick={() => setActive(filter.id)}
                className={cn(
                  "type-meta shrink-0 rounded-full border px-3 py-1.5 transition-colors",
                  active === filter.id
                    ? "border-accent/40 bg-accent-soft text-accent"
                    : "border-line text-muted hover:text-ink",
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="space-y-5">
          {visibleGroups.map((group) => (
            <Reveal key={group.id}>
              <div>
                <h3 className="type-meta mb-2 font-mono tracking-[0.16em] text-dim uppercase">
                  {group.label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill.name}>
                      <span
                        title={priorityCopy[skill.priority]}
                        className={cn(
                          "type-meta inline-flex items-center rounded-full border transition-colors",
                          skill.priority === "core" &&
                            "border-accent/35 bg-accent-soft px-3 py-1.5 text-accent hover:border-accent/60",
                          skill.priority === "strong" &&
                            "border-line bg-bg-elevated px-3 py-1.5 text-ink hover:border-white/20",
                          skill.priority === "working" &&
                            "border-transparent bg-white/5 px-2.5 py-1 text-muted hover:text-ink",
                        )}
                      >
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="type-meta mt-6 text-dim">
          Larger, highlighted items are the tools I use most in AI and backend work.
        </p>
      </Container>
    </section>
  );
}
