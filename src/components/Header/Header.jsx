import React from 'react';
import './Header.css';
import logoImage from '../../img/logo.png';

const Header = ({ lang, setLang, t }) => {
  return (
    <header className="aline-header">
      <div className="header-top-bar">
        <div className="header-container">
          <div className="top-bar-left">
            <span>{t.freeShip}</span>
            <span className="divider">|</span>
            <i className="fa-solid fa-phone"></i> 1800 1708
          </div>
          <div className="top-bar-right">
            <div className="language-picker">
              <span className={lang === 'VN' ? 'active' : ''} onClick={() => setLang('VN')}>VN</span>
              <span className="divider">|</span>
              <span className={lang === 'EN' ? 'active' : ''} onClick={() => setLang('EN')}>EN</span>
            </div>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="header-container">
          <div className="header-logo"><img src={logoImage} alt="Logo" /></div>
          <div className="header-search">
            <input type="text" placeholder={t.search} />
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <div className="header-actions">
            <div className="action-item">
              <i className="fa-regular fa-circle-user purple-icon"></i>
              <span className="action-label">{t.login}</span>
            </div>
            <div className="action-item header-cart">
              <div className="cart-icon-wrapper">
                <i className="fa-solid fa-basket-shopping purple-icon"></i>
                <span className="cart-badge">0</span>
              </div>
              <span className="action-label">{t.cart}</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="header-nav">
        <div className="header-container">
          <ul className="nav-list">
            {t.menu.map((text, index) => (
              <li key={index} className="nav-item">
                <a href="#" className="nav-link">
                  {text} {index === 1 && <i className="fa-solid fa-chevron-down arrow-icon"></i>}
                </a>
                {index === 1 && (
                  <ul className="submenu">
                    {t.skincareSub.map((sub, i) => <li key={i}><a href="#">{sub}</a></li>)}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
