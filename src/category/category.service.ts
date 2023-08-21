import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async createCategory(data: CreateCategoryDto): Promise<Category> {
    return this.prisma.category.create({ data });
  }

  async getCategories(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }

  async getCategoryById(categoryId: number) {
    return this.prisma.category.findUnique({ where: { id: categoryId } });
  }

  async editCategoryById(
    categoryId: number,
    data: CreateCategoryDto,
  ): Promise<Category> {
    return this.prisma.category.update({
      where: { id: categoryId },
      data,
    });
  }

  async deleteCategoryById(categoryId: number) {
    return this.prisma.category.delete({ where: { id: categoryId } });
  }
}
