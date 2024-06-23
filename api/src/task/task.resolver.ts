import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Task } from '@prisma/client';
import { CreateTaskInput } from 'src/task/dto/createTask.input';
import { UpdateTaskInput } from 'src/task/dto/updatetask.input';
import { Task as TaskModel } from 'src/task/models/task.model';
import { TaskService } from 'src/task/task.service';

@Resolver()
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [TaskModel], { nullable: 'items' })
  async getTasks(): Promise<Task[]> {
    return await this.taskService.getTasks();
  }

  @Mutation(() => TaskModel)
  async createTask(
    @Args('createTaskInput') createTaskInput: CreateTaskInput,
  ): Promise<Task> {
    return await this.taskService.createTask(createTaskInput);
  }

  @Mutation(() => TaskModel)
  async updateTask(
    @Args('updateTaskInput') updateTaskInput: UpdateTaskInput,
  ): Promise<Task> {
    return await this.taskService.updateTask(updateTaskInput);
  }
}
