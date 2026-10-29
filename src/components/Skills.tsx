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
    <section id="skills" className="section-pad scroll-mt-24">
      <Container>
        <Reveal>
          <SectionHeading
            index="Skills"
            title="A stack weighted toward AI systems and backends."
            description="Core tools are emphasized. Everything else is listed with the weight it actually has in my work."
          />
        </Reveal>

        <Reveal>
          <div
            className="-mx-[var(--pad-x)] mb-8 flex gap-2 overflow-x-auto px-[var(--pad-x)] pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
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
                  "type-meta shrink-0 rounded-full px-4 py-2 transition-colors",
                  active === filter.id
                    ? "bg-accent text-white"
                    : "bg-white/5 text-muted hover:text-ink",
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="space-y-8">
          {visibleGroups.map((group) => (
            <Reveal key={group.id}>
              <div>
                <h3 className="type-meta mb-3 tracking-[0.16em] text-dim uppercase">
                  {group.label}
                </h3>
                <ul className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <li key={skill.name}>
                      <span
                        title={priorityCopy[skill.priority]}
                        className={cn(
                          "type-meta inline-flex items-center rounded-full transition-colors",
                          skill.priority === "core" &&
                            "bg-accent px-4 py-2 text-white",
                          skill.priority === "strong" &&
                            "bg-white/5 px-3.5 py-1.5 text-ink",
                          skill.priority === "working" &&
                            "px-3 py-1 text-muted",
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
      </Container>
    </section>
  );
}
