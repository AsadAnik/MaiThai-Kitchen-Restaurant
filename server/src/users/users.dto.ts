import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly firstName: string;

  @IsNotEmpty()
  readonly lastName: string;

  readonly phoneNumber: string;

  readonly address: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;

  @IsNotEmpty()
  readonly role: string;

  readonly verified: boolean;

  readonly verificationToken: string;
  
  readonly verificationCode: string;

  readonly verificationCodeSentAt: Date;

  readonly resetPasswordToken: string;

  readonly resetPasswordExpiresAt: Date;

  readonly resetPasswordCode: string;
}

export class UpdateUserDto {
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
  readonly password?: string;
  readonly role?: string;
  readonly phoneNumber?: string;
  readonly address?: string;
  readonly verified?: boolean;
  readonly verificationToken?: string;
  readonly verificationCode?: string;
  readonly resetPasswordToken?: string;
  readonly resetPasswordExpiresAt?: Date;
  readonly resetPasswordCode?: string;
}
