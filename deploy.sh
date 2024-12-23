#!/bin/bash

# 设置错误时退出
set -e

# 输出颜色设置
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# 打印带颜色的信息
log_info() {
    echo -e "${GREEN}[INFO] $1${NC}"
}

log_warn() {
    echo -e "${YELLOW}[WARN] $1${NC}"
}

log_error() {
    echo -e "${RED}[ERROR] $1${NC}"
}

# 检查必要的命令是否存在
check_commands() {
    for cmd in git pnpm docker docker-compose openssl
    do
        if ! command -v "$cmd" &> /dev/null
        then
            log_error "$cmd 未安装，请先安装必要的依赖"
            exit 1
        fi
    done
}

# 生成 JWT 密钥
generate_jwt_keys() {
    log_info "生成 JWT 密钥..."
    mkdir -p packages/service/src/keys
    cd packages/service/src/keys
    if [ ! -f private.key ]; then
        openssl genrsa -out private.key 2048
        openssl rsa -in private.key -pubout -out public.key
    else
        log_warn "JWT 密钥已存在，跳过生成"
    fi
    cd ../../../..
}

# 拉取最新代码
pull_latest_code() {
    log_info "拉取最新代码..."
    git pull origin master
}

# Docker 部署
docker_deploy() {
    log_info "开始 Docker 部署..."

    # 停止并删除旧容器
    log_info "停止旧容器..."
    docker-compose down

    # 构建新镜像并启动
    log_info "构建并启动新容器..."
    docker-compose up -d --build

    # 检查容器状态
    log_info "检查容器状态..."
    docker-compose ps
}

# 主函数
main() {
    local start_time=$(date '+%Y-%m-%d %H:%M:%S')
    log_info "开始部署 - $start_time"

    # 检查命令
    check_commands

    # 执行部署步骤
    pull_latest_code
    generate_jwt_keys
    docker_deploy

    local end_time=$(date '+%Y-%m-%d %H:%M:%S')
    log_info "部署完成 - $end_time"
}

# 执行主函数
main
