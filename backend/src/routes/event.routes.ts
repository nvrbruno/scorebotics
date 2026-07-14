import { Router } from "express";
import { EventController } from "../controllers/event.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { requireAdmin } from "../middlewares/authAdmin.middleware";
const EventRoutes = Router();

const eventControler = new EventController();

EventRoutes.get('/event', eventControler.findAll);
EventRoutes.get('/event/:id', eventControler.findById);
EventRoutes.post('/event', authenticate, requireAdmin, eventControler.create);
EventRoutes.put('/event/:id', authenticate, requireAdmin, eventControler.update);
EventRoutes.delete('/event/:id', authenticate, requireAdmin, eventControler.delete);

export default EventRoutes;
