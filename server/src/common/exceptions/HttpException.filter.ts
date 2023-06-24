import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    const status: number =
      exception.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR;
    const message: string = exception.message || 'Something went wrong';
    const exceptionResponse: any = exception.getResponse();

    interface ResponseInterface {
      success: boolean;
      statusCode: number;
      path: string;
      message: string;
    }

    const responseBody: ResponseInterface = {
      success: false,
      statusCode: status,
      path: request.url,
      message,
    };

    // Logger for the terminal shows the exception
    Logger.error(
      exceptionResponse,
      JSON.stringify(responseBody),
      'HttpExceptionFilter',
    );

    response.status(status).json(responseBody);
  }
}
