# Hướng dẫn chạy ứng dụng trên WSL (Windows Subsystem for Linux)

Tài liệu này hướng dẫn bạn các bước thiết lập từ đầu để khởi chạy ứng dụng bằng Docker và Makefile.

## 1. Cập nhật hệ thống và cài đặt công cụ (Chỉ chạy lần đầu)

Mở terminal WSL của bạn và chạy các lệnh sau để đảm bảo hệ thống đã sẵn sàng:

```bash
# Cập nhật danh sách gói
sudo apt update

# Cài đặt công cụ 'make'
sudo apt install make -y
```

## 2. Cài đặt Docker và Docker Compose

Chúng ta đã có sẵn script `install_docker.sh`. Bạn chỉ cần chạy lệnh sau thông qua Makefile:

```bash
make install
```

**LƯU Ý QUAN TRỌNG:** Sau khi lệnh trên hoàn tất, bạn **BẮT BUỘC** phải đóng Terminal WSL và mở lại (hoặc chạy lệnh `newgrp docker`) để có quyền chạy Docker không cần `sudo`.

## 3. Khởi chạy ứng dụng

### Bước 3.1: Tạo Network (Bắt buộc)
Ứng dụng yêu cầu một network tên là `app_network`. Bạn có thể tạo nó bằng lệnh:

```bash
make network
```

### Bước 3.2: Chạy các dịch vụ (Up)
Khởi chạy toàn bộ các dịch vụ (Postgres, Redis, Qdrant, Minio, Embedding Service) ở chế độ background:

```bash
make up
```

## 4. Các lệnh quản lý khác

*   **Xem trạng thái các container:**
    ```bash
    make ps
    ```
*   **Xem Log (để debug):**
    ```bash
    make logs
    ```
*   **Dừng ứng dụng (Stop):**
    ```bash
    make down
    ```
*   **Khởi động lại toàn bộ:**
    ```bash
    make restart
    ```

---
*Chúc bạn cài đặt thành công!*
