import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';  // Подключаем стили для Header
//import backgroundImage from './6195696.png'; // Импортируем изображение


const Header = () => {
  return (
    <header className="header">
      
      
      <div className="header-content">
    
        <h1>Krypton Password Generator</h1>
       
      </div>
      <nav>

        <Link to="/">Generator</Link>
        <Link to="/about" >About</Link>
        <Link to="/contact">Contact</Link>
     

      </nav>
      
      
    </header>
  );
};

export default Header;
