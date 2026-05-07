import { TextareaHTMLAttributes, forwardRef } from 'react';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean };

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { invalid, className = '', ...rest },
  ref,
) {
  return (
    <textarea
      ref={ref}
      aria-invalid={invalid || undefined}
      className={`w-full rounded-xl border-2 bg-white px-4 py-2.5 text-ink placeholder:text-muted/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue ${
        invalid ? 'border-red-500' : 'border-ink/10 focus:border-brand-blue'
      } ${className}`}
      {...rest}
    />
  );
});

export default Textarea;
