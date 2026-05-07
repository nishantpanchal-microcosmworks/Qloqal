import { z } from 'zod';

const e164 = /^\+[1-9]\d{6,14}$/;

export const vendorInquirySchema = z.object({
  shopName: z.string().min(2, 'Shop name is required'),
  ownerName: z.string().min(2, 'Owner / contact name is required'),
  countryCode: z.string().regex(/^\+\d{1,4}$/, 'Pick a country code'),
  phoneLocal: z
    .string()
    .min(6, 'Enter a valid phone number')
    .regex(/^\d+$/, 'Numbers only'),
  category: z.string().min(1, 'Choose a category'),
  hours: z.string().optional(),
  deliveryModel: z.enum(['self', 'pickup', 'qloqal'], {
    errorMap: () => ({ message: 'Pick a delivery option' }),
  }),
  notes: z.string().max(1000, 'Keep it under 1000 characters').optional(),
});

export type VendorInquiryInput = z.infer<typeof vendorInquirySchema>;

export const vendorInquiryRefined = vendorInquirySchema.refine(
  (v) => e164.test(`${v.countryCode}${v.phoneLocal}`),
  { message: 'Phone number is not valid', path: ['phoneLocal'] },
);

export const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Enter a valid email'),
  message: z.string().min(10, 'Tell us a little more').max(2000, 'Keep it under 2000 characters'),
});

export type ContactInput = z.infer<typeof contactSchema>;
