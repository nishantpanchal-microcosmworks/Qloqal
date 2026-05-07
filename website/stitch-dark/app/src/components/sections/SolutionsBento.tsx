import {
  ShoppingCart,
  CheckCircle2,
  Stethoscope,
  Scissors,
  CalendarCheck,
  Sparkles,
  Store,
  Zap,
  ChevronRight,
  User,
} from "lucide-react";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { GlassCard } from "@/components/primitives/GlassCard";
import { ChatBubble } from "@/components/primitives/ChatBubble";

export function SolutionsBento() {
  return (
    <Section className="bg-surface-container-low">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-display text-h2 mb-4">Solutions Built for Your Craft</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            From grocery aisles to salon chairs, we've automated the heavy lifting so
            you can focus on your customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Grocery */}
          <GlassCard className="md:col-span-7 p-10 relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
            <div className="flex flex-col h-full justify-between">
              <div>
                <ShoppingCart size={36} className="text-primary mb-4" />
                <h3 className="font-display text-h3 mb-4">Grocery & Fresh Produce</h3>
                <p className="text-on-surface-variant mb-6 max-w-md">
                  Streamline daily inventory and order processing with automated stock
                  updates and instant checkout links.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Auto-Catalog for Grocers",
                    "Subscription Milk/Bread Delivery",
                    "Multi-Vendor Hub Integration",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-body-sm text-on-surface-variant"
                    >
                      <CheckCircle2 size={16} className="text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative mt-8">
                <div className="bg-surface-container-highest rounded-xl p-4 border border-white/5 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="flex items-center gap-4 mb-4 border-b border-white/5 pb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <User size={18} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-body-sm font-bold">The Green Store</div>
                      <div className="text-[10px] text-on-surface-variant">
                        Online · WhatsApp Business
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <ChatBubble variant="incoming" className="w-3/4 max-w-none">
                      Hi! Can I get 2kg potatoes and some fresh mint?
                    </ChatBubble>
                    <ChatBubble variant="outgoing" className="w-3/4 max-w-none">
                      Added to your cart! Total: $12.50. Click here to confirm delivery: [Link]
                    </ChatBubble>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Pharmacy */}
          <GlassCard className="md:col-span-5 p-10 flex flex-col justify-between group hover:border-secondary/30 transition-all duration-500">
            <div>
              <Stethoscope size={36} className="text-secondary mb-4" />
              <h3 className="font-display text-h3 mb-4">Pharmacies</h3>
              <p className="text-on-surface-variant mb-6">
                Secure, compliant communication for local medical stores.
              </p>
              <div className="bg-secondary/10 p-4 rounded-xl border border-secondary/20 mb-6">
                <div className="font-bold text-secondary mb-1">Refill Reminders</div>
                <p className="text-body-sm text-on-surface-variant">
                  Automatically notify patients when their recurring prescription is due
                  for pickup.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-tr from-secondary-container/20 to-transparent rounded-xl border border-white/5 flex items-end justify-start p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(188,194,255,0.2),transparent_60%)]" />
              <div className="relative font-display text-h3">Digital Wellness.</div>
            </div>
          </GlassCard>

          {/* Salons & Spas */}
          <GlassCard className="md:col-span-5 p-10 flex flex-col justify-between order-last md:order-none group hover:border-primary/30 transition-all duration-500">
            <div>
              <Scissors size={36} className="text-primary mb-4" />
              <h3 className="font-display text-h3 mb-4">Salons & Spas</h3>
              <p className="text-on-surface-variant mb-6">
                Eliminate no-shows with seamless booking and automated confirmations.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 border-b border-white/10">
                  <span className="text-body-sm">Booking Management</span>
                  <CalendarCheck size={20} className="text-primary" />
                </div>
                <div className="flex justify-between items-center p-2 border-b border-white/10">
                  <span className="text-body-sm">Style Catalog</span>
                  <Sparkles size={20} className="text-primary" />
                </div>
              </div>
            </div>
            <div className="mt-10 bg-surface-container p-4 rounded-xl border border-white/5">
              <div className="flex justify-between items-center mb-4">
                <span className="text-label-caps uppercase text-on-surface-variant">
                  Next Appointment
                </span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-[10px] font-bold">
                  CONFIRMED
                </span>
              </div>
              <div className="font-display text-h3">Emma Wilson</div>
              <div className="text-body-sm text-on-surface-variant">
                Hair Styling & Balayage
              </div>
              <div className="mt-4 text-primary font-bold text-body-sm">Today, 2:30 PM</div>
            </div>
          </GlassCard>

          {/* Lifestyle Retail */}
          <GlassCard className="md:col-span-7 p-10 relative overflow-hidden group hover:border-secondary/30 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
              <div>
                <Store size={36} className="text-secondary mb-4" />
                <h3 className="font-display text-h3 mb-4">Lifestyle Retail</h3>
                <p className="text-on-surface-variant mb-6">
                  For boutiques, hardware stores, and niche retailers looking for
                  high-conversion sales channels.
                </p>
                <div className="bg-surface-container-highest p-4 rounded-xl border border-white/5 mb-4">
                  <div className="flex items-center gap-4">
                    <Zap size={18} className="text-secondary" />
                    <div className="text-body-sm">Instant Payments via WhatsApp Pay</div>
                  </div>
                </div>
                <button className="text-secondary text-button font-medium flex items-center gap-2 group-hover:gap-4 transition-all">
                  Explore Retail Toolkit <ChevronRight size={16} />
                </button>
              </div>
              <div className="relative bg-gradient-to-bl from-secondary/10 to-transparent rounded-xl border border-white/10 min-h-48 flex items-center justify-center">
                <Store size={96} className="text-secondary/40" />
              </div>
            </div>
          </GlassCard>
        </div>
      </Container>
    </Section>
  );
}
