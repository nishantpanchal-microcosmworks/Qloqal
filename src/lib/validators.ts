import { z } from 'zod';

const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;

export const notifyMeSchema = z.object({
  name: z.string().min(2, 'Please enter your name').max(80),
  phone: z.string().regex(phoneRegex, 'Enter a valid phone number'),
  city: z.string().min(2, 'Please enter your city').max(80),
  botcheck: z.string().optional(),
});
export type NotifyMeData = z.infer<typeof notifyMeSchema>;

export const vendorInquirySchema = z.object({
  shopName: z.string().min(2, 'Please enter your shop name').max(120),
  ownerName: z.string().min(2, 'Please enter your name').max(80),
  whatsapp: z.string().regex(phoneRegex, 'Enter a valid WhatsApp number'),
  city: z.string().min(2, 'Please enter your city').max(80),
  locality: z.string().max(120).optional(),
  category: z.enum(['Grocery', 'General Store', 'Electronics', 'Other']),
  yearsInBusiness: z.coerce.number().min(0).max(100).optional(),
  avgCustomersPerDay: z.coerce.number().min(0).max(10000).optional(),
  onWhatsAppDaily: z.enum(['Yes', 'No']),
  botcheck: z.string().optional(),
});
export type VendorInquiryData = z.infer<typeof vendorInquirySchema>;

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name').max(80),
  email: z.string().email('Enter a valid email'),
  subject: z.enum([
    'Customer Question',
    'Kirana Owner Question',
    'Partnership',
    'Press',
    'Investor',
    'Other',
  ]),
  message: z.string().min(10, 'Please write a few more words').max(2000),
  botcheck: z.string().optional(),
});
export type ContactData = z.infer<typeof contactSchema>;
