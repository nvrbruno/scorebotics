import { prisma } from '../configs/prisma';
import { ICategoryRepository } from '../interfaces/categoryRepository.interface';
import { CreateCategoryDTO, UpdateCategoryDTO } from '../dto/category.dto';

export class CategoryRepository implements ICategoryRepository {
  create(data: CreateCategoryDTO) {
    return prisma.category.create({ data });
  }

  findAll() {
    return prisma.category.findMany();
  }

  findById(id: string) {
    return prisma.category.findUnique({ where: { id } });
  }

  update(id: string, data: UpdateCategoryDTO) {
    return prisma.category.update({ where: { id }, data });
  }

  async delete(id: string) {
    await prisma.category.delete({ where: { id } });
  }
}