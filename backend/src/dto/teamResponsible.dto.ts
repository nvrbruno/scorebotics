// shape expected when creating a TeamResponsible
export interface CreateTeamResponsibleDTO {
  teamId: string;
  responsibleId: string;
  role?: string;
}

// shape expected when updating a TeamResponsible (all fields optional)
export interface UpdateTeamResponsibleDTO {
  teamId?: string;
  responsibleId?: string;
  role?: string;
}

// shape returned by the API
export interface TeamResponsibleResponseDTO {
  id:string;
  teamId: string;
  responsibleId: string;
  role: string;
  createdAt: Date;
}
