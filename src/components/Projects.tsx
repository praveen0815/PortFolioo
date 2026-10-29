import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { projects, type Project } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

export function Projects() {
  return (
    <section id="work" className="section-pad scroll-mt-24">
      <Container>
        <Reveal>
          <SectionHeading
            index="Work"
            title="Selected systems."
            description="Backend, conversational AI, and full-stack projects — described only by what was actually built."
          />
        </Reveal>

        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <Reveal key={project.name}>
              <ProjectRow project={project} reverse={index % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProjectRow({
  project,
  reverse,
}: {
  project: Project;
  reverse: boolean;
}) {
  return (
    <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <ProjectVisual
        title={project.name}
        className={reverse ? "lg:order-2" : undefined}
      />
      <div className={reverse ? "lg:order-1" : undefined}>
        <p className="type-meta mb-3 tracking-[0.14em] text-accent uppercase">
          {project.category}
        </p>
        <h3 className="display type-card text-ink">{project.name}</h3>
        <p className="type-body mt-4 text-muted">{project.description}</p>
        <p className="type-body mt-3 text-muted">{project.built}</p>

        <ul className="mt-5 space-y-2">
          {project.features.map((feature) => (
            <li key={feature} className="type-body flex gap-2 text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {feature}
            </li>
          ))}
        </ul>

        {project.note ? (
          <p className="type-meta mt-4 text-dim">{project.note}</p>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="type-meta rounded-full bg-white/5 px-3 py-1 text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary type-meta"
            >
              <GithubIcon size={15} />
              {project.githubLabel ?? "GitHub"}
              <span className="btn-arrow">
                <ArrowUpRight size={14} />
              </span>
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn-primary type-meta"
            >
              Live demo
              <span className="btn-arrow">
                <ArrowUpRight size={14} />
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function ProjectVisual({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative min-h-[240px] overflow-hidden rounded-[2rem] bg-[linear-gradient(145deg,#ff7a1a_0%,#ff3b1f_48%,#111_100%)] sm:min-h-[320px]",
        className,
      )}
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-10 h-24 w-24 rounded-full border border-white/30" />
        <div className="absolute top-24 left-28 h-3 w-3 rounded-full bg-white" />
        <div className="absolute right-16 bottom-16 h-32 w-32 rounded-full border border-white/20" />
        <div className="absolute top-1/2 left-1/3 h-px w-40 rotate-12 bg-white/30" />
        <div className="absolute top-1/3 right-1/4 h-px w-28 -rotate-6 bg-white/20" />
      </div>
      <p className="absolute right-6 bottom-6 display text-sm font-semibold text-white/70">
        {title}
      </p>
    </div>
  );
}
