import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './common/exceptions/HttpException.filter';
import { ResponseInterceptor } from './common/interceptors/HttpResponse.interceptor';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { PackagesModule } from './packages/packages.module';
import { AdminModule } from './admin/admin.module';
import { MailerService } from './mailer/mailer.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      useNewUrlParser: false,
      useUnifiedTopology: false,
      connectTimeoutMS: 5000, // 5 seconds
    }),
    UsersModule,
    ProductsModule,
    PackagesModule,
    AdminModule,
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
    MailerService,
  ],
})
export class AppModule { }
