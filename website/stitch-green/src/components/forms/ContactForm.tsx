import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Send } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/validators";
import { submitForm } from "@/lib/submitForm";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

const SUBJECTS = [
  "General Inquiry",
  "Vendor Support",
  "Customer Support",
  "Partnership",
  "Press",
  "Other",
];

export function ContactForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting, errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { subject: "General Inquiry" },
  });

  useEffect(() => {
    const presetSubject = searchParams.get("subject");
    if (presetSubject && SUBJECTS.includes(presetSubject)) {
      setValue("subject", presetSubject);
    }
  }, [searchParams, setValue]);

  async function onSubmit(values: ContactInput) {
    setError(null);
    try {
      await submitForm({
        subject: `[Qloqal] Contact — ${values.subject}`,
        data: values,
      });
      navigate("/thank-you?type=contact");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField
          label="Full name"
          htmlFor="fullName"
          required
          error={errors.fullName?.message}
        >
          <Input id="fullName" {...register("fullName")} />
        </FormField>
        <FormField
          label="Email"
          htmlFor="email"
          required
          error={errors.email?.message}
        >
          <Input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
          />
        </FormField>
      </div>

      <FormField
        label="Subject"
        htmlFor="subject"
        required
        error={errors.subject?.message}
      >
        <Select id="subject" {...register("subject")}>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </Select>
      </FormField>

      <FormField
        label="Message"
        htmlFor="message"
        required
        error={errors.message?.message}
      >
        <Textarea
          id="message"
          rows={6}
          placeholder="Tell us how we can help…"
          {...register("message")}
        />
      </FormField>

      <input type="text" tabIndex={-1} hidden {...register("botcheck")} />

      {error && (
        <p className="text-sm text-error" role="alert">
          {error}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        <Send className="h-4 w-4" />
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
