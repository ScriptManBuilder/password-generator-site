import React, { useState } from 'react';
import './passwordGenerate.css';
import CountGenerated from './CountGenerated';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copyStatus, setCopyStatus] = useState('Copy');
  const [passwordStrength, setPasswordStrength] = useState('');

  const calculateStrength = (password) => {
    if (password.length < 6) return 'weak';
    if (password.length < 10) return 'moderate';
    if (password.length < 14) return 'strong';
    return 'very-strong';
  };

  const generatePassword = () => {
    if (!includeNumbers && !includeLowercase && !includeUppercase && !includeSymbols) {
      alert('Please select at least one option for the password!');
      return;
    }

    let charset = '';
    if (includeNumbers) charset += '0123456789';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeSymbols) charset += '!@#$%^&*()_-+=<>?';

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
    setPasswordStrength(calculateStrength(generatedPassword));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopyStatus('Copied');
    setTimeout(() => setCopyStatus('Copy'), 1500);
  };

  return (
    <div className="App">
      <p>Generate Super-Strong Passwords for Ultra-High Security.</p>
      <div className="container">
        <h1 className="title">Password Generator 🔒</h1>

        {/* Поле пароля */}
        <div className="password-section">
          <p className="label"></p>
          <div className="password-container">
            <input
              type="text"
              value={password}
              readOnly
              className="password-input"
            />
            <button className="copy-btn" onClick={handleCopy}>
              {copyStatus}
            </button>
          </div>

          {/* Ползунок сложности */}
          <div className="password-strength">
            <p>
              Password Strength:{' '}
              <span className={`strength-status ${passwordStrength}`}>
                {passwordStrength || 'N/A'}
              </span>
            </p>
            <div className="strength-bar">
              <div
                className={`strength-level ${passwordStrength}`}
              ></div>
            </div>
          </div>
        </div>

        {/* Ползунок длины пароля */}
        <div className="length-section">
          <p className="label">Password Length: {length}</p>
          <input
            type="range"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            min="1"
            max="50"
            className="length-input"
          />
        </div>

        {/* Опции пароля */}
        <div className="options-section">
          <div className="checkbox-group">
            <div className="checkbox">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
              />
              <label>Include Numbers (0123)</label>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={() => setIncludeLowercase(!includeLowercase)}
              />
              <label>Include Lowercase (abcd)</label>
            </div>
          </div>

          <div className="checkbox-group">
            <div className="checkbox">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={() => setIncludeUppercase(!includeUppercase)}
              />
              <label>Include Uppercase (ABCD)</label>
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(!includeSymbols)}
              />
              <label>Include Symbols (!"#$)</label>
            </div>
          </div>
        </div>

        <button onClick={generatePassword} className="generate-btn">
          Generate Password
        </button>
      
      </div>
      <CountGenerated />
              
    </div>
  );
}

export default App;
