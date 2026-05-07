import { Link } from "@tanstack/react-router";
import { ArrowRight, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { WhatsAppMockup, OrderCard } from "./WhatsAppMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-green/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-blue/15 blur-3xl" />
      </div>
      <div className="container-pad mx-auto max-w-7xl pt-12 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue-soft text-brand-blue text-xs font-semibold px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-brand-green" /> Live in your neighborhood
          </span>
          <h1 className="mt-5 font-display font-extrabold text-ink text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05]">
            Run your shop <span className="text-gradient-brand">on WhatsApp.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-ink max-w-xl">
            Qloqal turns any small business into an online shop. Orders come straight to your WhatsApp — no app to install, no tablet, no training. Customers order from the Qloqal app; you just tap <strong className="text-ink">Accept</strong>.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/vendors" data-cta="hero-start-selling" className="inline-flex items-center gap-2 bg-brand-green text-ink font-semibold rounded-xl px-5 py-3.5 hover:bg-brand-green-dark shadow-soft">
              Start selling on Qloqal <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/customers" data-cta="hero-get-app" className="inline-flex items-center gap-2 border-2 border-brand-blue text-brand-blue font-semibold rounded-xl px-5 py-3 hover:bg-brand-blue-soft">
              <Smartphone className="h-4 w-4" /> Get the customer app
            </Link>
          </div>
          <div className="mt-6 text-sm text-muted-ink">No setup fees · No monthly minimums · Works on any smartphone</div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="relative grid grid-cols-2 gap-4">
          <div className="rounded-3xl bg-white border border-border shadow-soft p-3 transform lg:-rotate-2">
            <div className="rounded-2xl bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white p-4 h-full">
              <div className="text-[11px] uppercase tracking-wide opacity-70">Qloqal app</div>
              <div className="font-display font-bold text-lg mt-1">Nearby shops</div>
              <div className="mt-3 space-y-2">
                {["Sunrise Bakery", "Green Leaf Grocery", "Ada's Pharmacy", "Park St. Florist"].map((s,i) => (
                  <div key={s} className="bg-white/10 rounded-xl p-2.5 text-sm flex items-center justify-between">
                    <span>{s}</span>
                    <span className="text-[10px] bg-brand-green text-ink rounded-full px-2 py-0.5 font-semibold">{0.3+i*0.4}km</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="transform lg:rotate-2">
            <WhatsAppMockup
              title="Sunrise Bakery"
              bubbles={[
                { from: "qloqal", content: <OrderCard />, time: "9:42" },
                { from: "qloqal", content: "Tap Accept to confirm. Customer is paying in-app.", time: "9:42" },
              ]}
              showButtons="accept-reject"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
