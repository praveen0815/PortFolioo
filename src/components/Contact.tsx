"use client";

import { useState, type ComponentType, type FormEvent } from "react";
import { Mail, Phone } from "lucide-react";
import { GithubIcon, LeetcodeIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "website visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-pad scroll-mt-20">
      <Container>
        <Reveal>
          <SectionHeading
            index="09 / Contact"
            title={site.contact.heading}
            description={site.contact.description}
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <ul className="space-y-3">
              <ContactLink
                href={`mailto:${site.email}`}
                label="Email"
                value={site.email}
                icon={Mail}
              />
              <ContactLink
                href={site.phoneHref}
                label="Phone"
                value={site.phone}
                icon={Phone}
              />
              <ContactLink
                href={site.linkedin}
                label="LinkedIn"
                value="praveenkumar-r"
                icon={LinkedinIcon}
                external
              />
              <ContactLink
                href={site.github}
                label="GitHub"
                value={site.githubUser}
                icon={GithubIcon}
                external
              />
              <ContactLink
                href={site.leetcode}
                label="LeetCode"
                value="Praveen1508"
                icon={LeetcodeIcon}
                external
              />
            </ul>
          </Reveal>

          <Reveal delay={0.06}>
            <form
              onSubmit={handleSubmit}
              className="glass card-pad rounded-3xl"
            >
              <p className="type-body mb-4 text-muted">
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
                    className="type-body mt-2 w-full rounded-xl border border-line bg-bg px-3 py-2.5 text-ink"
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
                    className="type-body mt-2 w-full rounded-xl border border-line bg-bg px-3 py-2.5 text-ink"
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
                  className="type-body mt-2 w-full resize-y rounded-xl border border-line bg-bg px-3 py-2.5 text-ink"
                />
              </label>
              <button
                type="submit"
                className="type-body mt-5 inline-flex rounded-full bg-accent px-5 py-2.5 font-medium text-bg transition-opacity hover:opacity-90"
              >
                Send via email
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
        className="glass flex items-center gap-3.5 rounded-2xl px-4 py-3 transition-colors hover:border-white/12"
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
