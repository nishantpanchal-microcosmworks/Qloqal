import { Zap, BrainCircuit } from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { Eyebrow } from "@/components/primitives/Eyebrow";

export function AISection() {
  return (
    <Section className="relative overflow-hidden bg-surface-container-lowest">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.05)_0%,_transparent_70%)]" />
      <Container className="text-center relative z-10">
        <Eyebrow icon={<Zap size={14} />} className="mb-6">
          New Features Released
        </Eyebrow>
        <h2 className="font-display text-h1 mb-10">
          AI-Powered Commerce <span className="text-primary">Automation</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-center text-left py-10">
          <div className="space-y-10">
            <div className="p-6 rounded-xl border border-white/5 bg-surface-container-low">
              <h4 className="font-display text-h3 mb-2">Predictive Inventory</h4>
              <p className="text-on-surface-variant">
                Our AI predicts stockouts 48 hours in advance based on neighborhood
                buying patterns.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-white/5 bg-surface-container-low">
              <h4 className="font-display text-h3 mb-2">Smart Auto-Response</h4>
              <p className="text-on-surface-variant">
                Handles 90% of routine customer queries, freeing up your staff for
                delivery and sales.
              </p>
            </div>
          </div>
          <div className="relative aspect-square flex items-center justify-center">
            <div className="absolute w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
            <BrainCircuit size={150} className="relative text-primary opacity-60" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
