import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Bg =
  | "default"
  | "lowest"
  | "low"
  | "container"
  | "bright"
  | "inverse"
  | "transparent";

const bgClass: Record<Bg, string> = {
  default: "bg-surface",
  lowest: "bg-surface-container-lowest",
  low: "bg-surface-container-low",
  container: "bg-surface-container",
  bright: "bg-surface-bright",
  inverse: "bg-inverse-surface text-inverse-on-surface",
  transparent: "bg-transparent",
};

type Props = {
  children: ReactNode;
  bg?: Bg;
  className?: string;
  id?: string;
};

export function Section({ children, bg = "default", className, id }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-16 md:py-24",
        bgClass[bg],
        className,
      )}
    >
      {children}
    </section>
  );
}
