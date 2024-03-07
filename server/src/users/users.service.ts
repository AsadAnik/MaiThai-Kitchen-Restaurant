import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { UpdateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  /**
   * Find User by Verification Code
   * @param code 
   * @returns 
   */
  async findByVerificationCode(code: string): Promise<User> {
    const user = await this.userModel.findOne({ verificationCode: code }).exec();
    if (!user) throw new HttpException(`Invalid Verification Code`, HttpStatus.BAD_REQUEST);
    return user;
  }

  /**
   * Find User by Email Address
   * @param email 
   * @returns 
   */
  async findByEmail(email: string) {
    const user = await this.userModel.findOne({ email }).exec();
    if (!user) throw new HttpException('Can not send code again', HttpStatus.BAD_REQUEST);
    return user;
  }

  /**
   * Find All Users
   * @returns 
   */
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  /**
   * Find One User By UserID
   * @param id 
   * @returns 
   */
  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  /**
   * Update User
   * @param id 
   * @param updateUserDto 
   * @returns 
   */
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    if (!updatedUser) throw new HttpException(`User with id ${id} not found`, HttpStatus.NOT_FOUND);
    return updatedUser;
  }

  /**
   * Delete / Remove User
   * @param id 
   * @returns 
   */
  async delete(id: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
    if (!deletedUser) throw new HttpException(`User with id ${id} not found`, HttpStatus.NOT_FOUND);
    return deletedUser;
  }
}
