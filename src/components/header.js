import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';  // Подключаем стили для Header
//import backgroundImage from './6195696.png'; // Импортируем изображение

const Header = () => {
  return (
    <header className="header">
      
      
      <div className="header-content">
    
        <h1>Strong Password Generator</h1>
       
      </div>
      <nav>

        <Link to="/">Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/contact">Price</Link>{/*Придумать что сюда добавитьт хедер.Добавить функцию,сколько парорлей сгенерировано*/}

      </nav>
      
      
    </header>
  );
};

export default Header;
