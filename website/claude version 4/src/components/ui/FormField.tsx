import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";
import { forwardRef } from "react";
import { cn } from "@/lib/cn";

type LabelProps = {
  label: string;
  hint?: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
};

export function Field({ label, hint, required, error, children }: LabelProps) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-[11px] font-bold uppercase tracking-[0.16em]">
        {label}
        {required && <span className="text-[var(--color-signal-red)]"> *</span>}
      </span>
      {children}
      {hint && !error && (
        <span className="text-[11px] text-[var(--color-ink-mute)]">{hint}</span>
      )}
      {error && (
        <span className="text-[11px] font-bold text-[var(--color-signal-red)]">
          ! {error}
        </span>
      )}
    </label>
  );
}

const inputBase =
  "w-full bg-[var(--color-paper-3)] text-[var(--color-ink)] " +
  "border-2 border-ink px-3 py-3 text-[14px] font-mono " +
  "focus:bg-[var(--color-signal-yellow)]/30 outline-none " +
  "placeholder:text-[var(--color-ink-mute)]";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(function Input({ className, ...rest }, ref) {
  return <input ref={ref} {...rest} className={cn(inputBase, className)} />;
});

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className, ...rest }, ref) {
  return (
    <textarea
      ref={ref}
      {...rest}
      className={cn(inputBase, "min-h-[120px] resize-y", className)}
    />
  );
});

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(function Select({ className, children, ...rest }, ref) {
  return (
    <select ref={ref} {...rest} className={cn(inputBase, className)}>
      {children}
    </select>
  );
});

export default Field;
