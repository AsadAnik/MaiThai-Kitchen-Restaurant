import {
  Controller,
  Get,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { UpdateUserDto } from './users.dto';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


  /**
   * GET - /users/verify?code=[verificationCode]
   * @param code 
   * @returns 
   */
  @Get('verify')
  async verifyAccount(@Query('code') code: string) {
    const user = await this.usersService.findByVerificationCode(code);

    user.verified = true;
    user.verificationCode = null;
    await this.usersService.update(user?._id, user);

    return { message: 'Your account has been successfully verified!', user };
  }

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
