import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guard';
import { OrderService } from './order.service';
import { GetUser } from '../auth/decorator';
import { CreateOrderDto, EditOrderDto } from './dto';
import { Order, User } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}
  @Get()
  getOrders(@GetUser('id') userId: number) {
    return this.orderService.getOrders(userId);
  }

  @Get(':id')
  getOrderById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) orderId: number,
  ) {
    return this.orderService.getOrderById(userId, orderId);
  }

  @Post()
  createOrder(
    @GetUser('id') userId: number,
    @Body() dto: CreateOrderDto,
  ): Promise<Order> {
    return this.orderService.createOrder(userId, dto);
  }

  @Patch(':id')
  editOrderById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) orderId: number,
    @Body() dto: EditOrderDto,
  ) {
    return this.orderService.editOrderById(userId, orderId, dto);
  }

  @Delete(':id')
  deleteOrderById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) orderId: number,
  ) {
    return this.orderService.deleteOrderById(userId, orderId);
  }
}
