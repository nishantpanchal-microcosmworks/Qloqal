import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import { Seo } from "@/components/Seo";

export const Route = createFileRoute("/contact")({ component: ContactPage });

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  message: z.string().trim().min(5, "Tell us a bit more").max(1000),
});
type FormValues = z.infer<typeof schema>;

function ContactPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    await new Promise(r => setTimeout(r, 500));
    console.log("contact", data);
    navigate({ to: "/thank-you", search: { from: "contact" } });
  };

  const inputCls = "w-full rounded-md border border-border bg-white px-3.5 py-3 text-sm text-ink placeholder:text-muted-ink focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green transition";

  return (
    <>
      <Seo title="Contact Qloqal" description="Get in touch with the Qloqal team — partnerships, press, support, or general questions." />

      <section className="container-pad mx-auto max-w-5xl pt-20 md:pt-28 pb-12">
        <div className="text-[11px] tracking-[0.2em] uppercase text-brand-green-dark font-semibold">Contact</div>
        <h1 className="mt-5 font-display font-medium text-ink text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] tracking-tight">
          <em>Let's</em> talk.
        </h1>
        <p className="mt-7 text-xl text-muted-ink max-w-xl leading-relaxed">
          Questions, partnerships, press — drop us a line and we'll come back within a business day.
        </p>
      </section>

      <section className="container-pad mx-auto max-w-5xl pb-20 grid lg:grid-cols-2 gap-10 items-start hairline-t pt-12">
        <div>
          <div className="space-y-3">
            <a href="mailto:hello@qloqal.example" className="flex items-center gap-3 rounded-md border border-border bg-white p-4 hover:border-ink transition">
              <Mail className="h-5 w-5 text-brand-blue-dark" />
              <div><div className="text-xs text-muted-ink uppercase tracking-wider">Email</div><div className="font-semibold">hello@qloqal.example</div></div>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-md border border-border bg-white p-4 hover:border-ink transition">
              <MessageCircle className="h-5 w-5 text-brand-green-dark" />
              <div><div className="text-xs text-muted-ink uppercase tracking-wider">WhatsApp Business</div><div className="font-semibold">+1 555 010 0123</div></div>
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-md bg-white border border-border p-6 md:p-8 space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1.5">Name</label>
            <input {...register("name")} className={inputCls} placeholder="Your name" />
            {errors.name && <p className="mt-1.5 text-xs text-destructive font-medium">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5">Email</label>
            <input {...register("email")} className={inputCls} placeholder="you@example.com" />
            {errors.email && <p className="mt-1.5 text-xs text-destructive font-medium">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1.5">Message</label>
            <textarea {...register("message")} rows={5} className={inputCls} placeholder="How can we help?" />
            {errors.message && <p className="mt-1.5 text-xs text-destructive font-medium">{errors.message.message}</p>}
          </div>
          <button disabled={isSubmitting} type="submit" data-cta="contact-form-submit"
            className="w-full bg-ink text-white font-semibold rounded-md px-5 py-3.5 hover:bg-brand-green-dark transition disabled:opacity-60 inline-flex items-center justify-center gap-2">
            {isSubmitting ? "Sending…" : <>Send message <ArrowRight className="h-4 w-4" /></>}
          </button>
        </form>
      </section>
    </>
  );
}
