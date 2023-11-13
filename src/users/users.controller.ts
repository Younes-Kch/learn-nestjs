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

@Controller('users')
export class UsersController {
  @Get() //GET /users or /users?role=value
  findAllUser(@Query('role') role?: 'ADMIN' | 'INTERIM' | 'ENGINEER') {
    return [];
  }

  @Get(':id') //GET /users/:id
  findUser(@Param('id') id: string) {
    return { id };
  }

  @Post() //POST /users
  createUser(@Body() user: {}) {
    return user;
  }

  @Patch(':id') //PATCH /users/:id
  updateUser(@Param('id') id: string, @Body() newUser: {}) {
    return { id, ...newUser };
  }

  @Delete(':id') //DELETE /users/:id
  deleteUser(@Param('id') id: string) {
    return { id };
  }
}
