"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-semibold text-sm uppercase tracking-[3.15px] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border border-transparent hover:bg-secondary hover:text-secondary-foreground hover:border-border",
        destructive:
          "bg-destructive text-destructive-foreground hover:text-primary-foreground",
        outline:
          "border border-input bg-background hover:bg-background hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground",
        tertiary:
          "bg-tertiary text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Custom SaaS4U Variants
        sage: "bg-[#90A497] text-white hover:bg-[#90A497]",              // muted green
        lightTan: "bg-[#e3d9ca] text-[#63584d] hover:bg-[#90A497]",           // light creamy tan
        mushroom: "bg-[#63584d] text-[#e3d9ca] hover:bg-[#90A497]",           // earthy mushroom brown
        creamyTan: "bg-[#C1B7A0] text-[#e3d9ca] hover:bg-[#90A497]",          // soft off-white tan     
      },
      size: {
        default: "px-5 py-2.5",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
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
