import * as bcrypt from 'bcrypt'

export function passwordEncrypt(password: string) {
  return bcrypt.hashSync(password, 10)
}

export function passwordCompare(password: string, hash: string) {
  return bcrypt.compareSync(password, hash)
}
