import React from 'react';
import './App.css';  // Main styles for the app
import PasswordGenerate from './components/passwordGenerate';  // Importing the password generator component
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';  // Importing Header component
import Footer from './components/footer';  // Importing Footer component
import MyCompText from './components/myCompText';  // Corrected the import name to match the component name

function App() {
  return (
    <div className="App">
      <Header /> 
      
      {/* Password Information */}
      <main>
       
        <PasswordGenerate />  {/* Using the password generator component */}
        <MyCompText />  {/* Corrected usage of the component */}
      </main>

      <Footer />  
    </div>
  );
}

export default App;
