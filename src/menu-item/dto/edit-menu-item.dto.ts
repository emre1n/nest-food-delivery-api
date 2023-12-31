import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class EditMenuItemDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  image?: string;

  @IsNumber()
  @IsOptional()
  categoryId?: number;

  @IsBoolean()
  @IsOptional()
  deleted: boolean;

  @IsBoolean()
  @IsOptional()
  isFeatured: boolean;
}
