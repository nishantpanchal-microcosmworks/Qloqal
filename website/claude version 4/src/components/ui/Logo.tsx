import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

type Props = {
  to?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "text-[15px]",
  md: "text-[18px]",
  lg: "text-[28px]",
};

export function Logo({ to = "/", className, size = "md" }: Props) {
  const inner = (
    <span
      className={cn(
        "inline-flex items-baseline font-bold tracking-tight",
        sizes[size],
        className,
      )}
    >
      <span>q</span>
      <span className="text-[var(--color-signal-green-dim)]">*</span>
      <span>loqal</span>
    </span>
  );
  return to ? (
    <Link to={to} aria-label="qloqal — home" className="no-underline">
      {inner}
    </Link>
  ) : (
    inner
  );
}

export default Logo;
