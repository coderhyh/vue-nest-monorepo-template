import { UserRequest, UserResponse } from '@vue_nest_project/shared/types/user'

import request from '~/service'

export function createUser(user: UserRequest.IUserCreate) {
  return request.post<UserResponse.IUserCreate>({
    url: '/user',
    data: user,
  })
}

export function getUserAll() {
  return request.get<UserResponse.IUserFindAll>({
    url: '/user',
  })
}

export function deleteUser(id: UserRequest.IUserDelete) {
  return request.delete<UserResponse.IUserDelete>({
    url: `/user/${id}`,
  })
}
