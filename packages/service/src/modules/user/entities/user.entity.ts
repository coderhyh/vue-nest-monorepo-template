import { IUser } from '@vue_nest_project/shared/types/user'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('users')
export class User implements IUser {
  @PrimaryGeneratedColumn({
    comment: '用户id',
  })
  id: number

  @Column({
    comment: '用户名',
    length: 30,
    unique: true,
  })
  username: string

  @Column({
    comment: '用户密码',
    length: 100,
    select: false,
  })
  password: string

  @CreateDateColumn({
    name: 'created_at',
    comment: '创建时间',
  })
  createdAt: Date

  @UpdateDateColumn({
    name: 'updated_at',
    comment: '更新时间',
  })
  updatedAt: Date
}
