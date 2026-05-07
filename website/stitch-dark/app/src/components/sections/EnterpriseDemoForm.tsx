import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Section } from "@/components/primitives/Section";
import { Container } from "@/components/primitives/Container";
import { GlassCard } from "@/components/primitives/GlassCard";
import { Button } from "@/components/ui/button";

const schema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().email("Enter a valid work email"),
  companySize: z.string(),
  details: z.string().max(500).optional(),
});
type FormValues = z.infer<typeof schema>;

const benefits = [
  "Custom migration strategy",
  "Personalized architecture review",
  "Volume-based pricing models",
];

export function EnterpriseDemoForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { companySize: "100-500 employees" },
  });

  const onSubmit = async (values: FormValues) => {
    // Stubbed submission — replace with real API/Web3Forms in Phase 7.
    await new Promise((r) => setTimeout(r, 600));
    console.log("Enterprise demo request:", values);
    toast.success("Request received. Our team will reach out within 24 hours.");
    setSubmitted(true);
  };

  return (
    <Section className="bg-background">
      <Container>
        <GlassCard className="p-10 md:p-16 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-h2 text-on-surface mb-4">
              Ready to scale your ecosystem?
            </h2>
            <p className="text-body-md text-on-surface-variant mb-10">
              Join hundreds of enterprise leaders who have revolutionized their local
              commerce operations with Qloqal.
            </p>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-4 text-on-surface">
                  <CheckCircle2 size={20} className="text-primary" />
                  <span className="text-body-md">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface-container rounded-xl p-6 border border-white/5">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-display text-h3 mb-2">Thanks — we got it.</h3>
                <p className="text-body-sm text-on-surface-variant">
                  Our team will reach out within one business day.
                </p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="First Name" error={errors.firstName?.message}>
                    <Input {...register("firstName")} aria-invalid={!!errors.firstName} />
                  </Field>
                  <Field label="Last Name" error={errors.lastName?.message}>
                    <Input {...register("lastName")} aria-invalid={!!errors.lastName} />
                  </Field>
                </div>
                <Field label="Work Email" error={errors.email?.message}>
                  <Input type="email" {...register("email")} aria-invalid={!!errors.email} />
                </Field>
                <Field label="Company Size">
                  <select
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-on-surface px-4 h-11 text-body-md"
                    {...register("companySize")}
                  >
                    <option>100-500 employees</option>
                    <option>500-2,000 employees</option>
                    <option>2,000+ employees</option>
                  </select>
                </Field>
                <Field label="Project Details" error={errors.details?.message}>
                  <textarea
                    rows={3}
                    {...register("details")}
                    className="w-full bg-surface-container-low border border-outline-variant/40 rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-on-surface p-4 text-body-md"
                  />
                </Field>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                  data-cta="enterprise-demo-submit"
                >
                  {isSubmitting ? "Sending…" : "Request Access"}
                </Button>
              </form>
            )}
          </div>
        </GlassCard>
      </Container>
    </Section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-1">
      <span className="text-label-caps uppercase text-on-surface-variant block">
        {label}
      </span>
      {children}
      {error && <span className="text-body-sm text-error block">{error}</span>}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full bg-surface-container-low border border-outline-variant/40 rounded-md focus:ring-2 focus:ring-primary focus:border-primary text-on-surface px-4 h-11 text-body-md"
    />
  );
}
