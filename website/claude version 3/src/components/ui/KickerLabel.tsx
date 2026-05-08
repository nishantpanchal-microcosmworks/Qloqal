import { cn } from "@/lib/cn";

export function KickerLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("kicker block", className)}>{children}</span>;
}
