import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { customerNotifySchema, type CustomerNotifyInput } from "@/lib/validators";
import { submitForm } from "@/lib/submitForm";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

const COUNTRIES = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "United Arab Emirates",
  "India",
  "Singapore",
  "Mexico",
  "Brazil",
  "Germany",
  "France",
  "Other",
];

export function CustomerNotifyForm() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<CustomerNotifyInput>({
    resolver: zodResolver(customerNotifySchema),
  });

  async function onSubmit(values: CustomerNotifyInput) {
    setError(null);
    try {
      await submitForm({
        subject: `[Qloqal] Customer Interest — ${values.city}, ${values.country}`,
        data: values,
      });
      navigate("/thank-you?type=customer");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4" noValidate>
      <FormField
        label="Your name"
        htmlFor="name"
        required
        error={errors.name?.message}
      >
        <Input id="name" {...register("name")} />
      </FormField>
      <FormField
        label="Email or phone"
        htmlFor="contact"
        required
        error={errors.contact?.message}
      >
        <Input id="contact" {...register("contact")} />
      </FormField>
      <div className="grid gap-4 md:grid-cols-2">
        <FormField
          label="Country"
          htmlFor="country"
          required
          error={errors.country?.message}
        >
          <Select id="country" {...register("country")}>
            <option value="">Select country</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField
          label="City"
          htmlFor="city"
          required
          error={errors.city?.message}
        >
          <Input id="city" {...register("city")} />
        </FormField>
      </div>

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
      >
        {isSubmitting ? "Submitting…" : "Notify me when you launch"}
      </Button>
    </form>
  );
}
