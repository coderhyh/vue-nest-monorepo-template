import { IUser } from '.'
import { IResponse } from '../app'

export type IUserCreateRes = IResponse<string>

export type IUserLoginRes = IResponse<{
  access_token: string
}>

export type IUserFindAllRes = IResponse<IUser[]>

export type IUserDeleteRes = IResponse<string>
