import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './Header.css';
import logoImage from '../../img/logo.png';

const Header = () => {
  const [currentLang, setCurrentLang] = useState('VN');
  const [cartCount, setCartCount] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Dữ liệu ngôn ngữ
  const trans = {
    VN: {
      freeShip: "Miễn phí giao hàng đơn từ 500k",
      hotline: "1800 1708",
      search: "Tìm kiếm mỹ phẩm...",
      login: "Đăng nhập",
      hello: "Chào",
      cart: "Giỏ hàng",
      logout: "Đăng xuất",
      account: "Tài khoản",
      menu: ["TRANG CHỦ", "CHĂM SÓC DA", "CHĂM SÓC TÓC", "TRANG ĐIỂM", "SẢN PHẨM MỚI", "KHUYẾN MÃI"]
    },
    EN: {
      freeShip: "Free shipping on orders over 500k",
      hotline: "1800 1708",
      search: "Search beauty products...",
      login: "Login",
      hello: "Hi",
      cart: "Cart",
      logout: "Logout",
      account: "Account",
      menu: ["HOME", "SKINCARE", "HAIRCARE", "MAKEUP", "NEW ARRIVALS", "PROMOTIONS"]
    }
  };

  const syncStore = useCallback(() => {
    const savedCart = localStorage.getItem('cart');
    setCartCount(savedCart ? JSON.parse(savedCart).reduce((sum, item) => sum + (item.quantity || 0), 0) : 0);
    const savedUser = localStorage.getItem('currentUser');
    setCurrentUser(savedUser ? JSON.parse(savedUser) : null);
  }, []);

  useEffect(() => {
    syncStore();
    window.addEventListener('storage', syncStore);
    window.addEventListener('cartUpdated', syncStore);
    window.addEventListener('userUpdated', syncStore);
    return () => {
      window.removeEventListener('storage', syncStore);
      window.removeEventListener('cartUpdated', syncStore);
      window.removeEventListener('userUpdated', syncStore);
    };
  }, [syncStore]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.dispatchEvent(new Event('userUpdated'));
    navigate('/');
  };

  const currentData = trans[currentLang];

  return (
    <header className="aline-header">
      {/* Top Bar */}
      <div className="header-top-bar">
        <div className="header-container">
          <div className="top-bar-left">
            <span>{currentData.freeShip}</span>
            <span className="lang-separator">|</span>
            <i className="fa-solid fa-phone-volume"></i> {currentData.hotline}
          </div>
          <div className="top-bar-right">
            <div className="language-picker">
              <span className={currentLang === 'VN' ? 'lang-btn active' : 'lang-btn'} onClick={() => setCurrentLang('VN')}>VN</span>
              <span className="lang-separator">|</span>
              <span className={currentLang === 'EN' ? 'lang-btn active' : 'lang-btn'} onClick={() => setCurrentLang('EN')}>EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="header-container">
          <div className="header-logo" onClick={() => navigate('/')}>
            <img src={logoImage} alt="Aline Beauty" />
          </div>

          <div className="header-search">
            <input type="text" placeholder={currentData.search} />
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>

          <div className="header-actions">
            <div className="action-group user-group">
              <i className="fa-regular fa-circle-user purple-icon"></i>
              {currentUser ? (
                <div className="user-logged-in">
                  <span className="action-label">{currentData.hello}, {currentUser.name || 'User'}</span>
                  <div className="dropdown-content shadow">
                    <Link to="/profile">{currentData.account}</Link>
                    <button onClick={handleLogout}>{currentData.logout}</button>
                  </div>
                </div>
              ) : (
                <Link to="/login" className="login-link action-label">{currentData.login}</Link>
              )}
            </div>

            <Link to="/cart" className="action-group header-cart">
              <div className="cart-icon-box">
                <i className="fa-solid fa-basket-shopping purple-icon"></i>
                <span className="cart-badge">{cartCount}</span>
              </div>
              <span className="action-label">{currentData.cart}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="header-nav">
        <div className="header-container">
          <ul className="nav-list">
            {currentData.menu.map((text, index) => (
              <li key={index} className="nav-item">
                <Link to="/" className="nav-link">{text} {index === 1 && <i className="fa-solid fa-chevron-down"></i>}</Link>
                {index === 1 && (
                  <ul className="submenu shadow">
                    <li><Link to="/">{currentLang === 'VN' ? 'Sữa Rửa Mặt' : 'Cleanser'}</Link></li>
                    <li><Link to="/">{currentLang === 'VN' ? 'Serum & Đặc Trị' : 'Serum & Treatment'}</Link></li>
                    <li><Link to="/">{currentLang === 'VN' ? 'Kem Dưỡng Ẩm' : 'Moisturizer'}</Link></li>
                    <li><Link to="/">{currentLang === 'VN' ? 'Mặt Nạ' : 'Mask'}</Link></li>
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
