import { PaymentType } from '@prisma/client';
import { IsEnum, IsOptional } from 'class-validator';

export class EditOrderDto {
  @IsOptional()
  cartItems: {
    name: string;
    amount: number;
    price: number;
  }[];

  @IsOptional()
  cartTotal: number;

  @IsEnum(PaymentType)
  @IsOptional()
  paymentType: PaymentType;
}
