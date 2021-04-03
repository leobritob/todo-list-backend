import {
  IsISO8601,
  IsNotEmpty,
  IsOptional,
  IsUUID,
  MaxLength,
} from 'class-validator';

export class StoreTasksDto {
  @IsNotEmpty()
  @MaxLength(255)
  description: string;

  @IsNotEmpty()
  @IsISO8601()
  dueDate: string;

  @IsOptional()
  done: number;

  @IsNotEmpty()
  @IsUUID()
  projectId: string;
}

export class UpdateTasksDto {
  @IsOptional()
  @IsNotEmpty()
  @MaxLength(255)
  description: string;

  @IsOptional()
  @IsNotEmpty()
  @IsISO8601()
  dueDate: string;

  @IsOptional()
  done: number;

  @IsOptional()
  @IsNotEmpty()
  @IsUUID()
  projectId: string;
}
