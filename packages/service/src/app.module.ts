import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { ENV } from './config'
import { UserModule } from './user/user.module'

@Module({
  controllers: [AppController],
  imports: [
    UserModule,
    TypeOrmModule.forRoot(ENV.DATABASE_CONFIG),
  ],
  providers: [AppService],
})
export class AppModule {}
