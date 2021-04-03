import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoreProjectsDto, UpdateProjectsDto } from './projects.dto';
import { ProjectsEntity } from './projects.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectsEntity)
    private readonly projectsRepository: Repository<ProjectsEntity>,
  ) {}

  async index() {
    return await this.projectsRepository
      .createQueryBuilder('projects')
      .select(['projects.id', 'projects.name'])
      .addSelect([
        'tasks.id',
        'tasks.description',
        'tasks.done',
        'tasks.dueDate',
      ])
      .leftJoin('projects.tasks', 'tasks')
      .getMany();
  }

  async store(data: StoreProjectsDto) {
    return await this.projectsRepository.save(
      this.projectsRepository.create(data),
    );
  }

  async show(id: string) {
    return await this.findByIdOrFail(id);
  }

  async update(id: string, data: UpdateProjectsDto) {
    const user = await this.projectsRepository.findOneOrFail(id);

    this.projectsRepository.merge(user, data);
    return await this.projectsRepository.save(user);
  }

  async destroy(id: string) {
    await this.findByIdOrFail(id);

    await this.projectsRepository.softDelete({ id });
  }

  private async findByIdOrFail(id: string) {
    try {
      return await this.projectsRepository.findOneOrFail(id);
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }
}
