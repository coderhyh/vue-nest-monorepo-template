export * from './user.request.d'
export * from './user.response.d'

// user表字段
export interface IUser {
  id: number | string
  username: string
  password: string
  createdAt: Date
  updatedAt: Date
}
