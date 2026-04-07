import React from "react";
import "./Header.css";
// import logoImage từ thư mục img
import logoImage from "../../img/logo.png";

const Header = () => {
  return (
    <header className="aline-header">
      {/* Top Bar (Dải màu hồng pastel đậm) */}
      <div className="header-topbar">
        <div className="container header-top-content">
          <p>✨ Chào mừng đến với Aline Beauty - Đánh thức vẻ đẹp tự nhiên ✨</p>
          <div className="header-top-links">
            <a href="/faq">FAQ</a>
            <span>|</span>
            <a href="/contact">Liên hệ</a>
          </div>
        </div>
      </div>

      {/* Main Header (Theo cấu trúc ảnh tham khảo) */}
      <div className="container header-main">
        <div className="header-logo">
          <img src={logoImage} alt="Aline Beauty" />
        </div>

        {/* Thanh tìm kiếm lớn ở giữa (Theo cấu trúc ảnh) */}
        <div className="header-search">
          <input type="text" placeholder="Tìm kiếm sản phẩm, thương hiệu..." />
          <button className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Các Icon và Giỏ hàng (Màu hồng pastel) */}
        <div className="header-user-actions">
          <div className="action-item">
            <i className="fas fa-user-circle"></i>
            <div>
              <span>Tài khoản</span>
              <a href="/login" className="login-link">Đăng nhập</a>
            </div>
          </div>
          <a href="/wishlist" className="action-item icon-only">
            <i className="far fa-heart"></i>
          </a>
          <a href="/cart" className="action-item cart-item">
            <i className="fas fa-shopping-bag"></i>
            <span className="cart-badge">0</span>
          </a>
        </div>
      </div>

      {/* Menu điều hướng (Tone hồng pastel) */}
      <nav className="header-nav">
        <div className="container nav-links">
          <a href="/"><i className="fas fa-home"></i> TRANG CHỦ</a>
          <a href="/skincare">CHĂM SÓC DA</a>
          <a href="/makeup">TRANG ĐIỂM</a>
          <a href="/new-arrival">SẢN PHẨM MỚI</a>
          <a href="/promotion">KHUYẾN MÃI</a>
          <a href="/blog">CẨM NANG</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
