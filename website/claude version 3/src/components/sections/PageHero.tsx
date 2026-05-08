import type { ReactNode } from "react";
import { ScribbleUnderline } from "@/components/decor/ScribbleUnderline";

interface PageHeroProps {
  kicker: string;
  title: ReactNode;
  scribbleWord?: string;
  body?: ReactNode;
  actions?: ReactNode;
}

export function PageHero({ kicker, title, scribbleWord, body, actions }: PageHeroProps) {
  void scribbleWord;
  return (
    <section className="pt-12 lg:pt-20 pb-10 lg:pb-14">
      <div className="container-page max-w-5xl">
        <span className="kicker">{kicker}</span>
        <h1 className="display-serif mt-4 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
          {title}
        </h1>
        <div className="mt-2 max-w-md">
          <ScribbleUnderline color="var(--color-mustard)" className="h-3" />
        </div>
        {body ? (
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-[var(--color-on-surface-variant)]">
            {body}
          </p>
        ) : null}
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </section>
  );
}
