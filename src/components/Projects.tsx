import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { projects, type Project } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  const featured = projects.find((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section id="work" className="section-pad scroll-mt-20">
      <Container>
        <Reveal>
          <SectionHeading
            index="03 / Work"
            title="Selected systems."
            description="Backend, conversational AI, and full-stack projects — described only by what was actually built."
          />
        </Reveal>

        {featured ? (
          <Reveal>
            <ProjectCard project={featured} featured />
          </Reveal>
        ) : null}

        <div className="mt-5 grid items-stretch gap-5 lg:grid-cols-2">
          {rest.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article className="glass card-pad group flex h-full flex-col rounded-3xl transition-colors hover:border-white/12">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="type-meta font-mono tracking-[0.14em] text-accent uppercase">
          {project.category}
        </span>
        {featured ? (
          <span className="type-meta rounded-full border border-line px-2 py-0.5 text-muted">
            Featured
          </span>
        ) : null}
      </div>

      <h3 className="display type-card text-balance text-ink">
        {project.name}
      </h3>
      <p className="type-body mt-2.5 text-muted">
        {project.description}
      </p>

      <div className={`mt-5 grid gap-4 ${featured ? "md:grid-cols-2" : ""}`}>
        <div>
          <p className="type-meta mb-1 font-mono tracking-[0.14em] text-dim uppercase">
            Problem
          </p>
          <p className="type-body text-muted">{project.problem}</p>
        </div>
        <div>
          <p className="type-meta mb-1 font-mono tracking-[0.14em] text-dim uppercase">
            What I built
          </p>
          <p className="type-body text-muted">{project.built}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-1.5">
        {project.features.map((feature) => (
          <li key={feature} className="type-body flex gap-2 text-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
            {feature}
          </li>
        ))}
      </ul>

      {project.note ? (
        <p className="type-meta mt-3 text-dim">{project.note}</p>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="type-meta rounded-full border border-line px-2.5 py-1 text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="type-meta inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-ink transition-colors hover:border-accent/40 hover:bg-accent-soft"
          >
            <GithubIcon size={15} />
            GitHub
          </a>
        ) : null}
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="type-meta inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-1.5 text-bg transition-opacity hover:opacity-90"
          >
            Live demo
            <ArrowUpRight size={15} />
          </a>
        ) : null}
      </div>
    </article>
  );
}
