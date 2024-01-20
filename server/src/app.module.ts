import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './common/exceptions/HttpException.filter';
import { ResponseInterceptor } from './common/interceptors/HttpResponse.interceptor';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { PackagesModule } from './packages/packages.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/my-database', {
      useNewUrlParser: false,
      useUnifiedTopology: false,
      connectTimeoutMS: 5000, // 5 seconds
    }),
    UsersModule,
    ProductsModule,
    PackagesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
