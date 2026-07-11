import { z } from "zod";

// Validates payload for creating a category
export const createCategorySchema = z.object({
  eventId: z.string().max(36),
  name: z.string().max(150),
  description: z.string().max(255).optional(),
});

// Validates payload for updating a category (all fields optional)
export const updateCategorySchema = z.object({
  eventId: z.string().max(36).optional(),
  name: z.string().max(150).optional(),
  description: z.string().max(255).optional(),
});