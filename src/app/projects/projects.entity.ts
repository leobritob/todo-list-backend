import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TasksEntity } from '../tasks/tasks.entity';
import { UsersEntity } from '../users/users.entity';

@Entity({ name: 'projects' })
export class ProjectsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => UsersEntity, (user) => user.projects, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: UsersEntity;

  @OneToMany(() => TasksEntity, (task) => task.project)
  tasks: TasksEntity[];

  @CreateDateColumn({ name: 'created_at', nullable: false })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt: string;
}
