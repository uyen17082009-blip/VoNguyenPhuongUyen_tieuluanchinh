import React from "react";
import "./Footer.css";
import logoImage from "../../img/logo.png";

const Footer = () => {
  return (
    <footer className="aline-footer">
      <div className="container footer-content-wrapper">
        <div className="footer-left-side">
          {/* Logo footer cũng to hơn một chút cho đồng bộ */}
          <img src={logoImage} alt="Aline Logo" className="footer-logo" style={{height: '60px'}} />
          <p className="footer-slogan">Sắc đẹp khởi nguồn từ sự tự tin.</p>
          
          <div className="contact-info-list">
            <p><i className="fas fa-map-marker-alt"></i> 65 Lê Lợi, Quận 1, TP. Hồ Chí Minh</p>
            <p><i className="fas fa-phone-alt"></i> 1900 6750</p>
          </div>

          <div className="map-embed">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.458231575787!2d106.69808381119561!3d10.77614008932759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4728d40e1b%3A0x8192809f1d0344d3!2zNjUgTMSqIEzhu6NpLCBC4bq_biBOZ2jDqSwgUXXhuq1uIDEsIEjhu5MgQ2jDrSBNaW5o!5e0!3m2!1svi!2s!4v1712498000000!5m2!1svi!2s" 
                width="100%" 
                height="180" 
                style={{border:0, borderRadius: '15px'}} 
                allowFullScreen="" 
                loading="lazy">
            </iframe>
          </div>
        </div>

        <div className="footer-right-side contact-form-column">
          <h3 className="footer-title">GỬI YÊU CẦU CHO ALINE</h3>
          <div className="aline-contact-form">
            <div className="form-row">
              <input type="text" placeholder="Tên của bạn" className="pastel-input" />
              <input type="email" placeholder="Email" className="pastel-input" />
            </div>
            <textarea placeholder="Bạn cần Aline tư vấn gì ạ?" className="pastel-input" rows="3"></textarea>
            <button type="submit" className="aline-submit-btn">GỬI THÔNG TIN</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom-strip">
        <p>© 2026 Aline Beauty - Chăm sóc vẻ đẹp Việt</p>
      </div>
    </footer>
  );
};

export default Footer;
