import { Router } from "express";
import { TeamController } from "../controllers/team.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { requireAdmin } from "../middlewares/authAdmin.middleware";
import { requireResponsible } from "../middlewares/authResponsible.middleware";

const teamRoutes = Router();
const teamController = new TeamController();

// Protected routes — admin only
teamRoutes.patch('/teams/:id/status', authenticate, requireAdmin, teamController.updateStatus);
teamRoutes.patch('/admin/teams/:id', authenticate, requireAdmin, teamController.update);
teamRoutes.patch('/admin/teams/:id', authenticate, requireAdmin, teamController.delete);

teamRoutes.get('/teams', teamController.findAll);
teamRoutes.get('/teams/:id', teamController.findById);
teamRoutes.post('/teams', authenticate, requireResponsible, teamController.create);
teamRoutes.put('/teams', authenticate, requireResponsible, teamController.updateByResponsibleId);
teamRoutes.delete('/teams', authenticate, requireResponsible, teamController.deleteByResponsibleId);

export default teamRoutes;