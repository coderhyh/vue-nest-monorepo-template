import { forwardRef, Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { ENV } from '~/config'
import { UserModule } from '~/modules/user/user.module'
import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt.strategy'

@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule,
    JwtModule.register({
      privateKey: ENV.JWT_CONFIG.privateKey,
      publicKey: ENV.JWT_CONFIG.publicKey,
      signOptions: {
        expiresIn: ENV.JWT_CONFIG.expiresIn,
        algorithm: 'RS256',
      },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
