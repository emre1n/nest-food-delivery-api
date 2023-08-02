import { IsNotEmpty, IsString } from 'class-validator';

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
  paymentType: 'cash' | 'credit';

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  district: string;

  @IsString()
  street: string;

  @IsString()
  phone: string;
}
