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
    <section id="coding" className="section-pad scroll-mt-20">
      <Container>
        <Reveal>
          <SectionHeading
            index="06 / Problem solving"
            title="DSA as supporting evidence, not the whole story."
            description="Consistent practice in algorithms and data structures alongside building AI and backend systems."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <a
              href={site.leetcode}
              target="_blank"
              rel="noreferrer"
              className="glass card-pad group flex h-full flex-col justify-between rounded-3xl transition-colors hover:border-white/12"
            >
              <p className="type-meta font-mono tracking-[0.16em] text-dim uppercase">
                LeetCode
              </p>
              <div className="mt-5">
                <p className="display type-stat text-ink">
                  {site.leetcodeSolved}
                </p>
                <p className="type-body mt-1.5 text-muted">problems solved</p>
              </div>
              <p className="type-meta mt-6 inline-flex items-center gap-1 text-accent">
                View profile
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </p>
            </a>
          </Reveal>

          <Reveal delay={0.06}>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="glass card-pad group flex h-full flex-col justify-between rounded-3xl transition-colors hover:border-white/12"
            >
              <p className="type-meta font-mono tracking-[0.16em] text-dim uppercase">
                GitHub
              </p>
              <div className="mt-5">
                {github ? (
                  <>
                    <p className="display type-stat text-ink">
                      {github.publicRepos}
                    </p>
                    <p className="type-body mt-1.5 text-muted">public repositories</p>
                  </>
                ) : (
                  <>
                    <p className="display type-card text-ink">
                      @{site.githubUser}
                    </p>
                    <p className="type-body mt-1.5 text-muted">
                      Public work across AI, backend, and full-stack projects.
                    </p>
                  </>
                )}
              </div>
              <p className="type-meta mt-6 inline-flex items-center gap-1 text-accent">
                View GitHub
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </p>
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
