import type { CreateUserDto } from './dto/create-user.dto'
import type { LoginUserDto } from './dto/login-user.dto'
import type { UpdateUserDto } from './dto/update-user.dto'
import { Injectable } from '@nestjs/common'

import { add } from '@vue_nest_project/shared/utils'

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user'
  }

  login(loginUserDto: LoginUserDto) {
    return add('loginUserDto', ' tes1t')
  }

  findAll() {
    return `This action returns all user`
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
