import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Ingrese al menos 2 caracteres")
    .max(10, "Ingrese máximo 10 caracteres"),
  email: z.string().email(),
  message: z.string().min(10).max(100),
  phone: z.string().min(9).max(9),
  age: z.number().int().min(18).max(99),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
