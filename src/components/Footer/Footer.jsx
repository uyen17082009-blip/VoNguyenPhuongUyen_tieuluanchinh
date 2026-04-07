import React from 'react';
import './Footer.css';
import logoImage from '../../img/logo.png';

const Footer = () => {
  return (
    <footer className="highlands-footer">
      <div className="footer-green-strip"></div>
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            {/* ĐÃ SỬA: Phải là logoImage giống dòng import ở trên */}
            <img src={logoImage} alt="Aline Beauty" className="footer-logo-img" />
          </div>
          <p className="footer-copyright">
            ©2026 Aline Beauty. All rights reserved
          </p>
        </div>

        <div className="footer-middle">
          <div className="footer-column">
            <h3 className="footer-column-title">Về AlineBeauty</h3>
            <ul className="footer-links">
              <li><a href="/">Trang chủ</a></li>
              <li><a href="/ve-chung-toi">Về chúng tôi</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-right">
          <h3 className="footer-column-title">THEO DÕI CHÚNG TÔI</h3>
          <div className="footer-social-icons">
            <a href="https://facebook.com" className="social-icon">Facebook</a>
            <a href="https://instagram.com" className="social-icon">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
