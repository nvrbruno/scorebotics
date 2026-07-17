import { TeamResponsible } from '@prisma/client';
import { CreateTeamResponsibleDTO, UpdateTeamResponsibleDTO } from '../dto/teamResponsible.dto';

// contract that any TeamResponsibleRepository implementation must follow
export interface ITeamResponsibleRepository {
  create(data: CreateTeamResponsibleDTO): Promise<TeamResponsible>;
  findAll(): Promise<TeamResponsible[]>;
  findById(id: string): Promise<TeamResponsible | null>;
  update(id: string, data: UpdateTeamResponsibleDTO): Promise<TeamResponsible>;
  delete(id: string): Promise<void>;
}