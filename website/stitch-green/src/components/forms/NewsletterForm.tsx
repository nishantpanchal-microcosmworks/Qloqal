import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Send } from "lucide-react";
import { newsletterSchema, type NewsletterInput } from "@/lib/validators";
import { submitForm } from "@/lib/submitForm";
import { Input } from "@/components/ui/Input";

export function NewsletterForm() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema),
  });

  async function onSubmit(values: NewsletterInput) {
    setError(null);
    try {
      await submitForm({
        subject: "[Qloqal] Newsletter signup",
        data: { email: values.email },
      });
      navigate("/thank-you?type=newsletter");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2"
      noValidate
    >
      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          type="email"
          autoComplete="email"
          placeholder="you@email.com"
          aria-label="Email address"
          {...register("email")}
        />
        <input type="text" tabIndex={-1} hidden {...register("botcheck")} />
        <button
          type="submit"
          disabled={isSubmitting}
          className="glow-gradient inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-on-primary shadow-lg transition-transform hover:scale-105 disabled:opacity-50"
        >
          <Send className="h-4 w-4" />
          {isSubmitting ? "Sending…" : "Subscribe"}
        </button>
      </div>
      {errors.email && (
        <p className="text-xs text-error" role="alert">
          {errors.email.message}
        </p>
      )}
      {error && (
        <p className="text-xs text-error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
