# Makefile for Docker Management
# Project: Chunksize App

.PHONY: install network up down restart ps logs help

# Tên Network (khớp với cấu hình trong docker-compose.yml)
NETWORK_NAME=app_network

help:
	@echo "Các lệnh có sẵn:"
	@echo "  make install  - Chạy script cài đặt Docker & Docker Compose"
	@echo "  make network  - Tạo docker network '$(NETWORK_NAME)'"
	@echo "  make up       - Khởi chạy các dịch vụ (tự động tạo network nếu thiếu)"
	@echo "  make down      - Dừng và xóa các dịch vụ"
	@echo "  make restart  - Khởi động lại các dịch vụ"
	@echo "  make ps       - Xem trạng thái các container"
	@echo "  make logs     - Xem log các container (theo thời gian thực)"

# 1. Cài đặt Docker và Docker Compose
install:
	@echo ">>> Đang chạy script cài đặt Docker..."
	@chmod +x install_docker.sh
	@sudo ./install_docker.sh

# 2. Tạo Docker Network
network:
	@echo ">>> Đang kiểm tra network '$(NETWORK_NAME)'..."
	@docker network inspect $(NETWORK_NAME) >/dev/null 2>&1 || \
		(echo ">>> Đang tạo network '$(NETWORK_NAME)'..." && docker network create $(NETWORK_NAME))

# 3. Khởi chạy Docker Compose
up: network
	@echo ">>> Đang khởi chạy các dịch vụ..."
	docker compose up -d

# 4. Dừng và xóa các dịch vụ
down:
	@echo ">>> Đang dừng các dịch vụ..."
	docker compose down

# 5. Khởi động lại
restart: down up

# 6. Xem trạng thái
ps:
	docker compose ps

# 7. Xem logs
logs:
	docker compose logs -f
