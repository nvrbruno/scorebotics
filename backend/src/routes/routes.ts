import { Router } from "express";
import ChampionshipRoutes from "./championship.routes";
import EventRoutes from "./event.routes";


const router = Router();

router.use('/', ChampionshipRoutes);
router.use('/', EventRoutes);

export default router;