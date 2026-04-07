import React from "react";
import "./Footer.css";
// import logoImage từ thư mục img
import logoImage from "../../img/logo.png";

const Footer = () => {
  return (
    <footer className="aline-footer">
      <div className="container footer-container">
        <div className="footer-section brand-section">
          {/* ĐÃ SỬA: logoImage thay vì logo */}
          <img src={logoImage} alt="Aline Logo" className="footer-logo" />
          <p className="brand-slogan">Đánh thức vẻ đẹp tự nhiên của bạn</p>
          <div className="social-links">
            <a href="/#"><i className="fab fa-facebook-f"></i></a>
            <a href="/#"><i className="fab fa-instagram"></i></a>
            <a href="/#"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>

        <div className="footer-section links-section">
          <h4>VỀ CHÚNG TÔI</h4>
          <ul>
            <li><a href="/about">Câu chuyện thương hiệu</a></li>
            <li><a href="/contact">Liên hệ</a></li>
            <li><a href="/blog">Cẩm nang làm đẹp</a></li>
          </ul>
        </div>

        <div className="footer-section links-section">
          <h4>HỖ TRỢ KHÁCH HÀNG</h4>
          <ul>
            <li><a href="/policy">Chính sách đổi trả</a></li>
            <li><a href="/shipping">Chính sách giao hàng</a></li>
            <li><a href="/faq">Câu hỏi thường gặp</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Aline Beauty. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
