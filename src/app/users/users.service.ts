import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoreUsersDto, UpdateUsersDto } from './users.dto';
import { UsersEntity } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  async index() {
    return await this.usersRepository.find();
  }

  async store(data: StoreUsersDto) {
    return await this.usersRepository.save(this.usersRepository.create(data));
  }

  async show(id: string) {
    return await this.findByIdOrFail(id);
  }

  async update(id: string, data: UpdateUsersDto) {
    const user = await this.usersRepository.findOneOrFail(id);

    this.usersRepository.merge(user, data);
    return await this.usersRepository.save(user);
  }

  async destroy(id: string) {
    await this.findByIdOrFail(id);

    await this.usersRepository.softDelete({ id });
  }

  async findByEmailOrFail(email: string) {
    try {
      return await this.usersRepository.findOneOrFail({ email });
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }

  private async findByIdOrFail(id: string) {
    try {
      return await this.usersRepository.findOneOrFail(id);
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }
}
