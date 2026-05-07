import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
};

export function GradientBorderCard({ children, className }: Props) {
  return (
    <div
      className={cn(
        "gradient-border rounded-lg bg-surface-container glow-hover transition-all",
        className,
      )}
    >
      {children}
    </div>
  );
}
