import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faKey, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import './myCompText.css'; // Import CSS

const MyCompText = () => {
  return (
    <div className="text-container">
      <h2 className="section-title">Benefits of Using a Secure Password Generator Tool</h2>
      
      <div className="card-container">
        <div className="card long">
          <div className="card-icon">
            <FontAwesomeIcon icon={faKey} />
          </div>
          <h3 className="card-title">Long</h3>
          <p className="card-description">
            The longer a password, the more secure it is. A strong password should be at least 10 characters long.
          </p>
        </div>

        <div className="card complex">
          <div className="card-icon">
            <FontAwesomeIcon icon={faShieldAlt} />
          </div>
          <h3 className="card-title">Complex</h3>
          <p className="card-description">
          Strong passwords combine letters, numbers, symbols, and cases into an unpredictable string.
          </p>
        </div>

        <div className="card unique">
          <div className="card-icon">
            <FontAwesomeIcon icon={faLock} />
          </div>
          <h3 className="card-title">Unique</h3>
          <p className="card-description">
            A strong password is unique. It should not be used across multiple sites to avoid potential leaks.
          </p>
        </div>
      </div>

      <p className="info-text">
        Use a strong, unique password for each of your accounts to maximize security. A password manager can help you store and generate passwords securely.
      </p>
    </div>
  );
};

export default MyCompText;
