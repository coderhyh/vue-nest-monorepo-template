export default {
  // 服务基本配置
  SERVICE_CONFIG: {
    port: 3001,
  },

  // 数据库配置
  DATABASE_CONFIG: {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    database: 'coderhyh',
    password: '772567615h',
    autoLoadEntities: true,
    synchronize: true,
    // dropSchema: true,
  },
}
