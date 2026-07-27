import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";

interface PageHeaderProps {
  badge: string;
  title: string;
  description?: string;
}

/** Hero banner shown at the top of every inner page. */
export function PageHeader({ badge, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 py-20 md:py-28">
      {/* decorative blurred orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="container relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Badge className="mb-5 border-white/20 bg-white/10 text-white backdrop-blur-sm">
            {badge}
          </Badge>
          <h1 className="text-4xl font-bold leading-tight text-white text-balance md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-primary-100/90 text-balance">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
