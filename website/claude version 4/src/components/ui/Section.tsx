import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import Container from "./Container";

type Props = HTMLAttributes<HTMLElement> & {
  as?: "section" | "article" | "div";
  bare?: boolean;
  children: ReactNode;
};

export function Section({
  as = "section",
  bare = false,
  className,
  children,
  ...rest
}: Props) {
  const Tag = as as "section";
  return (
    <Tag {...rest} className={cn("py-16 md:py-24", className)}>
      {bare ? children : <Container>{children}</Container>}
    </Tag>
  );
}

export default Section;
