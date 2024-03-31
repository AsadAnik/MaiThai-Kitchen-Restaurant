import { Controller, Post, Get, Body, Query, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { AuthService } from './auth.service';
import { MailerService } from '../mailer/mailer.service';
import { ConfigService } from '@nestjs/config';
import { UsersService } from './users.service';


@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly mailerService: MailerService,
        private readonly configService: ConfigService,
        private readonly userService: UsersService,
    ) { }


    /**
     * POST - /auth/register
     * @param createUserDto 
     * @returns 
     */
    @Post('register')
    async register(@Body() createUserDto: CreateUserDto): Promise<object> {
        const verificationToken = this.mailerService.generateVerificationToken();
        const verificationCode = this.mailerService.generateVerificationCode(6);
        const verificationUrl = `${this.configService.get('FRONTEND_URL')}/verify?code=${verificationCode}`;

        // Send email verification..
        await this.mailerService.sendMailVerification(createUserDto?.email, verificationUrl, verificationCode);

        // Create user..
        const user = await this.authService.create({ ...createUserDto, verificationToken, verificationCode });

        return { message: 'Registered User!', user };
    }


    /**
     * POST - /auth/login
     * @param param
     * @returns 
     */
    @Post('login')
    async login(@Body() { email, password }: CreateUserDto): Promise<object> {
        const user = await this.authService.findOneByEmail(email);
        await this.authService.comparePassword(user.password, password);

        // Generate token and return it..
        const token = await this.authService.tokenGen(user._id);
        return { message: 'LoggedIn Successfuly', user, token };
    }


    /**
     * GET - /auth/logout
     * @param token 
     * @returns 
     */
    @Get('logout')
    async logout(@Body('token') token: string): Promise<object> {
        await this.authService.invalidateToken(token);
        return { message: 'LoggedOut Successfuly' };
    }


    /**
     * POST - /auth/forgot-password
     * @param email 
     */
    @Post('forgot-password')
    async forgotPassword(@Body('email') email: string) {
        const user = await this.authService.findOneByEmail(email);

        // Update User with Reset Token and Reset Code..
        const resetToken = this.mailerService.generateVerificationToken();
        const resetCode = this.mailerService.generateVerificationCode();
        const expiration = Date.now() + 3600000; // 1 hour in milliseconds
        await this.authService.updateResetToken(user?._id, resetToken, resetCode, expiration);

        // Sending the Verification code for Reset..
        const resetVerifyURL = `${this.configService.get('FRONTEND_URL')}/resetVerify?code=${resetCode}`;
        await this.mailerService.sendMailVerification(user?.email, resetVerifyURL, resetCode);

        return { message: 'Password reset code sent successfully!' };
    }


    /**
     * Check the varification age of the reset code..
     * @param code 
     * @returns 
     */
    @Get('reset-password-verify')
    async resetVerify(@Query('code') code: string) {
        const user = await this.authService.findByResetPassVerifyCode(code);

        // Check the verification age..
        const verificationAge: number = Date.now() - Number(user?.resetPasswordExpiresAt);
        const expirationThreshold: number = 1 * 60 * 60 * 1000; // 1 hour as miliseconds

        if (verificationAge > expirationThreshold) {
            throw new HttpException('Verification code expired. Please request for a new Code.', HttpStatus.BAD_REQUEST);
        }

        // Update keys for verify done..
        user.resetPasswordCode = null;
        user.resetPasswordExpiresAt = null;
        await this.userService.update(user?._id, user);

        return { message: 'Reset password Verified Successfully, now you can reset password!', user };
    }


    /**
     * Reset password / Change Password with the reset token..
     * @param newPassword 
     * @param resetToken 
     * @returns 
     */
    @Post('reset-password')
    async resetPassword(@Body('newPassword') newPassword: string, @Body('resetToken') resetToken: string) {
        const user = await this.authService.findByResetPassToken(resetToken);

        // Update the password..
        const updatedPasswordUser = await this.authService.updatePassword(user?._id, newPassword);
        if (!updatedPasswordUser) throw new HttpException('Reset password failed!', HttpStatus.BAD_REQUEST);

        // Invalidate the reset token..
        user.resetPasswordToken = null;

        return { message: 'Password reset successfully!' };
    } 
}


