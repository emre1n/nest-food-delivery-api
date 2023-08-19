import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Category, Prisma } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async createCategory(data: Prisma.CategoryCreateInput): Promise<Category> {
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
    data: Prisma.CategoryUpdateInput,
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
