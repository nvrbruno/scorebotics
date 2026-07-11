import { Request, Response } from "express";
import { createCategorySchema, updateCategorySchema } from "../validators/category.validator";
import { CategoryService } from "../services/category.services";

const service = new CategoryService();

export class CategoryController {
  async create(req: Request, res: Response) {
    try {
      const data = createCategorySchema.parse(req.body);
      const category = await service.create(data);
      res.status(201).json(category);
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
      const category = await service.findById(req.params.id as string);
      res.json(category);
    } catch (error) {
      res.status(404).json({ message: (error as Error).message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const data = updateCategorySchema.parse(req.body);
      const category = await service.update(req.params.id as string, data);
      res.json(category);
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