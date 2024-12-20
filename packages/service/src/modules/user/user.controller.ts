import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { UserResponse } from '@vue_nest_project/shared/types/user'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { CreateUserDto } from './dto/create-user.dto'
import { LoginUserDto } from './dto/login-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserService } from './user.service'

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: '创建用户' })
  create(@Body() createUserDto: CreateUserDto): Promise<UserResponse.IUserCreate['data']> {
    return this.userService.create(createUserDto)
  }

  @Post('/login')
  @ApiOperation({ summary: '登录' })
  login(@Body() loginUserDto: LoginUserDto): Promise<UserResponse.IUserLogin['data']> {
    return this.userService.login(loginUserDto)
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  findAll(): Promise<UserResponse.IUserFindAll['data']> {
    return this.userService.findAll()
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id)
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto)
  }

  @Delete(':id')
  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  remove(@Param('id') id: string): Promise<UserResponse.IUserDelete['data']> {
    return this.userService.remove(+id)
  }
}
