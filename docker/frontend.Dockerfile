FROM node:18.18.2 as builder

WORKDIR /app

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install -g pnpm

COPY uno.config.ts package.json pnpm-workspace.yaml pnpm-lock.yaml ./

COPY packages/shared ./packages/shared

COPY packages/web ./packages/web

RUN pnpm install
RUN pnpm b:shared
RUN pnpm b:web

FROM nginx:alpine

COPY --from=builder /app/packages/web/dist /usr/share/nginx/html

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
