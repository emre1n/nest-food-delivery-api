import { Injectable } from '@nestjs/common';
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
    // logic here
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

  editOrderById(userId: number, orderId: number, dto: EditOrderDto) {
    // logic here
  }

  deleteOrderById(userId: number, orderId: number) {
    // logic here
  }
}
