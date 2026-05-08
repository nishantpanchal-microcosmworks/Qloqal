import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Field, Input, Textarea, Select } from "@/components/ui/FormField";
import Button from "@/components/ui/Button";
import { CATEGORIES } from "@/data/categories";

const Schema = z.object({
  shopName: z.string().min(2, "Tell us your shop name"),
  ownerName: z.string().min(2, "Tell us your name"),
  whatsapp: z
    .string()
    .min(8, "Enter your WhatsApp number including country code")
    .regex(/^[+0-9 ()-]+$/, "Use digits, spaces, and + only"),
  category: z.string().min(1, "Pick a category"),
  delivery: z.enum(["self", "pickup", "qloqal"], {
    required_error: "Pick a delivery model",
  }),
  notes: z.string().max(600).optional(),
});

type Form = z.infer<typeof Schema>;

export function VendorForm() {
  const nav = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(Schema),
    defaultValues: { delivery: "self" },
  });

  async function onSubmit(values: Form) {
    setSubmitting(true);
    try {
      // TODO: replace with real endpoint
      await new Promise((r) => setTimeout(r, 400));
      sessionStorage.setItem("qloqal:lastSubmit", "vendor");
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
          FORM · VENDOR-SIGNUP-04
        </span>
        <span className="text-[10px] uppercase tracking-widest text-[var(--color-ink-mute)]">
          ~ 60 seconds
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Field label="Shop name" required error={errors.shopName?.message}>
          <Input placeholder="Pão & Co." {...register("shopName")} />
        </Field>
        <Field label="Owner / contact" required error={errors.ownerName?.message}>
          <Input placeholder="M. Rivera" {...register("ownerName")} />
        </Field>
      </div>

      <Field
        label="WhatsApp number"
        required
        hint="Include the country code, e.g. +44 7700 900123"
        error={errors.whatsapp?.message}
      >
        <Input placeholder="+__ ___ ___ ____" {...register("whatsapp")} />
      </Field>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Field label="Category" required error={errors.category?.message}>
          <Select {...register("category")}>
            <option value="">-- pick one --</option>
            {CATEGORIES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
            <option value="other">Other</option>
          </Select>
        </Field>
        <Field
          label="Delivery model"
          required
          error={errors.delivery?.message}
        >
          <div className="grid grid-cols-1 gap-2">
            {(
              [
                ["self", "I deliver myself"],
                ["pickup", "Pickup only"],
                ["qloqal", "Hand it to Qloqal"],
              ] as const
            ).map(([val, label]) => (
              <label
                key={val}
                className="flex items-center gap-2 border-2 border-ink bg-[var(--color-paper)] px-3 py-2 text-[13px] cursor-pointer hover:bg-[var(--color-signal-yellow)]"
              >
                <input
                  type="radio"
                  value={val}
                  {...register("delivery")}
                  className="accent-[var(--color-ink)]"
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </Field>
      </div>

      <Field label="Anything else?" hint="Optional — tell us about your shop">
        <Textarea
          placeholder="We open at 7, close at 7. Bread is the lead. We bake on-site."
          {...register("notes")}
        />
      </Field>

      <Button
        type="submit"
        variant="fill-green"
        size="lg"
        disabled={submitting}
        data-cta="vendor-form-submit"
      >
        {submitting ? "Submitting…" : "Send my details"}
      </Button>

      <p className="text-[11px] uppercase tracking-widest text-[var(--color-ink-mute)]">
        * free to list. no setup fee. you only pay 5% per delivered order.
      </p>
    </form>
  );
}

export default VendorForm;
