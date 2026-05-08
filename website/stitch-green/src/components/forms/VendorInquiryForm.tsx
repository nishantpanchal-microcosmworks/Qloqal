import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { vendorInquirySchema, type VendorInquiryInput } from "@/lib/validators";
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

const CATEGORIES = [
  "Grocery",
  "Bakery",
  "Pharmacy",
  "Restaurant",
  "Clothing",
  "Hardware",
  "Electronics",
  "Other",
];

export function VendorInquiryForm() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<VendorInquiryInput>({
    resolver: zodResolver(vendorInquirySchema),
    defaultValues: { whatsappDaily: "yes" },
  });

  async function onSubmit(values: VendorInquiryInput) {
    setError(null);
    try {
      await submitForm({
        subject: `[Qloqal] New Vendor Inquiry — ${values.shopName}, ${values.country}`,
        data: values,
      });
      navigate("/thank-you?type=vendor");
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
          label="Shop name"
          htmlFor="shopName"
          required
          error={errors.shopName?.message}
        >
          <Input id="shopName" {...register("shopName")} />
        </FormField>
        <FormField
          label="Owner name"
          htmlFor="ownerName"
          required
          error={errors.ownerName?.message}
        >
          <Input id="ownerName" {...register("ownerName")} />
        </FormField>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <FormField
          label="WhatsApp number"
          htmlFor="whatsapp"
          required
          hint="Include country code, e.g. +1 555 0100"
          error={errors.whatsapp?.message}
        >
          <Input id="whatsapp" type="tel" {...register("whatsapp")} />
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

      <div className="grid gap-5 md:grid-cols-2">
        <FormField
          label="Country"
          htmlFor="country"
          required
          error={errors.country?.message}
        >
          <Select id="country" {...register("country")}>
            <option value="">Select a country</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField
          label="City / area"
          htmlFor="city"
          required
          error={errors.city?.message}
        >
          <Input id="city" {...register("city")} />
        </FormField>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <FormField
          label="Category"
          htmlFor="category"
          required
          error={errors.category?.message}
        >
          <Select id="category" {...register("category")}>
            <option value="">Pick a category</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Select>
        </FormField>
        <FormField label="Years in business" htmlFor="yearsInBusiness">
          <Input
            id="yearsInBusiness"
            type="number"
            min={0}
            {...register("yearsInBusiness")}
          />
        </FormField>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Average orders / day" htmlFor="avgOrdersPerDay">
          <Input
            id="avgOrdersPerDay"
            type="number"
            min={0}
            {...register("avgOrdersPerDay")}
          />
        </FormField>
        <FormField
          label="On WhatsApp daily?"
          htmlFor="whatsappDaily"
          required
          error={errors.whatsappDaily?.message}
        >
          <div className="flex gap-3">
            <label className="flex flex-1 items-center justify-center gap-2 rounded-xl border-[1.5px] border-outline-variant bg-surface-container-lowest px-4 py-3 text-sm cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5">
              <input
                type="radio"
                value="yes"
                className="sr-only"
                {...register("whatsappDaily")}
              />
              Yes
            </label>
            <label className="flex flex-1 items-center justify-center gap-2 rounded-xl border-[1.5px] border-outline-variant bg-surface-container-lowest px-4 py-3 text-sm cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5">
              <input
                type="radio"
                value="no"
                className="sr-only"
                {...register("whatsappDaily")}
              />
              Not yet
            </label>
          </div>
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
        className="w-full sm:w-auto"
      >
        {isSubmitting ? "Submitting…" : "Become a Founding Vendor"}
      </Button>
    </form>
  );
}
