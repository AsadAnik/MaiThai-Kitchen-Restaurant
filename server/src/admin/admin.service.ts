import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'
import { Admin } from './schemas/admin.schemas';
import {CreateAdminDto, UpdateAdminDto} from './admin.dto'
import * as bctypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

@Injectable()
export class AdminService {
    constructor(@InjectModel(Admin.name) private adminModel: Model<Admin>){}

    /**
     * Admin Create / Register
     * @param adminData 
     * @returns 
     */
    async create(adminData: CreateAdminDto): Promise<Admin>{
        const hashPassword = await this.hashPassword(adminData.password);
        const createAdmin = new this.adminModel({
            userName: adminData.userName,
            email: adminData.email,
            password: hashPassword
        })

        return createAdmin.save();
    }

    /**
     * Find Admin By His / Her Email
     * @param email 
     * @returns 
     */
    async findOneByEmail(email: string): Promise<Admin>{
        const admin = await this.adminModel.findOne({email});
        if(!admin) throw new HttpException('Admin Not Found', HttpStatus.NOT_FOUND);
        return admin
    }

    /**
     * Password Hash Function
     * @param password 
     * @returns 
     */
    async hashPassword(password: string): Promise<string>{
        const saltRounds = Number(process.env.SALT_ROUND);
        const salt = await bctypt.genSalt(saltRounds);
        const hash = await bctypt.hash(password, salt)
        return hash
    }

    /**
     * Compare Password When Login
     * @param hashPassword 
     * @param candidatePassword 
     * @returns 
     */
    async comparePassword(hashPassword: string, candidatePassword: string): Promise<boolean>{
        const match = await bctypt.compare(candidatePassword, hashPassword);
        if(!match) throw new HttpException('Invalid Password', HttpStatus.UNAUTHORIZED);
        return match
    }

    /**
     * Token Generate From JWT
     * @param adminId 
     */
    async tokenGen(adminId: string): Promise<string> {
        const secret = process.env.JWT_SECRET
        const token = jwt.sign({id: adminId}, secret, {expiresIn: '1h'});
        return token;
        }

        async invalidateToken(token: string): Promise<void>{
            console.log('Logout Service Function With: ', token);   
        }

    /**
     * Find All Admins
     * @returns 
     */
    async findAll(): Promise<Admin[]> {
        return this.adminModel.find().exec();
    }

    /**
     * Find One Admin By AdminID
     * @param id 
     * @returns 
     */
    async findOne(id: string): Promise<Admin>{
        return this.adminModel.findById(id).exec();
    }

    /**
     * Update Admin
     * @param id 
     * @param updateAdminDto 
     * @returns 
     */
    async update(id: string, updateAdminDto: UpdateAdminDto): Promise<Admin>{
        const updateAdmin = await this.adminModel
            .findByIdAndUpdate(id, updateAdminDto, {new: true})
            .exec();

        if(!updateAdmin){
            throw new HttpException(
                `Admin with id ${id} not found`,
                HttpStatus.NOT_FOUND
            );
            
        } 
        return updateAdmin   
    }

    /**
     * Delete / Remove Admin
     * @param id 
     * @returns 
     */
    async delete(id:string): Promise<Admin>{
        const deleteAdmin = await this.adminModel.findByIdAndDelete(id).exec();
        if(!deleteAdmin){
            throw new HttpException(
                `Admin with id ${id} not found`,
                HttpStatus.NOT_FOUND,
            )
        }
        return deleteAdmin
    }

}
