import { Container } from "@/components/primitives/Container";

export function EnterpriseTrust() {
  return (
    <section className="py-10 bg-surface-container-low/30">
      <Container>
        <p className="text-center text-label-caps uppercase text-on-surface-variant mb-10 opacity-60">
          Trusted by industry titans
        </p>
        <div className="flex flex-wrap justify-center items-center gap-16 opacity-50">
          {[32, 24, 40, 28, 36].map((w, i) => (
            <div
              key={i}
              className="h-8 bg-white/20 rounded"
              style={{ width: `${w * 4}px` }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
