import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';
import FormField from '../ui/FormField';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Textarea from '../ui/Textarea';
import RadioGroup from '../ui/RadioGroup';
import PhoneInput from '../ui/PhoneInput';
import { vendorInquiryRefined, VendorInquiryInput } from '../../lib/validators';
import { categories } from '../../data/categories';
import { cta } from '../../lib/analytics';

export default function VendorInquiryForm() {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<VendorInquiryInput>({
    resolver: zodResolver(vendorInquiryRefined),
    defaultValues: { countryCode: '+1', deliveryModel: undefined as unknown as 'self' },
  });

  const deliveryModel = watch('deliveryModel');

  const onSubmit = async (data: VendorInquiryInput) => {
    setSubmitError(null);
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    const phone = `${data.countryCode}${data.phoneLocal}`;

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Qloqal vendor inquiry — ${data.shopName}`,
          from_name: data.ownerName,
          shop_name: data.shopName,
          owner_name: data.ownerName,
          whatsapp: phone,
          category: data.category,
          hours: data.hours || '(not provided)',
          delivery_model: data.deliveryModel,
          notes: data.notes || '(not provided)',
        }),
      });
      if (!res.ok && accessKey) throw new Error('Submission failed');
      navigate('/thank-you?from=vendor');
    } catch {
      setSubmitError('Could not submit right now. Please try again or email us instead.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Shop name" htmlFor="shopName" required error={errors.shopName?.message}>
          <Input id="shopName" {...register('shopName')} invalid={!!errors.shopName} placeholder="e.g. Maya's Bakery" />
        </FormField>
        <FormField label="Owner / contact name" htmlFor="ownerName" required error={errors.ownerName?.message}>
          <Input id="ownerName" {...register('ownerName')} invalid={!!errors.ownerName} placeholder="Your full name" />
        </FormField>
      </div>

      <FormField
        label="WhatsApp number"
        htmlFor="phoneLocal"
        required
        hint="We will message you here to confirm your shop."
        error={errors.phoneLocal?.message || errors.countryCode?.message}
      >
        <PhoneInput control={control} errors={errors} />
      </FormField>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Business category" htmlFor="category" required error={errors.category?.message}>
          <Select id="category" {...register('category')} invalid={!!errors.category} defaultValue="">
            <option value="" disabled>Pick a category…</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>{c.label}</option>
            ))}
            <option value="other">Other</option>
          </Select>
        </FormField>
        <FormField label="Business hours" htmlFor="hours" hint="Optional — e.g. Mon–Sat 8am–9pm.">
          <Input id="hours" {...register('hours')} placeholder="Mon–Sat 8am–9pm" />
        </FormField>
      </div>

      <FormField label="Delivery model" htmlFor="deliveryModel" required error={errors.deliveryModel?.message}>
        <RadioGroup
          name="deliveryModel"
          value={deliveryModel}
          onChange={(v) => setValue('deliveryModel', v as 'self' | 'pickup' | 'qloqal', { shouldValidate: true })}
          invalid={!!errors.deliveryModel}
          options={[
            { value: 'self', label: 'I deliver myself', description: 'You or a family member handles delivery.' },
            { value: 'pickup', label: 'Customer pickup only', description: 'Customers come to your shop to collect.' },
            { value: 'qloqal', label: 'I want Qloqal to handle delivery', description: 'We connect you with a delivery partner.' },
          ]}
        />
      </FormField>

      <FormField label="Tell us about your shop" htmlFor="notes" hint="Optional — anything we should know.">
        <Textarea id="notes" rows={4} {...register('notes')} invalid={!!errors.notes} placeholder="Top items, location, hours, anything else." />
      </FormField>

      {submitError && (
        <div role="alert" className="rounded-xl border-2 border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {submitError}
        </div>
      )}

      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          Free to list. We never charge a setup fee. You only pay a small per-order commission when an order is delivered.
        </p>
        <Button type="submit" size="lg" data-cta={cta.vendorFormSubmit} disabled={isSubmitting} className="sm:shrink-0">
          {isSubmitting && <Loader2 className="animate-spin" size={18} />}
          {isSubmitting ? 'Submitting…' : 'Get my shop online'}
        </Button>
      </div>
    </form>
  );
}
