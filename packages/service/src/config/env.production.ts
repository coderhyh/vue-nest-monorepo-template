import * as fs from 'node:fs'
import * as path from 'node:path'

const privateKey = fs.readFileSync(path.resolve(__dirname, '../keys/private.key'), 'utf-8')
const publicKey = fs.readFileSync(path.resolve(__dirname, '../keys/public.key'), 'utf-8')

export default {
  // 服务基本配置
  SERVICE_CONFIG: {
    port: 3001,
  },

  // 数据库配置
  DATABASE_CONFIG: {
    type: 'mysql',
    host: 'mysql',
    port: 3306,
    username: 'root',
    database: 'coderhyh',
    password: '772567615h',
    autoLoadEntities: true,
    synchronize: true,
  },

  // JWT配置
  JWT_CONFIG: {
    privateKey, // 私钥用于签名
    publicKey, // 公钥用于验证
    expiresIn: '24h',
  },
}
