import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
     
        <Header />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
