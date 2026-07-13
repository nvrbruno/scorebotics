import { Router } from "express";
import { AdminController } from "../controllers/admin.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { requireAdmin } from "../middlewares/authAdmin.middleware";

const adminRoutes = Router();
const adminController = new AdminController();

// Public route — no auth required to log in
adminRoutes.post('/admin/login', adminController.login);

// Protected routes — admin only
adminRoutes.get('/admins', authenticate, requireAdmin, adminController.findAll);
adminRoutes.get('/admins/by-email/:email', authenticate, requireAdmin, adminController.findByEmail);
adminRoutes.get('/admins/:id', authenticate, requireAdmin, adminController.findById);
adminRoutes.post('/admins', authenticate, requireAdmin, adminController.create);
adminRoutes.patch('/admins/:id', authenticate, requireAdmin, adminController.update);
adminRoutes.patch('/admins/:id/password', authenticate, requireAdmin, adminController.updatePassword);
adminRoutes.delete('/admins/:id', authenticate, requireAdmin, adminController.delete);

export default adminRoutes;