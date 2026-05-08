import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "main" | "nav";
};

export function Container({ children, className, as: As = "div" }: Props) {
  return <As className={cn("container-page", className)}>{children}</As>;
}
