import { Router } from "express";
import { TeamResponsibleController } from "../controllers/teamReponsible.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { requireAdmin } from "../middlewares/authAdmin.middleware";
import { requireResponsible } from "../middlewares/authResponsible.middleware";

const teamResponsibleRoutes = Router();
const teamResponsibleController = new TeamResponsibleController();

// Protected routes — admin only
teamResponsibleRoutes.get('/admin/teamResponsibles', authenticate, requireAdmin, teamResponsibleController.adminFindAll);
teamResponsibleRoutes.get('/admin/teamResponsibles', authenticate, requireAdmin, teamResponsibleController.adminFindById);
teamResponsibleRoutes.post('/admin/teamResponsibles/:id', authenticate, requireAdmin, teamResponsibleController.adminCreate);
teamResponsibleRoutes.put('/admin/teamResponsibles/:id', authenticate, requireAdmin, teamResponsibleController.adminUpdate);
teamResponsibleRoutes.delete('/admin/teamResponsibles/:id', authenticate, requireAdmin, teamResponsibleController.adminDelete);

// Protected routes — self-service only, id comes from the token
teamResponsibleRoutes.get('/teamResponsibles', authenticate, requireResponsible, teamResponsibleController.findByResponsibleId);
teamResponsibleRoutes.post('/teamResponsibles', authenticate, requireResponsible, teamResponsibleController.create);
teamResponsibleRoutes.delete('/teamResponsibles', authenticate, requireResponsible, teamResponsibleController.delete);

export default teamResponsibleRoutes;