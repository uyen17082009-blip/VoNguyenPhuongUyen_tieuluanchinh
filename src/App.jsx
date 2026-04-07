import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [lang, setLang] = useState('VN'); // Trạng thái ngôn ngữ mặc định

  // Kho từ điển gộp chung
  const translations = {
    VN: {
      freeShip: "Miễn phí giao hàng đơn từ 500k",
      search: "Tìm kiếm mỹ phẩm...",
      login: "Đăng nhập",
      cart: "Giỏ hàng",
      menu: ["TRANG CHỦ", "CHĂM SÓC DA", "CHĂM SÓC TÓC", "TRANG ĐIỂM", "SẢN PHẨM MỚI", "KHUYẾN MÃI"],
      skincareSub: ["Sữa Rửa Mặt", "Serum & Đặc Trị", "Kem Dưỡng Ẩm", "Chống Nắng", "Mặt Nạ"],
      about: "Về Aline Beauty",
      store: "Hệ thống cửa hàng",
      copyright: "©2026 Aline Beauty. Tận tâm chăm sóc vẻ đẹp Việt. All rights reserved."
    },
    EN: {
      freeShip: "Free shipping on orders over 500k",
      search: "Search products...",
      login: "Login",
      cart: "Cart",
      menu: ["HOME", "SKINCARE", "HAIRCARE", "MAKEUP", "NEW ARRIVALS", "PROMOTIONS"],
      skincareSub: ["Cleanser", "Serum & Treatment", "Moisturizer", "Sunscreen", "Mask"],
      about: "About Aline Beauty",
      store: "Store System",
      copyright: "©2026 Aline Beauty. Dedicated to Vietnamese beauty. All rights reserved."
    }
  };

  return (
    <div>
      {/* Truyền biến lang, hàm setLang và từ điển tương ứng xuống Header */}
      <Header lang={lang} setLang={setLang} t={translations[lang]} />
      
     

      {/* Truyền từ điển tương ứng xuống Footer */}
      <Footer t={translations[lang]} />
    </div>
  );
}

export default App;
