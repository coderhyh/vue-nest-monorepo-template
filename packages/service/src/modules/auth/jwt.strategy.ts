import { forwardRef, Inject, Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { ENV } from '../../config'
import { UserService } from '../user/user.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: ENV.JWT_CONFIG.publicKey,
      algorithms: ['RS256'],
    })
  }

  async validate(payload: any) {
    const user = await this.userService.findOne(payload.id)
    if (!user) {
      throw new UnauthorizedException('token无效')
    }
    return user
  }
}
