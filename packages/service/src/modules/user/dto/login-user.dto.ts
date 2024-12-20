import type { IUserLoginParams } from '@vue_nest_project/shared/types/user'
import { ApiProperty } from '@nestjs/swagger'
import { IsByteLength, IsNotEmpty } from 'class-validator'

export class LoginUserDto implements IUserLoginParams {
  @IsNotEmpty()
  @IsByteLength(8, 16)
  @ApiProperty({ description: '用户名', example: '772567615' })
  username: string

  @IsNotEmpty()
  @ApiProperty({ description: '密码', example: '1234561' })
  password: string
}
