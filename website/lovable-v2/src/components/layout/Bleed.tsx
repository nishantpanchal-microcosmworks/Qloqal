import type { ReactNode } from "react";

export function Bleed({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`relative w-screen left-1/2 -ml-[50vw] ${className}`}>{children}</div>;
}
