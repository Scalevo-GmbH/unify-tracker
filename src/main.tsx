
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './App.css' // Explicitly import App.css to ensure our font styles load

// Add font checker script
const fontCheckerScript = document.createElement('script');
fontCheckerScript.src = '/fonts/cal-sans/font-checker.js';
document.head.appendChild(fontCheckerScript);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
