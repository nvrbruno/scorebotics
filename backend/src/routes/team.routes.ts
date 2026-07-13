import { Router } from "express";
import { TeamController } from "../controllers/team.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { requireAdmin } from "../middlewares/authAdmin.middleware";

const teamRoutes = Router();
const teamController = new TeamController();

// Protected routes — admin only
teamRoutes.patch('/teams/:id/status', authenticate, requireAdmin, teamController.updateStatus);

teamRoutes.get('/teams', teamController.findAll);
teamRoutes.get('/teams/:id', teamController.findById);
teamRoutes.post('/teams', teamController.create);
teamRoutes.put('/teams/:id', teamController.update);
teamRoutes.delete('/teams/:id', teamController.delete);

export default teamRoutes;