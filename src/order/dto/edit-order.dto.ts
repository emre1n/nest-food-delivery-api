import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class EditOrderDto {
  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  cartItems: {
    id: number;
    name: string;
    amount: number;
    price: number;
  }[];

  @IsNotEmpty()
  cartTotal: number;

  @IsString()
  @IsOptional()
  paymentType?: 'cash' | 'credit';
}
