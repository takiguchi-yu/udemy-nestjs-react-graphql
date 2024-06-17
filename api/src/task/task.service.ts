import { Injectable } from '@nestjs/common';
import { Task } from 'src/task/models/task.model';

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  getTasks(): Task[] {
    const task1 = new Task();
    task1.id = 1;
    task1.name = 'task1';
    task1.dueData = '2021-01-01';
    task1.status = 'NOT_STARTED';
    task1.description = 'This is task1';
    this.tasks.push(task1);

    return this.tasks;
  }
}
