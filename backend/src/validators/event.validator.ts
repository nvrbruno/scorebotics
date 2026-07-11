import { z } from "zod";

// Validates payload for creating a event
export const createEventSchema = z.object({
  championshipId: z.string().max(36),
  name: z.string().max(150),
  description: z.string().max(255).optional(),
  location: z.string().max(150).optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});

// Validates payload for updating a event (all fields optional)
export const updateEventSchema = z.object({
  championshipId: z.string().max(36).optional(),
  name: z.string().max(150).optional(),
  description: z.string().max(255).optional(),
  location: z.string().max(150).optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  status: z.enum(["not_started", "in_progress", "finished"]).optional(),
});