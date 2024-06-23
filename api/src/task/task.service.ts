import { Injectable } from '@nestjs/common';
import { CreateTaskInput } from 'src/task/dto/createTask.input';
import { Task } from 'src/task/models/task.model';

@Injectable()
export class TaskService {
  tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  createTask(createTaskInput: CreateTaskInput): Task {
    const { name, dueDate, description } = createTaskInput;
    const task = new Task();
    task.id = this.tasks.length + 1;
    task.name = name;
    task.dueData = dueDate;
    task.status = 'NOT_STARTED';
    task.description = description;
    this.tasks.push(task);

    return task;
  }
}
