import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './Header.css';
import logoImage from '../../img/logo.png';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Hàm cập nhật dữ liệu từ LocalStorage
  const syncStore = useCallback(() => {
    // Cập nhật giỏ hàng
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const cart = JSON.parse(savedCart);
        const total = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
        setCartCount(total);
      } catch (e) {
        setCartCount(0);
      }
    } else {
      setCartCount(0);
    }

    // Cập nhật User
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (e) {
        setCurrentUser(null);
      }
    } else {
      setCurrentUser(null);
    }
  }, []);

  useEffect(() => {
    syncStore();

    // Lắng nghe các sự kiện tùy chỉnh và sự kiện thay đổi storage từ tab khác
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
      {/* Top Bar: Hotline & Thông tin chung */}
      <div className="header-top-bar">
        <div className="header-container">
          <div className="top-bar-left">
            <span>Miễn phí giao hàng đơn từ 500k</span>
            <span className="separator">|</span>
            <i className="fas fa-phone-alt"></i> 1800 1708
          </div>
          
          <div className="top-bar-right">
            <div className="language-picker">
              <span className="active">VN</span> | <span>EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header: Logo, Search, Actions */}
      <div className="header-main">
        <div className="header-container">
          <div className="header-logo" onClick={() => navigate('/')}>
            <img src={logoImage} alt="Aline Beauty" />
          </div>

          <div className="header-search">
            <input type="text" placeholder="Tìm kiếm sản phẩm..." />
            <button><i className="fas fa-search"></i></button>
          </div>

          <div className="header-actions">
            <div className="user-account-group">
              <i className="fas fa-user-circle"></i>
              {currentUser ? (
                <div className="user-logged-in">
                  <span className="user-name">Chào, {currentUser.name || 'Bạn'}</span>
                  <div className="user-dropdown">
                    <Link to="/profile">Tài khoản</Link>
                    <Link to="/orders">Đơn hàng</Link>
                    <button onClick={handleLogout}>Đăng xuất</button>
                  </div>
                </div>
              ) : (
                <Link to="/login" className="login-link">Đăng nhập / Đăng ký</Link>
              )}
            </div>

            <Link to="/cart" className="header-cart">
              <div className="cart-icon-wrapper">
                <i className="fas fa-shopping-bag"></i>
                <span className="cart-badge">{cartCount}</span>
              </div>
              <span className="cart-label">Giỏ hàng</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="header-nav">
        <div className="header-container">
          <ul className="nav-list">
            {menuItems.map((item, index) => (
              <li key={index} className={`nav-item ${item.submenu ? 'has-submenu' : ''}`}>
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.text}
                  {item.submenu && <i className="fas fa-chevron-down icon-arrow"></i>}
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
