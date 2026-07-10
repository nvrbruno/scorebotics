import { Router } from "express";
import ChampionshipRoutes from "./championship.routes";


const router = Router();

router.use('/', ChampionshipRoutes);

export default router;