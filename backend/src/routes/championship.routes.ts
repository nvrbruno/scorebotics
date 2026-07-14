import { Router } from "express";
import { ChampionshipController } from "../controllers/championship.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { requireAdmin } from "../middlewares/authAdmin.middleware";

const ChampionshipRoutes = Router();

const championshipController = new ChampionshipController();

ChampionshipRoutes.get('/championship', championshipController.findAll);
ChampionshipRoutes.get('/championship/:id', championshipController.findById);
ChampionshipRoutes.post('/championship', authenticate, requireAdmin, championshipController.create);
ChampionshipRoutes.put('/championship/:id', authenticate, requireAdmin, championshipController.update);
ChampionshipRoutes.delete('/championship/:id', authenticate, requireAdmin, championshipController.delete);

export default ChampionshipRoutes;