import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PackageItem extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    quantity: number;
}

@Schema()
export class Package extends Document {
    @Prop({ required: true })
    name: string;

    @Prop()
    details: string;

    @Prop()
    image: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true, default: 'general', enum: ['general', 'lunch', 'dinner', 'break-fast', 'snaks'] })
    category: string;

    @Prop({ required: true })
    stock: number;

    @Prop({ required: true })
    package: PackageItem[];
}

export const PackageItemSchema = SchemaFactory.createForClass(PackageItem);
export const PackageSchema = SchemaFactory.createForClass(Package);