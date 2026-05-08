import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean };

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(function Textarea(
  { className, invalid, ...rest },
  ref,
) {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full rounded-xl border bg-[var(--color-surface-container-lowest)] px-4 py-3 text-[15px] min-h-[120px] resize-y",
        "border-[var(--color-outline-variant)] focus:border-[var(--color-primary)] focus:outline-none",
        "placeholder:text-[var(--color-on-surface-variant)]/60",
        invalid && "border-[var(--color-error)] focus:border-[var(--color-error)]",
        className,
      )}
      {...rest}
    />
  );
});
