import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as cors from 'cors'
import { AppModule } from './app.module'
import { ENV } from './config'
import { HttpFilterInterceptor } from './interceptor/httpFilterInterceptor'
import { ResponseInterceptor } from './interceptor/responseInterceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('learn nest')
    .setDescription('接口文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  app.use(cors())
  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalInterceptors(new ResponseInterceptor())
  app.useGlobalFilters(new HttpFilterInterceptor())
  await app.listen(ENV.SERVICE_CONFIG.port)
}
bootstrap()
