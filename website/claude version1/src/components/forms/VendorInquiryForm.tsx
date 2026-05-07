import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';
import { vendorInquirySchema, type VendorInquiryData } from '@/lib/validators';
import { submitForm } from '@/lib/submitForm';
import { TextInput, Select, Honeypot } from '@/components/ui/FormField';
import { Button } from '@/components/ui/Button';

export function VendorInquiryForm() {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<VendorInquiryData>({
    resolver: zodResolver(vendorInquirySchema),
    defaultValues: {
      category: 'Grocery',
      onWhatsAppDaily: 'Yes',
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError(null);
    try {
      await submitForm(`[Qloqal] New Kirana Inquiry — ${values.shopName}`, values);
      navigate('/thank-you?type=vendor');
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      );
    }
  });

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <Honeypot />
      <div className="grid gap-4 md:grid-cols-2">
        <TextInput
          label="Shop name"
          placeholder="e.g. Sharma Kirana"
          required
          error={errors.shopName?.message}
          {...register('shopName')}
        />
        <TextInput
          label="Owner name"
          placeholder="Your name"
          autoComplete="name"
          required
          error={errors.ownerName?.message}
          {...register('ownerName')}
        />
      </div>

      <TextInput
        label="WhatsApp number"
        type="tel"
        inputMode="tel"
        placeholder="+91 98765 43210"
        autoComplete="tel"
        required
        error={errors.whatsapp?.message}
        {...register('whatsapp')}
      />

      <div className="grid gap-4 md:grid-cols-2">
        <TextInput
          label="City"
          placeholder="e.g. Delhi"
          required
          error={errors.city?.message}
          {...register('city')}
        />
        <TextInput
          label="Locality / area"
          placeholder="e.g. Lajpat Nagar"
          error={errors.locality?.message}
          {...register('locality')}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Select
          label="Category"
          required
          error={errors.category?.message}
          options={[
            { value: 'Grocery', label: 'Grocery' },
            { value: 'General Store', label: 'General Store' },
            { value: 'Electronics', label: 'Electronics' },
            { value: 'Other', label: 'Other' },
          ]}
          {...register('category')}
        />
        <Select
          label="Are you on WhatsApp daily?"
          required
          error={errors.onWhatsAppDaily?.message}
          options={[
            { value: 'Yes', label: 'Yes' },
            { value: 'No', label: 'No' },
          ]}
          {...register('onWhatsAppDaily')}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <TextInput
          label="Years in business"
          type="number"
          inputMode="numeric"
          min={0}
          max={100}
          error={errors.yearsInBusiness?.message}
          {...register('yearsInBusiness')}
        />
        <TextInput
          label="Avg customers per day"
          type="number"
          inputMode="numeric"
          min={0}
          max={10000}
          error={errors.avgCustomersPerDay?.message}
          {...register('avgCustomersPerDay')}
        />
      </div>

      {submitError ? (
        <div className="rounded-btn border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {submitError}
        </div>
      ) : null}

      <Button type="submit" variant="accent" size="lg" disabled={isSubmitting} fullWidth>
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            Become a Founding Kirana
            <ArrowRight size={18} />
          </>
        )}
      </Button>

      <p className="text-center text-xs text-ink-500">
        Free for life for the first 50 kiranas. We will reach out on WhatsApp within 48 hours.
      </p>
    </form>
  );
}
