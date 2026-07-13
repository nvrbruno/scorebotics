import { prisma } from "../configs/prisma";
import { ITeamRepository } from "../interfaces/teamRepository.interface";
import {
  CreateTeamDTO,
  UpdateTeamDTO,
  UpdateTeamStatusDTO,
} from "../dto/team.dto";

export class TeamRepository implements ITeamRepository {
  create(data: CreateTeamDTO) {
    return prisma.team.create({ data });
  }

  findAll() {
    return prisma.team.findMany();
  }

  findById(id: string) {
    return prisma.team.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateTeamDTO) {
    return prisma.team.update({ where: { id }, data });
  }

  updateStatus(id: string, data: UpdateTeamStatusDTO) {
    return prisma.team.update({ where: { id }, data });
  }

  async delete(id: string) {
    await prisma.team.delete({ where: { id } });
  }
}
