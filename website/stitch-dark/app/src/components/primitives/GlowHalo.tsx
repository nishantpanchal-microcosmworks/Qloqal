import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  color?: "primary" | "secondary" | "blend";
  size?: "sm" | "md" | "lg" | "xl";
};

const sizeMap = {
  sm: "w-40 h-40 blur-[60px]",
  md: "w-72 h-72 blur-[100px]",
  lg: "w-[420px] h-[420px] blur-[120px]",
  xl: "w-[600px] h-[600px] blur-[140px]",
};

const colorMap = {
  primary: "bg-primary/15",
  secondary: "bg-secondary-container/20",
  blend: "bg-gradient-to-tr from-primary/20 to-secondary-container/20",
};

export function GlowHalo({ className, color = "primary", size = "md" }: Props) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute pointer-events-none rounded-full",
        sizeMap[size],
        colorMap[color],
        className,
      )}
    />
  );
}
