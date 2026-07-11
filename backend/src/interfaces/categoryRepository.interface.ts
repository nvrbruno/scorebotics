import { Category } from '@prisma/client';
import { CreateCategoryDTO, UpdateCategoryDTO } from '../dto/category.dto';

// contract that any CategoryRepository implementation must follow
export interface ICategoryRepository {
  create(data: CreateCategoryDTO): Promise<Category>;
  findAll(): Promise<Category[]>;
  findById(id: string): Promise<Category | null>;
  update(id: string, data: UpdateCategoryDTO): Promise<Category>;
  delete(id: string): Promise<void>;
}