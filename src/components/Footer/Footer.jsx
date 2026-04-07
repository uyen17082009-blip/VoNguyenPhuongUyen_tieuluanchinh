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
            {/* SỬA: logoImage thay vì logo */}
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
              <li><a href="/origin">Nguồn gốc</a></li>
              <li><a href="/services">Dịch vụ</a></li>
              <li><a href="/careers">Nghề nghiệp</a></li>
              <li><a href="/contact">Liên hệ</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-column-title">Hệ thống cửa hàng</h3>
            <ul className="footer-links">
              <li><a href="/find-store">Tìm cửa hàng</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-right">
          <h3 className="footer-column-title">THEO DÕI CHÚNG TÔI</h3>
          <div className="footer-social-icons">
            <a href="https://facebook.com" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com" className="social-icon"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="footer-map" style={{ marginTop: '10px' }}>
            <a
              href="https://maps.app.goo.gl/6RuUrqKaYAFapPe57"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-map_link"
            >
              Mở trong Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
