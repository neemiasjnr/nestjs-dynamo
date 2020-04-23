import { Controller, Get } from '@nestjs/common';
import { UserService, UserModel } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getHello(): Promise<UserModel> {
    return this.userService.getUser('johndoe@email.com');
  }
}
