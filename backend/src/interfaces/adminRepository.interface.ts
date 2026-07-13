import { Administrator, Prisma } from '@prisma/client';
import { UpdateAdminDTO } from '../dto/admin.dto';

// Note: `create` takes Prisma.AdministratorCreateInput instead of CreateAdminDTO
// because the DTO carries a plain-text `password`, while the database expects
// `passwordHash`. Hashing happens in the service layer, so by the time this
// repository is called, the data is already shaped for Prisma.
// contract that any AdminRepository implementation must follow
export interface IAdminRepository {
  create(data: Prisma.AdministratorCreateInput): Promise<Administrator>;
  findAll(): Promise<Administrator[]>;
  findById(id: string): Promise<Administrator | null>;
  findByEmail(email: string): Promise<Administrator | null>;
  update(id: string, data: UpdateAdminDTO): Promise<Administrator>;
  updatePassword(id: string, passwordHash: string): Promise<Administrator>;
  delete(id: string): Promise<void>;
}