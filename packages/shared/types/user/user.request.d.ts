import { IUser } from '.'

export interface IUserCreateParams extends Pick<IUser, 'username' | 'password'> {}

export interface IUserLoginParams extends Pick<IUser, 'username' | 'password'> {}

export type IUserDeleteParams = IUser['id']
