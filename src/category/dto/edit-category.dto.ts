import { IsDate, IsOptional, IsString } from 'class-validator';

export class EditCategoryDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsDate()
  @IsOptional()
  createdAt: Date;

  @IsOptional()
  deleted: boolean;
}
