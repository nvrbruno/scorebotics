import { Request, Response } from "express";
import {
  createResponsibleSchema,
  updateResponsiblePasswordSchema,
  updateResponsibleSchema,
  loginResponsibleSchema,
  adminResetPasswordSchema,
} from "../validators/responsible.validator";
import { ResponsibleServices } from "../services/responsible.services";
import { Responsible } from "@prisma/client";
import { ResponsibleResponseDTO } from "../dto/responsible.dto";
import { AuthenticatedRequest } from "../middlewares/auth.middleware";

const service = new ResponsibleServices();

function toResponseDTO(responsible: Responsible): ResponsibleResponseDTO {
  return {
    id: responsible.id,
    name: responsible.name,
    cpf: responsible.cpf,
    email: responsible.email,
    phone: responsible.phone,
    birthDate: responsible.birthDate
  };
}

export class ResponsibleController {
  async create(req: Request, res: Response) {
    try {
      const data = createResponsibleSchema.parse(req.body);
      const responsible = await service.create(data);
      res.status(201).json(toResponseDTO(responsible));
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const data = loginResponsibleSchema.parse(req.body);
      const { token, responsible } = await service.login(data.email, data.password);
      res.json({ token, responsible: toResponseDTO(responsible) });
    } catch (error) {
      res.status(401).json({ message: "Invalid credentials." });
    }
  }


  async findMe(req: AuthenticatedRequest, res: Response) {
    try {
      const responsible = await service.findById(req.user!.sub);
      res.json(toResponseDTO(responsible));
    } catch (error) {
      res.status(404).json({ message: (error as Error).message });
    }
  }

  async update(req: AuthenticatedRequest, res: Response) {
    try {
      const id = req.user!.sub;
      const data = updateResponsibleSchema.parse(req.body);
      const responsible = await service.update(id, data);
      res.json(toResponseDTO(responsible));
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }

  async updatePassword(req: AuthenticatedRequest, res: Response) {
    try {
      const id = req.user!.sub;
      const data = updateResponsiblePasswordSchema.parse(req.body);
      const responsible = await service.updatePassword(
        id,
        data.currentPassword,
        data.newPassword,
      );
      res.json(toResponseDTO(responsible));
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }

  async delete(req: AuthenticatedRequest, res: Response) {
    try {
      const id = req.user!.sub;
      await service.delete(id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }


  async findAll(req: Request, res: Response) {
    try {
      const responsibles = await service.findAll();
      res.json(responsibles.map(toResponseDTO));
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const responsible = await service.findById(req.params.id as string);
      res.json(toResponseDTO(responsible));
    } catch (error) {
      res.status(404).json({ message: (error as Error).message });
    }
  }

  async findByEmail(req: Request, res: Response) {
    try {
      const responsible = await service.findByEmail(req.params.email as string);
      res.json(toResponseDTO(responsible));
    } catch (error) {
      res.status(404).json({ message: (error as Error).message });
    }
  }

  async adminUpdate(req: Request, res: Response) {
    try {
      const data = updateResponsibleSchema.parse(req.body);
      const responsible = await service.update(req.params.id as string, data);
      res.json(toResponseDTO(responsible));
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  }

  async adminResetPassword(req: Request, res: Response) {
    try {
      const data = adminResetPasswordSchema.parse(req.body);
      const responsible = await service.resetPassword(req.params.id as string, data.newPassword);
      res.json(toResponseDTO(responsible));
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