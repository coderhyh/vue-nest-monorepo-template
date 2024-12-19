import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'

@Module({
  controllers: [AppController],
  imports: [UserModule],
  providers: [AppService],
})
export class AppModule {}
