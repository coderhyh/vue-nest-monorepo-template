import { IUser } from '.'

namespace UserRequest {
  export interface IUserCreate extends Pick<IUser, 'username' | 'password'> {}

  export interface IUserLogin extends Pick<IUser, 'username' | 'password'> {}

  export type IUserDelete = IUser['id']
}
