import { prisma } from "../configs/prisma";
import { ITeamResponsibleRepository } from "../interfaces/teamResponsible.interface";
import {
  CreateTeamResponsibleDTO,
  UpdateTeamResponsibleDTO,
} from "../dto/teamResponsible.dto";

export class TeamResponsibleRepository implements ITeamResponsibleRepository {
  create(data: CreateTeamResponsibleDTO) {
    return prisma.teamResponsible.create({ data });
  }

  findAll() {
    return prisma.teamResponsible.findMany();
  }

  findById(id: string) {
    return prisma.teamResponsible.findUnique({ where: { id } });
  }

  findByResponsibleId(responsibleId: string) {
  return prisma.teamResponsible.findFirst({ where: { responsibleId } });
}

  update(id: string, data: UpdateTeamResponsibleDTO) {
    return prisma.teamResponsible.update({ where: { id }, data });
  }

  async delete(id: string) {
    await prisma.teamResponsible.delete({ where: { id } });
  }

  deleteByResponsibleId(responsibleId: string) {
    return prisma.teamResponsible.deleteMany({ where: { responsibleId } });
  }
}
