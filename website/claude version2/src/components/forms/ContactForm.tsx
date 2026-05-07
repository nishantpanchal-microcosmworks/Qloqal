import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';
import FormField from '../ui/FormField';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import { contactSchema, ContactInput } from '../../lib/validators';
import { cta } from '../../lib/analytics';

export default function ContactForm() {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactInput) => {
    setSubmitError(null);
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Qloqal contact — ${data.name}`,
          from_name: data.name,
          email: data.email,
          message: data.message,
        }),
      });
      if (!res.ok && accessKey) throw new Error('Submission failed');
      navigate('/thank-you?from=contact');
    } catch {
      setSubmitError('Could not send right now. Please try again or email us directly.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Your name" htmlFor="name" required error={errors.name?.message}>
          <Input id="name" {...register('name')} invalid={!!errors.name} placeholder="Full name" />
        </FormField>
        <FormField label="Email" htmlFor="email" required error={errors.email?.message}>
          <Input id="email" type="email" {...register('email')} invalid={!!errors.email} placeholder="you@example.com" />
        </FormField>
      </div>

      <FormField label="Message" htmlFor="message" required error={errors.message?.message}>
        <Textarea id="message" rows={5} {...register('message')} invalid={!!errors.message} placeholder="How can we help?" />
      </FormField>

      {submitError && (
        <div role="alert" className="rounded-xl border-2 border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {submitError}
        </div>
      )}

      <Button type="submit" size="lg" data-cta={cta.contactFormSubmit} disabled={isSubmitting} className="self-start">
        {isSubmitting && <Loader2 className="animate-spin" size={18} />}
        {isSubmitting ? 'Sending…' : 'Send message'}
      </Button>
    </form>
  );
}
