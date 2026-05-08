import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = HTMLAttributes<HTMLSpanElement> & {
  tone?: "ink" | "green" | "blue" | "mute";
  children: ReactNode;
};

const tones = {
  ink: "text-[var(--color-ink)]",
  green: "text-[var(--color-signal-green-dim)]",
  blue: "text-[var(--color-signal-blue)]",
  mute: "text-[var(--color-ink-mute)]",
};

export function KickerLabel({
  tone = "ink",
  className,
  children,
  ...rest
}: Props) {
  return (
    <span
      {...rest}
      className={cn(
        "inline-block text-[11px] font-bold uppercase tracking-[0.2em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export default KickerLabel;
