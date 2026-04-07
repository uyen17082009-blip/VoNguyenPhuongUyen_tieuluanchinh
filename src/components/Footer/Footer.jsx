import React from 'react';
import './Footer.css';
import logoImage from '../../img/logo.png'; // Đã sửa tên biến cho khớp với import

const Footer = () => {
    return (
        <footer className="aline-footer">
            {/* Thanh màu tím dải trên cùng của footer */}
            <div className="footer-purple-strip"></div>
            
            <div className="footer-container">
                <div className="footer-content">
                    {/* Cột trái: Logo & Copyright */}
                    <div className="footer-left">
                        <div className="footer-logo">
                            <img src={logoImage} alt="Aline Beauty" className='footer-logo-img' />
                        </div>
                        <p className="footer-copyright">
                            ©2026 Aline Beauty. <br/> All rights reserved
                        </p>
                    </div>

                    {/* Cột giữa: Các liên kết */}
                    <div className="footer-middle">
                        <div className="footer-column">
                            <h3 className="footer-column-title">Về Aline Beauty</h3>
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
                    </div>

                    {/* Cột phải: Social & Map */}
                    <div className="footer-right">
                        <h3 className="footer-column-title">THEO DÕI CHÚNG TÔI</h3>
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
                             {/* Fix lỗi style="border:0" trong React phải dùng {{ border: 0 }} */}
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9244039209105!2d105.81645407503176!3d21.03571058061543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab145bf51903%3A0xdc771536965157ba!2zTmjDoCBIw6F0IEzhu5tuIEjDoCBO4buZaQ!5e0!3m2!1svi!2svn!4v1700000000000!5m2!1svi!2svn" 
                                width="100%" 
                                height="150" 
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
                                <i className="fas fa-map-marker-alt"></i> Mở trong Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nút Chat nổi */}
            <div className="footer-chat-icon" title='Chat với chúng tôi'>
                <i className='fas fa-comment-dots'></i>
            </div>
        </footer>
    );
};

export default Footer;
