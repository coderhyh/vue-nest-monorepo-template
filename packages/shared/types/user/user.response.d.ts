import { IUser } from '.'
import { IResponse } from '../app'

namespace UserResponse {
  export type IUserCreate = IResponse<string>

  export type IUserLogin = IResponse<{
    access_token: string
  }>

  export type IUserFindAll = IResponse<IUser[]>

  export type IUserDelete = IResponse<string>
}
