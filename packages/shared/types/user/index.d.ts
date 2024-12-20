export * from './user.request'
export * from './user.response'

// user表字段
export interface IUser {
  id: number | string
  username: string
  password: string
  createdAt: Date
  updatedAt: Date
}
