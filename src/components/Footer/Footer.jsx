
import React, { useState, useEffect } from 'react';
import './Footer.css';
import logoImage from '../../img/logo.png';

const Footer = () => {

    return (
        <footer className="highlands-footer">
            <div className="footer-green-strip"></div>
            <div className="footer-content">
                <div className="footer-left">
                    <div className="footer-logo">
                        <img src={logo} alt="Highlands Coffee" className='footer-logo-img' />
                    </div>
                    <p className="footer-copyright">
                        ©2026 Aline Beauty. All rights reserved
                    </p>
                </div>
                <div className="footer-middle">
                    <div className="footer-column">
                        <h3 className="footer-column-title">Về AlineBeauty</h3>
                        <ul className="footer-links">
                            <li><a href="/orgin">Nguồn gốc</a></li>
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
                        </ul>
                    </div>
                </div>
                <div className="footer-ringht">
                    <h3 className="footer-column-title">THEO DÕI CHÚNG TÔI</h3>
                    <div className="footer-soccial-icons">
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
                        <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d501521.4676604829!2d106.6782761!3d10.8772236!3m2!1i1024!2i768!4f13.1!2m1!1zdHLGsOG7nW5nIGNhbyDEkeG6s25nIGtpbmggdOG6vyBr4bu5IHRodeG6rXQgdHAgaGNt!5e0!3m2!1svi!2s!4v1775448862546!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <a
                            className='footer-map_link'
                            href="https://maps.app-goo-gl/6RuUrqKaYAFapPe57"
                            target="_blank"
                            rel='nooperner noreferrer'
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
