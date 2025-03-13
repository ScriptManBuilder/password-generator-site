// Faq.js
import React, { useState } from 'react';
import './faqInfo.css'; // Подключаем стили

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Is the  Password Generator safe to use?',
      answer: 'Absolutely! The  Password Generator uses advanced encryption algorithms to generate highly secure and unique passwords, ensuring maximum protection for your online accounts.'
    },
    {
      question: 'Why should I use a password generator?',
      answer: 'A password generator is essential for creating strong, unpredictable passwords that are nearly impossible for hackers to crack, giving you peace of mind knowing your accounts are protected.'
    },
    {
      question: 'Do I need a unique password for every account?',
      answer: 'Yes, it’s crucial! Using unique passwords for each account prevents a single breach from exposing all of your sensitive information. If one account is compromised, the others remain safe.'
    },
    {
      question: 'What are the top 10 worst passwords?',
      answer: 'The weakest passwords are often simple and easy to guess. Some of the most commonly used ones include "123456", "password", "qwerty", "123456789", and others that hackers can crack within seconds.'
    },
    {
      question: 'What is the best password generator?',
      answer: 'The best password generators create long, random passwords using a combination of uppercase and lowercase letters, numbers, and special characters, ensuring they are virtually impossible to guess.'
    },
    {
      question: 'What are the requirements for a strong password?',
      answer: 'A truly strong password should be at least 12 characters long and contain a mix of uppercase letters, lowercase letters, numbers, and symbols. The more complex and varied, the better!'
    },
    {
      question: 'How do I get a random password?',
      answer: 'It’s simple! Just use this password generator to instantly create a secure, random password that’s unique to you, making it nearly impossible to guess or crack.'
    },
    {
      question: 'Can password generators be hacked?',
      answer: 'Password generators are designed with robust security in mind, using secure algorithms that are extremely difficult to hack. Always ensure you’re using a trusted and reputable generator.'
    },
    {
      question: 'Is there a secure way to store passwords?',
      answer: 'Yes, absolutely! A trusted password manager allows you to securely store and organize your passwords in an encrypted vault, ensuring they remain safe and easily accessible when needed.'
    },
    {
      question: 'What makes a password safe?',
      answer: 'A safe password is one that’s long, completely random, and includes a combination of letters (both uppercase and lowercase), numbers, and symbols. The more varied and unpredictable, the safer it is.'
    }
  ];
  

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>Password Generator FAQs</h2>
      <p>Questions about this random password generator? Answers below!</p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleFaq(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-arrow">{openIndex === index ? '▲' : '▼'}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
