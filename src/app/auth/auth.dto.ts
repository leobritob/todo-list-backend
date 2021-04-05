import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(255)
  @ApiProperty()
  email: string;
  
  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty()
  password: string;
}
