FROM node:18.18.2 as builder

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./

COPY packages/shared ./packages/shared

COPY packages/service ./packages/service

RUN pnpm install
RUN pnpm b:shared
RUN pnpm b:service

CMD ["sh", "-c", "NODE_ENV=production node /app/packages/service/dist/main.js"]
