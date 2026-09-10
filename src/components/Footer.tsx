import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container className="type-meta flex flex-col gap-2 text-dim sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. {site.title}.
        </p>
        <p>{site.location}</p>
      </Container>
    </footer>
  );
}
