import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Field, Input, Textarea } from "@/components/ui/FormField";
import Button from "@/components/ui/Button";

const Schema = z.object({
  name: z.string().min(2, "Tell us your name"),
  email: z.string().email("Use a valid email"),
  topic: z.string().min(1, "Pick a topic"),
  message: z.string().min(8, "A few more words please"),
});

type Form = z.infer<typeof Schema>;

const TOPICS = ["General", "Vendors", "Customers", "Press", "Partnerships"];

export function ContactForm() {
  const nav = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(Schema),
    defaultValues: { topic: "General" },
  });

  async function onSubmit(values: Form) {
    setSubmitting(true);
    try {
      // TODO: replace with real endpoint
      await new Promise((r) => setTimeout(r, 400));
      sessionStorage.setItem("qloqal:lastSubmit", "contact");
      nav("/thank-you");
    } finally {
      setSubmitting(false);
    }
    void values;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 border-2 border-ink bg-[var(--color-paper-3)] p-5"
      noValidate
    >
      <div className="flex items-center justify-between border-b-2 border-ink pb-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
          FORM · CONTACT-04
        </span>
        <span className="text-[10px] uppercase tracking-widest text-[var(--color-ink-mute)]">
          ~ 30 seconds
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Field label="Name" required error={errors.name?.message}>
          <Input placeholder="Your name" {...register("name")} />
        </Field>
        <Field label="Email" required error={errors.email?.message}>
          <Input
            type="email"
            placeholder="you@example.com"
            {...register("email")}
          />
        </Field>
      </div>

      <Field label="Topic" required error={errors.topic?.message}>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <label
              key={t}
              className="flex cursor-pointer items-center gap-2 border-2 border-ink bg-[var(--color-paper)] px-3 py-2 text-[12px] hover:bg-[var(--color-signal-yellow)]"
            >
              <input
                type="radio"
                value={t}
                {...register("topic")}
                className="accent-[var(--color-ink)]"
              />
              <span>{t}</span>
            </label>
          ))}
        </div>
      </Field>

      <Field label="Message" required error={errors.message?.message}>
        <Textarea
          placeholder="What's on your mind?"
          {...register("message")}
        />
      </Field>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={submitting}
        data-cta="contact-form-submit"
      >
        {submitting ? "Submitting…" : "Send message"}
      </Button>
    </form>
  );
}

export default ContactForm;
