import { Request, Response } from "express";
import {
  createTeamResponsibleSchema,
  adminCreateTeamResponsibleSchema,
  updateTeamResponsibleSchema,
} from "../validators/teamResponsible.validator";
import { TeamResponsibleService } from "../services/teamResponsible.services";
import { AuthenticatedRequest } from "../middlewares/auth.middleware";

const service = new TeamResponsibleService();

export class TeamResponsibleController {
  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const responsibleId = req.user!.sub;
      const data = createTeamResponsibleSchema.parse(req.body);

      const teamResponsible = await service.create(
        data.teamId,
        responsibleId,
        data.role,
      );
      res.status(201).json(teamResponsible);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }

  async findByResponsibleId(req: AuthenticatedRequest, res: Response) {
  try {
    const responsibleId = req.user!.sub;
    const team = await service.findByResponsibleId(responsibleId);
    res.json(team);
  } catch (error) {
    res.status(404).json({ message: (error as Error).message });
  }
}

  
async adminFindById(req: AuthenticatedRequest, res: Response) {
  try {
    const responsibleId = req.user!.sub;
    const teamReponsible = await service.findById(responsibleId);
    res.json(teamReponsible);
  } catch (error) {
    res.status(404).json({ message: (error as Error).message });
  }
}
  async delete(req: AuthenticatedRequest, res: Response) {
    try {
      const responsibleId = req.user!.sub;
      await service.deleteByResponsibleId(responsibleId);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }

  async adminFindAll(req: Request, res: Response) {
    try {
      const teamResponsibles = await service.findAll();
      res.json(teamResponsibles);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }
  
  async adminCreate(req: Request, res: Response) {
    try {
      const data = adminCreateTeamResponsibleSchema.parse(req.body);
      const teamResponsible = await service.create(
        data.teamId,
        data.responsibleId,
        data.role,
      );
      res.status(201).json(teamResponsible);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }
  
  async adminUpdate(req: Request, res: Response) {
    try {
      const data = updateTeamResponsibleSchema.parse(req.body);
      const teamResponsible = await service.update(
        req.params.id as string,
        data,
      );
      res.json(teamResponsible);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }
  
  async adminDelete(req: Request, res: Response) {
    try {
      await service.delete(req.params.id as string);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }
}
