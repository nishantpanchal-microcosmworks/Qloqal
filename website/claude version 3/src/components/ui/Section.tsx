import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  bare?: boolean;
}

export function Section({ children, className, containerClassName, id, bare }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 lg:py-24 relative", className)}>
      {bare ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}
