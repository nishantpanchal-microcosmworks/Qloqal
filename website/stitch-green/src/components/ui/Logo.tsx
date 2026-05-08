import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  /** Render as a div instead of a Link (for nav/footer brand block where parent links). */
  static?: boolean;
};

export function Logo({ className, static: isStatic = false }: Props) {
  const inner = (
    <span className="font-display text-2xl font-extrabold tracking-tight text-primary">
      Qloqal
    </span>
  );

  if (isStatic) {
    return <div className={cn("flex items-center", className)}>{inner}</div>;
  }

  return (
    <Link
      to="/"
      className={cn(
        "flex items-center transition-opacity hover:opacity-80",
        className,
      )}
      aria-label="Qloqal home"
    >
      {inner}
    </Link>
  );
}
