import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class StoreUserDto {
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

export class UpdateUsersDto extends StoreUserDto {}
