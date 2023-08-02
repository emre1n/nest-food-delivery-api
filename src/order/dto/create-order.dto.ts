import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { PaymentType } from '@prisma/client';

export class CreateOrderDto {
  //   @IsNotEmpty()
  //   userId: number;

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
