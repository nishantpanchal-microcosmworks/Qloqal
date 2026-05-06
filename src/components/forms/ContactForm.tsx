import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Send, Loader2 } from 'lucide-react';
import { contactSchema, type ContactData } from '@/lib/validators';
import { submitForm } from '@/lib/submitForm';
import { TextInput, Textarea, Select, Honeypot } from '@/components/ui/FormField';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { subject: 'Other' },
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError(null);
    try {
      await submitForm(`[Qloqal] Contact — ${values.subject}`, values);
      navigate('/thank-you?type=contact');
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
          label="Your name"
          autoComplete="name"
          required
          error={errors.name?.message}
          {...register('name')}
        />
        <TextInput
          label="Email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          error={errors.email?.message}
          {...register('email')}
        />
      </div>

      <Select
        label="Subject"
        required
        error={errors.subject?.message}
        options={[
          { value: 'Customer Question', label: 'Customer Question' },
          { value: 'Kirana Owner Question', label: 'Kirana Owner Question' },
          { value: 'Partnership', label: 'Partnership' },
          { value: 'Press', label: 'Press' },
          { value: 'Investor', label: 'Investor' },
          { value: 'Other', label: 'Other' },
        ]}
        {...register('subject')}
      />

      <Textarea
        label="Message"
        placeholder="Tell us a bit about why you're reaching out..."
        rows={6}
        required
        error={errors.message?.message}
        {...register('message')}
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
            <Send size={18} /> Send message
          </>
        )}
      </Button>
    </form>
  );
}
