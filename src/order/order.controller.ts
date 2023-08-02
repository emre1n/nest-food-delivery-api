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
import { CreateOrderDto } from './dto';
import { Order, User } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}
  @Get()
  getOrders(@GetUser('id') userId: number) {
    // endpoint
  }

  @Get(':id')
  getOrderById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) orderId: number,
  ) {
    // endpoint
  }

  @Post()
  createOrder(
    @GetUser('id') userId: number,
    @Body() dto: CreateOrderDto,
  ): Promise<Order> {
    return this.orderService.createOrder(dto, userId);
  }

  @Patch()
  editOrderById(@GetUser('id') userId: number) {
    // endpoint
  }

  @Delete()
  deleteOrderById(@GetUser('id') userId: number) {
    // endpoint
  }
}
