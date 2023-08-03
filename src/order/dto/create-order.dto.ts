import { PaymentType } from '@prisma/client';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  cartItems: {
    name: string;
    amount: number;
    price: number;
  }[];

  @IsNotEmpty()
  cartTotal: number;

  @IsEnum(PaymentType)
  paymentType: PaymentType;
}
