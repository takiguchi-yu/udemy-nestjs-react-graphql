import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/client';
import { CreateUserInput } from 'src/user/dto/createUser.input';
import { User as UserModel } from 'src/user/models/user.model';
import { UserService } from 'src/user/user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserModel)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return await this.userService.createUser(createUserInput);
  }
}
