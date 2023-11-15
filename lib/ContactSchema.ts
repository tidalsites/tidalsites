import { z } from "zod";

export const ContactSchema = z.object({
  first_name: z
    .string()
    .min(1, "First Name must be at least 1 character")
    .max(30, "First Name cannot be more than 30 characters"),
  last_name: z
    .string()
    .min(1, "Last Name must be at least 1 character")
    .max(30, "Last Name cannot be more than 30 characters"),
  company_name: z
    .string()
    .max(50, "Company Name cannot be more than 30 characters")
    .optional(),
  email: z.string().email().max(50, "Email cannot be more than 50 characters"),
  phone: z.string().max(18, "Phone Number cannot be more than 18 characters"),
  description: z.string().min(30, "Description must be at least 30 characters"),
});

export type TContactSchema = z.infer<typeof ContactSchema>;
