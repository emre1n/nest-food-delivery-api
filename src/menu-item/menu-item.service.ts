import { Injectable } from '@nestjs/common';
import { MenuItem, Prisma } from '@prisma/client';
import { PrismaService } from '../../src/prisma/prisma.service';
import { CreateMenuItemDto, EditMenuItemDto } from './dto';

@Injectable()
export class MenuItemService {
  constructor(private prisma: PrismaService) {}

  async createMenuItem(data: CreateMenuItemDto): Promise<MenuItem> {
    return this.prisma.menuItem.create({ data });
  }

  async getMenuItems(query?: { categoryId?: number; isFeatured?: boolean }) {
    const where = {} as Prisma.MenuItemWhereInput;

    if (query?.categoryId) {
      where.categoryId = query.categoryId;
    }

    if (query?.isFeatured) {
      where.isFeatured = query.isFeatured ?? undefined;
    }

    return this.prisma.menuItem.findMany({
      where,
    });
  }

  async getMenuItemById(menuItemId: number) {
    return this.prisma.menuItem.findUnique({ where: { id: menuItemId } });
  }

  async editMenuItemById(
    menuItemId: number,
    data: EditMenuItemDto,
  ): Promise<MenuItem> {
    return this.prisma.menuItem.update({
      where: { id: menuItemId },
      data,
    });
  }

  async deleteMenuItemById(menuItemId: number) {
    return this.prisma.menuItem.delete({ where: { id: menuItemId } });
  }
}
