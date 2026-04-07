import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <main className="main-content">
          {/* Nội dung trang web sẽ được thêm ở đây */}
          <div className="container" style={{ minHeight: "50vh", padding: "50px 0", textAlign: "center" }}>
              <h2>Nội dung trang web Aline Beauty</h2>
              <p>Trang web đang được xây dựng.</p>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
