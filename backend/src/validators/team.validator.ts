import { z } from "zod";

// Validates payload for creating a Team
export const createTeamSchema = z.object({
  categoryId: z.string().max(36),
  name: z.string().max(150),
  institution: z.string().max(255),
  logoUrl: z.string().max(255).optional(),
});

// Validates payload for updating a status Team
export const updateTeamStatusSchema = z.object({
  status: z.enum(["created", "under_review", "approved"])
});

// Validates payload for updating a Team (all fields optional)
export const updateTeamSchema = z.object({
  categoryId: z.string().max(36).optional(),
  name: z.string().max(150).optional(),
  institution: z.string().max(255).optional(),
  logoUrl: z.string().max(255).optional(),
});