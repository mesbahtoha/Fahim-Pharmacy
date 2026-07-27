import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-sm font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary-50 text-primary-800 border border-primary/15",
        solid: "bg-primary text-white",
        accent: "bg-accent/10 text-emerald-700 border border-accent/20",
        gold: "bg-amber-50 text-amber-700 border border-amber-200",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
