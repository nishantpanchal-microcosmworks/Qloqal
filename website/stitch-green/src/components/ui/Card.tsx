import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className, hover = false }: Props) {
  return (
    <div
      className={cn(
        "rounded-[24px] bg-surface-container-lowest p-8 card-shadow",
        hover && "card-shadow-hover",
        className,
      )}
    >
      {children}
    </div>
  );
}
