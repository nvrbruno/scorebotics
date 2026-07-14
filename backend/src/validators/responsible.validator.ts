import { z } from "zod";
import { isValidCPF } from "../utils/cpf.utils";
import { isValidPhone } from "../utils/phone.utils";
import { isValidBirthDate, isAtLeastAge } from "../utils/age.utils";

const passwordRules = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(72, "Password must be at most 72 characters") // bcrypt byte limit
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[0-9]/, "Password must contain at least one number");

const birthDateRules = z.coerce
  .date()
  .refine((date) => isValidBirthDate(date), "Invalid birth date") // not future, not older than 120 years
  .refine((date) => isAtLeastAge(date, 18), "Must be at least 18 years old");

// Validates payload for creating a Responsible
export const createResponsibleSchema = z.object({
  name: z.string().min(1, "Name is required").max(150),
  cpf: z.string().refine(isValidCPF, "Invalid CPF"),
  email: z.string().email("Invalid email").max(150),
  phone: z.string().refine(isValidPhone, "Invalid phone number"),
  birthDate: birthDateRules,
  password: passwordRules,
});

// Validates payload for updating a Responsible's profile (all fields optional)
export const updateResponsibleSchema = z.object({
  name: z.string().min(1).max(150).optional(),
  email: z.string().email("Invalid email").max(150).optional(),
  phone: z.string().refine(isValidPhone, "Invalid phone number").optional(),
  birthDate: birthDateRules.optional(),
});

// Validates payload for updating a Responsible's password
export const updateResponsiblePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: passwordRules,
});

// Validates payload for an admin resetting a Responsible's password (no current password needed)
export const adminResetPasswordSchema = z.object({
  newPassword: passwordRules,
});

// Validates payload for Responsible login
export const loginResponsibleSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});