import React from 'react';
import { FaLinkedin, FaTelegramPlane, FaInstagram,FaGithub  } from 'react-icons/fa';  // Импортируем иконки
import './footer.css';  // Подключаем стили для Footer

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-info">
        <p>&copy; {new Date().getFullYear()} Password Generator Top. All rights reserved.</p>
        <p>Contact us: <a href="mailto:johnu4826@gmail.com">johnu4826@gmail.com</a></p>
    
        <p>Follow us:</p>
        <hr className="divider" />
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/daniil-hora/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://t.me/wellCoderDmg" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <FaTelegramPlane />
          </a>
          <a href="https://www.instagram.com/danllmg/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://github.com/ScriptManBuilder" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        </div>
      </div>
      <div className="footer-additional-info">
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
