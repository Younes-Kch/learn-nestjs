import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() //GET /users or /users?role=value
  findAllUser(@Query('role') role?: 'ADMIN' | 'INTERN' | 'ENGINEER') {
    return this.usersService.findAll(role);
  }

  @Get(':id') //GET /users/:id
  findUser(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post() //POST /users
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'ADMIN' | 'ENGINEER' | 'INTERN';
    },
  ) {
    return this.usersService.create(user);
  }

  @Patch(':id') //PATCH /users/:id
  updateUser(
    @Param('id') id: string,
    @Body()
    newUser: {
      name: string;
      email: string;
      role: 'ADMIN' | 'ENGINEER' | 'INTERN';
    },
  ) {
    return this.usersService.update(+id, newUser);
  }

  @Delete(':id') //DELETE /users/:id
  deleteUser(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
