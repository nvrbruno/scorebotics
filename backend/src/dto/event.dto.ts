import { Status } from "@prisma/client";

// shape expected when creating a event
export interface CreateEventDTO {
  championshipId: string;
  name: string;
  description?: string;
  location?: string;
  startDate?: Date;
  endDate?: Date;
}

// shape expected when updating a event (all fields optional)
export interface UpdateEventDTO {
  championshipId?: string;
  name?: string;
  description?: string;
  location?: string;
  startDate?: Date;
  endDate?: Date;
  status?: Status;
}

// shape returned by the API
export interface EventResponseDTO {
  id?:string;
  championshipId?: string;
  name?: string;
  description?: string;
  location?: string;
  startDate?: Date;
  endDate?: Date;
  status?: Status;
  createdAt: Date;
  updatedAt: Date;
}
