import React from 'react';
import './footer.css';  // Подключаем стили для Footer

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Password Generator Top. All rights reserved.</p>
      <p>Contact with us: <a href="mailto:johnu4826@gmail.com">johnu4826@gmail.com</a></p>
    </footer>
  );
};

export default Footer;
