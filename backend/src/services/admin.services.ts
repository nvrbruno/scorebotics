import argon2 from "argon2";
import { AdminRepository } from "../repositories/admin.repository";
import { CreateAdminDTO, UpdateAdminDTO } from "../dto/admin.dto";
import jwt from "jsonwebtoken";

const repository = new AdminRepository();

export class AdminService {
  async create(dto: CreateAdminDTO) {
    const existing = await repository.findByEmail(dto.email);
    if (existing) {
      throw new Error("Email already in use.");
    }

    const passwordHash = await argon2.hash(dto.password);

    return repository.create({
      name: dto.name,
      email: dto.email,
      passwordHash,
    });
  }

  findAll() {
    return repository.findAll();
  }

  async findById(id: string) {
    const admin = await repository.findById(id);
    if (!admin) {
      throw new Error("Admin not found.");
    }
    return admin;
  }

  async findByEmail(email: string) {
    const admin = await repository.findByEmail(email);
    if (!admin) {
      throw new Error("Admin not found.");
    }
    return admin;
  }

  update(id: string, data: UpdateAdminDTO) {
    return repository.update(id, data);
  }

  async updatePassword(
    id: string,
    currentPassword: string,
    newPassword: string,
  ) {
    const admin = await repository.findById(id);
    if (!admin) {
      throw new Error("Invalid credentials.");
    }

    const isCurrentValid = await argon2.verify(
      admin.passwordHash,
      currentPassword,
    );
    if (!isCurrentValid) {
      throw new Error("Invalid credentials.");
    }

    const newPasswordHash = await argon2.hash(newPassword);
    return repository.updatePassword(id, newPasswordHash);
  }

  delete(id: string) {
    return repository.delete(id);
  }

  async login(email: string, password: string) {
    const admin = await repository.findByEmail(email);
    if (!admin) {
      throw new Error("Invalid credentials.");
    }

    const isValid = await argon2.verify(admin.passwordHash, password);
    if (!isValid) {
      throw new Error("Invalid credentials.");
    }

    const token = jwt.sign(
      { sub: admin.id, role: "admin" },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" },
    );

    return { token, admin };
  }
}
