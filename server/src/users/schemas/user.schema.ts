import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: false })
  address: string;

  @Prop({ required: false })
  phoneNumber: string;

  @Prop({ default: 'customer', enum: ['customer', 'admin', 'owner'] })
  role: string;

  @Prop({ default: false })
  verified?: boolean;

  @Prop()
  verificationToken?: string;

  @Prop()
  verificationCode?: string;

  @Prop({ type: Date })
  verificationCodeSentAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
