import type { HTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

type ContainerProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export function Container({ className, children, ...rest }: ContainerProps) {
  return (
    <div className={cn('container-base', className)} {...rest}>
      {children}
    </div>
  );
}
