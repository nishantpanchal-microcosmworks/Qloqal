import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("inline-flex items-center gap-2 group", className)}>
      <span
        aria-hidden
        className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-[var(--color-primary)] text-[var(--color-primary)] font-display italic font-medium text-lg group-hover:rotate-6 transition-transform"
      >
        q
      </span>
      <span className="font-display text-xl font-medium tracking-tight">Qloqal</span>
    </Link>
  );
}
