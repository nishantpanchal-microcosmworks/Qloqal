import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Container } from "@/components/primitives/Container";
import { GlowHalo } from "@/components/primitives/GlowHalo";
import { Button } from "@/components/ui/button";

const emailSchema = z.string().email();

export function ResourcesNewsletter() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      toast.error("Please enter a valid email.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 500));
    setSubmitting(false);
    setEmail("");
    toast.success("Subscribed — check your inbox.");
  };

  return (
    <section className="py-16">
      <Container>
        <div className="relative bg-surface-container rounded-xl p-10 md:p-16 overflow-hidden">
          <GlowHalo size="md" color="primary" className="-right-20 -top-20" />
          <GlowHalo size="md" color="secondary" className="-left-20 -bottom-20" />
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-h2 text-on-surface mb-4">
                Stay ahead of the curve.
              </h2>
              <p className="text-body-lg text-on-surface-variant">
                Get bi-weekly insights on conversational automation, growth, and Qloqal
                platform updates delivered to your inbox.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={onSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your business email"
                className="flex-1 bg-background border border-outline/20 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent text-on-surface text-body-md"
                required
              />
              <Button type="submit" size="lg" disabled={submitting} data-cta="newsletter-subscribe">
                {submitting ? "…" : "Subscribe"}
              </Button>
            </form>
          </div>
          <p className="relative z-10 mt-4 text-body-sm text-on-surface-variant/60">
            No spam. Just value. Unsubscribe at any time.
          </p>
        </div>
      </Container>
    </section>
  );
}
