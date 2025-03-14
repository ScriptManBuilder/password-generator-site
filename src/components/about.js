import React from 'react';
import './about.css'; // Подключим стили
import CountGenerated from '../components/CountGenerated';  // Импортируем новый компонент
import ReviewsWidget from '../components/ReviewsWidget'; // Импортируем компонент с отзывами

const About = () => {
  return (
    
    <div className="about-container">
      
      <div className="about-content">
        <h2 className="about-title">About Krypton Password Generator</h2>
        <p className="about-text">
          Welcome to <strong>Krypton Password Generator</strong>! Your ultimate tool to create secure and uncrackable passwords.
          In an age where security is paramount, our tool ensures that your passwords are strong, unique, and easy to manage.
        </p>
        <div className="features">
          <div className="feature-item">
            <i className="fas fa-shield-alt feature-icon"></i>
            <p><strong>Top Security</strong>: Generates passwords with strong encryption and randomization.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-key feature-icon"></i>
            <p><strong>Customizable Options</strong>: Choose your preferred password length and character types.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-lock feature-icon"></i>
            <p><strong>Instant Generation</strong>: Create your password instantly without any sign-up.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-code feature-icon"></i>
            <p><strong>Encrypted & Safe</strong>: Our passwords are built with encryption standards that ensure they are virtually uncrackable.</p>
          </div>
        </div>
        <p className="about-text">
          <strong>Why Krypton?</strong> In today's world, weak passwords are the easiest entry points for hackers. 
          Krypton ensures that your accounts remain protected by generating complex passwords that are hard to crack. 
          Use it for all your online accounts—whether it's for social media, email, or banking, Krypton is here to help.
        </p>
        <p className="about-text">
          Stay safe and keep your data private with Krypton Password Generator. <strong>Your security matters!</strong>
        </p>
        
      </div>
    
      
      <ReviewsWidget /> 
     
    </div>
    
  );
};

export default About;
