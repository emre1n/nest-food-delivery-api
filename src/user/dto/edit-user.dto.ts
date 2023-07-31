import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class EditUserDto {
  @IsOptional()
  @IsEmail()
  @IsNotEmpty()
  email?: string;

  @IsOptional()
  @IsString()
  @Length(8, 255)
  password?: string;

  @IsOptional()
  @IsString()
  @Length(8, 255)
  retypedPassword?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  address?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  city?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  district?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  street?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsNotEmpty()
  dataConsent?: boolean;

  @IsOptional()
  @IsNotEmpty()
  marketingConsent?: boolean;
}
