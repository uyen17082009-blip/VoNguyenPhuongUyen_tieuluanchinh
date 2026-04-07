import React from 'react';
import './Footer.css';
import logoImage from '../../img/logo.png';

const Footer = ({ t }) => {
  return (
    <footer className="aline-footer">
      <div className="footer-purple-strip"></div>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <img src={logoImage} alt="Logo" className='footer-logo-img' />
            <p className="footer-copyright">{t.copyright}</p>
          </div>

          <div className="footer-middle">
            <div className="footer-column">
              <h3 className="footer-column-title">{t.about}</h3>
              <ul className="footer-links">
                {t.links.map((link, i) => <li key={i}><a href="#">{link}</a></li>)}
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="footer-column-title">{t.store}</h3>
              <ul className="footer-links">
                <li><a href="#">Tìm cửa hàng</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-right">
            <h3 className="footer-column-title">{t.follow}</h3>
            <div className="footer-social-icons">
              <a href="#"><i className='fab fa-facebook-f'></i></a>
              <a href="#"><i className='fab fa-instagram'></i></a>
              <a href="#"><i className='fab fa-tiktok'></i></a>
            </div>
            <div className="footer-map-container">
              <iframe src="about:blank" width="100%" height="110" style={{border:0}} title="map"></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
