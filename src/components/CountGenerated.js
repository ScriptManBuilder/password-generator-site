import React, { useState } from 'react';
import './CountGenerated.css';

const CountGenerated = () => {
  const [messageVisible, setMessageVisible] = useState(false); // Состояние для отображения сообщения

  const generatedCount = 10000; // Установлено фиксированное число

  // Функция для обработки клика по кнопке
  const handleClick = () => {
    setMessageVisible(true); // Показываем сообщение при клике

    // Ожидание 2.5 секунд перед скрытием сообщения
    setTimeout(() => {
      setMessageVisible(false); // Скрываем сообщение после 2.5 секунд
    }, 2500);
  };

  return (
    <div className="count-generated-container">
      <h2 className="count-generated-title">Passwords generated with Krypton</h2>

      <div className="count-display-container">
        <button 
          className="count-generated-number" 
          onClick={handleClick} // Обработчик клика
        >
          {generatedCount + '+'}
        </button>
        
        {/* Добавляем текст под кнопкой */}
        {messageVisible && <p className="count-generated-message">We appreciate your trust in our service!</p>}
      </div>
    </div>
  );
};

export default CountGenerated;
