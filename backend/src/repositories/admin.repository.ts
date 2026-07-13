import { Prisma } from '@prisma/client';
import { prisma } from '../configs/prisma';
import { IAdminRepository } from '../interfaces/adminRepository.interface';
import { UpdateAdminDTO } from '../dto/admin.dto';

export class AdminRepository implements IAdminRepository {
  create(data: Prisma.AdministratorCreateInput) {
    return prisma.administrator.create({ data });
  }

  findAll() {
    return prisma.administrator.findMany();
  }

  findById(id: string) {
    return prisma.administrator.findUnique({ where: { id } });
  }

  findByEmail(email: string) {
    return prisma.administrator.findUnique({ where: { email } });
  }

  update(id: string, data: UpdateAdminDTO) {
    return prisma.administrator.update({ where: { id }, data });
  }

  updatePassword(id: string, passwordHash: string) {
    return prisma.administrator.update({ where: { id }, data: { passwordHash } });
  }

  async delete(id: string) {
    await prisma.administrator.delete({ where: { id } });
  }
}