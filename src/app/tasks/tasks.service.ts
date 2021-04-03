import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TasksEntity } from './tasks.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksEntity)
    private readonly tasksRepository: Repository<TasksEntity>,
  ) {}

  async index() {
    return await this.tasksRepository.find();
  }

  async store(data) {
    return await this.tasksRepository.save(this.tasksRepository.create(data));
  }

  async show(id: string) {
    return await this.findByIdOrFail(id);
  }

  async update(id: string, data) {
    const user = await this.tasksRepository.findOneOrFail(id);

    this.tasksRepository.merge(user, data);
    return await this.tasksRepository.save(user);
  }

  async destroy(id: string) {
    await this.findByIdOrFail(id);

    await this.tasksRepository.softDelete({ id });
  }

  private async findByIdOrFail(id: string) {
    try {
      return await this.tasksRepository.findOneOrFail(id);
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }
}
