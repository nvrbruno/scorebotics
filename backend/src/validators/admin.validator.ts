import { z } from "zod";

// Validates payload for creating an Admin
export const createAdminSchema = z.object({
  name: z.string().min(1, "Name is required").max(150),
  email: z.string().email("Invalid email").max(150),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(72, "Password must be at most 72 characters") // argon2 byte limit
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

// Validates payload for updating an Admin's profile (all fields optional)
export const updateAdminSchema = z.object({
  name: z.string().min(1).max(150).optional(),
  email: z.string().email("Invalid email").max(150).optional(),
});

// Validates payload for updating an Admin's password
export const updateAdminPasswordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z
    .string()
    .min(8, "New password must be at least 8 characters")
    .max(72, "New password must be at most 72 characters")
    .regex(/[a-z]/, "New password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "New password must contain at least one uppercase letter")
    .regex(/[0-9]/, "New password must contain at least one number"),
});

// Validates payload for admin login
export const loginAdminSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});