import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Pages/Styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //TODO: Убрать StrictMode перед релизом
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
