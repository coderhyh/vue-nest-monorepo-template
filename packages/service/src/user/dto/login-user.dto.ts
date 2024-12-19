import type { ILoginUserParams } from '@vue_nest_project/shared/types'
import { ApiProperty } from '@nestjs/swagger'
import { IsByteLength, IsNotEmpty } from 'class-validator'

export class LoginUserDto implements ILoginUserParams {
  @IsNotEmpty()
  @IsByteLength(8, 16)
  @ApiProperty({ description: '用户名', example: '772567615' })
  username: string

  @IsNotEmpty()
  @ApiProperty({ description: '密码', example: '1234561' })
  password: string

  @IsNotEmpty()
  @IsByteLength(4, 4)
  @ApiProperty({ description: '验证码', example: '1233' })
  code: string
}
