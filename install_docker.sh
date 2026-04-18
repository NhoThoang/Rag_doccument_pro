#!/bin/bash

# Script cài đặt Docker và Docker Compose (Plugin V2) cho Ubuntu/Debian
# Author: Antigravity

set -e

# Kiểm tra quyền root
if [ "$EUID" -ne 0 ]; then
  echo "Vui lòng chạy script này với quyền sudo (sudo bash install_docker.sh)"
  exit 1
fi

echo "=========================================================="
echo "Bắt đầu quá trình cài đặt Docker và Docker Compose..."
echo "=========================================================="

# 1. Cập nhật hệ thống và cài đặt các gói phụ thuộc cơ bản
echo ">>> Cập nhật danh sách gói và cài đặt dependencies..."
apt-get update
apt-get install -y ca-certificates curl gnupg lsb-release

# 2. Thêm khóa GPG chính thức của Docker
echo ">>> Thêm Docker GPG key..."
mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg --yes

# 3. Thiết lập repository
echo ">>> Thiết lập Docker repository..."
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

# 4. Cài đặt Docker Engine và Docker Compose Plugin
echo ">>> Đang cài đặt Docker và Docker Compose Plugin..."
apt-get update
apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# 5. Khởi động và kích hoạt Docker
echo ">>> Khởi động Docker service..."
systemctl enable docker
systemctl start docker

# 6. Thêm user hiện tại vào group docker (để chạy docker không cần sudo)
# Lưu ý: Cần logout và login lại để có hiệu lực
USER_NAME=$(logname 2>/dev/null || echo $SUDO_USER)
if [ ! -z "$USER_NAME" ]; then
    echo ">>> Thêm người dùng $USER_NAME vào nhóm docker..."
    usermod -aG docker $USER_NAME
fi

echo "=========================================================="
echo "CÀI ĐẶT HOÀN TẤT!"
echo "Docker version: $(docker --version)"
echo "Docker Compose version: $(docker compose version)"
echo "=========================================================="
echo "LƯU Ý: Nếu bạn muốn chạy lệnh docker mà không cần sudo,"
echo "hãy đăng xuất và đăng nhập lại hệ thống."
echo "=========================================================="
