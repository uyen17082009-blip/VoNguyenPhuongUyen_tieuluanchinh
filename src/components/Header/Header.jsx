import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logoImage from '../../img/logo.png';

const Header = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const updateCartCount = () => {
      const savedCart = localStorage.getItem('cart');
      if (!savedCart) {
        setCartCount(0);
      } else {
        try {
          const cart = JSON.parse(savedCart);
          const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
          setCartCount(totalItems);
        } catch (error) {
          setCartCount(0);
        }
      }
    };

    const updateCurrentUser = () => {
      const savedUser = localStorage.getItem('currentUser');
      if (!savedUser) {
        setCurrentUser(null);
        return;
      }
      try {
        const user = JSON.parse(savedUser);
        setCurrentUser(user);
      } catch (error) {
        setCurrentUser(null);
      }
    };

    updateCartCount();
    updateCurrentUser();

    window.addEventListener('cartUpdated', updateCartCount);
    window.addEventListener('userUpdated', updateCurrentUser);
    window.addEventListener('storage', () => {
      updateCartCount();
      updateCurrentUser();
    });

    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
      window.removeEventListener('userUpdated', updateCurrentUser);
    };
  }, []);

  const skincareItems = [
    { text: "Sữa Rửa Mặt", href: "/cham-soc-da/sua-rua-mat" },
    { text: "Serum & Đặc Trị", href: "/cham-soc-da/serum" },
    { text: "Kem Dưỡng Ẩm", href: "/cham-soc-da/kem-duong" },
    { text: "Chống Nắng", href: "/cham-soc-da/chong-nang" },
  ];

  const makeupItems = [
    { text: "Son Môi", href: "/trang-diem/son-moi" },
    { text: "Phấn Nước / Cushion", href: "/trang-diem/cushion" },
    { text: "Trang Điểm Mắt", href: "/trang-diem/mat" },
  ];

  return (
    <header className="aline-header">
      {/* Top Bar lấp lánh */}
      <div className="header-top-bar">
        <div className="container header-top-content">
          <div className="delivery-info">
            <i className="fas fa-truck"></i> <span>Giao hàng miễn phí toàn quốc</span>
          </div>
          <div className="contact-hotline">
            <i className="fas fa-phone-alt"></i> <span>Hotline: 1800 1708</span>
          </div>
        </div>
      </div>

      {/* Main Header với Logo To */}
      <div className="container header-main">
        <div className="header-logo" onClick={() => navigate('/')}>
          <img src={logoImage} alt="Aline Beauty Logo" className="main-logo-img" />
        </div>

        <div className="header-search-bar">
          <input type="text" placeholder="Bạn muốn tìm mỹ phẩm gì hôm nay?..." />
          <button className="search-submit"><i className="fas fa-search"></i></button>
        </div>

        <div className="header-actions">
          <div className="user-account" onClick={() => navigate('/login')}>
            <i className="far fa-user-circle"></i>
            <span>{currentUser ? (currentUser.name || currentUser.user) : 'Đăng nhập'}</span>
          </div>
          
          <div className="header-cart" onClick={() => navigate('/cart')}>
            <div className="cart-icon-wrapper">
              <i className="fas fa-shopping-bag"></i>
              <span className="cart-badge-count">{cartCount}</span>
            </div>
            <span>Giỏ hàng</span>
          </div>
        </div>
      </div>

      {/* Navigation với hiệu ứng sổ xuống (Dropdown) */}
      <nav className="header-nav">
        <div className="container nav-container">
          <a href="/" className="nav-link-item">TRANG CHỦ</a>

          {/* CHĂM SÓC DA Dropdown */}
          <div className="nav-item-dropdown" 
               onMouseEnter={() => setHoveredMenu('skincare')}
               onMouseLeave={() => setHoveredMenu(null)}>
            <a href="/cham-soc-da" className="nav-link-item">CHĂM SÓC DA <i className="fas fa-chevron-down icon-small"></i></a>
            {hoveredMenu === 'skincare' && (
              <div className="dropdown-panel">
                {skincareItems.map((item, idx) => (
                  <a key={idx} href={item.href} className="dropdown-link">{item.text}</a>
                ))}
              </div>
            )}
          </div>

          <a href="/cham-soc-toc" className="nav-link-item">CHĂM SÓC TÓC</a>

          {/* TRANG ĐIỂM Dropdown */}
          <div className="nav-item-dropdown" 
               onMouseEnter={() => setHoveredMenu('makeup')}
               onMouseLeave={() => setHoveredMenu(null)}>
            <a href="/trang-diem" className="nav-link-item">TRANG ĐIỂM <i className="fas fa-chevron-down icon-small"></i></a>
            {hoveredMenu === 'makeup' && (
              <div className="dropdown-panel">
                {makeupItems.map((item, idx) => (
                  <a key={idx} href={item.href} className="dropdown-link">{item.text}</a>
                ))}
              </div>
            )}
          </div>

          <a href="/san-pham-moi" className="nav-link-item">SẢN PHẨM MỚI</a>
          <a href="/khuyen-mai" className="nav-link-item">KHUYẾN MÃI</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
