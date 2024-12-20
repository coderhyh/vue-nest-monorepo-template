import { IUserCreateParams, IUserCreateRes, IUserDeleteParams, IUserDeleteRes, IUserFindAllRes } from '@vue_nest_project/shared/types/user'

import request from '~/service'

export function createUser(user: IUserCreateParams) {
  return request.post<IUserCreateRes>({
    url: '/user',
    data: user,
  })
}

export function getUserAll() {
  return request.get<IUserFindAllRes>({
    url: '/user',
  })
}

export function deleteUser(id: IUserDeleteParams) {
  return request.delete<IUserDeleteRes>({
    url: `/user/${id}`,
  })
}
