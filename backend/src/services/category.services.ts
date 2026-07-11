import { CreateCategoryDTO, UpdateCategoryDTO } from '../dto/category.dto';
import { CategoryRepository } from '../repositories/category.respository';

const repository = new CategoryRepository();

export class CategoryService {
  create(data: CreateCategoryDTO) {
    return repository.create(data);
  }

  findAll() {
    return repository.findAll();
  }

  async findById(id: string) {
    const category = await repository.findById(id);
    if (!category) {
      throw new Error('Category not found');
    }
    return category;
  }

  update(id: string, data: UpdateCategoryDTO) {
    return repository.update(id, data);
  }

  delete(id: string) {
    return repository.delete(id);
  }
}