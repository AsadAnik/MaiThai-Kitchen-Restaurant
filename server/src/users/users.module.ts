import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { MailerService } from '../mailer/mailer.service';

@Module({
  controllers: [UsersController, AuthController],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersService, AuthService, MailerService],
})
export class UsersModule {}
