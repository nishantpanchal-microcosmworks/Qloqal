import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

export function FormField({ label, htmlFor, error, hint, required, children, className }: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-[var(--color-on-surface)]">
        {label}
        {required ? <span className="text-[var(--color-primary)]"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p className="text-xs text-[var(--color-error)]">{error}</p>
      ) : hint ? (
        <p className="text-xs text-[var(--color-on-surface-variant)]/80">{hint}</p>
      ) : null}
    </div>
  );
}
