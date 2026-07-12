import { Request, Response } from "express";
import {
  createAdminSchema,
  updateAdminPasswordSchema,
  updateAdminSchema,
  loginAdminSchema,
} from "../validators/admin.validator";
import { AdminService } from "../services/admin.services";
import { Administrator } from "@prisma/client";
import { AdminResponseDTO } from "../dto/admin.dto";

const service = new AdminService();

function toResponseDTO(admin: Administrator): AdminResponseDTO {
  return {
    id: admin.id,
    name: admin.name,
    email: admin.email,
  };
}

export class AdminController {
  async create(req: Request, res: Response) {
    try {
      const data = createAdminSchema.parse(req.body);
      const admin = await service.create(data);
      res.status(201).json(toResponseDTO(admin));
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const admins = await service.findAll();
      res.json(admins.map(toResponseDTO));
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const admin = await service.findById(req.params.id as string);
      res.json(toResponseDTO(admin));
    } catch (error) {
      res.status(404).json({ message: (error as Error).message });
    }
  }

  async findByEmail(req: Request, res: Response) {
    try {
      const admin = await service.findByEmail(req.params.email as string);
      res.json(toResponseDTO(admin));
    } catch (error) {
      res.status(404).json({ message: (error as Error).message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const data = updateAdminSchema.parse(req.body);
      const admin = await service.update(req.params.id as string, data);
      res.json(toResponseDTO(admin));
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }

  async updatePassword(req: Request, res: Response) {
    try {
      const data = updateAdminPasswordSchema.parse(req.body);
      const admin = await service.updatePassword(
        req.params.id as string,
        data.currentPassword,
        data.newPassword,
      );
      res.json(toResponseDTO(admin));
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const data = loginAdminSchema.parse(req.body);
      const { token, admin } = await service.login(data.email, data.password);
      res.json({ token, admin: toResponseDTO(admin) });
    } catch (error) {
      res.status(401).json({ message: "Invalid credentials." });
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
