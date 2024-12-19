import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ENV } from './config'
import { AuthModule } from './modules/auth/auth.module'
import { UserModule } from './modules/user/user.module'

@Module({
  controllers: [AppController],
  imports: [
    TypeOrmModule.forRoot(ENV.DATABASE_CONFIG),
    UserModule,
    AuthModule,
  ],
  providers: [AppService],
})
export class AppModule {}
