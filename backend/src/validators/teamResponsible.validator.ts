import { z } from "zod";

// Validates payload for creating a TeamResponsible
export const createTeamResponsibleSchema = z.object({
  teamId: z.string().max(36),
  role: z.string().max(40).optional(),
});

// Validates payload for admin creating a TeamResponsible
export const adminCreateTeamResponsibleSchema = z.object({
  teamId: z.string().max(36),
  responsibleId: z.string().max(36),
  role: z.string().max(40).optional(),
});

// Validates payload for updating a TeamResponsible (all fields optional)
export const updateTeamResponsibleSchema = z.object({
  teamId: z.string().max(36).optional(),
  role: z.string().max(40).optional(),
});