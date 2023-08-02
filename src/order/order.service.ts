import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto, EditOrderDto } from './dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}
  getOrders(userId: number) {
    // logic here
  }
  getOrderById(userId: number, orderId: number) {
    // logic here
  }

  createOrder(userId: number, dto: CreateOrderDto): Promise<Order> {
    const { cartItems, cartTotal, paymentType } = dto;
    return this.prisma.order.create({
      data: {
        userId,
        cartItems: { create: cartItems },
        cartTotal,
        paymentType,
      },
    });
  }

  editOrderById(userId: number, orderId: number, dto: EditOrderDto) {
    // logic here
  }

  deleteOrderById(userId: number, orderId: number) {
    // logic here
  }
}
