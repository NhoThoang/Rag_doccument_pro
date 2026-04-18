# Kế hoạch phát triển Website giới thiệu RAG Document Pro

Bản kế hoạch này chi tiết các bước để xây dựng một Landing Page "Premium" cho dự án **RAG Document Pro**, sử dụng Next.js để phát triển và xuất (export) ra HTML/CSS tĩnh để host trên GitHub Pages.

---

## 1. Tổng quan & Mục tiêu
- **Mục tiêu**: Thu hút người dùng, giới thiệu tính năng vượt trội và thúc đẩy chuyển đổi (thanh toán/dùng thử).
- **Phong cách**: "Dracula Premium" – Chế độ tối (Dark Mode) hiện đại, sắc nét, mượt mà và chuyên nghiệp.
- **Nền tảng host**: GitHub Pages (Static Hosting).

---

## 2. Hệ thống Thiết kế (Dracula Design System)
Chúng ta sẽ sử dụng bảng màu Dracula chính thức được tinh chỉnh để tạo cảm giác cao cấp:

| Thành phần | Mã màu (HSL/Hex) | Ghi chú |
| :--- | :--- | :--- |
| **Background** | `#282a36` | Nền chính |
| **Current Line** | `#44475a` | Nền phụ, Card |
| **Foreground** | `#f8f8f2` | Văn bản chính |
| **Comment** | `#6272a4` | Văn bản phụ |
| **Cyan** | `#8be9fd` | Accent (Highlight) |
| **Green** | `#50fa7b` | Success/CTA |
| **Purple** | `#bd93f9` | Brand Primary |
| **Pink** | `#ff79c6` | Accent |

**Typography**: Sử dụng Font **Inter** hoặc **Outfit** (Google Fonts) để có cảm giác Modern & Tech.

---

## 3. Cấu trúc trang (Single Page Landing)

### 3.1. Hero Section (Mục tiêu: Gây ấn tượng đầu tiên)
- **Headline**: "Biến toàn bộ tài liệu thành Trí tuệ nhân tạo riêng biệt".
- **Sub-headline**: Giới thiệu ngắn gọn về sức mạnh của RAG (Retrieval-Augmented Generation).
- **CTA Button**: "Tải bản dùng thử ngay" & "Xem Video Demo".
- **Visual**: Một hình ảnh mockup Desktop App với hiệu ứng Glassmorphism.

![Mockup Landing Page Premium](rag_pro_landing_mockup_1776521051988.png)

### 3.2. Sức mạnh Công nghệ (Tech Stack Breakdown)
Trình bày dưới dạng Bento Grid hoặc Flex Cards:
1.  **PostgreSQL**: Lưu trữ dữ liệu quan hệ bền vững.
2.  **Qdrant**: Vector Database tốc độ cao cho tìm kiếm ngữ nghĩa.
3.  **Local Embedding**: Chạy model 8k token ngay tại máy, bảo mật tuyệt đối.
4.  **Redis Cache**: Tối ưu hóa hiệu năng, phản hồi tức thì.

### 3.3. Tính năng nổi bật (Features)
Dựa trên kịch bản truyền thông:
- Xử lý Chunking thông minh (BGE-M3).
- Multi-Agent Workspace (Nhiều robot chuyên gia).
- Web Hub & Cloudflare Tunnel (Truy cập từ xa).
- Giao diện Dracula nguyên bản.

### 3.4. Video Demo (Mục tiêu: Minh chứng thực tế)
- Nhúng video YouTube (theo kịch bản đã soạn).
- Showcase cảnh AI trả lời dựa trên tài liệu thực tế.

### 3.5. Bảng giá & Thanh toán (Conversion)
- Gói dùng thử: 30 ngày full tính năng.
- Gói Premium: Vĩnh viễn / Thuê bao.
- **QR Code Section**: Hiển thị mã QR ngân hàng/Ví điện tử để người dùng thanh toán sau khi hết hạn dùng thử.

---

## 4. Kỹ thuật & Công nghệ sử dụng
- **Framework**: `Next.js` (App Router).
- **Styling**: `Vanilla CSS` hoặc `CSS Modules` (để tối ưu performance và control styling).
- **Animations**: `Framer Motion` (cho các hiệu ứng scroll, hover mượt mà).
- **Icons**: `Lucide React` hoặc `FontAwesome`.
- **Deployment**: `next export` -> GitHub Pages.

---

## 5. Danh sách công việc (Task List)

### Giai đoạn 1: Khởi tạo & Base Styles
- [ ] Khởi tạo dự án Next.js (`npx create-next-app@latest`).
- [ ] Thiết lập hệ thống biến CSS (CSS Variables) cho bảng màu Dracula.
- [ ] Setup Font Outfit/Inter.

### Giai đoạn 2: Xây dựng Component
- [ ] **Navbar**: Glassmorphism effect, Logo RAG Pro.
- [ ] **Hero**: Typography lớn, hiệu ứng gradient text.
- [ ] **Feature Cards**: Hiệu ứng hover sáng (glow effect).
- [ ] **Pricing Table**: Thiết kế nổi bật nút thanh toán.

### Giai đoạn 3: Content & Media
- [ ] Chèn nội dung từ 2 mẫu giới thiệu (Facebook/YouTube).
- [ ] Sử dụng `generate_image` để tạo hình ảnh minh họa chất lượng cao.
- [ ] Thiết lập phần mã QR thanh toán (Canvas/Image).

### Giai đoạn 4: Tối ưu & Xuất bản
- [ ] Kiểm tra Responsive (Mobile/Tablet/Desktop).
- [ ] Tối ưu SEO (Meta tags, Open Graph).
- [ ] Cấu hình `next.config.js` để export file tĩnh.
- [ ] Script tự động push code lên branch `gh-pages`.

---

## 6. Ghi chú quan trọng về thanh toán
Vì đây là trang tĩnh trên GitHub Pages, việc tích hợp thanh toán tự động (Webhook) sẽ khó khăn hơn. 
- **Giải pháp**: Sử dụng **QR Code động/tĩnh** kèm nội dung chuyển khoản mã định danh (Ví dụ: `RAGPRO_USER_ID`). Sau khi nhận tiền, bạn sẽ cấp mã kích hoạt (License Key) thủ công hoặc qua một tool nhỏ.

---
**Bạn có muốn tôi bắt đầu thực hiện Giai đoạn 1 (Khởi tạo dự án và thiết kế hệ thống CSS Dracula) ngay không?**
