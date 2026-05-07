import { forwardRef } from 'react';
import type {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  SelectHTMLAttributes,
  ReactNode,
} from 'react';
import { cn } from '@/lib/utils';

type FieldShellProps = {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
};

export function FieldShell({
  label,
  hint,
  error,
  required,
  children,
  className,
}: FieldShellProps) {
  return (
    <label className={cn('block', className)}>
      {label ? (
        <span className="mb-1.5 block text-sm font-semibold text-ink-900">
          {label}
          {required ? <span className="ml-1 text-brand-500">*</span> : null}
        </span>
      ) : null}
      {children}
      {error ? (
        <span className="mt-1.5 block text-sm text-red-600">{error}</span>
      ) : hint ? (
        <span className="mt-1.5 block text-sm text-ink-500">{hint}</span>
      ) : null}
    </label>
  );
}

const inputClass =
  'block w-full rounded-btn border border-ink-300 bg-white px-4 text-base text-ink-900 placeholder:text-ink-500 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-100 disabled:bg-ink-100';

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  error?: string;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
  { label, hint, error, required, className, ...rest },
  ref,
) {
  return (
    <FieldShell label={label} hint={hint} error={error} required={required} className={className}>
      <input
        ref={ref}
        required={required}
        className={cn(inputClass, 'h-11 md:h-12', error && 'border-red-500 focus:border-red-500 focus:ring-red-100')}
        {...rest}
      />
    </FieldShell>
  );
});

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  hint?: string;
  error?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, hint, error, required, className, rows = 5, ...rest },
  ref,
) {
  return (
    <FieldShell label={label} hint={hint} error={error} required={required} className={className}>
      <textarea
        ref={ref}
        rows={rows}
        required={required}
        className={cn(inputClass, 'py-3', error && 'border-red-500 focus:border-red-500 focus:ring-red-100')}
        {...rest}
      />
    </FieldShell>
  );
});

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  hint?: string;
  error?: string;
  options: Array<{ value: string; label: string }>;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, hint, error, required, className, options, ...rest },
  ref,
) {
  return (
    <FieldShell label={label} hint={hint} error={error} required={required} className={className}>
      <select
        ref={ref}
        required={required}
        className={cn(inputClass, 'h-11 md:h-12', error && 'border-red-500 focus:border-red-500 focus:ring-red-100')}
        {...rest}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );
});

/** Hidden honeypot — bots fill it, humans don't see it. Web3Forms drops these. */
export function Honeypot() {
  return (
    <input
      type="text"
      name="botcheck"
      tabIndex={-1}
      autoComplete="off"
      className="absolute left-[-9999px] h-0 w-0 opacity-0"
      aria-hidden="true"
    />
  );
}
