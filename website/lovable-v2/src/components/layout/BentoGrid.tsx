import type { ReactNode } from "react";

export function BentoGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-3 md:gap-4">
      {children}
    </div>
  );
}

type CellProps = {
  children: ReactNode;
  span?: "1x1" | "2x1" | "1x2" | "2x2" | "3x1" | "4x1";
  tone?: "white" | "cream" | "teal" | "blue" | "ink";
  className?: string;
};

const spanClasses: Record<NonNullable<CellProps["span"]>, string> = {
  "1x1": "col-span-1 row-span-1",
  "2x1": "col-span-2 row-span-1",
  "1x2": "col-span-1 row-span-2",
  "2x2": "col-span-2 row-span-2",
  "3x1": "col-span-2 md:col-span-3 row-span-1",
  "4x1": "col-span-2 md:col-span-4 row-span-1",
};

const toneClasses: Record<NonNullable<CellProps["tone"]>, string> = {
  white: "bg-white border border-border text-ink",
  cream: "bg-cream border border-border text-ink",
  teal: "bg-brand-green-dark text-white",
  blue: "bg-brand-blue-dark text-white",
  ink: "bg-ink text-white",
};

export function BentoCell({ children, span = "1x1", tone = "white", className = "" }: CellProps) {
  return (
    <div
      className={`${spanClasses[span]} ${toneClasses[tone]} rounded-lg p-5 md:p-6 flex flex-col ${className}`}
    >
      {children}
    </div>
  );
}
