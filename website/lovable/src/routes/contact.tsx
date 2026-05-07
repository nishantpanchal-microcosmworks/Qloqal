import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Seo } from "@/components/Seo";
import { Mail, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

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
    // TODO: replace with real endpoint
    await new Promise(r => setTimeout(r, 500));
    console.log("contact", data);
    navigate({ to: "/thank-you", search: { from: "contact" } });
  };

  const inputCls = "w-full rounded-xl border border-border bg-white px-3.5 py-3 text-sm text-ink placeholder:text-muted-ink focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green transition";

  return (
    <>
      <Seo title="Contact Qloqal" description="Get in touch with the Qloqal team — partnerships, press, support, or general questions." />
      <section className="container-pad mx-auto max-w-5xl py-14 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05]">Let's talk.</h1>
          <p className="mt-4 text-lg text-muted-ink max-w-md">Questions, partnerships, press — drop us a line and we'll come back within a business day.</p>
          <div className="mt-8 space-y-3">
            <a href="mailto:hello@qloqal.example" className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4 hover:border-brand-green">
              <Mail className="h-5 w-5 text-brand-blue" />
              <div><div className="text-xs text-muted-ink">Email</div><div className="font-semibold">hello@qloqal.example</div></div>
            </a>
            <a href="#" className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4 hover:border-brand-green">
              <MessageCircle className="h-5 w-5 text-brand-green-dark" />
              <div><div className="text-xs text-muted-ink">WhatsApp Business</div><div className="font-semibold">+1 555 010 0123</div></div>
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl bg-white border border-border p-6 md:p-8 shadow-soft space-y-5">
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
            className="w-full bg-brand-green text-ink font-semibold rounded-xl px-5 py-3.5 hover:bg-brand-green-dark transition disabled:opacity-60">
            {isSubmitting ? "Sending…" : "Send message"}
          </button>
        </form>
      </section>
    </>
  );
}
