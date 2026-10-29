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
    <div className={cn("max-w-3xl", className)} style={{ marginBottom: "var(--heading-gap)" }}>
      <p className="type-meta mb-3 font-medium tracking-[0.16em] text-accent uppercase">
        {index}
      </p>
      <h2 className="display type-section text-ink">{title}</h2>
      {description ? (
        <p className="type-hero-sub mt-4 max-w-xl text-muted">{description}</p>
      ) : null}
    </div>
  );
}
