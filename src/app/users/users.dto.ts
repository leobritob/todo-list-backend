import { IsEmail, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class StoreUsersDto {
  @IsNotEmpty()
  @MaxLength(255)
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(255)
  email: string;

  @IsNotEmpty()
  @MaxLength(255)
  password: string;
}

export class UpdateUsersDto {
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(255)
  firstName: string;

  @IsOptional()
  @IsNotEmpty()
  lastName: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(255)
  email: string;
}
