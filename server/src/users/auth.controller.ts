import { Controller, Post, Get, Body } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { AuthService } from './auth.service';
import { MailerService } from '../mailer/mailer.service';
import { ConfigService } from '@nestjs/config';


@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly mailerService: MailerService,
        private readonly configService: ConfigService,
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
}


