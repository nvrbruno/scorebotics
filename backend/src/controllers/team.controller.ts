import { Request, Response } from "express";
import { createTeamSchema, updateTeamSchema, updateTeamStatusSchema } from "../validators/team.validator";
import { TeamService } from "../services/team.services";

const service = new TeamService();

export class TeamController {
  async create(req: Request, res: Response) {
    try {
      const data = createTeamSchema.parse(req.body);
      const team = await service.create(data);
      res.status(201).json(team);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const categories = await service.findAll();
      res.json(categories);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const team = await service.findById(req.params.id as string);
      res.json(team);
    } catch (error) {
      res.status(404).json({ message: (error as Error).message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const data = updateTeamSchema.parse(req.body);
      const team = await service.update(req.params.id as string, data);
      res.json(team);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }

 async updateStatus(req: Request, res: Response) {
  try {
    const data = updateTeamStatusSchema.parse(req.body);
    const team = await service.updateStatus(req.params.id as string, data);
    res.json(team);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
}

  async delete(req: Request, res: Response) {
    try {
      await service.delete(req.params.id as string);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }
}