import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { StoreUsersDto, UpdateUsersDto } from './users.dto';
import { UsersService } from './users.service';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async index() {
    return await this.usersService.index();
  }

  @Post()
  async store(@Body() body: StoreUsersDto) {
    return await this.usersService.store(body);
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.usersService.show(id);
  }

  @Patch(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateUsersDto,
  ) {
    return await this.usersService.update(id, body);
  }

  @Delete(':id')
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.usersService.destroy(id);
  }
}
