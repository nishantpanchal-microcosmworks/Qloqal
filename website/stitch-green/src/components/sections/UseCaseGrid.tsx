import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { USE_CASES } from "@/data/categories";

export function UseCaseGrid() {
  return (
    <Section bg="lowest">
      <Container>
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          If they sell, Qloqal works.
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
          {USE_CASES.map((useCase) => (
            <div
              key={useCase.label}
              className="group relative flex h-44 items-end overflow-hidden rounded-[24px] bg-gradient-to-br from-primary to-secondary card-shadow card-shadow-hover md:h-56"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity group-hover:opacity-90" />
              <div className="relative flex h-full w-full flex-col items-start justify-between p-5">
                <span
                  className="material-symbols-outlined text-white/90"
                  style={{ fontSize: 36 }}
                  aria-hidden="true"
                >
                  {useCase.icon}
                </span>
                <span className="font-display text-lg font-bold text-white md:text-xl">
                  {useCase.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
