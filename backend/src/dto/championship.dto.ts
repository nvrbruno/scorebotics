import { Status } from '@prisma/client';

// shape expected when creating a championship
export interface CreateChampionshipDTO {
  name: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
}

// shape expected when updating a championship (all fields optional)
export interface UpdateChampionshipDTO {
  name?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  status?: Status;
}

// shape returned by the API
export interface ChampionshipResponseDTO {
  id: string;
  name: string;
  description: string | null;
  startDate: Date | null;
  endDate: Date | null;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}