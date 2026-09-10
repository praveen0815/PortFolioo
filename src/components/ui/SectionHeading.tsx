import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  index: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  index,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)} style={{ marginBottom: "var(--heading-gap)" }}>
      <p className="type-meta mb-2.5 font-mono tracking-[0.18em] text-accent uppercase">
        {index}
      </p>
      <h2 className="display type-section text-ink">{title}</h2>
      {description ? (
        <p className="type-body mt-3 text-muted">{description}</p>
      ) : null}
    </div>
  );
}
