import { Router } from "express";
import ChampionshipRoutes from "./championship.routes";
import EventRoutes from "./event.routes";
import CategoryRoutes from "./category.routes";
import adminRoutes from "./admin.routes";
import teamRoutes from "./team.routes";
import responsibleRoutes from "./responsible.routes";
import adminResponsibleRoutes from "./adminResponsible.routes";


const router = Router();

router.use('/', ChampionshipRoutes);
router.use('/', EventRoutes);
router.use('/', CategoryRoutes);
router.use('/', adminRoutes);
router.use('/', teamRoutes);
router.use('/', responsibleRoutes);
router.use('/', adminResponsibleRoutes);

export default router;