import type { User } from '~/modules/user/entities/user.entity'
import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
  ) {}

  async generateToken(user: User) {
    return {
      access_token: this.jwtService.sign({ id: user.id, username: user.username }),
    }
  }

  async verifyToken(token: string): Promise<any> {
    try {
      if (!token)
        return false
      const id = this.jwtService.verify(token.replace('Bearer ', ''))
      return id
    }
    catch (e) {
      return false
    }
  }
}
