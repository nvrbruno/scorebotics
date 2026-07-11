import { prisma } from '../configs/prisma';
import { IEventRepository } from '../interfaces/eventRepository.interface';
import { CreateEventDTO, UpdateEventDTO } from '../dto/event.dto';

export class EventRepository implements IEventRepository {
  create(data: CreateEventDTO) {
    return prisma.event.create({ data });
  }

  findAll() {
    return prisma.event.findMany();
  }

  findById(id: string) {
    return prisma.event.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateEventDTO) {
    return prisma.event.update({ where: { id }, data });
  }

  async delete(id: string) {
    await prisma.event.delete({ where: { id } });
  }
}