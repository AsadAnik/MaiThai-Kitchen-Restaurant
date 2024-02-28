import { IsNotEmpty } from "class-validator";


export class CreateAdminDto {
    readonly userName: string;

    @IsNotEmpty()
    readonly email : string;

    @IsNotEmpty()
    readonly password: string;
}

export class UpdateAdminDto {
    readonly userName?: string;
    readonly email?: string;
    readonly password?: string;
}