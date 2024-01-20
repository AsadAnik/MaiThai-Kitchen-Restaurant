import { Controller, Body, Param, Query, Get, Post, Put, Patch, Delete } from '@nestjs/common';
import { PackagesService } from './packages.service';
import { CreatePackageDto, UpdatePackageDto } from './packages.dto';
import { Package } from './schemas/package.schema';

@Controller('packages')
export class PackagesController {
  constructor(private readonly packagesService: PackagesService) {} 

  @Get()
  async getPackages(): Promise<Package[]> {
    return this.packagesService.findAll();
  }

  @Get(':id')
  async getPackge(@Param('id') id: string) {
    return this.packagesService.findOne(id);
  }

  @Post()
  async createPackge(@Body() packageData: CreatePackageDto) {
    return this.packagesService.create(packageData);
  }

  @Put(':id')
  async updatePackage(@Param('id') id: string, @Body() packageData: UpdatePackageDto): Promise<Package> {
    return this.packagesService.update(id, packageData);
  }

  @Delete(':id')
  async deletePackge(@Param('id') id: string): Promise<Package> {
    return this.packagesService.delete(id);
  }

}
