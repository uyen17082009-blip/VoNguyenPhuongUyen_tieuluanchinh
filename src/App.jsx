import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
   
      <Footer />
    </BrowserRouter>
  );
}
