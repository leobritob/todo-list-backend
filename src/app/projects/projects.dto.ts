import { IsNotEmpty, IsUUID, MaxLength } from 'class-validator';

export class StoreProjectsDto {
  @IsNotEmpty()
  @MaxLength(255)
  name: string;

  @IsUUID()
  userId: string;
}

export class UpdateProjectsDto {
  @IsNotEmpty()
  @MaxLength(255)
  name: string;
}
