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
│   ├── web/          # 前端项目
│   ├── service/      # 后端服务
│   └── shared/       # 共享模块
├── docker/           # Docker 相关配置
│   ├── backend.Dockerfile  # 后端 Docker 构建文件
│   ├── frontend.Dockerfile # 前端 Docker 构建文件
│   └── nginx.conf         # Nginx 配置文件
├── scripts/          # 项目脚本
├── deploy.sh         # 部署脚本
├── package.json
└── pnpm-workspace.yaml
```

## 开始使用

### 环境要求

- Node.js >= 18.18.2
- pnpm >= 8.0.0
- MySQL >= 8.0
- OpenSSL (用于生成 JWT 密钥)
- Docker & Docker Compose (用于容器化部署)

### 安装

```bash
# 安装依赖并初始化项目
pnpm run init

# 生成 JWT RSA 密钥对
cd packages/service/src
mkdir keys
cd keys
openssl genrsa -out private.key 2048
openssl rsa -in private.key -pubout -out public.key
cd ../../../..
```

### 开发

```bash
# 启动所有项目
pnpm start

# 分别启动
pnpm st:web        # 启动前端
pnpm st:service    # 启动后端
pnpm st:shared     # 启动共享模块
```

### 构建

```bash
# 构建所有项目
pnpm build

# 分别构建
pnpm b:web         # 构建前端
pnpm b:service     # 构建后端
pnpm b:shared      # 构建共享模块
```

### 代码规范

```bash
# 运行所有 lint
pnpm lint

# 分别运行
pnpm lint:script   # ESLint 检查
pnpm lint:style    # Stylelint 检查
```

### 生成 NestJS 资源

```bash
pnpm g resource-name
```

### Docker 部署

#### 手动部署

```bash
# 1. 生成 JWT 密钥（如果还没有生成）
cd packages/service/src
mkdir keys
cd keys
openssl genrsa -out private.key 2048
openssl rsa -in private.key -pubout -out public.key
cd ../../../..

# 2. 构建并启动所有服务
docker-compose up -d

# 服务访问地址:
# - 前端: http://localhost
# - 后端: http://localhost:8802
# - MySQL: localhost:8801

# 常用命令:
# 查看服务状态
docker-compose ps

# 查看服务日志
docker-compose logs -f [service_name]

# 重新构建并启动服务
docker-compose up -d --build

# 停止所有服务
docker-compose down

# 停止并删除所有数据(包括数据库数据)
docker-compose down -v
```

#### 自动部署

```bash
# 添加执行权限
chmod +x deploy.sh

# 运行部署脚本
./deploy.sh
```

### 目录说明

```bash
docker/
├── backend.Dockerfile  # 后端服务构建配置
├── frontend.Dockerfile # 前端服务构建配置
└── nginx.conf         # Nginx 配置文件

mysql_data/           # MySQL 数据持久化目录(自动创建)
```

### 服务说明

- 前端服务(frontend)

  - 基于 Nginx 部署
  - 端口映射: 8003:80
  - 支持 SPA 路由
  - API 反向代理到后端服务

- 后端服务(backend)

  - 基于 Node.js 部署
  - 端口映射: 8802:3001
  - 生产环境运行
  - JWT 密钥通过 volume 挂载
  - 使用淘宝 npm 镜像加速

- MySQL 服务(mysql)
  - 版本: 8.0
  - 端口映射: 8801:3306
  - 数据持久化
  - 原生密码认证

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
