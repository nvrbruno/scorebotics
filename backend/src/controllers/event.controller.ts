import { Request, Response } from "express";
import { EventService } from "../services/event.services";
import { parseDate } from "../utils/date.utils";
import { createEventSchema, updateEventSchema } from "../validators/event.validator";

const service = new EventService();

export class EventController {
  async create(req: Request, res: Response) {
    try {
      const parsed = createEventSchema.parse(req.body);
      // Convert startDate/endDate from string to Date
      const dto = {
        ...parsed,
        startDate: parsed.startDate ? parseDate(parsed.startDate) : undefined,
        endDate: parsed.endDate ? parseDate(parsed.endDate) : undefined,
      };
      const event = await service.create(dto);
      res.status(201).json(event);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }

  async findAll(req: Request, res: Response) {
    const events = await service.findAll();
    res.json(events);
  }

  async findById(req: Request, res: Response) {
    try {
      const event = await service.findById(req.params.id as string);
      res.json(event);
    } catch (error) {
      res.status(404).json({ message: (error as Error).message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const parsed = updateEventSchema.parse(req.body);
      // Convert startDate/endDate from string to Date
      const dto = {
        ...parsed,
        startDate: parsed.startDate ? parseDate(parsed.startDate) : undefined,
        endDate: parsed.endDate ? parseDate(parsed.endDate) : undefined,
      };
      const event = await service.update(req.params.id as string, dto);
      res.json(event);
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