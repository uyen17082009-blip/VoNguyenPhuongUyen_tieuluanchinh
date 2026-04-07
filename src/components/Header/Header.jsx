import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './Header.css';
import logoImage from '../../img/logo.png';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const syncStore = useCallback(() => {
    // Cập nhật giỏ hàng
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const cart = JSON.parse(savedCart);
        const total = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
        setCartCount(total);
      } catch (e) { setCartCount(0); }
    } else { setCartCount(0); }

    // Cập nhật User
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      try { setCurrentUser(JSON.parse(savedUser)); } 
      catch (e) { setCurrentUser(null); }
    } else { setCurrentUser(null); }
  }, []);

  useEffect(() => {
    syncStore();
    window.addEventListener('cartUpdated', syncStore);
    window.addEventListener('userUpdated', syncStore);
    window.addEventListener('storage', syncStore);
    return () => {
      window.removeEventListener('cartUpdated', syncStore);
      window.removeEventListener('userUpdated', syncStore);
      window.removeEventListener('storage', syncStore);
    };
  }, [syncStore]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.dispatchEvent(new Event('userUpdated'));
    navigate('/');
  };

  const menuItems = [
    { text: "TRANG CHỦ", path: "/" },
    { 
      text: "CHĂM SÓC DA", 
      path: "/cham-soc-da",
      submenu: [
        { text: "Sữa Rửa Mặt", path: "/cham-soc-da/sua-rua-mat" },
        { text: "Serum & Đặc Trị", path: "/cham-soc-da/serum" },
        { text: "Kem Dưỡng Ẩm", path: "/cham-soc-da/kem-duong" },
        { text: "Chống Nắng", path: "/cham-soc-da/chong-nang" },
        { text: "Mặt Nạ", path: "/cham-soc-da/mat-na" },
      ]
    },
    { text: "CHĂM SÓC TÓC", path: "/cham-soc-toc" },
    { text: "TRANG ĐIỂM", path: "/trang-diem" },
    { text: "SẢN PHẨM MỚI", path: "/san-pham-moi" },
    { text: "KHUYẾN MÃI", path: "/khuyen-mai" },
  ];

  return (
    <header className="aline-header">
      {/* Top Bar */}
      <div className="header-top-bar">
        <div className="header-container">
          <div className="top-bar-left">
            <span>Miễn phí giao hàng đơn từ 500k</span>
            <span className="separator">|</span>
            <i className="fa-solid fa-phone-volume"></i> 1800 1708
          </div>
          <div className="top-bar-right">
            <div className="language-picker">
              <span className="active">VN</span> | <span>EN</span>
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
            <input type="text" placeholder="Tìm kiếm mỹ phẩm..." />
            <button><i className="fas fa-search"></i></button>
          </div>

          <div className="header-actions">
            {/* User Section */}
            <div className="user-account-group">
              <i className="fa-regular fa-circle-user icon-main"></i>
              <div className="user-info">
                {currentUser ? (
                  <div className="user-logged-in">
                    <span className="user-name">Chào, {currentUser.name || 'Bạn'}</span>
                    <div className="user-dropdown">
                      <Link to="/profile">Tài khoản</Link>
                      <button onClick={handleLogout}>Đăng xuất</button>
                    </div>
                  </div>
                ) : (
                  <Link to="/login" className="login-link">Đăng nhập</Link>
                )}
              </div>
            </div>

            {/* Cart Section */}
            <Link to="/cart" className="header-cart">
              <div className="cart-icon-wrapper">
                <i className="fa-solid fa-bag-shopping icon-main"></i>
                <span className="cart-badge">{cartCount}</span>
              </div>
              <div className="cart-text">
                <span className="cart-label">Giỏ hàng</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Nav Section */}
      <nav className="header-nav">
        <div className="header-container">
          <ul className="nav-list">
            {menuItems.map((item, index) => (
              <li key={index} className={`nav-item ${item.submenu ? 'has-submenu' : ''}`}>
                <Link to={item.path} className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}>
                  {item.text}
                  {item.submenu && <i className="fa-solid fa-chevron-down arrow-icon"></i>}
                </Link>
                {item.submenu && (
                  <ul className="submenu">
                    {item.submenu.map((sub, idx) => (
                      <li key={idx}>
                        <Link to={sub.path}>{sub.text}</Link>
                      </li>
                    ))}
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
