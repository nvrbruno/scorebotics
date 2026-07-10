import { z } from "zod";

// Validates payload for creating a championship
export const createChampionshipSchema = z.object({
  name: z.string().max(150),
  description: z.string().max(255).optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
});

// Validates payload for updating a championship (all fields optional)
export const updateChampionshipSchema = z.object({
  name: z.string().max(150).optional(),
  description: z.string().max(255).optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  status: z.enum(["not_started", "in_progress", "finished"]).optional(),
});