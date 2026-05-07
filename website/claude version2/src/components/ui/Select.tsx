import { SelectHTMLAttributes, forwardRef } from 'react';

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & { invalid?: boolean };

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { invalid, className = '', children, ...rest },
  ref,
) {
  return (
    <select
      ref={ref}
      aria-invalid={invalid || undefined}
      className={`w-full rounded-xl border-2 bg-white px-4 py-2.5 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue ${
        invalid ? 'border-red-500' : 'border-ink/10 focus:border-brand-blue'
      } ${className}`}
      {...rest}
    >
      {children}
    </select>
  );
});

export default Select;
