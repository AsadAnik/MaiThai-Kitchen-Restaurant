import {
  Controller,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UpdateUserDto } from './users.dto';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * GET - /users
   * @returns 
   */
  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  /**
   * GET - /users/[USER_ID]
   * @param id 
   * @returns 
   */
  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  /**
   * PUT - /users/[USER_ID]
   * @param id 
   * @param user 
   * @returns 
   */
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() user: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.update(id, user);
  }

  /**
   * DELETE - /users/[USER_ID]
   * @param id 
   * @returns 
   */
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.usersService.delete(id);
  }
}
