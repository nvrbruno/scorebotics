import { Event } from '@prisma/client';
import { CreateEventDTO, UpdateEventDTO } from '../dto/event.dto';

// contract that any EventRepository implementation must follow
export interface IEventRepository {
  create(data: CreateEventDTO): Promise<Event>;
  findAll(): Promise<Event[]>;
  findById(id: string): Promise<Event | null>;
  update(id: string, data: UpdateEventDTO): Promise<Event>;
  delete(id: string): Promise<void>;
}