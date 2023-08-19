import { Injectable } from '@nestjs/common';
import { Billboard, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BillboardService {
  constructor(private prisma: PrismaService) {}

  async createBillboard(data: Prisma.BillboardCreateInput): Promise<Billboard> {
    return this.prisma.billboard.create({ data });
  }

  async getBillboards(): Promise<Billboard[]> {
    return this.prisma.billboard.findMany();
  }

  async getBillboardById(billboardId: number) {
    return this.prisma.billboard.findUnique({ where: { id: billboardId } });
  }

  async editBillboardById(
    billboardId: number,
    data: Prisma.BillboardUpdateInput,
  ): Promise<Billboard> {
    return this.prisma.billboard.update({
      where: { id: billboardId },
      data,
    });
  }

  async deleteBillboardById(billboardId: number) {
    return this.prisma.billboard.delete({ where: { id: billboardId } });
  }
}
