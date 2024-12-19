import { execSync } from 'node:child_process'
import { dirname, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const args = process.argv.slice(2)
const resourceName = args[0]

if (!resourceName) {
  console.error('请提供资源名称')
  process.exit(1)
}

try {
  execSync(`pnpm --filter @vue_nest_project/service exec nest generate resource ${resourceName} --no-spec`, { stdio: 'inherit' })

  const __dirname = dirname(fileURLToPath(import.meta.url))
  console.log('\x1B[32m%s\x1B[0m', `ESLint`, 'start')
  execSync(`eslint ${resolve(__dirname, `../packages/service/src`)} --fix`)
  console.log('\x1B[32m%s\x1B[0m', `ESLint`, 'end')
}
catch (error) {
  console.error('执行命令时出错:', error)
  process.exit(1)
}
