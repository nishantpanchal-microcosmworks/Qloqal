import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

const Schema = z.object({
  name: z.string().min(2, "Tell us what to call you."),
  email: z.string().email("That doesn’t look like a real email."),
  shop: z.string().optional(),
  topic: z.enum(["sales", "support", "press", "other"]),
  message: z.string().min(10, "A few sentences, please."),
});
type FormValues = z.infer<typeof Schema>;

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(Schema),
    defaultValues: { topic: "sales" },
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    void data;
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    navigate("/thank-you");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField label="Your name" htmlFor="name" required error={errors.name?.message}>
          <Input id="name" placeholder="Marta R." invalid={!!errors.name} {...register("name")} />
        </FormField>
        <FormField label="Email" htmlFor="email" required error={errors.email?.message}>
          <Input id="email" type="email" placeholder="hello@yourshop.com" invalid={!!errors.email} {...register("email")} />
        </FormField>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField label="Shop name" htmlFor="shop" hint="optional">
          <Input id="shop" placeholder="Loaf & Linen" {...register("shop")} />
        </FormField>
        <FormField label="What’s this about?" htmlFor="topic" required>
          <Select id="topic" {...register("topic")}>
            <option value="sales">Opening a shop</option>
            <option value="support">Help with my Qloqal</option>
            <option value="press">Press / writing about us</option>
            <option value="other">Something else</option>
          </Select>
        </FormField>
      </div>
      <FormField label="Your message" htmlFor="message" required error={errors.message?.message}>
        <Textarea id="message" rows={5} placeholder="Tell us a bit about your shop and what you’re hoping for…" invalid={!!errors.message} {...register("message")} />
      </FormField>
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-[var(--color-on-surface-variant)]">A real person reads every message.</p>
        <Button type="submit" variant="primary" size="lg" disabled={submitting}>
          {submitting ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
