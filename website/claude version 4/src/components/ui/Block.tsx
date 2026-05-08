import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type BlockProps = HTMLAttributes<HTMLDivElement> & {
  fill?: "paper" | "paper-2" | "ink" | "green" | "blue" | "yellow";
  border?: boolean;
  shadow?: boolean;
  children: ReactNode;
};

const fills = {
  paper: "bg-[var(--color-paper)] text-[var(--color-ink)]",
  "paper-2": "bg-[var(--color-paper-2)] text-[var(--color-ink)]",
  ink: "bg-[var(--color-ink)] text-[var(--color-paper)]",
  green: "bg-[var(--color-signal-green)] text-[var(--color-ink)]",
  blue: "bg-[var(--color-signal-blue)] text-[var(--color-paper)]",
  yellow: "bg-[var(--color-signal-yellow)] text-[var(--color-ink)]",
};

export function Block({
  fill = "paper",
  border = true,
  shadow = false,
  className,
  children,
  ...rest
}: BlockProps) {
  return (
    <div
      {...rest}
      className={cn(
        fills[fill],
        border && "border-2 border-ink",
        shadow && "shadow-[6px_6px_0_var(--color-ink)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Block;
