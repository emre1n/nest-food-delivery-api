import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBillboardDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  subtitle: string;

  @IsString()
  @IsNotEmpty()
  imageUrl: string;
}
