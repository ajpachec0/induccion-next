import { z } from "zod";

export const actionProductSchema = z.object({
  createdAt: z.string().min(1, "La fecha de creación es requerida"),
  name: z.string().min(1, "El nombre es requerido"),
  description: z.string().min(1, "La descripción es requerida"),
  image: z.string().min(1, "La imagen es requerida"),
  codigo: z.string().min(1, "El código es requerido"),

  id: z.string().optional(),
});

export type ActionProductValues = z.infer<typeof actionProductSchema>;
