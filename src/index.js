// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init('8IfMH-tJ6Z8Kp9kE5');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);