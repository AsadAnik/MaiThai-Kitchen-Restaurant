import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'

@Schema()
export class Admin extends Document {
    @Prop({required: false})
    userName: string;

    @Prop({required: true})
    email: string;

    @Prop({required: true})
    password: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin)