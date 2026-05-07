import { ShoppingBag, AlertTriangle } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { GlassCard } from "@/components/primitives/GlassCard";
import { GlowHalo } from "@/components/primitives/GlowHalo";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[820px] flex items-center overflow-hidden hero-gradient">
      <Container className="grid lg:grid-cols-2 gap-16 items-center py-16">
        <div className="z-10">
          <h1 className="font-display text-h1 mb-6 leading-tight">
            Run Your <span className="text-primary">Local Business</span> From WhatsApp
          </h1>
          <p className="text-body-lg text-on-surface-variant mb-10 max-w-xl">
            The hyperlocal commerce platform that turns your customer chats into a
            high-performance storefront. Accept orders, manage inventory, and grow your
            community in minutes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="xl" data-cta="hero-primary">
              Start Free
            </Button>
            <Button variant="outline" size="xl" data-cta="hero-demo">
              Book Demo
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-full aspect-square flex items-center justify-center">
            <GlassCard
              className="absolute top-10 left-4 sm:left-10 p-6 z-20 w-64 shadow-2xl"
              style={{ animation: "float 6s ease-in-out infinite" }}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <ShoppingBag size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-label-caps uppercase text-primary">New Order</p>
                  <p className="text-body-md font-bold text-on-surface">Order #4291</p>
                </div>
              </div>
              <p className="text-body-sm text-on-surface-variant">
                2x Organic Avocados, 1x sourdough bread...
              </p>
            </GlassCard>

            <GlassCard
              className="absolute bottom-12 right-2 sm:right-10 p-6 z-20 w-64 shadow-2xl border-l-4 border-error"
              style={{ animation: "float 7s ease-in-out infinite reverse" }}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-error/20 flex items-center justify-center">
                  <AlertTriangle size={20} className="text-error" />
                </div>
                <div>
                  <p className="text-label-caps uppercase text-error">Inventory Alert</p>
                  <p className="text-body-md font-bold text-on-surface">Stock Low: Coffee Beans</p>
                </div>
              </div>
              <p className="text-body-sm text-on-surface-variant">
                Current: 2kg. Reorder recommended.
              </p>
            </GlassCard>

            <GlowHalo size="xl" color="blend" className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </Container>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}
