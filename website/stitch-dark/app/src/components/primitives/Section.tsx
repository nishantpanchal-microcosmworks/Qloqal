import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  size?: "default" | "tight";
};

export function Section({ children, className, id, size = "default" }: Props) {
  return (
    <section
      id={id}
      className={cn(
        size === "default" ? "py-16" : "py-10",
        "relative",
        className,
      )}
    >
      {children}
    </section>
  );
}
