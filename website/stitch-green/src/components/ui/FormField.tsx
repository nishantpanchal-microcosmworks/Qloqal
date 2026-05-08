import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
};

export function FormField({
  label,
  htmlFor,
  error,
  hint,
  required,
  children,
  className,
}: Props) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={htmlFor}
        className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant"
      >
        {label}
        {required && <span className="ml-1 text-error">*</span>}
      </label>
      {children}
      {hint && !error && (
        <p className="text-xs text-on-surface-variant">{hint}</p>
      )}
      {error && (
        <p className="text-xs font-medium text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export const inputBase =
  "w-full rounded-xl border-[1.5px] border-outline-variant bg-surface-container-lowest px-4 py-3 text-base text-on-surface placeholder:text-outline focus:border-secondary focus:outline-none focus:ring-4 focus:ring-secondary/15 transition-colors";
