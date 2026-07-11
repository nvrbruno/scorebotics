import { Router } from "express";
import { EventController } from "../controllers/event.controller";
const EventRoutes = Router();

const eventControler = new EventController();

EventRoutes.get('/event', eventControler.findAll);
EventRoutes.get('/event/:id', eventControler.findById);
EventRoutes.post('/event', eventControler.create);
EventRoutes.put('/event/:id', eventControler.update);
EventRoutes.delete('/event/:id',eventControler.delete);

export default EventRoutes;
