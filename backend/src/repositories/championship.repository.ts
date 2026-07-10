import { prisma } from '../configs/prisma';
import { IChampionshipRepository } from '../interfaces/championshipRepository.interface';
import { CreateChampionshipDTO, UpdateChampionshipDTO } from '../dto/championship.dto';

export class ChampionshipRepository implements IChampionshipRepository {
  create(data: CreateChampionshipDTO) {
    return prisma.championship.create({ data });
  }

  findAll() {
    return prisma.championship.findMany();
  }

  findById(id: string) {
    return prisma.championship.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateChampionshipDTO) {
    return prisma.championship.update({ where: { id }, data });
  }

  async delete(id: string) {
    await prisma.championship.delete({ where: { id } });
  }
}