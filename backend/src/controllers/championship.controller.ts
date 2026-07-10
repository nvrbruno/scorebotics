import { Request, Response } from "express";
import { ChampionshipService } from "../services/championship.services";
import { parseDate } from "../utils/date.utils";
import { createChampionshipSchema, updateChampionshipSchema } from "../validators/championship.validator";

const service = new ChampionshipService();

export class ChampionshipController {
  async create(req: Request, res: Response) {
    try {
      const parsed = createChampionshipSchema.parse(req.body);
      // Convert startDate/endDate from string to Date
      const dto = {
        ...parsed,
        startDate: parsed.startDate ? parseDate(parsed.startDate) : undefined,
        endDate: parsed.endDate ? parseDate(parsed.endDate) : undefined,
      };
      const championship = await service.create(dto);
      res.status(201).json(championship);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }

  async findAll(req: Request, res: Response) {
    const championships = await service.findAll();
    res.json(championships);
  }

  async findById(req: Request, res: Response) {
    try {
      const championship = await service.findById(req.params.id as string);
      res.json(championship);
    } catch (error) {
      res.status(404).json({ message: (error as Error).message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const parsed = updateChampionshipSchema.parse(req.body);
      // Convert startDate/endDate from string to Date
      const dto = {
        ...parsed,
        startDate: parsed.startDate ? parseDate(parsed.startDate) : undefined,
        endDate: parsed.endDate ? parseDate(parsed.endDate) : undefined,
      };
      const championship = await service.update(req.params.id as string, dto);
      res.json(championship);
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