import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './users.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModal: Model<User>) { }

    /**
     * User Create / Register 
     * @param userData 
     * @returns 
     */
    async create(userData: CreateUserDto): Promise<User> {
        const hashPassword = await this.hashPassword(userData.password);
        const createUser = new this.userModal({
            name: userData.name,
            email: userData.email,
            password: hashPassword
        });
        return createUser.save();
    }

    /**
     * Find User By His / Her Email
     * @param email 
     * @returns 
     */
    async findOneByEmail(email: string): Promise<User>{
        const user = await this.userModal.findOne({ email });
        if (!user) throw new HttpException('User Not Found!', HttpStatus.NOT_FOUND);
        return user;
    }

    /**
     * Password Hash Function
     * @param password 
     * @returns 
     */
    async hashPassword(password: string): Promise<string> {
        const saltRounds = Number(process.env.SALT_ROUND);
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    }

    /**
     * Compare Password When Login
     * @param hashPassword 
     * @param candidatePassword 
     * @returns 
     */
    async comparePassword(hashPassword: string, candidatePassword: string): Promise<boolean> {
        const match = await bcrypt.compare(candidatePassword, hashPassword);
        if (!match) throw new HttpException('Invalid Password!', HttpStatus.UNAUTHORIZED);
        return match;
    }

    /**
     * Token Generate From JWT
     * @param userId 
     * @returns 
     */
    async tokenGen(userId: string): Promise<string> {
        const secret = process.env.JWT_SECRET;
        const token = jwt.sign({id: userId}, secret, { expiresIn: '1h' });
        return token;
    }

    /**
     * Logout User with Delete Token
     * @param token 
     */
    async invalidateToken(token: string): Promise<void> {
        console.log('Logout Service Function with: ', token);
    }
}
