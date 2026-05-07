import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'tertiary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue';

const variants: Record<Variant, string> = {
  primary: 'bg-brand-green text-ink hover:bg-brand-green-dark',
  secondary: 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white',
  tertiary: 'text-brand-blue underline-offset-4 hover:underline',
  ghost: 'text-ink hover:bg-surface',
};

const sizes: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-6 py-3.5 text-lg',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  'data-cta': string;
  fullWidth?: boolean;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & CommonProps;
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', fullWidth, className = '', ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...rest}
    />
  );
});

export type ButtonLinkProps = LinkProps & CommonProps;
export function ButtonLink({
  variant = 'primary',
  size = 'md',
  fullWidth,
  className = '',
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...rest}
    />
  );
}

export type ButtonAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & CommonProps;
export function ButtonAnchor({
  variant = 'primary',
  size = 'md',
  fullWidth,
  className = '',
  ...rest
}: ButtonAnchorProps) {
  return (
    <a
      className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...rest}
    />
  );
}
