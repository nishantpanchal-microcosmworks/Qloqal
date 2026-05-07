import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
};

export function PhoneMockup({ children, className }: Props) {
  return (
    <div
      className={cn(
        "relative glass-card p-4 rounded-[2.5rem] max-w-sm shadow-2xl",
        className,
      )}
    >
      <div className="bg-surface rounded-[2rem] overflow-hidden aspect-[9/19] p-4 border border-white/10 flex flex-col">
        {children}
      </div>
    </div>
  );
}
