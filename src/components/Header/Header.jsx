import React from "react";
import "./Header.css";
import logoImage from "../../img/logo.png";

const Header = () => {
  return (
    <header className="aline-header">
      

      <div className="container header-main">
        {/* Logo được làm to hơn ở đây */}
        <div className="header-logo">
          <img src={logoImage} alt="Aline Beauty" className="main-logo" />
        </div>

        <div className="header-search">
          <input type="text" placeholder="Tìm kiếm mỹ phẩm chính hãng..." />
          <button className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>

        <div className="header-user-actions">
          <div className="action-item">
            <i className="fas fa-user-circle"></i>
            <div>
              <span>Chào bạn!</span>
              <a href="/login" className="login-link">Đăng nhập</a>
            </div>
          </div>
          <a href="/cart" className="action-item cart-item">
            <i className="fas fa-shopping-bag"></i>
            <span className="cart-badge">0</span>
          </a>
        </div>
      </div>

      <nav className="header-nav">
        <div className="container nav-links">
          <div className="nav-item">
            <a href="/">TRANG CHỦ</a>
          </div>

          {/* Mục có Menu sổ xuống */}
          <div className="nav-item has-dropdown">
            <a href="/skincare">CHĂM SÓC DA <i className="fas fa-chevron-down"></i></a>
            <div className="dropdown-content">
              <a href="/skincare/cleanser">Sữa rửa mặt</a>
              <a href="/skincare/toner">Toner / Nước hoa hồng</a>
              <a href="/skincare/serum">Serum / Tinh chất</a>
              <a href="/skincare/moisturizer">Kem dưỡng ẩm</a>
              <a href="/skincare/sunscreen">Kem chống nắng</a>
            </div>
          </div>

          <div className="nav-item has-dropdown">
            <a href="/makeup">TRANG ĐIỂM <i className="fas fa-chevron-down"></i></a>
            <div className="dropdown-content">
              <a href="/makeup/lipstick">Son môi</a>
              <a href="/makeup/cushion">Cushion / Phấn nước</a>
              <a href="/makeup/mascara">Mascara / Kẻ mắt</a>
              <a href="/makeup/blush">Phấn má hồng</a>
            </div>
          </div>

          <div className="nav-item">
            <a href="/promotion">KHUYẾN MÃI</a>
          </div>
          <div className="nav-item">
            <a href="/blog">CẨM NÀNG BEAUTY</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
