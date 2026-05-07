import { Users, Plug, ShieldCheck, Globe, Zap, Database, Network } from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { GlassCard } from "@/components/primitives/GlassCard";

export function EnterpriseBento() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-display text-h2 mb-4">Architected for Complexity</h2>
          <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
            From multi-region vendor management to deep internal integrations, Qloqal
            handles the heavy lifting so your team can focus on growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <GlassCard className="md:col-span-8 p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <Network size={120} />
            </div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4 border border-primary/20">
                <Users size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-h3 text-on-surface mb-4">
                Multi-Vendor Orchestration
              </h3>
              <p className="text-body-md text-on-surface-variant max-w-md mb-10">
                Manage thousands of sub-merchants with unified reporting, custom payout
                schedules, and automated KYC/AML workflows tailored to local regulations.
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-white/5 rounded-full text-body-sm">
                  Unified Dashboard
                </span>
                <span className="px-4 py-2 bg-white/5 rounded-full text-body-sm">
                  Global Payouts
                </span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="md:col-span-4 p-10 hover:border-primary/30 transition-all">
            <div className="w-12 h-12 bg-secondary-container/10 rounded-md flex items-center justify-center mb-4 border border-secondary-container/20">
              <Plug size={20} className="text-secondary" />
            </div>
            <h3 className="font-display text-h3 text-on-surface mb-4">
              Custom API Integrations
            </h3>
            <p className="text-body-md text-on-surface-variant">
              Deep-link Qloqal into your existing ERP, CRM, or custom stack with our
              GraphQL API and dedicated webhook infrastructure.
            </p>
          </GlassCard>

          <GlassCard className="md:col-span-4 p-10">
            <div className="w-12 h-12 bg-error-container/10 rounded-md flex items-center justify-center mb-4 border border-error-container/20">
              <ShieldCheck size={20} className="text-error" />
            </div>
            <h3 className="font-display text-h3 text-on-surface mb-2">
              Enterprise Security
            </h3>
            <p className="text-body-sm text-on-surface-variant">
              SOC2 Type II, GDPR, and PCI-DSS compliance comes standard. Role-based access
              control and SSO integration (SAML/OIDC).
            </p>
          </GlassCard>

          <GlassCard className="md:col-span-8 p-10 flex items-center justify-between">
            <div className="max-w-md">
              <h3 className="font-display text-h3 text-on-surface mb-2">
                Global Scale, Hyperlocal Focus
              </h3>
              <p className="text-body-sm text-on-surface-variant">
                Deploy instantly across 140+ countries while maintaining local touchpoints
                through our distributed edge network.
              </p>
            </div>
            <div className="hidden lg:flex -space-x-4">
              {[Globe, Zap, Database].map((Icon, i) => (
                <div
                  key={i}
                  className="w-16 h-16 rounded-full border-4 border-surface-container bg-surface flex items-center justify-center"
                >
                  <Icon size={24} className="text-primary" />
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </Container>
    </Section>
  );
}
