import { GetTasksFilter } from './dto/get-tasks-filter.dto';
import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskRepository extends Repository<Task> {
  constructor(private dataSource: DataSource) {
    super(Task, dataSource.createEntityManager());
  }

  async getTasks(getTaskFilterDto: GetTasksFilter): Promise<Task[]> {
    const { search, status } = getTaskFilterDto;
    const query = this.createQueryBuilder('task');

    if (status) {
      query.andWhere('task.status=:status', { status });
    }

    if (search) {
      query.andWhere(
        'LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search)',
      ),
        { search: `%${search}%` };
    }
    const tasks = await query.getMany();
    return tasks;
  }
}
