import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variants = {
      default: "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(245,166,35,0.15)] hover:shadow-[0_0_30px_rgba(245,166,35,0.3)] hover:-translate-y-0.5",
      outline: "border border-border bg-transparent hover:bg-white/5 hover:border-white/20 text-foreground",
      ghost: "hover:bg-white/5 hover:text-foreground text-muted-foreground",
    };

    const sizes = {
      default: "h-12 px-8 py-2",
      sm: "h-9 px-4 text-xs",
      lg: "h-14 px-10 text-base",
      icon: "h-12 w-12",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-95",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
