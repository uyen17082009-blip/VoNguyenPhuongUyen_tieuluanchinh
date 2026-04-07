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
                        {/* SỬA: Đổi logo thành logoImage */}
                        <img src={logoImage} alt="Aline Beauty" className='footer-logo-img' />
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
                            <li><a href="/find-store">Tìm cửa hàng gần đây</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3 className="footer-column-title">Tin tức</h3>
                        <ul className="footer-links">
                            {/* Bạn có thể thêm link tin tức ở đây */}
                        </ul>
                    </div>
                </div>

                <div className="footer-right"> {/* Đã sửa lỗi chính tả ringht */}
                    <h3 className="footer-column-title">THEO DÕI CHÚNG TÔI</h3>
                    <div className="footer-social-icons"> {/* Đã sửa lỗi chính tả soccial */}
                        <a href="https://facebook.com" className='social-icon' aria-label='Facebook'>
                            <i className='fab fa-facebook-f'></i>
                        </a>
                        <a href="https://instagram.com" className='social-icon' aria-label='Instagram'>
                            <i className='fab fa-instagram'></i>
                        </a>
                        <a href="https://youtube.com" className='social-icon' aria-label='Youtube'>
                            <i className='fab fa-youtube'></i>
                        </a>
                        <a href="https://tiktok.com" className='social-icon' aria-label='Tiktok'>
                            <i className='fab fa-tiktok'></i>
                        </a>
                    </div>
                    <div className="footer-map">
                        {/* SỬA: style phải dùng {{ }} */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=..." 
                            width="100%" 
                            height="200" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <a
                            className='footer-map_link'
                            href="https://maps.app-goo-gl/6RuUrqKaYAFapPe57"
                            target="_blank"
                            rel='noopener noreferrer' // Đã sửa lỗi chính tả rel
                        >
                            Mở trong Google Maps
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-chat-icon" title='Chat với chúng tôi'>
                <i className='fas fa-comment-dots'></i>
            </div>
        </footer>
    );
};

export default Footer;
