import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        {/* main dùng để đẩy footer xuống đáy trang */}
        <main className="main-content"></main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
