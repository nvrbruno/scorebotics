import { TeamStatus } from "@prisma/client";

// shape expected when creating a Team
export interface CreateTeamDTO {
  categoryId: string;
  name: string;
  institution: string;
  logoUrl?: string;
}

// shape expected when updating a Team (all fields optional)
export interface UpdateTeamDTO {
  categoryId?: string;
  name?: string;
  institution?: string;
  logoUrl?: string;
}

// shape expected when updating a status Team (only adimins)
export interface UpdateTeamStatusDTO {
  status: TeamStatus;
}

// shape returned by the API
export interface TeamResponseDTO {
  id:string;
  categoryId: string;
  name: string;
  institution: string;
  logoUrl?: string;
  status: TeamStatus;
  createdAt: Date;
}
