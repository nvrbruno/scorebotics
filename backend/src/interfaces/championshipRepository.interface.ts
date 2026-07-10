import { Championship } from '@prisma/client';
import { CreateChampionshipDTO, UpdateChampionshipDTO } from '../dto/championship.dto';

// contract that any ChampionshipRepository implementation must follow
export interface IChampionshipRepository {
  create(data: CreateChampionshipDTO): Promise<Championship>;
  findAll(): Promise<Championship[]>;
  findById(id: string): Promise<Championship | null>;
  update(id: string, data: UpdateChampionshipDTO): Promise<Championship>;
  delete(id: string): Promise<void>;
}