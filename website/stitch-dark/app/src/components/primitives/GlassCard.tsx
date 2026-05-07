import type { ReactNode, ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>;

export function GlassCard<T extends ElementType = "div">({
  as,
  children,
  className,
  ...rest
}: Props<T>) {
  const Comp = (as ?? "div") as ElementType;
  return (
    <Comp className={cn("glass-card rounded-xl", className)} {...rest}>
      {children}
    </Comp>
  );
}
