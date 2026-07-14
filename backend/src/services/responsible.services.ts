import argon2 from "argon2";
import { ResponsibleRepository } from "../repositories/responsible.repository";
import { CreateResponsibleDTO, UpdateResponsibleDTO } from "../dto/responsible.dto";
import jwt from "jsonwebtoken";

const repository = new ResponsibleRepository();

export class ResponsibleServices {
  async create(dto: CreateResponsibleDTO) {
    const existing = await repository.findByEmail(dto.email);
    if (existing) {
      throw new Error("Email already in use.");
    }

    const passwordHash = await argon2.hash(dto.password);

    return repository.create({
      name: dto.name,
      cpf: dto.cpf,
      email: dto.email,
      phone: dto.phone,
      birthDate: dto.birthDate,
      passwordHash,
    });
  }

  findAll() {
    return repository.findAll();
  }

  async findById(id: string) {
    const responsible = await repository.findById(id);
    if (!responsible) {
      throw new Error("Responsible not found.");
    }
    return responsible;
  }

  async findByEmail(email: string) {
    const responsible = await repository.findByEmail(email);
    if (!responsible) {
      throw new Error("Responsible not found.");
    }
    return responsible;
  }

  update(id: string, data: UpdateResponsibleDTO) {
    return repository.update(id, data);
  }

  async updatePassword(
    id: string,
    currentPassword: string,
    newPassword: string,
  ) {
    const responsible = await repository.findById(id);
    if (!responsible) {
      throw new Error("Invalid credentials.");
    }

    const isCurrentValid = await argon2.verify(
      responsible.passwordHash,
      currentPassword,
    );
    if (!isCurrentValid) {
      throw new Error("Invalid credentials.");
    }

    const newPasswordHash = await argon2.hash(newPassword);
    return repository.updatePassword(id, newPasswordHash);
  }

  // Admin reset — no currentPassword check, since an admin isn't expected to know it
  async resetPassword(id: string, newPassword: string) {
    const responsible = await repository.findById(id);
    if (!responsible) {
      throw new Error("Responsible not found.");
    }

    const newPasswordHash = await argon2.hash(newPassword);
    return repository.updatePassword(id, newPasswordHash);
  }

  delete(id: string) {
    return repository.delete(id);
  }

  async login(email: string, password: string) {
    const responsible = await repository.findByEmail(email);
    if (!responsible) {
      throw new Error("Invalid credentials.");
    }

    const isValid = await argon2.verify(responsible.passwordHash, password);
    if (!isValid) {
      throw new Error("Invalid credentials.");
    }

    const token = jwt.sign(
      { sub: responsible.id, role: "responsible" },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" },
    );

    return { token, responsible };
  }
}