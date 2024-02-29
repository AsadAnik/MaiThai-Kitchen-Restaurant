import { Body,Post, Delete, Controller } from '@nestjs/common';
import { CreateAdminDto } from './admin.dto';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService){}

    /**
     * Post - /admin/register
     * @param createAdminDto 
     * @returns 
     */
    @Post('register')
    async register(@Body() createAdminDto: CreateAdminDto): Promise<object>{
        const admin = await this.adminService.create(createAdminDto);
        return {message: 'Registered Admin', admin}
    }

    @Post('login')
    async login(@Body() {email, password}: CreateAdminDto): Promise<object>{
        const admin = await this.adminService.findOneByEmail(email);
        await this.adminService.comparePassword(admin.password, password);

        // Generate token and return it...
        const token = await this.adminService.tokenGen(admin._id);
        return {message: 'LoggedIn Successfuly', admin, token};
    }

    @Delete('logout')
    async logout(@Body('token') token: string): Promise<object> {
        await this.adminService.invalidateToken(token);
        return {message: 'LoggedOut Successfuly'}
    };
    
}
