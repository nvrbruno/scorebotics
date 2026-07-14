import { Prisma } from '@prisma/client';
import { prisma } from '../configs/prisma';
import { IResponsibleRepository } from '../interfaces/responsibleRepository.interface';
import { UpdateResponsibleDTO } from '../dto/responsible.dto';

export class ResponsibleRepository implements IResponsibleRepository {
  create(data: Prisma.ResponsibleCreateInput) {
    return prisma.responsible.create({ data });
  }

  findAll() {
    return prisma.responsible.findMany();
  }

  findById(id: string) {
    return prisma.responsible.findUnique({ where: { id } });
  }

  findByEmail(email: string) {
    return prisma.responsible.findUnique({ where: { email } });
  }

  update(id: string, data: UpdateResponsibleDTO) {
    return prisma.responsible.update({ where: { id }, data });
  }

  updatePassword(id: string, passwordHash: string) {
    return prisma.responsible.update({ where: { id }, data: { passwordHash } });
  }

  async delete(id: string) {
    await prisma.responsible.delete({ where: { id } });
  }
}