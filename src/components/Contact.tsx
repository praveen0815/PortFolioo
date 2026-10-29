"use client";

import { useState, type ComponentType, type FormEvent } from "react";
import { ArrowUpRight, Download, Mail, Phone } from "lucide-react";
import { GithubIcon, LeetcodeIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "website visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-pad scroll-mt-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal>
            <p className="type-meta mb-4 tracking-[0.16em] text-accent uppercase">Contact</p>
            <h2 className="display type-section text-ink">
              Let&apos;s Build Something Intelligent.
            </h2>
            <p className="type-hero-sub mt-5 max-w-xl text-muted">
              I&apos;m interested in opportunities involving AI, LLMs, backend engineering, and intelligent software systems.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={`mailto:${site.email}`} className="btn-primary type-meta">
                Let&apos;s Connect
                <span className="btn-arrow">
                  <ArrowUpRight size={14} />
                </span>
              </a>
              <a
                href={site.resumeHref}
                download={site.resumeDownloadName}
                className="btn-secondary type-meta"
              >
                Download Resume
                <span className="btn-arrow">
                  <Download size={14} />
                </span>
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary type-meta"
              >
                GitHub
                <span className="btn-arrow">
                  <ArrowUpRight size={14} />
                </span>
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary type-meta"
              >
                LinkedIn
                <span className="btn-arrow">
                  <ArrowUpRight size={14} />
                </span>
              </a>
            </div>

            <ul className="mt-10 space-y-3">
              <ContactLink href={`mailto:${site.email}`} label="Email" value={site.email} icon={Mail} />
              <ContactLink href={site.phoneHref} label="Phone" value={site.phone} icon={Phone} />
              <ContactLink href={site.linkedin} label="LinkedIn" value="praveenkumar-r" icon={LinkedinIcon} external />
              <ContactLink href={site.github} label="GitHub" value={site.githubUser} icon={GithubIcon} external />
              <ContactLink href={site.leetcode} label="LeetCode" value="Praveen1508" icon={LeetcodeIcon} external />
            </ul>
          </Reveal>

          <Reveal delay={0.06}>
            <form onSubmit={handleSubmit} className="panel card-pad">
              <p className="type-body mb-5 text-muted">
                This form opens your email client. There is no server-side inbox behind it.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <label htmlFor="contact-name" className="type-meta block text-muted">
                  Name
                  <input
                    id="contact-name"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="type-body mt-2 w-full rounded-2xl border border-line bg-bg px-3 py-3 text-ink"
                    autoComplete="name"
                  />
                </label>
                <label htmlFor="contact-email" className="type-meta block text-muted">
                  Email
                  <input
                    id="contact-email"
                    required
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="type-body mt-2 w-full rounded-2xl border border-line bg-bg px-3 py-3 text-ink"
                    autoComplete="email"
                  />
                </label>
              </div>
              <label htmlFor="contact-message" className="type-meta mt-4 block text-muted">
                Message
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="type-body mt-2 w-full resize-y rounded-2xl border border-line bg-bg px-3 py-3 text-ink"
                />
              </label>
              <button type="submit" className="btn-primary type-meta mt-5">
                Send via email
                <span className="btn-arrow">
                  <ArrowUpRight size={14} />
                </span>
              </button>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ContactLink({
  href,
  label,
  value,
  icon: Icon,
  external,
}: {
  href: string;
  label: string;
  value: string;
  icon?: ComponentType<{ size?: number }>;
  external?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="flex items-center gap-3 py-1"
      >
        {Icon ? (
          <span className="text-accent">
            <Icon size={16} />
          </span>
        ) : null}
        <span>
          <span className="type-meta block text-dim">{label}</span>
          <span className="type-body text-ink">{value}</span>
        </span>
      </a>
    </li>
  );
}
