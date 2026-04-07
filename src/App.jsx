import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [lang, setLang] = useState('VN');


  const t = {
    VN: {
      // Header
      freeShip: "Miễn phí giao hàng đơn từ 500k",
      search: "Tìm kiếm mỹ phẩm...",
      login: "Đăng nhập",
      cart: "Giỏ hàng",
      menu: ["TRANG CHỦ", "CHĂM SÓC DA", "CHĂM SÓC TÓC", "TRANG ĐIỂM", "SẢN PHẨM MỚI", "KHUYẾN MÃI"],
      skincareSub: ["Sữa Rửa Mặt", "Serum & Đặc Trị", "Kem Dưỡng Ẩm", "Chống Nắng", "Mặt Nạ"],
      // Footer
      about: "Về Aline Beauty",
      links: ["Nguồn gốc", "Dịch vụ", "Nghề nghiệp", "Liên hệ"],
      store: "Hệ thống cửa hàng",
      follow: "THEO DÕI CHÚNG TÔI",
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
      links: ["Origin", "Services", "Careers", "Contact"],
      store: "Store System",
      follow: "FOLLOW US",
      copyright: "©2026 Aline Beauty. Dedicated to Vietnamese beauty. All rights reserved."
    }
  };

  return (
    <div className="App">
      <Header lang={lang} setLang={setLang} t={t[lang]} />
      
      <Footer t={t[lang]} />
    </div>
  );
}

export default App;
