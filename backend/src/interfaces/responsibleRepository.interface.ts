import { Responsible, Prisma } from '@prisma/client';
import { UpdateResponsibleDTO } from '../dto/responsible.dto';

// Note: `create` takes Prisma.ResponsibleCreateInput instead of CreateResponsibleDTO
// because the DTO carries a plain-text `password`, while the database expects
// `passwordHash`. Hashing happens in the service layer, so by the time this
// repository is called, the data is already shaped for Prisma.
// contract that any ResponsibleRepository implementation must follow
export interface IResponsibleRepository {
  create(data: Prisma.ResponsibleCreateInput): Promise<Responsible>;
  findAll(): Promise<Responsible[]>;
  findById(id: string): Promise<Responsible | null>;
  findByEmail(email: string): Promise<Responsible | null>;
  update(id: string, data: UpdateResponsibleDTO): Promise<Responsible>;
  updatePassword(id: string, passwordHash: string): Promise<Responsible>;
  delete(id: string): Promise<void>;
}