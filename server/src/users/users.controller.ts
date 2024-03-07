import {
  Controller,
  Get,
  Put,
  Delete,
  Param,
  Body,
  Query,
  Post,
  HttpException,
  HttpStatus
} from '@nestjs/common';
import { UpdateUserDto } from './users.dto';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import * as moment from 'moment';
import { MailerService } from '../mailer/mailer.service';
import { ConfigService } from '@nestjs/config';


@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService
  ) { }

  /**
   * GET - /users/verify?code=[verificationCode]
   * @param code
   * @returns
   */
  @Get('verify')
  async verifyAccount(@Query('code') code: string) {
    const user = await this.usersService.findByVerificationCode(code);

    // Check the verification age..
    const verificationAge: number = Date.now() - Number(user?.verificationCodeSentAt);
    const expirationThreshold: number = 24 * 60 * 60 * 1000; // 24 hours as miliseconds

    if (verificationAge > expirationThreshold) {
      throw new HttpException('Verification code expired. Please request for a new Code.', HttpStatus.BAD_REQUEST);
    }

    // Update keys for verify done..
    user.verified = true;
    user.verificationCode = null;
    await this.usersService.update(user?._id, user);

    return { message: 'Your account has been successfully verified!', user };
  }

  /**
   * POST - /users/resend-verification-code
   * @param email
   */
  @Post('resend-verification-code')
  async resendVerificationCode(@Body('email') email: string) {
    const user = await this.usersService.findByEmail(email);

    // Check for recent attampt (Optional - rate limiting)..
    const lastResentAt = user?.verificationCodeSentAt;
    const resendThreshold = 1 * 60 * 60 * 1000; // 1 hour in miliseconds
    const expirationTime = Date.now() - resendThreshold;

    if (lastResentAt && moment(lastResentAt).isBefore(expirationTime)) {
      throw new HttpException('Verification code expired. Please request for a new Code.', HttpStatus.BAD_REQUEST);
    }

    // Get Verification Code from Mailer & Update the recent timestamps..
    const verificationCode = this.mailerService.generateVerificationCode(6);
    user.verificationCode = verificationCode;
    user.verificationCodeSentAt = new Date(Date.now());
    await this.usersService.update(user?._id, user);

    // Make Verification URL & Send to the mail service..
    const verificationUrl = `${this.configService.get('FRONTEND_URL')}/verify?code=${verificationCode}`;
    await this.mailerService.sendMailVerification(user.email, verificationUrl, verificationCode);

    return { message: "Verification code resent successfully" }
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
