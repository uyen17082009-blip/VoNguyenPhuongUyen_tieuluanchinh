import React from "react";
import "./Footer.css";
import logoImage from "../../img/logo.png";

const Footer = () => {
  return (
    <footer className="aline-footer">
      <div className="container footer-grid">
        {/* Cột 1: Giới thiệu */}
        <div className="footer-col">
          <img src={logoImage} alt="Aline Logo" className="footer-logo" />
          <p className="footer-desc">
            Aline Beauty - Nơi tôn vinh vẻ đẹp thuần khiết và tự nhiên của phụ nữ Việt Nam.
          </p>
          <div className="social-group">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Cột 2: Bản đồ (Wow hơn) */}
        <div className="footer-col">
          <h4 className="footer-title">CỬA HÀNG CỦA CHÚNG TÔI</h4>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.497441221764!2d106.69238307480484!3d10.773155789375547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f39294e777f%3A0x6e8e888a7c181977!2sSaigon%20Centre!5e0!3m2!1svi!2s!4v1712490000000!5m2!1svi!2s" 
              width="100%" 
              height="150" 
              style={{ border: 0, borderRadius: "10px" }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
          <p className="address-text"><i className="fas fa-map-marker-alt"></i> 65 Lê Lợi, Q.1, TP. HCM</p>
        </div>

        {/* Cột 3: Đăng ký nhận tin */}
        <div className="footer-col">
          <h4 className="footer-title">BẢN TIN</h4>
          <p>Nhận ngay thông báo về sản phẩm mới nhất.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Email của bạn..." />
            <button>GỬI</button>
          </div>
          <div className="payment-icons">
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fas fa-money-bill-wave"></i>
          </div>
        </div>
      </div>
      <div className="footer-copy">
        <p>© 2026 Aline Beauty. Made with ❤️ for beauty.</p>
      </div>
    </footer>
  );
};

export default Footer;
