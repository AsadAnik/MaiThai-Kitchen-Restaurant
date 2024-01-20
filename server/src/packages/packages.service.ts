import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Package } from './schemas/package.schema';
import { CreatePackageDto, UpdatePackageDto } from './packages.dto';

@Injectable()
export class PackagesService {
    constructor(@InjectModel(Package.name) private packageModel: Model<Package>) { }

    /**
     * CREATE PACKAGE
     * @param packgeData 
     * @returns 
     */
    async create(packgeData: CreatePackageDto): Promise<Package> {
        const createdPackage = new this.packageModel(packgeData);
        return await createdPackage.save();
    }

    /**
     * FIND PACKAGE BY PACKAGE_ID
     * @param packageId 
     * @returns 
     */
    async findOne(packageId: string): Promise<Package> {
        const packageFound = await this.packageModel.findById(packageId);
        if (!packageFound) throw new HttpException('Package Not Found', HttpStatus.NOT_FOUND);
        return packageFound;
    }

    /**
     * FIND ALL PACKAGES
     * @returns 
     */
    async findAll(): Promise<Package[]> {
        const packages = await this.packageModel.find();
        if (!packages?.length) throw new HttpException('No Packages', HttpStatus.NOT_FOUND);
        return packages;
    }

    /**
     * UPDATE PACKGE BY PACKGE_ID & PACKAGE_DATA
     * @param packageId 
     * @param updatePackageData 
     * @returns 
     */
    async update(packageId: string, updatePackageData: UpdatePackageDto): Promise<Package> {
        const updatedPackage = await this.packageModel.findByIdAndUpdate(packageId, updatePackageData, { new: true });
        if (!updatedPackage) throw new HttpException(`Package with this id: ${packageId} is not present`, HttpStatus.NOT_FOUND);
        return updatedPackage;
    }

    /**
     * DELETE PACKAGE BY PACKGE_ID
     * @param packageId 
     * @returns 
     */
    async delete(packageId: string) {
        const deletedPackage = await this.packageModel.findByIdAndDelete(packageId);
        if (!deletedPackage) throw new HttpException('Can not delete', HttpStatus.NOT_ACCEPTABLE);
        return deletedPackage;
    }
}
