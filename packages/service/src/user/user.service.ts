import type { Repository } from 'typeorm'
import type { CreateUserDto } from './dto/create-user.dto'
import type { LoginUserDto } from './dto/login-user.dto'
import type { UpdateUserDto } from './dto/update-user.dto'
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'

import { InjectRepository } from '@nestjs/typeorm'
// import { add } from '@vue_nest_project/shared/utils'
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto)
  }

  async login(loginUserDto: LoginUserDto) {
    const res = await this.userRepository.findOne({
      where: {
        username: loginUserDto.username,
        password: loginUserDto.password,
      },
    })
    console.log(res)

    if (!res) {
      throw new UnauthorizedException('用户名或密码错误')
    }
    return res
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
