import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logoImage from "../../img/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="aline-header">
      {/* Top Bar thông báo */}
      <div className="header-announcement">
        <p>✨ Giảm giá 20% cho đơn hàng đầu tiên - Nhập mã: ALINEBEAUTY ✨</p>
      </div>

      <div className="container">
        <div className="header-main">
          {/* Logo */}
          <div className="logo-container" onClick={() => navigate("/")}>
            <img src={logoImage} alt="Aline Beauty" className="logo-img" />
          </div>

          {/* Navigation */}
          <nav className="nav-menu">
            <a href="/">TRANG CHỦ</a>
            <div className="dropdown">
              <a href="/skincare">CHĂM SÓC DA <i className="fas fa-chevron-down"></i></a>
            </div>
            <a href="/makeup">TRANG ĐIỂM</a>
            <a href="/promotion">KHUYẾN MÃI</a>
            <a href="/about">VỀ CHÚNG TÔI</a>
          </nav>

          {/* Actions */}
          <div className="header-actions">
            <div className={`search-box ${isSearchOpen ? "open" : ""}`}>
              <input type="text" placeholder="Tìm sản phẩm..." />
              <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
                <i className="fas fa-search"></i>
              </button>
            </div>
            <button className="action-btn"><i className="far fa-heart"></i></button>
            <button className="action-btn cart-btn">
              <i className="fas fa-shopping-bag"></i>
              <span className="badge">0</span>
            </button>
            <button className="login-btn">ĐĂNG NHẬP</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
