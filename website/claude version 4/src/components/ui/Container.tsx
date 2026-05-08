import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div
      {...rest}
      className={cn("mx-auto w-full max-w-[1280px] px-4 md:px-8", className)}
    >
      {children}
    </div>
  );
}

export default Container;
