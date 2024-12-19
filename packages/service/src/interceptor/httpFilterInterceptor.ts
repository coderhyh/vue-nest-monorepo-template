import type { ArgumentsHost, ExceptionFilter } from '@nestjs/common'
import type { Request, Response } from 'express'

import { Catch, HttpException } from '@nestjs/common'

@Catch(HttpException)
export class HttpFilterInterceptor implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const request = ctx.getRequest<Request>()
    const response = ctx.getResponse<Response>()

    const status = exception.getStatus()

    response.status(status).json({
      data: exception.getResponse(),
      path: request.url,
      status,
      success: false,
      time: new Date().getTime(),
    })
  }
}
