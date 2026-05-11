import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-button font-medium transition-all active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-container !text-black font-bold hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]",
        outline:
          "border border-outline text-on-surface hover:bg-surface-bright/40",
        ghost: "text-on-surface hover:bg-surface-container",
        link: "text-primary underline-offset-4 hover:underline",
        inverse:
          "bg-surface text-on-surface font-bold hover:scale-[1.02]",
        "inverse-outline":
          "border-2 border-surface text-surface hover:bg-surface/10",
      },
      size: {
        sm: "h-9 px-4 text-body-sm",
        md: "h-11 px-6",
        lg: "h-12 px-10 text-body-md",
        xl: "h-14 px-16 text-body-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref as never}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
