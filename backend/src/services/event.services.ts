import { CreateEventDTO,  UpdateEventDTO } from '../dto/event.dto';
import { EventRepository } from '../repositories/event.repository';

const repository = new EventRepository();

export class EventService {
  create(data: CreateEventDTO) {
    // business rule: end date can't be before start date
    if (data.startDate && data.endDate && data.startDate > data.endDate) {
      throw new Error('End date cannot be before start date');
    }
    return repository.create(data);
  }

  findAll() {
    return repository.findAll();
  }

  async findById(id: string) {
    const event = await repository.findById(id);
    if (!event) {
      throw new Error('Event not found');
    }
    return event;
  }

  update(id: string, data: UpdateEventDTO) {
    return repository.update(id, data);
  }

  delete(id: string) {
    return repository.delete(id);
  }
}