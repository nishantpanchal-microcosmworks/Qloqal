import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { comparisonRows } from "@/data/pricing";

export function PricingComparison() {
  return (
    <Section>
      <Container>
        <h2 className="font-display text-h2 text-center mb-10">Feature Comparison</h2>
        <div className="overflow-hidden rounded-xl border border-white/10 bg-surface-container-lowest">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-high">
                {["Feature", "Starter", "Growth", "Enterprise"].map((h) => (
                  <th
                    key={h}
                    className="p-6 text-label-caps uppercase text-on-surface-variant"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-body-sm divide-y divide-white/5">
              {comparisonRows.map((row) => (
                <tr key={row.feature}>
                  <td className="p-6 font-bold">{row.feature}</td>
                  <td className="p-6">{row.starter}</td>
                  <td className="p-6">{row.growth}</td>
                  <td className="p-6">{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}
