import { IsOptional, IsNumber, IsString } from 'class-validator';

export class EditCartItemDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  @IsOptional()
  price: number;

  @IsNumber()
  @IsOptional()
  amount: number;
}
