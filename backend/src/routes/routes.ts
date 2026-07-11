import { Router } from "express";
import ChampionshipRoutes from "./championship.routes";
import EventRoutes from "./event.routes";
import CategoryRoutes from "./category.routes";


const router = Router();

router.use('/', ChampionshipRoutes);
router.use('/', EventRoutes);
router.use('/', CategoryRoutes);

export default router;