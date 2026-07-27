import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/reveal";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

/** Consistent heading block used at the top of every section. */
export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-12 max-w-2xl md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && <Badge className="mb-4">{badge}</Badge>}
      <h2 className="text-3xl font-bold leading-snug text-primary-900 text-balance md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground text-balance">
          {description}
        </p>
      )}
    </Reveal>
  );
}
