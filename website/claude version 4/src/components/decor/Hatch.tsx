import { cn } from "@/lib/cn";

type Props = {
  variant?: "45" | "90" | "dot" | "green";
  className?: string;
};

export function Hatch({ variant = "45", className }: Props) {
  const cls =
    variant === "90"
      ? "hatch-90"
      : variant === "dot"
        ? "hatch-dot"
        : variant === "green"
          ? "hatch-green"
          : "hatch-45";
  return <div aria-hidden className={cn("absolute inset-0", cls, className)} />;
}

export default Hatch;
