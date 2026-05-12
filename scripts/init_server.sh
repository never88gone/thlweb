#!/bin/bash

# =================================================================
# 糖葫芦工作室 (THL Studio) - 服务器环境初始化脚本
# 用于 Ubuntu 系统
# =================================================================

set -e

echo "🚀 开始初始化服务器环境..."

# 1. 更新系统包
echo "📦 更新系统软件包..."
sudo apt-get update
sudo apt-get upgrade -y

# 2. 安装 Nginx
echo "🌐 安装 Nginx..."
sudo apt-get install -y nginx

# 3. 创建 Web 目录
WEB_ROOT="/var/www/thlweb"
echo "📂 创建 Web 目录: $WEB_ROOT"
sudo mkdir -p $WEB_ROOT
sudo chown -R $USER:$USER $WEB_ROOT

# 4. 调整防火墙 (如果是阿里云，请确保安全组也开启了 80/443)
echo "🛡️ 配置防火墙..."
sudo ufw allow 'Nginx Full' || true

# 5. 提示
echo "✅ 初始化完成！"
echo "------------------------------------------------"
echo "下一步建议："
echo "1. 将项目中的 nginx/nginx.conf 内容复制到服务器 /etc/nginx/sites-available/thlweb"
echo "2. 运行 'sudo ln -s /etc/nginx/sites-available/thlweb /etc/nginx/sites-enabled/'"
echo "3. 运行 'sudo nginx -t && sudo systemctl restart nginx'"
echo "------------------------------------------------"
