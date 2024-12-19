import type { Repository } from 'typeorm'
import type { CreateUserDto } from './dto/create-user.dto'
import type { LoginUserDto } from './dto/login-user.dto'
import type { UpdateUserDto } from './dto/update-user.dto'
import { forwardRef, Inject, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common'

import { InjectRepository } from '@nestjs/typeorm'
import { AuthService } from '~/modules/auth/auth.service'
import { passwordCompare, passwordEncrypt } from '~/utils/user.utils'
// import { add } from '@vue_nest_project/shared/utils'
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.userRepository.findOne({
        where: {
          username: createUserDto.username,
        },
      })
      if (user) {
        throw new UnauthorizedException('用户已存在')
      }
      createUserDto.password = passwordEncrypt(createUserDto.password)
      const res = await this.userRepository.save(createUserDto)
      if (!res) {
        throw new UnauthorizedException('创建失败')
      }
      return '创建成功'
    }
    catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }

  async login(loginUserDto: LoginUserDto) {
    const user = await this.userRepository.findOne({
      where: {
        username: loginUserDto.username,
      },
      select: ['password'],
    })

    if (!user || !passwordCompare(loginUserDto.password, user.password)) {
      throw new UnauthorizedException('用户名或密码错误')
    }

    return this.authService.generateToken(user)
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const res = await this.userRepository.update(id, updateUserDto)
    if (!res.affected) {
      throw new NotFoundException('用户不存在')
    }
    return '更新成功'
  }

  async remove(id: number) {
    const res = await this.userRepository.delete(id)
    if (!res.affected) {
      throw new NotFoundException('用户不存在')
    }
    return '删除成功'
  }
}
