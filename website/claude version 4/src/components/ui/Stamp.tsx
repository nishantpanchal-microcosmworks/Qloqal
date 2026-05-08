import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = HTMLAttributes<HTMLDivElement> & {
  tone?: "ink" | "green" | "blue" | "yellow";
  children: ReactNode;
};

const tones = {
  ink: "bg-[var(--color-ink)] text-[var(--color-paper)]",
  green: "bg-[var(--color-signal-green)] text-[var(--color-ink)]",
  blue: "bg-[var(--color-signal-blue)] text-[var(--color-paper)]",
  yellow: "bg-[var(--color-signal-yellow)] text-[var(--color-ink)]",
};

export function Stamp({ tone = "ink", className, children, ...rest }: Props) {
  return (
    <div
      {...rest}
      className={cn(
        "inline-flex items-center justify-center px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] border-2 border-ink",
        tones[tone],
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Stamp;
