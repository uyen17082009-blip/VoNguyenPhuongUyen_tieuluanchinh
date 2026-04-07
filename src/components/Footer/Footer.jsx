import React from "react";
import "./Footer.css";
// import logoImage từ thư mục img
import logoImage from "../../img/logo.png";

const Footer = () => {
  return (
    <footer className="aline-footer">
      <div className="container footer-content-wrapper">
        
        {/* Phần bên trái: Thông tin và Bản đồ */}
        <div className="footer-left-side">
          {/* ĐÃ SỬA: Phải là logoImage giống dòng import ở trên để không bị trắng màn hình */}
          <img src={logoImage} alt="Aline Logo" className="footer-logo" />
          <p className="footer-slogan">Nơi tôn vinh vẻ đẹp thuần khiết và tự nhiên của bạn.</p>
          
          <div className="contact-info-list">
            <p><i className="fas fa-map-marker-alt"></i> Tầng 6, toà nhà Ladeco, 266 Đội Cấn, Hà Nội</p>
            <p><i className="fas fa-phone-alt"></i> 1900 6750</p>
            <p><i className="far fa-envelope"></i> <a href="mailto:support@aline.vn">support@aline.vn</a></p>
          </div>

          <div className="map-embed">
            {/* Tích hợp Google Maps */}
            <iframe 
                src="http://googleusercontent.com/maps.google.com/5" 
                width="100%" 
                height="150" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy">
            </iframe>
          </div>
        </div>

        {/* Phần bên phải: Form liên hệ (Theo cấu trúc ảnh reference 2) */}
        <div className="footer-right-side contact-form-column">
          <h3 className="footer-title">LIÊN HỆ VỚI CHÚNG TÔI</h3>
          <p>Bạn có câu hỏi hoặc cần hỗ trợ? Điền thông tin vào form dưới đây.</p>
          <div className="aline-contact-form">
            <div className="form-row">
              <input type="text" placeholder="Họ tên" className="pastel-input" />
              <input type="email" placeholder="Email" className="pastel-input" />
            </div>
            <textarea placeholder="Nội dung" className="pastel-input" rows="4"></textarea>
            <div className="form-submit">
              <button type="submit" className="aline-submit-btn">GỬI NGAY</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-strip">
        <div className="container">
          <p>&copy; 2026 Aline Beauty. Made with love for your beauty.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
