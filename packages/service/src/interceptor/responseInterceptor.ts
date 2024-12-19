import type { CallHandler, NestInterceptor } from '@nestjs/common'
import type { Observable } from 'rxjs'
import { HttpStatus, Injectable } from '@nestjs/common'
import { map } from 'rxjs/operators'

interface data<T> {
  data: T
}

@Injectable()
export class ResponseInterceptor<T = any> implements NestInterceptor {
  intercept(context, next: CallHandler): Observable<data<T>> {
    return next.handle().pipe(map((data) => {
      return {
        data,
        message: 'success',
        status: HttpStatus.OK,
        success: true,
      }
    }))
  }
}
