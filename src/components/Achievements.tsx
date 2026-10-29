import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import type { GithubProfile } from "@/lib/github";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type AchievementsProps = {
  github: GithubProfile | null;
};

export function Achievements({ github }: AchievementsProps) {
  return (
    <section id="coding" className="section-pad scroll-mt-24">
      <Container>
        <Reveal>
          <SectionHeading
            index="Coding"
            title="DSA as supporting evidence, not the whole story."
            description="Consistent practice in algorithms and data structures alongside building AI and backend systems."
          />
        </Reveal>

        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <a
              href={site.leetcode}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <p className="type-meta text-dim uppercase">LeetCode</p>
              <p className="display type-stat mt-4 text-ink">{site.leetcodeSolved}</p>
              <p className="type-body mt-2 text-muted">problems solved</p>
              <p className="type-meta mt-6 inline-flex items-center gap-1 text-accent">
                View profile
                <ArrowUpRight size={14} />
              </p>
            </a>
          </Reveal>

          <Reveal delay={0.06}>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <p className="type-meta text-dim uppercase">GitHub</p>
              {github ? (
                <>
                  <p className="display type-stat mt-4 text-ink">{github.publicRepos}</p>
                  <p className="type-body mt-2 text-muted">public repositories</p>
                </>
              ) : (
                <>
                  <p className="display type-card mt-4 text-ink">@{site.githubUser}</p>
                  <p className="type-body mt-2 text-muted">
                    Public work across AI, backend, and full-stack projects.
                  </p>
                </>
              )}
              <p className="type-meta mt-6 inline-flex items-center gap-1 text-accent">
                View GitHub
                <ArrowUpRight size={14} />
              </p>
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
