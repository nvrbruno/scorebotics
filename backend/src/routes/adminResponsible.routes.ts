import { Router } from "express";
import { ResponsibleController } from "../controllers/responsible.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { requireAdmin } from "../middlewares/authAdmin.middleware";

const adminResponsibleRoutes = Router();
const responsibleController = new ResponsibleController();

// Protected routes — admin only
adminResponsibleRoutes.get('/admin/responsibles', authenticate, requireAdmin, responsibleController.findAll);
adminResponsibleRoutes.get('/admin/responsibles/by-email/:email', authenticate, requireAdmin, responsibleController.findByEmail);
adminResponsibleRoutes.get('/admin/responsibles/:id', authenticate, requireAdmin, responsibleController.findById);
adminResponsibleRoutes.patch('/admin/responsibles/:id', authenticate, requireAdmin, responsibleController.adminUpdate);
adminResponsibleRoutes.patch('/admin/responsibles/:id/password', authenticate, requireAdmin, responsibleController.adminResetPassword);
adminResponsibleRoutes.delete('/admin/responsibles/:id', authenticate, requireAdmin, responsibleController.adminDelete);

export default adminResponsibleRoutes;