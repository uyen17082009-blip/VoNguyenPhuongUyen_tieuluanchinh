import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header.jsx";



export default function App() {
  const [page, setPage] = useState("login");

  return (
    <BrowserRouter>
      <Header />

    </BrowserRouter>
  );
}
