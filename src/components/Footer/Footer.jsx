import React from 'react';
import './Footer.css';
import logoImage from '../../img/logo.png';

const Footer = ({ data }) => {
    return (
        <footer className="aline-footer">
            <div className="footer-purple-strip"></div>
            
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-left">
                        <div className="footer-logo">
                            <img src={logoImage} alt="Aline Beauty" className='footer-logo-img' />
                        </div>
                        <p className="footer-copyright">
                            {data.copyright}
                        </p>
                    </div>

                    <div className="footer-middle">
                        <div className="footer-column">
                            <h3 className="footer-column-title">{data.about}</h3>
                            <ul className="footer-links">
                                <li><a href="/origin">{data.origin}</a></li>
                                <li><a href="/services">{data.services}</a></li>
                                <li><a href="/careers">{data.careers}</a></li>
                                <li><a href="/contact">{data.contact}</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h3 className="footer-column-title">{data.stores}</h3>
                            <ul className="footer-links">
                                <li><a href="/find-store">{data.findStore}</a></li>
                                <li><a href="/policy">{data.policy}</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-right">
                        <h3 className="footer-column-title">{data.follow}</h3>
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
                                href="https://maps.google.com"
                                target="_blank"
                                rel='noopener noreferrer'
                            >
                                <i className="fas fa-location-dot"></i> {data.mapBtn}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-chat-button">
                <i className='fas fa-comment-dots'></i>
            </div>
        </footer>
    );
};

export default Footer;
