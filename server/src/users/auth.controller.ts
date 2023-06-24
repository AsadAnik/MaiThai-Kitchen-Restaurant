import { Controller, Post, Delete, Body } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    /**
     * POST - /auth/register
     * @param createUserDto 
     * @returns 
     */
    @Post('register')
    async register(@Body() createUserDto: CreateUserDto): Promise<object> {
        const user = await this.authService.create(createUserDto);
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

    @Delete('logout')
    async logout(@Body('token') token: string): Promise<object> {
        await this.authService.invalidateToken(token);
        return { message: 'LoggedOut Successfuly' };
    }
}


