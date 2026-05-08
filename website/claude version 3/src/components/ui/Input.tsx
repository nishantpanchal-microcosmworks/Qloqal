import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Props = InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean };

export const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { className, invalid, ...rest },
  ref,
) {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-xl border bg-[var(--color-surface-container-lowest)] px-4 py-3 text-[15px]",
        "border-[var(--color-outline-variant)] focus:border-[var(--color-primary)] focus:outline-none",
        "placeholder:text-[var(--color-on-surface-variant)]/60",
        invalid && "border-[var(--color-error)] focus:border-[var(--color-error)]",
        className,
      )}
      {...rest}
    />
  );
});
