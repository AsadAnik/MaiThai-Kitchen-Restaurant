import { IsNotEmpty, IsString, IsNumber, IsArray, ValidateNested } from 'class-validator';

class PackageItemDto {
    @IsString()
    name: string;

    @IsNumber()
    quantity: number;
}

export class CreatePackageDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    readonly details: string;

    @IsString()
    readonly image: string;

    @IsString()
    @IsNotEmpty()
    readonly price: number;

    @IsString()
    @IsNotEmpty()
    readonly category: string;

    @IsString()
    @IsNotEmpty()
    readonly stock: number;

    @IsArray()
    @IsNotEmpty()
    @ValidateNested({ each: true })
    readonly package: PackageItemDto[];
}

export class UpdatePackageDto {
    readonly name?: string;
    readonly details?: string;
    readonly image?: string;
    readonly price?: number;
    readonly category?: string;
    readonly stock?: number;
    readonly package?: PackageItemDto[];
};