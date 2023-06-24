import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Query,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './products.dto';
import { Product } from './schemas/product.schema';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  async getProducts(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get('withFeatures')
  async getProductsWithFeatures(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('minPrice') minPrice?: number,
    @Query('maxPrice') maxPrice?: number,
    @Query('category') category?: string,
    @Query('search') search?: string
  ) {
    const [allProducts, products, searchedProducts, count] = await this.productsService.findWithFeature(page, limit, minPrice, maxPrice, category, search);
    const totalPages = Math.ceil(count / limit);

    return {
      totalProducts: count,
      currentPage: page,
      totalPages: totalPages,
      perPage: limit,
      searchedData: searchedProducts,
      data: products,
      allData: allProducts,
    };
  }

  @Get(':id')
  async getProduct(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Post()
  async createProduct(@Body() product: CreateProductDto): Promise<Product> {
    return this.productsService.create(product);
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() product: UpdateProductDto,
  ): Promise<Product> {
    return this.productsService.update(id, product);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<Product> {
    return this.productsService.delete(id);
  }
}
