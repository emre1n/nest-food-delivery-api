import { ForbiddenException, Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto, EditOrderDto } from './dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  getOrders(userId: number) {
    return this.prisma.order.findMany({
      where: {
        userId,
      },
    });
  }
  getOrderById(userId: number, orderId: number) {
    return this.prisma.order.findFirst({
      where: {
        id: orderId,
        userId,
      },
    });
  }

  async createOrder(userId: number, dto: CreateOrderDto): Promise<Order> {
    const { cartItems, cartTotal, paymentType } = dto;
    const order = await this.prisma.order.create({
      data: {
        userId,
        cartItems: { create: cartItems },
        cartTotal,
        paymentType,
      },
    });
    return order;
  }

  async editOrderById(userId: number, orderId: number, dto: EditOrderDto) {
    const { cartItems, cartTotal, paymentType } = dto;
    // get the order by id
    const order = await this.prisma.order.findUnique({
      where: {
        id: orderId,
      },
    });

    // check if user owns the order
    if (!order || order.userId !== userId) {
      throw new ForbiddenException('Access to resource denied');
    }

    return this.prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        cartItems: {
          deleteMany: {},
          create: cartItems,
        },
        cartTotal,
        paymentType,
      },
    });
  }

  async deleteOrderById(userId: number, orderId: number) {
    // get the order by id
    const order = await this.prisma.order.findUnique({
      where: {
        id: orderId,
      },
    });

    // check if user owns the order
    if (!order || order.userId !== userId) {
      throw new ForbiddenException('Access to resource denied');
    }

    await this.prisma.order.delete({
      where: {
        id: orderId,
      },
    });
  }
}
