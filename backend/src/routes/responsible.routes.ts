import { Router } from "express";
import { ResponsibleController } from "../controllers/responsible.controller";
import { authenticate } from "../middlewares/auth.middleware";

const responsibleRoutes = Router();
const responsibleController = new ResponsibleController();

// Public route — no auth required to log in
responsibleRoutes.post('/responsible/login', responsibleController.login);

// Public route — no auth required to create an account
responsibleRoutes.post('/responsibles', responsibleController.create);

// Protected routes — self-service only, id comes from the token
responsibleRoutes.get('/responsibles', authenticate, responsibleController.findMe);
responsibleRoutes.patch('/responsibles', authenticate, responsibleController.update);
responsibleRoutes.patch('/responsibles/password', authenticate, responsibleController.updatePassword);
responsibleRoutes.delete('/responsibles', authenticate, responsibleController.delete);

export default responsibleRoutes;