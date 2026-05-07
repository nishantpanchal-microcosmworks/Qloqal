import { InputHTMLAttributes, forwardRef } from 'react';

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & { label: string };

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, className = '', ...rest },
  ref,
) {
  return (
    <label className={`inline-flex cursor-pointer items-center gap-2 ${className}`}>
      <input ref={ref} type="checkbox" className="h-4 w-4 accent-brand-blue" {...rest} />
      <span className="text-sm text-ink">{label}</span>
    </label>
  );
});

export default Checkbox;
