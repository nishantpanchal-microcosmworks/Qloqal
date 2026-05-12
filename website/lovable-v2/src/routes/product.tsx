import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check } from "lucide-react";

import { Seo } from "@/components/Seo";
import { FlowDemo } from "@/components/FlowDemo";
import { CTABand } from "@/components/CTABand";
import { Bleed } from "@/components/layout/Bleed";
import { BentoGrid, BentoCell } from "@/components/layout/BentoGrid";
import { FAQAccordion } from "@/components/FAQAccordion";
import { categories } from "@/data/categories";

export const Route = createFileRoute("/product")({ component: ProductPage });

const sections = [
  { id: "vendor", label: "For shops" },
  { id: "customer", label: "For shoppers" },
  { id: "behind", label: "Behind the scenes" },
  { id: "faq", label: "Questions" },
  { id: "signup", label: "Start" },
];

const schema = z.object({
  shopName: z.string().trim().min(2, "Shop name is required").max(80),
  ownerName: z.string().trim().min(2, "Your name is required").max(80),
  countryCode: z.string().regex(/^\+\d{1,4}$/, "Use format like +1"),
  whatsapp: z.string().regex(/^\d{6,14}$/, "Numbers only, 6–14 digits"),
  category: z.string().min(1, "Pick a category"),
  delivery: z.enum(["self", "pickup", "qloqal"], { message: "Pick one" }),
  notes: z.string().max(500).optional(),
});
type FormValues = z.infer<typeof schema>;

