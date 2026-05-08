import { z } from "zod";

const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;

export const vendorInquirySchema = z.object({
  shopName: z.string().min(2, "Shop name is required"),
  ownerName: z.string().min(2, "Owner name is required"),
  whatsapp: z.string().regex(phoneRegex, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  country: z.string().min(2, "Select a country"),
  city: z.string().min(2, "City is required"),
  category: z.string().min(2, "Pick a category"),
  yearsInBusiness: z.string().optional(),
  avgOrdersPerDay: z.string().optional(),
  whatsappDaily: z.enum(["yes", "no"]),
  botcheck: z.string().max(0).optional(),
});

export const customerNotifySchema = z.object({
  name: z.string().min(2, "Name is required"),
  contact: z.string().min(5, "Email or phone is required"),
  country: z.string().min(2, "Select a country"),
  city: z.string().min(2, "City is required"),
  botcheck: z.string().max(0).optional(),
});

export const contactSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(2, "Pick a subject"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  botcheck: z.string().max(0).optional(),
});

export const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email"),
  botcheck: z.string().max(0).optional(),
});

export type VendorInquiryInput = z.infer<typeof vendorInquirySchema>;
export type CustomerNotifyInput = z.infer<typeof customerNotifySchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;
