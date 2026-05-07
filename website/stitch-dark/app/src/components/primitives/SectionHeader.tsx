import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: ReactNode;
  title: ReactNode;
  lede?: ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeader({ eyebrow, title, lede, align = "center", className }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow}
      <h2 className="font-display text-h2 text-on-surface">{title}</h2>
      {lede && (
        <p className="text-body-md text-on-surface-variant max-w-2xl">{lede}</p>
      )}
    </div>
  );
}
