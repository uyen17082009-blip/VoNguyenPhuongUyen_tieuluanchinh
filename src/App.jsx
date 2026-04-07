import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx"; // Thêm dòng này

export default function App() {
  const [page, setPage] = useState("login");

  return (
    <BrowserRouter>
      <Header />
      {/* Nội dung trang web của bạn sẽ nằm ở đây */}
      <Footer /> {/* Thêm dòng này */}
    </BrowserRouter>
  );
}
