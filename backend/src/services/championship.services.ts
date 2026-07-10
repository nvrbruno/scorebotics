import { CreateChampionshipDTO, UpdateChampionshipDTO } from '../dto/championship.dto';
import { ChampionshipRepository } from '../repositories/championship.repository';

const repository = new ChampionshipRepository();

export class ChampionshipService {
  create(data: CreateChampionshipDTO) {
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
    const championship = await repository.findById(id);
    if (!championship) {
      throw new Error('Championship not found');
    }
    return championship;
  }

  update(id: string, data: UpdateChampionshipDTO) {
    return repository.update(id, data);
  }

  delete(id: string) {
    return repository.delete(id);
  }
}