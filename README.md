# Vue + Nest Monorepo Template

一个使用 Vue3 + NestJS + TypeScript 的全栈单体仓库模板项目。

## 技术栈

### 前端 (packages/web)

- ⚡️ Vue 3 + TypeScript + Vite
- 🎨 UnoCSS - 高性能且极具灵活性的即时原子化 CSS 引擎
- 📦 组件自动化加载
- 🍍 Pinia 状态管理 + 持久化
- 😃 丰富的图标集支持
- 🔥 `<script setup>` 语法
- 📥 API 自动加载
- 🪜 Element Plus UI 框架
- 🧲 ESLint + Stylelint 代码规范

### 后端 (packages/service)

- 🚀 NestJS + TypeScript
- 📝 Swagger API 文档
- 🔐 JWT 认证
- 🗃️ TypeORM + MySQL
- 🔄 热重载开发
- ✨ 装饰器验证
- 🛡️ 统一的响应拦截
- 🎯 统一的错误处理

### 共享模块 (packages/shared)

- 📦 类型定义共享
- 🔧 工具函数共享
- 🔄 自动编译

## 项目结构

```bash
├── packages
│ ├── web/ # 前端项目
│ ├── service/ # 后端项目
│ └── shared/ # 共享模块
├── scripts/ # 项目脚本
├── package.json
└── pnpm-workspace.yaml
```

## 开始使用

### 环境要求

- Node.js >= 16.17.1
- pnpm >= 8.0.0
- MySQL >= 8.0
- OpenSSL (用于生成 JWT 密钥)

### 安装

```bash
# 安装依赖并初始化项目
pnpm run init
# 生成 JWT RSA 密钥对
cd packages/service/src
mkdir keys
cd keys
# 生成私钥
openssl genrsa -out private.key 2048
# 从私钥生成公钥
openssl rsa -in private.key -pubout -out public.key
```

### 开发

```bash
# 启动所有项目
pnpm start
# 分别启动
pnpm st:web # 启动前端
pnpm st:service # 启动后端
pnpm st:shared # 启动共享模块
```

### 构建

```bash
# 构建所有项目
pnpm build

# 分别构建
pnpm b:web # 构建前端
pnpm b:service # 构建后端
pnpm b:shared # 构建共享模块
```

### 代码规范

```bash
# 运行所有 lint
pnpm lint

# 分别运行
pnpm lint:script # ESLint 检查
pnpm lint:style # Stylelint 检查
```

### 生成 NestJS 资源

```bash
pnpm g resource-name
```

## VS Code 插件推荐

- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [TypeScript Vue Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
- [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)
- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify)
- [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## 许可证

[MIT](./LICENSE)
