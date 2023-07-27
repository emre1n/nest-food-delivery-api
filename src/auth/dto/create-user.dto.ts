import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

// User DTO for signup
export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @Length(8, 255)
  password: string;

  @IsString()
  @Length(8, 255)
  retypedPassword: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  district: string;

  @IsNotEmpty()
  @IsString()
  street: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  dataConsent: boolean;

  @IsNotEmpty()
  marketingConsent: boolean;
}
