import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class StoreUsersDto {
  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty()
  firstName: string;

  @IsNotEmpty()
  @ApiProperty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(255)
  email: string;

  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty()
  password: string;
}

export class UpdateUsersDto {
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(255)
  @ApiPropertyOptional()
  firstName: string;

  @IsOptional()
  @IsNotEmpty()
  @ApiPropertyOptional()
  lastName: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(255)
  @ApiPropertyOptional()
  email: string;
}
