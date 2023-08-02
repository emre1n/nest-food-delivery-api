import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}
  getOrders() {
    // logic here
  }
  getOrderById() {
    // logic here
  }

  createOrder(dto: CreateOrderDto, userId: number): Promise<Order> {
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

  editOrderById() {
    // logic here
  }

  deleteOrderById() {
    // logic here
  }
}
