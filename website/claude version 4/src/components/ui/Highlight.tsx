import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = HTMLAttributes<HTMLSpanElement> & {
  tone?: "yellow" | "green" | "blue" | "ink";
  children: ReactNode;
};

const tones = {
  yellow: "bg-[var(--color-signal-yellow)] text-[var(--color-ink)]",
  green: "bg-[var(--color-signal-green)] text-[var(--color-ink)]",
  blue: "bg-[var(--color-signal-blue)] text-[var(--color-paper)]",
  ink: "bg-[var(--color-ink)] text-[var(--color-paper)]",
};

export function Highlight({
  tone = "yellow",
  className,
  children,
  ...rest
}: Props) {
  return (
    <span
      {...rest}
      className={cn("px-1 box-decoration-clone", tones[tone], className)}
    >
      {children}
    </span>
  );
}

export default Highlight;
