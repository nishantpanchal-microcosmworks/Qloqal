import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Seo } from "@/components/Seo";
import { WhyWhatsApp } from "@/components/WhyWhatsApp";
import { WhatsAppMockup, OrderCard } from "@/components/WhatsAppMockup";
import { categories } from "@/data/categories";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/vendors")({
  component: VendorsPage,
});

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

function VendorsPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { countryCode: "+1", delivery: "self" },
  });

  const onSubmit = async (data: FormValues) => {
    // TODO: replace with real endpoint
    await new Promise(r => setTimeout(r, 600));
    console.log("vendor signup", data);
    navigate({ to: "/thank-you", search: { from: "vendors" } });
  };

  return (
    <>
      <Seo
        title="Sell on Qloqal — Run your shop on WhatsApp"
        description="Sell more, on the WhatsApp you already use. No new app, no tablet, no monthly minimum. List your shop on Qloqal in minutes."
      />

      {/* Hero */}
      <section className="container-pad mx-auto max-w-7xl py-14 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-green-soft text-brand-green-dark text-xs font-semibold px-3 py-1.5">For small business owners</span>
          <h1 className="mt-4 font-display font-extrabold text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-ink">
            Sell more, on the <span className="text-gradient-brand">WhatsApp you already use.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-ink max-w-xl">
            No new app. No tablet. No monthly minimum. If you can chat on WhatsApp, you can run your Qloqal shop.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#signup" data-cta="vendors-hero-signup" className="inline-flex items-center gap-2 bg-brand-green text-ink font-semibold rounded-xl px-5 py-3.5 hover:bg-brand-green-dark shadow-soft">
              List my shop <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/how-it-works" className="inline-flex items-center font-semibold text-brand-blue underline-offset-4 hover:underline px-2 py-3">
              See how it works
            </Link>
          </div>
        </div>
        <div>
          <WhatsAppMockup
            title="Your Shop · via Qloqal"
            bubbles={[
              { from: "qloqal", content: <OrderCard />, time: "9:42" },
              { from: "qloqal", content: "Tap Accept to confirm. Customer has paid in-app.", time: "9:42" },
            ]}
            showButtons="accept-reject"
          />
        </div>
      </section>

      {/* How it works on your side */}
      <section className="container-pad mx-auto max-w-7xl py-16">
        <h2 className="font-display font-extrabold text-3xl md:text-5xl max-w-3xl">How it works on your side</h2>
        <p className="mt-4 text-lg text-muted-ink max-w-2xl">A full order, end-to-end — exactly what your phone shows.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Order arrives", m: <WhatsAppMockup title="Your Shop" bubbles={[{from:"qloqal",content:<OrderCard/>,time:"9:42"}]}/> },
            { t: "You tap Accept", m: <WhatsAppMockup title="Your Shop" bubbles={[{from:"qloqal",content:"New order — 3 items, $18.40",time:"9:42"}]} showButtons="accept-reject"/> },
            { t: "You tap Mark Ready", m: <WhatsAppMockup title="Your Shop" bubbles={[
              {from:"shop",content:"Accepted ✓",time:"9:43",read:true},
              {from:"qloqal",content:"Customer notified. Tap below when ready.",time:"9:43"},
            ]} showButtons="mark-ready"/> },
            { t: "Done — you get paid", m: <WhatsAppMockup title="Your Shop" bubbles={[
              {from:"shop",content:"Marked ready ✓",time:"9:55",read:true},
              {from:"qloqal",content:"Order delivered. $17.48 will be settled to your bank account.",time:"10:08"},
            ]}/> },
          ].map(s => (
            <div key={s.t}>
              <div className="font-display font-bold text-ink mb-3">{s.t}</div>
              {s.m}
            </div>
          ))}
        </div>
      </section>

      <WhyWhatsApp />

      {/* What you'll need */}
      <section className="bg-surface">
        <div className="container-pad mx-auto max-w-7xl py-16 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl">What you'll need</h2>
            <p className="mt-3 text-muted-ink">Three small things. Most of them you already have.</p>
            <ul className="mt-6 space-y-3">
              {[
                "A smartphone with WhatsApp installed",
                "A bank account for payouts",
                "About 10 minutes to list your top items",
              ].map(t => (
                <li key={t} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-border">
                  <span className="h-7 w-7 rounded-full bg-brand-green inline-flex items-center justify-center shrink-0"><Check className="h-4 w-4 text-ink" /></span>
                  <span className="font-medium text-ink">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display font-extrabold text-2xl">Built for every business type</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {categories.map(c => (
                <span key={c.slug} className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-2 text-sm font-medium">
                  <span>{c.emoji}</span> {c.name}
                </span>
              ))}
            </div>
            <h3 className="mt-10 font-display font-extrabold text-2xl">How you get paid</h3>
            <p className="mt-3 text-muted-ink">A secure payment partner handles the transaction. Settlements arrive in your bank account on a regular schedule. Commission is transparent and per-order — never a monthly fee.</p>
          </div>
        </div>
      </section>

      {/* Signup form */}
      <section id="signup" className="container-pad mx-auto max-w-7xl py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl">List your shop</h2>
            <p className="mt-4 text-lg text-muted-ink max-w-md">Tell us a little about your shop and we'll get you set up over WhatsApp. No commitment, no card required.</p>
            <p className="mt-6 text-sm text-muted-ink">Free to list. We never charge a setup fee. You only pay a small per-order commission when an order is delivered.</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl bg-white border border-border p-6 md:p-8 shadow-soft space-y-5">
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
                  { v: "pickup", l: "Customer pickup only" },
                  { v: "qloqal", l: "Qloqal handles delivery" },
                ].map(opt => (
                  <label key={opt.v} className="cursor-pointer rounded-xl border border-border bg-white px-3 py-3 text-sm has-[:checked]:border-brand-green has-[:checked]:bg-brand-green-soft">
                    <input type="radio" value={opt.v} {...register("delivery")} className="sr-only" />
                    {opt.l}
                  </label>
                ))}
              </div>
            </Field>
            <Field label="Tell us about your shop (optional)">
              <textarea {...register("notes")} rows={3} className={inputCls} placeholder="What do you sell? Anything we should know?" />
            </Field>
            <button type="submit" disabled={isSubmitting} data-cta="vendor-form-submit"
              className="w-full bg-brand-green text-ink font-semibold rounded-xl px-5 py-3.5 hover:bg-brand-green-dark transition disabled:opacity-60">
              {isSubmitting ? "Submitting…" : "Start selling on Qloqal"}
            </button>
            <p className="text-xs text-muted-ink text-center">By submitting, you agree to our <Link to="/terms" className="underline">Terms</Link> and <Link to="/privacy" className="underline">Privacy Policy</Link>.</p>
          </form>
        </div>
      </section>
    </>
  );
}

const inputCls = "w-full rounded-xl border border-border bg-white px-3.5 py-3 text-sm text-ink placeholder:text-muted-ink focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green transition";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-ink mb-1.5">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive font-medium">{error}</p>}
    </div>
  );
}
