import { InputHTMLAttributes, forwardRef } from 'react';

export type RadioOption = { value: string; label: string; description?: string };

export type RadioGroupProps = {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (v: string) => void;
  invalid?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'value' | 'onChange' | 'type'>;

const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(function RadioGroup(
  { name, options, value, onChange, invalid, ...rest },
  ref,
) {
  return (
    <div role="radiogroup" aria-invalid={invalid || undefined} className="grid gap-2">
      {options.map((opt, idx) => (
        <label
          key={opt.value}
          className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-3 transition-colors ${
            value === opt.value ? 'border-brand-blue bg-brand-blue-soft' : 'border-ink/10 hover:border-brand-blue/40'
          }`}
        >
          <input
            ref={idx === 0 ? ref : undefined}
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={(e) => onChange?.(e.target.value)}
            className="mt-1 h-4 w-4 accent-brand-blue"
            {...rest}
          />
          <span className="flex flex-col">
            <span className="font-semibold text-ink">{opt.label}</span>
            {opt.description && <span className="text-sm text-muted">{opt.description}</span>}
          </span>
        </label>
      ))}
    </div>
  );
});

export default RadioGroup;
