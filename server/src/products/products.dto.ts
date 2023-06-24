import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  readonly name: string;

  readonly details: string;
  readonly image: string;

  @IsNotEmpty()
  readonly price: number;

  @IsNotEmpty()
  readonly category: string;

  @IsNotEmpty()
  readonly stock: number
}

export class UpdateProductDto {
  readonly name?: string;
  readonly details?: string;
  readonly image?: string;
  readonly price?: number;
  readonly category?: string;
  readonly stock?: number;
}
