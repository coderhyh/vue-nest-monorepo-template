import development from './env.development'
import production from './env.production'

const configs = {
  development,
  production,
}

const ENV = configs[process.env.NODE_ENV || 'development']
export { ENV }
