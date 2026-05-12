import { useEffect, useRef, useState, type ReactNode } from "react";

type Step = {
  id: string;
  title: string;
  body: ReactNode;
};

type Props = {
  steps: Step[];
  visual: (activeStepId: string) => ReactNode;
};

export function ScrollyTell({ steps, visual }: Props) {
  const [active, setActive] = useState(steps[0]?.id ?? "");
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target instanceof HTMLElement) {
          const id = visible.target.dataset.stepId;
          if (id) setActive(id);
        }
      },
      { threshold: [0.4, 0.6, 0.8], rootMargin: "-25% 0px -25% 0px" }
    );
    for (const el of Object.values(refs.current)) if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
      <div className="space-y-[60vh] lg:space-y-[80vh]">
        {steps.map((s, i) => (
          <div
            key={s.id}
            data-step-id={s.id}
            ref={(el) => { refs.current[s.id] = el; }}
            className="max-w-md"
          >
            <div className="num-marker text-5xl md:text-6xl tabular-nums">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="mt-4 font-display font-semibold text-3xl md:text-4xl text-ink leading-tight">{s.title}</h3>
            <div className="mt-5 text-muted-ink text-lg leading-relaxed">{s.body}</div>
          </div>
        ))}
      </div>
      <div className="hidden lg:block lg:sticky lg:top-32 lg:h-[70vh] lg:flex lg:items-center">
        <div className="w-full">{visual(active)}</div>
      </div>
      <div className="lg:hidden">{visual(active)}</div>
    </div>
  );
}
