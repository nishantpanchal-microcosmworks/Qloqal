import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';
import { notifyMeSchema, type NotifyMeData } from '@/lib/validators';
import { submitForm } from '@/lib/submitForm';
import { TextInput, Honeypot } from '@/components/ui/FormField';
import { Button } from '@/components/ui/Button';

export function NotifyMeForm() {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NotifyMeData>({
    resolver: zodResolver(notifyMeSchema),
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError(null);
    try {
      await submitForm(`[Qloqal] Shopper Interest — ${values.city}`, values);
      navigate('/thank-you?type=customer');
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      );
    }
  });

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <Honeypot />
      <TextInput
        label="Your name"
        placeholder="e.g. Riya Sharma"
        autoComplete="name"
        required
        error={errors.name?.message}
        {...register('name')}
      />
      <TextInput
        label="Phone number"
        type="tel"
        inputMode="tel"
        placeholder="+91 98765 43210"
        autoComplete="tel"
        required
        error={errors.phone?.message}
        {...register('phone')}
      />
      <TextInput
        label="Your city"
        placeholder="e.g. Delhi, Mumbai, Pune"
        autoComplete="address-level2"
        required
        error={errors.city?.message}
        {...register('city')}
      />

      {submitError ? (
        <div className="rounded-btn border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {submitError}
        </div>
      ) : null}

      <Button type="submit" size="lg" disabled={isSubmitting} fullWidth>
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            Notify me when Qloqal launches near me
            <ArrowRight size={18} />
          </>
        )}
      </Button>

      <p className="text-center text-xs text-ink-500">
        We will only use this to tell you when Qloqal is live in your area.
      </p>
    </form>
  );
}
