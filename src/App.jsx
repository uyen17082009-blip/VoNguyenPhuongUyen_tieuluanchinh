import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [currentLang, setCurrentLang] = useState('VN');

  // Kho dữ liệu tổng cho cả trang
  const trans = {
    VN: {
      header: {
        freeShip: "Miễn phí giao hàng đơn từ 500k",
        search: "Tìm kiếm mỹ phẩm...",
        login: "Đăng nhập",
        hello: "Chào",
        cart: "Giỏ hàng",
        menu: ["TRANG CHỦ", "CHĂM SÓC DA", "CHĂM SÓC TÓC", "TRANG ĐIỂM", "SẢN PHẨM MỚI", "KHUYẾN MÃI"],
        skincareSub: ["Sữa Rửa Mặt", "Serum & Đặc Trị", "Kem Dưỡng Ẩm", "Mặt Nạ"]
      },
      footer: {
        about: "Về Aline Beauty",
        origin: "Nguồn gốc thương hiệu",
        services: "Dịch vụ khách hàng",
        careers: "Cơ hội nghề nghiệp",
        contact: "Liên hệ hỗ trợ",
        stores: "Hệ thống cửa hàng",
        findStore: "Tìm cửa hàng gần bạn",
        policy: "Chính sách đổi trả",
        follow: "KẾT NỐI VỚI CHÚNG TÔI",
        mapBtn: "Xem trên Google Maps",
        copyright: <>©2026 Aline Beauty. <br/> Tận tâm chăm sóc vẻ đẹp Việt. <br/> All rights reserved.</>
      }
    },
    EN: {
      header: {
        freeShip: "Free shipping on orders over 500k",
        search: "Search products...",
        login: "Login",
        hello: "Hi",
        cart: "Cart",
        menu: ["HOME", "SKINCARE", "HAIRCARE", "MAKEUP", "NEW ARRIVALS", "PROMOTIONS"],
        skincareSub: ["Cleanser", "Serum & Treatment", "Moisturizer", "Mask"]
      },
      footer: {
        about: "About Aline Beauty",
        origin: "Brand Origin",
        services: "Customer Services",
        careers: "Careers",
        contact: "Contact Support",
        stores: "Store System",
        findStore: "Find a store near you",
        policy: "Return Policy",
        follow: "FOLLOW US",
        mapBtn: "View on Google Maps",
        copyright: <>©2026 Aline Beauty. <br/> Dedicated to Vietnamese beauty. <br/> All rights reserved.</>
      }
    }
  };

  return (
    <div className="App">
      <Header 
        currentLang={currentLang} 
        setCurrentLang={setCurrentLang} 
        data={trans[currentLang].header} 
      />
      
      {/* Nội dung trang web */}
      
      <Footer 
        data={trans[currentLang].footer} 
      />
    </div>
  );
}

export default App;
