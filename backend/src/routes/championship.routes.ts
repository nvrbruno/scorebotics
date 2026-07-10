import { Router } from "express";
import { ChampionshipController } from "../controllers/championship.controller";
const ChampionshipRoutes = Router();

const championshipController = new ChampionshipController();

ChampionshipRoutes.get('/championship', championshipController.findAll);
ChampionshipRoutes.get('/championship/:id', championshipController.findById);
ChampionshipRoutes.post('/championship', championshipController.create);
ChampionshipRoutes.put('/championship/:id', championshipController.update);
ChampionshipRoutes.delete('/championship/:id',championshipController.delete);

export default ChampionshipRoutes;