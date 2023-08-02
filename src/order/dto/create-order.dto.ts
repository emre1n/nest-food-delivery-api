import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  cartItems: {
    name: string;
    amount: number;
    price: number;
  }[];

  @IsNotEmpty()
  cartTotal: number;

  @IsString()
  paymentType: 'cash' | 'credit';
}
