import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Envuelve tu App en BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Si quieres empezar a medir el rendimiento en tu app, pasa una función
// para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// o envíalos a un endpoint de analíticas. Aprende más: https://bit.ly/CRA-vitals
reportWebVitals();
