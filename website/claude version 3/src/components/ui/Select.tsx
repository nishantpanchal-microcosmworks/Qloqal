import { forwardRef } from "react";
import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Props = SelectHTMLAttributes<HTMLSelectElement> & { invalid?: boolean };

export const Select = forwardRef<HTMLSelectElement, Props>(function Select(
  { className, invalid, children, ...rest },
  ref,
) {
  return (
    <select
      ref={ref}
      className={cn(
        "w-full rounded-xl border bg-[var(--color-surface-container-lowest)] px-4 py-3 text-[15px] appearance-none",
        "border-[var(--color-outline-variant)] focus:border-[var(--color-primary)] focus:outline-none",
        invalid && "border-[var(--color-error)] focus:border-[var(--color-error)]",
        className,
      )}
      {...rest}
    >
      {children}
    </select>
  );
});
