
# Smaker_Fashion

Smaker_Fashion là một ứng dụng quản lý thời trang, giúp người dùng duyệt và quản lý các sản phẩm thời trang, với dữ liệu được lưu trữ trên local storage của trình duyệt.

## Mục lục

- [Giới thiệu](#giới-thiệu)
- [Cài đặt và cấu hình](#cài-đặt-và-cấu-hình)
- [Cách sử dụng](#cách-sử-dụng)
- [Tính năng](#tính-năng)
- [Cấu trúc dự án](#cấu-trúc-dự-án)
- [Liên hệ](#liên-hệ)

## Giới thiệu

Smaker_Fashion là một ứng dụng thương mại điện tử dành riêng cho ngành thời trang. Người dùng có thể duyệt qua các sản phẩm, thêm chúng vào giỏ hàng, và thực hiện thanh toán. Dữ liệu sản phẩm và giỏ hàng của người dùng được lưu trữ trên local storage của trình duyệt, giúp ứng dụng hoạt động mà không cần kết nối với máy chủ.

## Cài đặt và cấu hình

Để cài đặt và chạy dự án trên máy tính cá nhân của bạn, vui lòng làm theo các bước dưới đây:

### Yêu cầu

- Trình duyệt web (Chrome, Firefox, Edge, v.v.)
- Node.js (để phát triển và chạy ứng dụng nếu bạn muốn tùy chỉnh mã nguồn)

### Các bước cài đặt

1. **Clone dự án**

   Đầu tiên, bạn cần clone dự án về máy tính của mình:
   ```bash
   git clone https://github.com/chaolaolo/Smaker_Fashion.git
   ```

2. **Cài đặt các phụ thuộc**

   Di chuyển vào thư mục dự án và cài đặt các gói phụ thuộc:
   ```bash
   cd Smaker_Fashion
   npm install
   ```

3. **Chạy ứng dụng**

   Để chạy ứng dụng, bạn chỉ cần chuột phải vào file **Home** và chọn **Run for browser** trong trình soạn thảo mã của bạn (ví dụ: VS Code). Điều này sẽ mở ứng dụng trong trình duyệt.

## Cách sử dụng

- **Duyệt sản phẩm**: Người dùng có thể xem các sản phẩm thời trang trong ứng dụng.
- **Thêm vào giỏ hàng**: Người dùng có thể thêm các sản phẩm vào giỏ hàng.
- **Quản lý giỏ hàng**: Người dùng có thể xem, xóa hoặc thay đổi số lượng sản phẩm trong giỏ hàng.
- **Thanh toán**: Người dùng có thể thực hiện thanh toán cho các sản phẩm trong giỏ hàng.

## Tính năng

- **Duyệt sản phẩm**: Xem danh sách các sản phẩm thời trang có sẵn.
- **Quản lý giỏ hàng**: Thêm, xóa và thay đổi số lượng sản phẩm trong giỏ hàng.
- **Lưu trữ trên local storage**: Dữ liệu sản phẩm và giỏ hàng được lưu trữ trong local storage của trình duyệt, giúp dữ liệu không bị mất khi làm mới trang.
- **Thanh toán**: Giả lập chức năng thanh toán, giúp người dùng hoàn tất giao dịch.

## Cấu trúc dự án

Dự án này bao gồm các thành phần chính sau:

```
/src                    # Mã nguồn ứng dụng
  /components           # Các component giao diện
  /utils                # Các hàm tiện ích, ví dụ: xử lý local storage
/public                 # Tài nguyên tĩnh (hình ảnh, CSS)
/package.json           # Cấu hình npm
README.md               # Tài liệu hướng dẫn dự án
```

## Liên hệ

- Email: chaolaolo290604@gmail.com
- GitHub: [chaolaolo](https://github.com/chaolaolo)
