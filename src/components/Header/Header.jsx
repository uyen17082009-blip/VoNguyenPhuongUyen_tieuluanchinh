import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
// import logoImage từ thư mục img
import logoImage from "../../img/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="aline-header">
      <div className="header-top">
        <div className="container header-content">
          <div className="logo" onClick={() => navigate("/")}>
            <img src={logoImage} alt="Aline Beauty Logo" className="logo-img" />
          </div>
          <nav className="nav-menu">
            <a href="/">TRANG CHỦ</a>
            <a href="/skincare">CHĂM SÓC DA</a>
            <a href="/makeup">TRANG ĐIỂM</a>
            <a href="/new-arrival">SẢN PHẨM MỚI</a>
          </nav>
          <div className="header-actions">
            <button className="icon-btn"><i className="far fa-user"></i></button>
            <button className="icon-btn"><i className="far fa-heart"></i></button>
            <button className="icon-btn cart-btn">
                <i className="fas fa-shopping-bag"></i>
                <span className="cart-count">2</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
