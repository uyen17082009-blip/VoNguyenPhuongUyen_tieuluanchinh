import React from 'react';
import './Footer.css';
import logoImage from '../../img/logo.png';

const Footer = () => {
  return (
    <footer className="aline-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={logoImage} alt="Aline Logo" className="footer-logo-img" />
          <p className="footer-intro">Chuyên cung cấp mỹ phẩm chính hãng, chăm sóc vẻ đẹp Việt với tình yêu và sự tận tâm.</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>

        <div className="footer-contact">
          <h4 className="footer-title">LIÊN HỆ</h4>
          <p><i className="fas fa-map-marker-alt"></i> 17/8 Đường Aline, Quận 1, TP. HCM</p>
          <p><i className="fas fa-phone-alt"></i> 1800 1708</p>
          <p><i className="fas fa-envelope"></i> support@alinebeauty.vn</p>
        </div>

        <div className="footer-map">
          <h4 className="footer-title">CỬA HÀNG</h4>
          <div className="map-box">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.458231575787!2d106.69808381119561!3d10.77614008932759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4728d40e1b%3A0x8192809f1d0344d3!2zNjUgTMSqIEzhu6NpLCBC4bq_biBOZ2jDqSwgUXXhuq1uIDEsIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1712498000000!5m2!1svi!2s" 
                width="100%" height="150" style={{border:0, borderRadius: '8px'}} 
                allowFullScreen="" loading="lazy">
             </iframe>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Aline Beauty. Thiết kế bởi Phương Uyên với tone hồng Pastel ✨</p>
      </div>
    </footer>
  );
};

export default Footer;
