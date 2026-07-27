import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-soft hover:bg-primary-800 hover:shadow-card-hover",
        secondary:
          "bg-secondary text-secondary-foreground shadow-soft hover:bg-primary-600",
        accent:
          "bg-accent text-accent-foreground shadow-soft hover:brightness-110",
        whatsapp:
          "bg-[#25D366] text-white shadow-soft hover:bg-[#1ebe5b] hover:shadow-card-hover",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white",
        "outline-white":
          "border-2 border-white/80 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary",
        ghost: "text-primary hover:bg-primary-50",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-sm [&_svg]:size-4",
        lg: "h-12 px-8 py-3 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
