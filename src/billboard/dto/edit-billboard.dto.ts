import { IsOptional, IsString } from 'class-validator';

export class EditBillboardDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  subtitle: string;

  @IsString()
  @IsOptional()
  imageUrl: string;
}
