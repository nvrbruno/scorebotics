import { Team } from '@prisma/client';
import { CreateTeamDTO, UpdateTeamDTO, UpdateTeamStatusDTO } from '../dto/team.dto';

// contract that any TeamRepository implementation must follow
export interface ITeamRepository {
  create(data: CreateTeamDTO): Promise<Team>;
  findAll(): Promise<Team[]>;
  findById(id: string): Promise<Team | null>;
  update(id: string, data: UpdateTeamDTO): Promise<Team>;
  updateStatus(id: string, data: UpdateTeamStatusDTO): Promise<Team>;
  delete(id: string): Promise<void>;
}