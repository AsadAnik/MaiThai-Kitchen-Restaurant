import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './schemas/product.schema';
import { CreateProductDto, UpdateProductDto } from './products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) { }

  async create(productData: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel({
      name: productData.name,
      details: productData.details,
      image: productData.image,
      price: productData.price,
      category: productData.category,
      stock: productData.stock,
    });
    return createdProduct.save();
  }

  async findOne(productId: string): Promise<Product> {
    const product = await this.productModel.findById(productId);
    if (!product)
      throw new HttpException('Product Not Found', HttpStatus.NOT_FOUND);
    return product;
  }

  async findAll(): Promise<Product[]> {
    const products = await this.productModel.find();
    if (!products.length)
      throw new HttpException('No Products', HttpStatus.NOT_FOUND);
    return products;
  }

  async findWithFeature(
    page?: number,
    limit?: number,
    minPrice?: number,
    maxPrice?: number,
    category?: string,
    search?: string
  ): Promise<[Product[], Product[], Product[], number]> {
    let productQuery = this.productModel.find();
    let searchedProductQuery = this.productModel.find();

    if (minPrice) {
      productQuery = productQuery.where('price').gte(minPrice);
    }

    if (maxPrice) {
      productQuery = productQuery.where('price').lte(maxPrice);
    }

    if (search) {
      const regex = new RegExp(search, 'i');
      searchedProductQuery = searchedProductQuery.where('name', regex);
    }

    if (page || limit) {
      const skip = (page - 1) * limit;
      productQuery = productQuery.skip(skip).limit(limit);
    }

    if (category) {
      const regex = new RegExp(category, 'i');
      productQuery = productQuery.where('category', regex);
    }
    
    const allProducts = await this.productModel.find();
    const products = await productQuery.exec();
    const searchedProducts = await searchedProductQuery.exec();
    const count = await this.productModel.countDocuments().exec();

    return [allProducts, products, searchedProducts, count];
  }

  async update(
    productId: string,
    updateProductData: UpdateProductDto,
  ): Promise<Product> {
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      productId,
      updateProductData,
      { new: true },
    );
    if (!updatedProduct)
      throw new HttpException(
        `Product with this id: ${productId} is not present`,
        HttpStatus.NOT_FOUND,
      );
    return updatedProduct;
  }

  async delete(productId: string): Promise<Product> {
    const deletedProduct = await this.productModel.findByIdAndDelete(productId);
    if (!deletedProduct)
      throw new HttpException("Can't Delete", HttpStatus.NOT_ACCEPTABLE);
    return deletedProduct;
  }
}
