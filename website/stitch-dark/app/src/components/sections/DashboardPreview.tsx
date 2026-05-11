import { BarChart3, ShoppingBag, Users, TrendingUp } from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { GlassCard } from "@/components/primitives/GlassCard";

export function DashboardPreview() {
  return (
    <Section className="bg-surface-container-high/30">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-display text-h2 mb-4">A Command Center for Your Store</h2>
          <p className="text-on-surface-variant">
            Sleek, intuitive, and lightning fast. Just like your business.
          </p>
        </div>
        <GlassCard className="rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-6 md:p-10">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-error/70" />
                <div className="w-3 h-3 rounded-full bg-secondary/70" />
                <div className="w-3 h-3 rounded-full bg-primary/70" />
              </div>
              <span className="text-label-caps uppercase text-on-surface-variant">
                Qloqal Dashboard
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { icon: ShoppingBag, label: "Orders Today", value: "284", trend: "+12%" },
                { icon: TrendingUp, label: "Revenue", value: "$4,920", trend: "+18%" },
                { icon: Users, label: "Active Customers", value: "1.2K", trend: "+5%" },
                { icon: BarChart3, label: "Conversion", value: "8.4%", trend: "+2.1%" },
              ].map(({ icon: Icon, label, value, trend }) => (
                <div
                  key={label}
                  className="bg-surface-container-low rounded-lg p-4 border border-white/5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon size={16} className="text-primary" />
                    <span className="text-label-caps text-primary">{trend}</span>
                  </div>
                  <div className="font-display text-h3 text-on-surface">{value}</div>
                  <div className="text-body-sm text-on-surface-variant">{label}</div>
                </div>
              ))}
            </div>

            <div className="bg-surface-container-low rounded-lg p-4 border border-white/5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-body-md font-bold">Sales Trend</span>
                <span className="text-label-caps uppercase text-on-surface-variant">
                  Last 7 Days
                </span>
              </div>
              <FakeChart />
            </div>
          </div>
        </GlassCard>
      </Container>
    </Section>
  );
}

function FakeChart() {
  const points = [12, 24, 18, 36, 30, 48, 42];
  const max = Math.max(...points);
  const w = 700;
  const h = 160;
  const stepX = w / (points.length - 1);
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * stepX} ${h - (p / max) * (h - 20) - 10}`)
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-32" preserveAspectRatio="none">
      <defs>
        <linearGradient id="dash-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#dash-fill)" />
      <path d={path} stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
