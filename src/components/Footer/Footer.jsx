import React from 'react';
import './Footer.css';
import logoImage from '../../img/logo.png';

const Footer = () => {
    return (
        <footer className="aline-footer">
            <div className="footer-purple-strip"></div>
            
            <div className="footer-container">
                <div className="footer-content">
                    {/* Cột trái: Logo lớn & Bản quyền */}
                    <div className="footer-left">
                        <div className="footer-logo">
                            <img src={logoImage} alt="Aline Beauty" className='footer-logo-img' />
                        </div>
                        <p className="footer-copyright">
                            ©2026 Aline Beauty. <br/> 
                            Tận tâm chăm sóc vẻ đẹp Việt. <br/>
                            All rights reserved.
                        </p>
                    </div>

                    {/* Cột giữa: Các liên kết hệ thống */}
                    <div className="footer-middle">
                        <div className="footer-column">
                            <h3 className="footer-column-title">Về Aline Beauty</h3>
                            <ul className="footer-links">
                                <li><a href="/origin">Nguồn gốc thương hiệu</a></li>
                                <li><a href="/services">Dịch vụ khách hàng</a></li>
                                <li><a href="/careers">Cơ hội nghề nghiệp</a></li>
                                <li><a href="/contact">Liên hệ hỗ trợ</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3 className="footer-column-title">Hệ thống cửa hàng</h3>
                            <ul className="footer-links">
                                <li><a href="/find-store">Tìm cửa hàng gần bạn</a></li>
                                <li><a href="/policy">Chính sách đổi trả</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Cột phải: Mạng xã hội & Bản đồ */}
                    <div className="footer-right">
                        <h3 className="footer-column-title">KẾT NỐI VỚI CHÚNG TÔI</h3>
                        <div className="footer-social-icons">
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
                        
                        <div className="footer-map-container">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.460232428333!2d106.6647915757359!3d10.776019359200057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edca3161047%3A0xc3f94689456209d6!2zMzg1IFTDtCBIaeG6v24gVGjDoG5oLCBQaMaw4budbmcgMTQsIFF14bqtbiAxMCwgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s" 
                                width="100%" 
                                height="120" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                title="Aline Beauty Map"
                            ></iframe>
                            <a
                                className='footer-map-link'
                                href="https://maps.app.goo.gl/6RuUrqKaYAFapPe57"
                                target="_blank"
                                rel='noopener noreferrer'
                            >
                                <i className="fas fa-location-dot"></i> Xem trên Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nút Chat tròn */}
            <div className="footer-chat-button">
                <i className='fas fa-comment-dots'></i>
            </div>
        </footer>
    );
};

export default Footer;
