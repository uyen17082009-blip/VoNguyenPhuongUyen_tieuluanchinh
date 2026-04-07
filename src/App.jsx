import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [lang, setLang] = useState('VN'); // Trạng thái ngôn ngữ mặc định


  return (
    <div>
     
      <Header />
      
     

      {/* Truyền từ điển tương ứng xuống Footer */}
      <Footer  />
    </div>
  );
}

export default App;
