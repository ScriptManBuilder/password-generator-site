import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';  // Подключаем стили для Header
const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/"></Link>
      </nav>
      <h1>Password Generator </h1>
      <p>Generate Super-Strong Passwords for Ultra-High Security.</p>
    </header>
  );
};

export default Header;
