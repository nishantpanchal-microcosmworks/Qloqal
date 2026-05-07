import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Eyebrow({ children, icon, variant = "primary", className }: Props) {
  const palette =
    variant === "primary"
      ? "bg-primary/10 text-primary border-primary/20"
      : "bg-secondary/10 text-secondary border-secondary/20";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1 rounded-full border text-label-caps uppercase",
        palette,
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