function ProductPage() {
  const navigate = useNavigate();
  const [active, setActive] = useState<string>("vendor");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target instanceof HTMLElement) {
          const id = visible.target.id;
          if (id) setActive(id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    );
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { countryCode: "+1", delivery: "self" },
  });
  const onSubmit = async (data: FormValues) => {
    await new Promise(r => setTimeout(r, 600));
    console.log("vendor signup", data);
    navigate({ to: "/thank-you", search: { from: "vendors" } });
  };

  return (
    <>
      <Seo
        title="Product — Qloqal"
        description="The full Qloqal product, end to end. How it works for shops, for shoppers, and what's happening underneath."
      />

      {/* Sub-nav (sticky, in-page anchor scroll-spy) */}
      <div className="sticky top-0 z-20 bg-background/90 backdrop-blur border-b border-border">
        <div className="container-pad mx-auto max-w-7xl flex items-center gap-1 overflow-x-auto h-14">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`px-4 py-2 rounded-md text-sm font-semibold whitespace-nowrap transition ${active === s.id ? "bg-ink text-white" : "text-muted-ink hover:text-ink"}`}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Cover */}
      <section className="container-pad mx-auto max-w-6xl pt-20 md:pt-28 pb-12">
        <div className="text-[11px] tracking-[0.2em] uppercase text-brand-green-dark font-semibold">The product</div>
        <h1 className="mt-5 font-display font-medium text-ink text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] tracking-tight max-w-4xl">
          Two sides. <em>One thread.</em><br />Qloqal in full.
        </h1>
        <p className="mt-7 text-xl text-muted-ink max-w-2xl leading-relaxed">
          The customer side is an app. The shop side is the WhatsApp they already use. Qloqal is the connective tissue in between.
        </p>
      </section>

      {/* For shops */}
      <section id="vendor" className="container-pad mx-auto max-w-7xl py-20 hairline-t">
        <div className="grid-asym">
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-brand-green-dark font-semibold">For shops</div>
            <h2 className="mt-4 font-display font-medium text-ink text-4xl md:text-5xl leading-[1.05] tracking-tight">
              You already do this every day. We just made an order out of it.
            </h2>
            <p className="mt-5 text-lg text-muted-ink leading-relaxed">
              The shop owner's side of Qloqal is a WhatsApp thread. Every order arrives as a chat. Every action is a tap. Switch to <strong>Shop side</strong> below to walk through one.
            </p>
            <ul className="mt-8 space-y-3 max-w-md">
              {[
                "A smartphone with WhatsApp installed",
                "A bank account for payouts",
                "About 10 minutes to list your top items",
              ].map(t => (
                <li key={t} className="flex items-start gap-3 border-t border-border pt-3 text-ink">
                  <span className="h-6 w-6 rounded-full bg-brand-green inline-flex items-center justify-center shrink-0 mt-0.5"><Check className="h-3.5 w-3.5 text-ink" /></span>
                  <span className="font-medium">{t}</span>
                </li>
              ))}
            </ul>
            <a href="#signup" className="mt-8 inline-flex items-center gap-2 bg-ink text-white font-semibold rounded-md px-5 py-3.5 hover:bg-brand-green-dark transition">
              List my shop <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div>
            <FlowDemo initialSide="shop" />
          </div>
        </div>
      </section>

      {/* For shoppers */}
      <section id="customer" className="container-pad mx-auto max-w-7xl py-20 hairline-t">
        <div className="grid-asym grid-asym-flip">
          <div>
            <FlowDemo initialSide="customer" />
          </div>
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-brand-blue-dark font-semibold">For shoppers</div>
            <h2 className="mt-4 font-display font-medium text-ink text-4xl md:text-5xl leading-[1.05] tracking-tight">
              An app for the shops you already walk past.
            </h2>
            <p className="mt-5 text-lg text-muted-ink leading-relaxed">
              Real shops within delivery distance of where you are right now. Real prices. Real availability. Real people preparing your order.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-3 rounded-md bg-ink text-white px-5 py-3 cursor-pointer">
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase opacity-70">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </a>
              <a className="inline-flex items-center gap-3 rounded-md bg-ink text-white px-5 py-3 cursor-pointer">
                <span className="text-2xl">▶</span>
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase opacity-70">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the scenes */}
      <Bleed>
        <section id="behind" className="bg-cream hairline-t hairline-b py-20">
          <div className="container-pad mx-auto max-w-6xl">
            <div className="text-[11px] tracking-[0.2em] uppercase text-brand-green-dark font-semibold">Behind the scenes</div>
            <h2 className="mt-4 font-display font-medium text-ink text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-3xl">
              What sits in the middle?
            </h2>
            <p className="mt-5 text-lg text-muted-ink max-w-2xl leading-relaxed">
              Qloqal is the connective tissue between the customer's app, the shop's WhatsApp, and a secure payment provider. We translate every action into the right message for each side.
            </p>
            <div className="mt-10">
              <BentoGrid>
                <BentoCell tone="white" span="2x1">
                  <div className="text-[11px] tracking-[0.15em] uppercase text-brand-blue-dark font-semibold">Customer app</div>
                  <p className="mt-3 font-display text-xl">Sends the order and the payment.</p>
                </BentoCell>
                <BentoCell tone="teal" span="2x1">
                  <div className="text-[11px] tracking-[0.15em] uppercase opacity-80 font-semibold">Qloqal middle</div>
                  <p className="mt-3 font-display text-xl">Formats it as a WhatsApp order card. Listens for the shop's responses.</p>
                </BentoCell>
                <BentoCell tone="white" span="4x1">
                  <div className="text-[11px] tracking-[0.15em] uppercase text-brand-green-dark font-semibold">Shop WhatsApp</div>
                  <p className="mt-3 font-display text-xl">Accept · Mark Ready · Done. That's the API.</p>
                </BentoCell>
                <BentoCell tone="ink" span="4x1">
                  <div className="text-[11px] tracking-[0.15em] uppercase text-white/70 font-semibold">Why this works</div>
                  <p className="mt-3 font-display text-lg leading-snug">
                    Because the shop never has to context-switch. The thread they're already in becomes the inbox they already check.
                  </p>
                </BentoCell>
              </BentoGrid>
            </div>
          </div>
        </section>
      </Bleed>

      {/* FAQ */}
      <section id="faq" className="container-pad mx-auto max-w-4xl py-20">
        <div className="text-[11px] tracking-[0.2em] uppercase text-brand-green-dark font-semibold">Questions</div>
        <h2 className="mt-4 font-display font-medium text-ink text-4xl md:text-5xl leading-[1.05] tracking-tight">
          Quick answers.
        </h2>
        <div className="mt-10">
          <FAQAccordion items={[
            { q: "Do I need to install an app?", a: "No. Orders arrive on WhatsApp, which you already use. Customers use the Qloqal app." },
            { q: "What kind of phone do I need?", a: "Any smartphone that runs WhatsApp. Low-end Android phones work fine." },
            { q: "What does Qloqal take?", a: "A small per-order commission, starting at 5%. No setup fees, no monthly minimums." },
            { q: "When do I get paid?", a: "Settlements run on a regular schedule directly into the bank account on file." },
            { q: "Can multiple people in my shop access orders?", a: "Yes — whoever has the shop's WhatsApp open will see incoming orders." },
          ]} />
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="container-pad mx-auto max-w-7xl py-20 hairline-t">
        <div className="grid-asym">
          <div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-brand-green-dark font-semibold">Start</div>
            <h2 className="mt-4 font-display font-medium text-ink text-4xl md:text-5xl leading-[1.05] tracking-tight">
              List your shop. <em>It takes minutes.</em>
            </h2>
            <p className="mt-5 text-lg text-muted-ink max-w-md leading-relaxed">
              Tell us a little about your shop and we'll set you up over WhatsApp. No commitment, no card required.
            </p>
            <p className="mt-6 text-sm text-muted-ink">
              Free to list. We never charge a setup fee. You only pay a small per-order commission when an order is delivered.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg bg-white border border-border p-6 md:p-8 space-y-5">
            <Field label="Shop name" error={errors.shopName?.message}>
              <input {...register("shopName")} className={inputCls} placeholder="e.g. Sunrise Bakery" />
            </Field>
            <Field label="Owner / contact name" error={errors.ownerName?.message}>
              <input {...register("ownerName")} className={inputCls} placeholder="Your full name" />
            </Field>
            <Field label="WhatsApp number" error={errors.countryCode?.message || errors.whatsapp?.message}>
              <div className="flex gap-2">
                <input {...register("countryCode")} className={inputCls + " w-24"} placeholder="+1" />
                <input {...register("whatsapp")} className={inputCls + " flex-1"} placeholder="5551234567" inputMode="numeric" />
              </div>
            </Field>
            <Field label="Business category" error={errors.category?.message}>
              <select {...register("category")} className={inputCls}>
                <option value="">Select a category</option>
                {categories.map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}
                <option value="other">Other</option>
              </select>
            </Field>
            <Field label="Delivery model" error={errors.delivery?.message}>
              <div className="grid sm:grid-cols-3 gap-2">
                {[
                  { v: "self", l: "I deliver myself" },
                  { v: "pickup", l: "Customer pickup" },
                  { v: "qloqal", l: "Qloqal handles it" },
                ].map(opt => (
                  <label key={opt.v} className="cursor-pointer rounded-md border border-border bg-white px-3 py-3 text-sm has-[:checked]:border-brand-green has-[:checked]:bg-brand-green-soft">
                    <input type="radio" value={opt.v} {...register("delivery")} className="sr-only" />
                    {opt.l}
                  </label>
                ))}
              </div>
            </Field>
            <Field label="Tell us about your shop (optional)">
              <textarea {...register("notes")} rows={3} className={inputCls} placeholder="What do you sell? Anything we should know?" />
            </Field>
            <button type="submit" disabled={isSubmitting} data-cta="product-form-submit"
              className="w-full bg-ink text-white font-semibold rounded-md px-5 py-3.5 hover:bg-brand-green-dark transition disabled:opacity-60 inline-flex items-center justify-center gap-2">
              {isSubmitting ? "Submitting…" : <>Start selling on Qloqal <ArrowRight className="h-4 w-4" /></>}
            </button>
            <p className="text-xs text-muted-ink text-center">By submitting, you agree to our <Link to="/terms" className="underline">Terms</Link> and <Link to="/privacy" className="underline">Privacy Policy</Link>.</p>
          </form>
        </div>
      </section>

      <CTABand
        title="A shop is a chat thread away."
        subtitle="Free to list, free to use, transparent commission only on delivered orders."
      />
    </>
  );
}

const inputCls = "w-full rounded-md border border-border bg-white px-3.5 py-3 text-sm text-ink placeholder:text-muted-ink focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green transition";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-ink mb-1.5">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive font-medium">{error}</p>}
    </div>
  );
}
